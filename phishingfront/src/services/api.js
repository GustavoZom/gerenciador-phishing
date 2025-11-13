import axios from 'axios';

const getBaseURL = () => {
  const isCodespace = window.location.hostname.includes('github.dev');
  
  console.log('Debug - Hostname:', window.location.hostname);
  
  if (isCodespace) {
    const codespaceHostname = window.location.hostname;
    const baseHostname = codespaceHostname.replace('-5173.', '-5000.').replace('-3000.', '-5000.');
    const baseURL = `https://${baseHostname}/api/v1`;
    
    return baseURL;
  }
  
  const baseURL = 'http://localhost:5000/api/v1';
  return baseURL;
};

const api = axios.create({
  baseURL: getBaseURL(),
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('jwt_token');
      console.log('Token expirado ou inválido');
    }
    return Promise.reject(error);
  }
);

export const getAuthHeaders = () => {
  const token = localStorage.getItem('jwt_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export default api;