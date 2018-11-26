import BaseService from './BaseService';

class CategoryService extends BaseService{
  getCategories(params) {
    return this.client.get('/categories/', { params });
  }
}

export default CategoryService;