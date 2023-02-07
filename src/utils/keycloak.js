import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:9090/',
  realm: 'DemoGodZilla',
  clientId: 'DemoGodZillaKeycloak',
  publicClient: true,
  sslRequired: 'external'
});

export default keycloak;
