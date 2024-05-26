import { LimitsData } from '../@types/limits';
import API from './api';

async function getLimits() {
  const { data } = await API.get<LimitsData>('/limits');
  return data;
}

export default getLimits;
