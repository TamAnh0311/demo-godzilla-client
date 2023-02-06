import logo from './logo.svg';
import './App.css';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./utils/keycloak"

function App() {

  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak} initOptions={{
        onLoad: "login-required",
        checkLoginIframe: false,
      }} >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
