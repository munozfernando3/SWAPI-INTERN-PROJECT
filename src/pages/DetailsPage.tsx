import { useParams } from 'react-router-dom';
import { useDetails } from '../hooks/swapiHooks'
import { Homeworld } from '../components/Details/Homeworld';
import { PersonMainDetails, ShipMainDetails } from '../components/Details/MainDetails';
import { Films } from '../components/Details/Films';
import { Species } from '../components/Details/Species';
import Loading from '../components/Loading';
import '../styles/DetailsPage.scss';
import { Starships } from '../components/Details/Starships';
import { Vehicles } from '../components/Details/Vehicles';
import { Pilots } from '../components/Details/Pilots';

const PeopleDetailsPage = () => {
  const params = useParams<{ id?: string }>(); // Specifies the shape of the object that useParams is expected to return: string
  
  const id = params.id!; // tells the compiler you are certain params.id will not be null or undefined at runtime, even though its type (
  // string | undefined) suggests it 
  console.log("ID from params:", id);
  const { data: person, isLoading: isLoading, error: error } = useDetails<Person>(id, 'people');
  console.log("Fetched person data:", person);
  if (isLoading) return <Loading />
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="people-page">
      <h1 className="title-people">{person?.name}</h1>
      <div className="details-content">
        <PersonMainDetails person={person} />
        <Homeworld person={person} />
        <Species person={person} />
      </div>
      {/* <Films person={person} /> */}
      <Starships person={person} />
      <Vehicles person={person} />
    </div>
  );
};
const ShipsDetailsPage = () => {
  const params = useParams<{ id?: string }>();
  const id = params.id!;
  const { data: ship, isLoading: isLoading, error: error } = useDetails<Ship>(id, 'starships');

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="ships-page">
      <h1 className="title-ships">{ship?.name}</h1>
      <ShipMainDetails ship={ship} />
      <Pilots ship={ship} />
      <Films person={ship} />
    </div>
  );

};

export { PeopleDetailsPage, ShipsDetailsPage };

