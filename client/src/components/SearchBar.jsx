import { useState } from 'react';

const SearchBar = ({ onSearch, isLoading }) => {
  const [searchQuery, setSearchQuery] = useState('bitcoin');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="coinInput" className="block mb-2 font-bold">
          Selecciona la criptomoneda:
        </label>
        <div className="flex gap-2.5 items-center">
          <input
            id="coinInput"
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Ej: bitcoin, ethereum, cardano..."
            disabled={isLoading}
            className={`px-3 py-2 border border-gray-300 rounded-full text-base flex-1 transition-opacity ${
              isLoading ? 'opacity-70' : 'opacity-100'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          <button 
            type="submit"
            disabled={isLoading || !searchQuery.trim()}
            className={`px-4 py-2 text-white border-none rounded text-base transition-colors ${
              isLoading || !searchQuery.trim()
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
            }`}
          >
            {isLoading ? 'Cargando...' : 'Buscar'}
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-1.5">
          Ejemplos: bitcoin, ethereum, cardano, solana, polkadot
        </p>
      </form>
    </div>
  );
};

export default SearchBar;
