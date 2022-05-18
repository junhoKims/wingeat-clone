import { FEATURES, API_ENDPOINT, ITEMS } from '@lib/config/endpoints';
import api from '.';

export const getFeatureImages = async () => {
  return fetcher(`${API_ENDPOINT}/${FEATURES}`);
};

export const getItemList = async (pageId: number) => {
  return fetcher(`${API_ENDPOINT}/${ITEMS}?page=${pageId}`);
};

const fetcher = async (url: string) => {
  try {
    const res = await api.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};
