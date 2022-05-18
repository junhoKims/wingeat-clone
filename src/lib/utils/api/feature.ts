import { FEATURE_IMAGE_API_ENDPOINT } from '@lib/config/endpoints';
import api from '.';

export const getFeatureImages = async () => {
  try {
    const res = await api.get(FEATURE_IMAGE_API_ENDPOINT);
    return res.data;
  } catch (error) {
    throw error;
  }
};
