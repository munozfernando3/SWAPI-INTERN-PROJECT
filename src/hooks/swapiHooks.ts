import { useQuery } from '@tanstack/react-query';
import { fetchPeople, fetchById, fetchShips, fetchDetailsURL, fetchDetailsURLArray} from '../services/swapiService';


export const usePeopleQuery = () => {
  return useQuery({
    queryKey: ['people'],
    queryFn: () => fetchPeople()
  });
}
export const useShipsQuery = () => {
  return useQuery({
    queryKey: ['ships'],
    queryFn: () => fetchShips()
  })
}
export const useDetailQuery = <T>(url: string, queryKey: string) => {
  console.log("useDetailQuery called with url:", url, "and queryKey:", queryKey);
  return useQuery<T>({
    queryKey: [queryKey],
    queryFn: () => fetchDetailsURL(url),
    enabled: !!url
  });
};
export const useDetailArrayQuery = <T>(urls: string[], queryKey: string) => {
  return useQuery<T[]>({
    queryKey: [queryKey, ...urls], // Spread the URLs into the queryKey to ensure uniqueness
    queryFn: () => fetchDetailsURLArray<T>(urls), // Ensure the generic type is passed to the fetch function
    enabled: urls.length > 0 // Only enable the query if there are URLs provided
  });
};

export const useDetails = <T>(id: string, type:string) => {
  return useQuery<T>({
    queryKey: [type, id],
    queryFn: () => fetchById(id, type ), enabled: !!id,
  }
  )
}

