
import Loading from '../components/Loading';
import { Filter } from '../components/Filters';
import { useFilteredPeople, useFilteredShips } from '../hooks/useFilteredData';
import { PeopleList, ShipsList } from '../components/ListPageComponents/Lists';
import '../styles/ListPage.scss'

const ListPagePeople = () => {
  const { filteredPeople, isLoadingPeople, peopleError, nameFilter, setNameFilter } = useFilteredPeople();

  if (isLoadingPeople) {
    return <div> <Loading /> </div>
  }
  if (peopleError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <div className="people-page">
        <div className="filters">
          <Filter filter={nameFilter} type='name or filter' setFilter={setNameFilter} />
        </div>
        <h2 className="title-people">People</h2>
        <PeopleList data={filteredPeople} filter={nameFilter} />
      </div>
    </div>

  );

};
const ListPageShips = () => {

  const { filteredShips, isLoadingShips, shipsError, nameFilter, modelFilter, setNameFilter, setModelFilter} = useFilteredShips();

  if (isLoadingShips) {
    return <div> <Loading /> </div>
  }
  if (shipsError) {
    return <div>Error fetching data</div>;
  }
  return (
    <div>
    <div className="ships-page">
      <div className="filters">
        <Filter filter={nameFilter} type='name' setFilter={setNameFilter}/>
        <Filter filter={modelFilter} type='model' setFilter={setModelFilter}/>
      </div>
      <h2 className="title-ships">Starships</h2>
      <ShipsList data={filteredShips} filter={nameFilter}/>
    </div>
    </div>
  );


}
export { ListPagePeople, ListPageShips }