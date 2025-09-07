import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const CRYPTO_REQUEST = import.meta.env.VITE_CRYPTO_REQUEST;

// Configuración de axios con timeout y interceptores
const apiClient = axios.create({
  timeout: 10000, // 10 segundos timeout
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor para manejar errores globalmente
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      error.code = 'NETWORK_ERROR';
      error.message = 'Timeout: La solicitud tardó demasiado';
    }
    return Promise.reject(error);
  }
);

export const cryptoService = {
  /**
   * 
   * @param {string} coin 
   * @param {number|string} days 
   * @returns {Promise<Object>} 
   */
  async fetchCryptoData(coin, days = 30) {
    if (!coin || typeof coin !== 'string') {
      throw new Error("El parámetro de moneda es requerido y debe ser un string");
    }

    if (!coin.trim()) {
      throw new Error("El nombre de la moneda no puede estar vacío");
    }

    try {
      const url = `${API_URL}${CRYPTO_REQUEST}?coin=${encodeURIComponent(coin.trim())}&days=${encodeURIComponent(days)}`;
      
      console.log(`Buscando datos para: ${coin}`);
      const response = await apiClient.get(url);
      
     
      if (!response.data) {
        throw new Error('No se recibieron datos de la API');
      }

      console.log(`Datos obtenidos exitosamente para: ${coin}`);
      return response.data;
      
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
      
    
      if (error.response) {
       
        const errorMessage = error.response.data?.error || error.message;
        const enhancedError = new Error(errorMessage);
        enhancedError.response = error.response;
        enhancedError.status = error.response.status;
        throw enhancedError;
      } else if (error.request) {
        
        const networkError = new Error('Error de conexión con el servidor');
        networkError.code = 'NETWORK_ERROR';
        throw networkError;
      } else {
        throw new Error(error.message || 'Error desconocido al hacer la solicitud');
      }
    }
  }
};
