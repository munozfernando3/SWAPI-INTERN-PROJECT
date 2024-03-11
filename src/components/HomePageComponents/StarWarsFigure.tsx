import { Link } from 'react-router-dom';

export const StarWarsFigure:React.FC<DisplayFiguresProps>=({playSound, onHoverSound, onClickSound, link,image,name})=>{
return <div className="col">
<div className="homepage-container">
  <Link to={link} className="homepage-link"
    onMouseEnter={() => playSound(onHoverSound)}
    onClick={() => playSound(onClickSound)}>
    <div className="row justify-content-center">
      <img
        src={image}
        alt={name}
        className="img-fluid homepage-img"
      />
      <p className="homepage-text">{name}</p>
    </div>
  </Link>
</div>
</div>
}