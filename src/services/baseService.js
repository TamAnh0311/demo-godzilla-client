import axios from 'axios';
import keycloak from 'utils/keycloak';

keycloak.init({
  // onLoad: 'login-required'
}).then((auth) => {
  if (auth) {
    axios.defaults.baseURL = process.env.REACT_APP_PREFIX_URL;
    axios.defaults.headers.common.Authorization = `Bearer ${keycloak.token}`;
    const token = keycloak;
    console.log('Base service: ', keycloak.token)
    console.log('Token: ', token.token)
  }
});

const BaseService = {

  // setHeaderAuth(token) {
  // },

  query(resource, params) {
    return axios.get(resource, params).catch((error) => {
      throw new Error(`[RWV] BaseService ${error}`);
    });
  },

  get(resource, slug = '') {
    return axios.get(`core-api/${resource}${slug ? `/${slug}` : ''}`).catch((error) => {
      throw new Error(`[RWV] BaseService ${error}`);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  delete(resource) {
    return axios.delete(resource).catch((error) => {
      throw new Error(`[RWV] BaseService ${error}`);
    });
  }
};

export default BaseService;
