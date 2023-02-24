import axios from 'axios';
import keycloak from 'utils/keycloak'

axios.defaults.baseURL = process.env.REACT_APP_PREFIX_URL;

axios.interceptors.request.use(
  async (config) => {
    if (keycloak?.token) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${keycloak?.token}`
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    keycloak.updateToken(360)

    if (keycloak?.token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${keycloak?.token}`
      };

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export default axios;
