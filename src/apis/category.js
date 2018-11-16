import axios from 'axios';
import { BASE_URL } from './config';

class Category {
  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: 3000,
    })
  }

  getCategories(params) {
    return this.client.get('/categories/', { params })
  }
}

export default Category;