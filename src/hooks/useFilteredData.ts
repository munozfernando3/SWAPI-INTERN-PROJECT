import { usePeopleQuery, useShipsQuery } from './swapiHooks';
import { useState } from 'react';

export const useFilteredPeople = () => {
  const { data: peopleData, isLoading: isLoadingPeople, error: peopleError } = usePeopleQuery() as {
    data: Person[];
    isLoading: boolean;
    error: any;
  };
  const [nameFilter, setNameFilter] = useState('');
  const [hairColorFilter, setHairFilter] = useState('');
  const filteredPeople = peopleData?.filter(person =>
    person.name.toLowerCase().includes(nameFilter.toLowerCase())
    // &&
    // person.hair_color.toLowerCase().includes(hairColorFilter.toLowerCase())
  ).slice(0, 20);
  return { filteredPeople, isLoadingPeople, peopleError, nameFilter, hairColorFilter, setNameFilter, setHairFilter };
}
export const useFilteredShips = () => {
  const { data: shipData, isLoading: isLoadingShips, error: shipsError } = useShipsQuery() as {
    data: Ship[];
    isLoading: boolean;
    error: any;
  };
  const [nameFilter, setNameFilter] = useState('');
  const [modelFilter, setModelFilter] = useState('');
  const filteredShips = shipData?.filter(ship =>
    ship.name.toLowerCase().includes(nameFilter.toLowerCase())
    // &&
    // ship.model.toLowerCase().includes(modelFilter.toLowerCase())
  ).slice(0, 20);
  return { filteredShips, isLoadingShips, shipsError, nameFilter, modelFilter, setNameFilter, setModelFilter };
}

