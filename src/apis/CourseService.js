import BaseService from './BaseService';

class CourseService extends BaseService{
  getCourses(params) {
    return this.client.get('/courses/', { params });
  }
  getMyCourses(params) {
    return this.client.get('/my-courses/', { params });
  }
}

export default CourseService;