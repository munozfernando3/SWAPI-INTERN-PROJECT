import React from 'react';
import Loading from '../Loading';
import { useDetailArrayQuery } from '../../hooks/swapiHooks';
export const Species: React.FC<{ person: Person | undefined }> = ({ person }) => {
  const { data: species, isLoading: isLoading, error: error } = useDetailArrayQuery<Species>(person?.species || [], 'species')
  if (isLoading) return <Loading />;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (<p><span className="detail-subtitle">Species:</span> {species?.[0]?.name ?? 'N/A'}</p>)
};