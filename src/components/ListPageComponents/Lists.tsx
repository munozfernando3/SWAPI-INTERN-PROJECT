import { stringNameHighlighter, extractIdFromUrl } from "../../utilities/ListPageUtilities";
import { playSound } from "../../utilities/PlaySound";
import { Link } from "react-router-dom";


export const PeopleList:React.FC<PeopleListProps>=({data, filter})=>
{
 return (
  <ul className="people-list">
          {data?.map((item, index) => {
           const {beforeMatch,matchText,afterMatch}=stringNameHighlighter(item,filter)
            return (
              <div className='person-item'>
                <Link to={`/people/${extractIdFromUrl(item.url)}`}>{/*If null it will render in React Router this means it will skip to the next one*/}
                  <li key={index}>
                    {beforeMatch}
                    <span style={{ color: '#05478a' }}>{matchText}</span>
                    {afterMatch}
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
 )
}
export const ShipsList:React.FC<ShipsListProps>=({data, filter})=>
{
 return (
  <ul className="ships-list">
          {data?.map((item, index) => {
           const {beforeMatch,matchText,afterMatch}=stringNameHighlighter(item,filter)
            return (
              <div className='ship-item'>
                <Link to={`/starShips/${extractIdFromUrl(item.url)}`}>{/*If null it will render in React Router this means it will skip to the next one*/}
                  <li key={index} >
                    {beforeMatch}
                    <span style={{ color: '#0a8459' }}>{matchText}</span>
                    {afterMatch}
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
 )
}