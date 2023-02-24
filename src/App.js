import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from 'utils/keycloak'
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'utils/vuetify.min.css'
import 'App.css'
import RouteList from 'routes';

function App() {
  const onKeycloakTokens = (tokens) => {
    localStorage.setItem('refreshToken', tokens.refreshToken)
    // BaseService.setHeaderAuth(tokens.token)
    console.log('App: ')
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
          <RouteList />
        </Provider>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
