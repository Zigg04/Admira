import { useState, useEffect, useCallback } from 'react'
import { cryptoService } from '../services/cryptoService'
import SearchBar from '../components/SearchBar'
import Dashboard from '../components/Dashboard'
import Visual from '../components/Visual'

const MainPanel = () => {
  
  const [cryptoData, setCryptoData] = useState(null)
  const [selectedCoin, setSelectedCoin] = useState('bitcoin')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  
  const handleSearch = useCallback(async (coin) => {
    if (!coin?.trim()) {
      setError('Por favor ingresa una moneda válida');
      return;
    }

    if (coin === selectedCoin && cryptoData) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setSelectedCoin(coin);

    try {
      const data = await cryptoService.fetchCryptoData(coin);
      setCryptoData(data);
    } catch (err) {
      console.error('Error fetching crypto data:', err);
      
      
      if (err.response?.status === 404) {
        setError(`Moneda "${coin}" no encontrada`);
      } else if (err.response?.status >= 500) {
        setError('Error del servidor. Intenta de nuevo más tarde.');
      } else if (err.code === 'NETWORK_ERROR') {
        setError('Error de conexión. Verifica tu internet.');
      } else {
        setError('Error al cargar los datos. Intenta de nuevo.');
      }
      
      setCryptoData(null);
    } finally {
      setIsLoading(false);
    }
  }, [selectedCoin, cryptoData]);

  
  useEffect(() => {
    handleSearch('bitcoin');
  }, []);

  return (
    <Visual>
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Crypto Tracker
          </h1>
          
          <SearchBar 
            onSearch={handleSearch}
            isLoading={isLoading}
          />
         
          <Dashboard 
            data={cryptoData}
            loading={isLoading}
            error={error}
            selectedCoin={selectedCoin}
          />
        </div>
      </div>
    </Visual>
  )
}

export default MainPanel
