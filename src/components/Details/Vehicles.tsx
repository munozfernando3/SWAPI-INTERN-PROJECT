import React from 'react';
import Loading from '../Loading';
import { useDetailArrayQuery } from '../../hooks/swapiHooks';
export const Vehicles: React.FC<{ person: Person | undefined }> = ({ person }) => {
  const { data: vehicles, isLoading: isLoading, error: error } = useDetailArrayQuery<Vehicle>(person?.vehicles || [], 'vehicles');
  if (isLoading) return <Loading />;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (   <section>
    <h2 className="title-people">Vehicles</h2>
    {vehicles && vehicles.length > 0 ? (
      <ul className="people-list custom-bullet">
        {vehicles.map((vehicle, index) => (
          <li key={index} className="details-content">{vehicle.name} ({vehicle.model})</li>
        ))}
      </ul>
    ) : (
      <p className="details-content">N/A</p>
    )}
  </section>)
};