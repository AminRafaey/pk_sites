import { BASE_URL } from '../services/config';

export const appFetch = async (url: string, init?: any) => {
  const response = await fetch(
    `${BASE_URL}${url}`,
    init || {
      next: { revalidate: 1 },
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` },
    }
  );
  return response?.json() || [];
};

export const appFetchClientSide = async (url: string, init?: any) => {
  const response = await fetch(`${url}`, init || { next: { revalidate: 1 } });
  return response?.json();
};
export const appFetchParams = async (url: string) => {
  const response = await fetch(`${url}`, {
    headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` },
  });
  return response?.json();
};
