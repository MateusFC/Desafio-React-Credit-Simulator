import { ILimitsData } from '../@types/limits';
import API from './api';

async function getLimits() {
  const { data } = await API.get<ILimitsData>('/limits');
  return data;
}

export default getLimits;
