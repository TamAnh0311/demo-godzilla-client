import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from 'utils/keycloak'
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'utils/vuetify.min.css'
import 'App.css'
import RouteList from 'routes';
import { useState } from 'react';

function App() {
  const [authenticated, setAuthenticated] = useState(false)

  const onKeycloakTokens = (tokens) => {
    localStorage.setItem('refreshToken', tokens.refreshToken)
    setAuthenticated(true)
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
        <Provider store={store}>
          {authenticated
            ? <RouteList /> : <h2 className="h-screen d-flex justify-center align-center">Authenticating....</h2>}
        </Provider>
      </ReactKeycloakProvider>
    </div>
  )
}

export default App;
