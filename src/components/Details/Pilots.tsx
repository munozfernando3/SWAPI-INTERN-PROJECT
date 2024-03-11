import React from 'react';
import Loading from '../Loading';
import { useDetailArrayQuery } from '../../hooks/swapiHooks';
export const Pilots: React.FC<{ ship: Ship | undefined}> = ({ ship }) => {
  const { data: pilots, isLoading: isLoading, error: error } = useDetailArrayQuery<Person>(ship?.pilots || [], 'pilots')
  if (isLoading) return <Loading />;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (   <section>
    <h2 className="title-ships">Pilots</h2>
    {pilots && pilots.length > 0 ? (
      <ul className="ships-list custom-bullet">
        {pilots.map((pilot, index) => (
          <li key={index} className="details-content">{pilot.name}</li>
        ))}
      </ul>
    ) : (
      <p className="details-content">N/A</p>
    )}
  </section>)
};