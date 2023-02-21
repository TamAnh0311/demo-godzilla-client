import { ReactKeycloakProvider } from '@react-keycloak/web'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import keycloak from './utils/keycloak'
import BaseService from './services/baseService'
import AppLayout from './layouts/AppLayout';
import PageNotFound from './pages/404';
import Dashboard from './pages/Dashboard';
import './utils/vuetify.min.css'
import './App.css'

function App() {
  const onKeycloakTokens = (tokens) => {
    localStorage.setItem('refreshToken', tokens.refreshToken)
    BaseService.setHeaderAuth(tokens.token)
    BaseService.get('products')
  }

  return (
    <div className="App">
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={{
          onLoad: 'login-required',
          checkLoginIframe: false
        }}
        onTokens={(tokens) => onKeycloakTokens(tokens)}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
