import React from 'react';
import Loading from '../Loading';
import { useDetailArrayQuery } from '../../hooks/swapiHooks';
export const Starships: React.FC<{ person: Person | undefined }> = ({ person }) => {
  const { data: starships, isLoading: isLoading, error: error } = useDetailArrayQuery<Starship>(person?.starships|| [], 'starships')
  if (isLoading) return <Loading />;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (<section>
    <h2 className="title-people">Starships</h2>
    {starships && starships.length > 0 ? (
      <ul className="people-list custom-bullet">
        {starships!.map((starship, index) => (
          <li key={index} className="details-content">{starship.name} ({starship.model})</li>
        ))}
      </ul>
    ) : (
      <p className="details-content">N/A</p>
    )}
  </section>)
};