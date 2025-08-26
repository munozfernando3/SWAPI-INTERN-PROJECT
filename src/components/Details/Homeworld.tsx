import React from 'react';
import Loading from '../Loading';
import { useDetailQuery } from '../../hooks/swapiHooks';
export const Homeworld: React.FC<{ person: Person | undefined }> = ({ person }) => {
  const { data: homeworld, isLoading: isLoading, error: error } = useDetailQuery<Homeworld>(person?.homeworld ?? "", 'homeworld');
  if (isLoading) return <Loading />;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log("Rendering Homeworld with homeworld:", homeworld?.name);
  return (<p><span className="detail-subtitle">Homeworld:</span> {homeworld?.name}</p>)
};