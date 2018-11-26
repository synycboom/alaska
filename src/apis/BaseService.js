import { BASE_URL } from './config';
import axios from 'axios';

export default class BaseService {
  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
    })
  }
}