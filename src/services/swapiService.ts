import axios from 'axios';
const BASE_URL = 'https://www.swapi.tech/api/';


const fetchPage = async (url: string) => {
  const response = await axios.get(url);
  return response.data.results;
};
export const fetchDetailsURL= async (url:string) => {
  const response = await axios.get(url);
  return response.data.result.properties;
};

export const fetchDetailsURLArray = async <T>(urls: string[]): Promise<T[]> => {
  const results = await Promise.all(
    urls.map(async (url) => {
      const { data } = await axios.get(url);      // <- no <T> here
      return (data as any).result.properties as T; // swapi.tech single item
    })
  );
  return results;
};

export const fetchPeople = async () => {
  const page1 = await fetchPage(`${BASE_URL}/people/?page=1`);
  const page2 = await fetchPage(`${BASE_URL}/people/?page=2`);
  return [...page1, ...page2]; // Combine the results [...a...b]
};

export const fetchShips = async () => {
  const page1 = await fetchPage(`${BASE_URL}/starships/?page=1`);
  const page2 = await fetchPage(`${BASE_URL}/starships/?page=2`);
  return [...page1, ...page2];
};

export const fetchById = async (id: string, type: string) => {
  try {
    const response = await axios.get(`https://www.swapi.tech/api/${type}/${id}/`);
    return response.data.result.properties;  
  } catch (error) {
    return null; 
  }
};


// export const fetchSpeciesName = async (url: string): Promise<string> =>
//  {
//   try 
//   {
//     const response = await axios.get(url);
//     return response.data.name; // Directly return the species name from the response
//   } 
//   catch (error) {
//     console.error('Failed to fetch species name:', error);
//     return 'Unknown'; // Return a fallback name in case of an error
//   }
// };
// export const fetchSpeciesName = async (url: string): Promise<string> =>
//  {
//   try 
//   {
//     const response = await axios.get(url);
//     return response.data.name; // Directly return the species name from the response
//   } 
//   catch (error) {
//     console.error('Failed to fetch species name:', error);
//     return 'Unknown'; // Return a fallback name in case of an error
//   }
// };
