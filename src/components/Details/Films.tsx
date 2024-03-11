import React from 'react';
import Loading from '../Loading';
import { useDetailArrayQuery } from '../../hooks/swapiHooks';
export const Films: React.FC<{ person: Person | undefined|Ship }> = ({ person }) => {
  const { data: films, isLoading: isLoading, error: error } = useDetailArrayQuery<Film>(person?.films || [], 'films')
  if (isLoading) return <Loading />;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return ( <section>
    <h2 className="title-people"> Films</h2>
    <ul className="people-list custom-bullet">
      {films!.map((film, index) => (
        <li key={index} className="details-content">{film.title} ({film.release_date})</li>
      ))}
    </ul>
  </section>)
};