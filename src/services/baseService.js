import axiosMiddleware from 'utils/axiosMiddleware'

const BaseService = {

  query(resource, params) {
    return axiosMiddleware.get(resource, params).catch((error) => {
      throw new Error(`[RWV] BaseService ${error}`);
    });
  },

  get(resource, slug = '') {
    return axiosMiddleware.get(`core-api/${resource}${slug ? `/${slug}` : ''}`).catch((error) => {
      throw new Error(`[RWV] BaseService ${error}`);
    });
  },

  post(resource, params) {
    return axiosMiddleware.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return axiosMiddleware.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return axiosMiddleware.put(`${resource}`, params);
  },

  delete(resource) {
    return axiosMiddleware.delete(resource).catch((error) => {
      throw new Error(`[RWV] BaseService ${error}`);
    });
  }
};

export default BaseService;
