import BaseService from './baseService';

const PRODUCTS = 'products'

export const getAllProducts = () => BaseService.get(PRODUCTS)

export const updateProduct = (productID) => BaseService.post(PRODUCTS, productID)

export const deleteProduct = (productID) => BaseService.delete(PRODUCTS, productID)
