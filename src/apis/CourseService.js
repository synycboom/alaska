import BaseService from './BaseService';

class CourseService extends BaseService{
  getCourses(params) {
    return this.client.get('/courses/', { params });
  }
}

export default CourseService;