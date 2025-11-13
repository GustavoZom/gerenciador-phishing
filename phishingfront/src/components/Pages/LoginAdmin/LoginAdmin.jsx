import React, { useState, useEffect } from 'react';
import './loginAdmin.css';
import { authService } from '../../../services/authService';

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState(null);


  useEffect(() => {
    const token = authService.getToken();
    if (token) {
      fetchUserInfo();
    }
  }, []);


  const fetchUserInfo = async () => {
    try {
      const userData = await authService.getCurrentUser();
      setUserInfo(userData);
    } catch (err) {
      console.error('Erro ao buscar informações do usuário:', err);
      authService.removeToken();
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authService.login(username, password);
      authService.setToken(response.access_token);
      
      const userData = await authService.getCurrentUser();
      setUserInfo(userData);
      
      setError('Login realizado com sucesso!');
    } catch (err) {
      setError('Erro no login: ' + (err.response?.data?.message || 'Credenciais inválidas'));
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authService.removeToken();
    setUserInfo(null);
    setError('Logout realizado');
  };

  const redirectToAdmin = () => {
    window.location.href = '/admin';
  };

  const redirectToHome = () => {
    window.location.href = '/home';
  };


  if (userInfo) {
    return (
      <div className="loginAdminContainer">
        <div className="loginAdminCard">
          <h2>Administração</h2>
          
          <div className="user-info">
            <h3>Usuário Logado:</h3>
            <div className="userDetails">
              <p><strong>Nome:</strong> {userInfo.name}</p>
              <p><strong>Tipo:</strong> {userInfo.is_admin ? 'Administrador' : 'Usuário'}</p>
            </div>
          </div>

          <div className="adminActions">
            {userInfo.is_admin && (
              <button 
                onClick={redirectToAdmin}
                className="adminBtn"
              >
                Acessar Painel Admin
              </button>
            )}
            
            <button 
              onClick={redirectToHome}
              className="homeBtn"
            >
              Ir para Página Inicial
            </button>

            <button 
              onClick={handleLogout}
              className="logoutBtn"
            >
              Sair
            </button>
          </div>

          {error && (
            <div className={`message ${error.includes('success') ? 'success' : 'error'}`}>
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="loginAdminContainer">
      <div className="loginAdminCard">
        <h2>Login Administrativo</h2>
        <p className="loginInstructions">
          Use as credenciais de administrador para acessar o sistema
        </p>
        
        <form onSubmit={handleLogin} className="loginForm">
          <div className="formGroup">
            <label htmlFor="username">Usuário:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              required
              disabled={loading}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="password">Senha:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="teste"
              required
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="login-btn"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="demoCredentials">
          <h4>Credenciais para Teste:</h4>
          <p><strong>Usuário:</strong> admin</p>
          <p><strong>Senha:</strong> Senha</p>
        </div>

        {error && (
          <div className={`message ${error.includes('success') ? 'success' : 'error'}`}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginAdmin;