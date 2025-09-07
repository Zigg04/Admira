const Dashboard = ({ data, loading, error, selectedCoin }) => {
  if (loading) {
    return (
      <div className="text-center p-10">
        <p>Cargando datos de {selectedCoin}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded border border-red-200">
        <h4 className="font-semibold mb-2">Error al cargar los datos</h4>
        <p>{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center p-10 text-gray-600">
        <p>Selecciona una criptomoneda para ver sus datos</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Datos de {selectedCoin?.toUpperCase()}:</h3>
      <div className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
        <pre className="m-0 whitespace-pre-wrap text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Dashboard;
