import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← IMPORTANTE
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import users from '../Data/users.json';

import '../styles/Login.css';

export const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ← Hook para redirección

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

   if (user) {
  setError('');
  localStorage.setItem('user', JSON.stringify(user)); // ✅ GUARDAR el usuario logeado
  navigate('/home'); // ← Redirige a la ruta /home
}else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <Card title="Iniciar Sesión" className="login-card">
        <div className="p-fluid">
          <label htmlFor="email">Correo electrónico</label>
          <InputText
            id="email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            placeholder="usuario@correo.com"
            className="mb-3"
          />

          <label htmlFor="password">Contraseña</label>
          <Password
            id="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            feedback={false}
            toggleMask
            className="mb-3"
          />

          {error && <div className="login-error">{error}</div>}

          <Button label="Ingresar" icon="pi pi-sign-in" onClick={handleLogin} className="w-full" />
        </div>
      </Card>
    </div>
  );
};