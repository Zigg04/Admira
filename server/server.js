import express from "express";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3001;
const API_URL = '/api/v1'
const logDir = path.join(process.cwd(), "logs");
fs.mkdirSync(logDir, { recursive: true });
const traceFile = path.join(logDir, "http_trace.jsonl");

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
app.use(cors(corsOptions));

app.get(`${API_URL}/crypto`, async (req, res) => {
  // Permitir que el usuario elija la moneda y los días desde el front
  // Ejemplo de request: /api/v1/crypto?coin=ethereum&days=7
  const coin = req.query.coin; 
  const days = req.query.days || "30"; 

  if (!coin) {
    return res.status(400).json({ error: "Missing 'coin' query parameter" });
  }

  const url = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${days}`;

  const start = Date.now();
  try {
    const r = await fetch(url);
    const data = await r.json();

    const entry = {
      ts: new Date().toISOString(),
      method: "GET",
      url_base: url.split("?")[0],
      status: r.status,
      duration_ms: Date.now() - start,
      coin,
      days,
    };
    fs.appendFileSync(traceFile, JSON.stringify(entry) + "\n");

    res.status(r.status).json(data);
  } catch (e) {
    fs.appendFileSync(
      traceFile,
      JSON.stringify({
        ts: new Date().toISOString(),
        error: e?.message || "unknown",
      }) + "\n"
    );
    res.status(500).json({ error: "Proxy error" });
  }
});

app.get(`${API_URL}`, (req, res) => {
    res.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});