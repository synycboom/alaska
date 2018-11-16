import axios from 'axios';
import { BASE_URL } from './config';

class Course {
  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: 3000,
    })
  }

  getCourses(params) {
    return this.client.get('/courses/', { params })
  }
}

export default Course;