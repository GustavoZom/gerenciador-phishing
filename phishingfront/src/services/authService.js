import api, { getAuthHeaders } from './api';

export const authService = {
  async login(username, password) {
    console.log('Tentando login:', { username, password });
    
    const formData = new URLSearchParams();
    formData.append('name', username);
    formData.append('password', password);

    console.log('FormData:', formData.toString());
    console.log('URL:', api.defaults.baseURL + '/auth/');

    try {
      const response = await api.post('/auth/', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      
      console.log('Logado com sucesso', response.data);
      return response.data;
      
    } catch (error) {
      console.error('Erro no login:');
      console.error('Status:', error.response?.status);
      console.error('Data:', error.response?.data);
      console.error('URL:', error.config?.url);
      
      throw error;
    }
  },

  async getCurrentUser() {
    try {
      const response = await api.get('/auth/', {
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      console.error('Erro de usuário:', error);
      throw error;
    }
  },

  setToken(token) {
    localStorage.setItem('jwt_token', token);
  },

  getToken() {
    return localStorage.getItem('jwt_token');
  },

  removeToken() {
    localStorage.removeItem('jwt_token');
  }
};