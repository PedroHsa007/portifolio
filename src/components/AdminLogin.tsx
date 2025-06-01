import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AdminLoginProps {
  onLogin: (isAdmin: boolean) => void;
  onClose: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === 'adminPedro123') {
      localStorage.setItem('isAdmin', 'true');
      onLogin(true);
      setError('');
    } else {
      setError('Senha incorreta');
      setPassword('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-4 right-4 bg-gray-800 rounded-xl shadow-lg p-4 w-80"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-white">Login Administrativo</h3>
        <button
          onClick={onClose}
          className="text-white hover:text-red-500 text-xl font-bold"
          title="Fechar"
        >
          &times;
        </button>
      </div>

      <div className="space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite a senha"
          className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Entrar como Administrador
        </button>
      </div>
    </motion.div>
  );
};

export default AdminLogin;
