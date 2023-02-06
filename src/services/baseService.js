import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_PREFIX_URL;
const BaseService = {
  // setHeader() {
  //   axios.defaults.headers.common.Authorization = `Token ${JwtService.getToken()}`;
  // },

  query(resource, params) {
    return axios.get(resource, params).catch((error) => {
      throw new Error(`[RWV] BaseService ${error}`);
    });
  },

  get(resource, slug = '') {
    return axios.get(`${resource}/${slug}`).catch((error) => {
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
