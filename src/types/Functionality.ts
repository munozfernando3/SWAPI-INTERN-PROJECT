interface IntroAppProps {
  skipIntro: () => void;
}
interface AudioContextType {
  isPlaying: boolean;
  togglePlayPause: () => void;
  stopAudio: () => void;
}
interface DisplayFiguresProps {
  link: string;
  onHoverSound: string;
  onClickSound: string;
  image: string;
  name: string;
  playSound:(link:string)=>void;
}
interface FilterProps
{
  filter:string
  type:string
  setFilter:(value:string)=>void;
}
interface PeopleListProps
{
  data:Person[];
  filter:string;
}
interface ShipsListProps
{
  data:Ship[];
  filter:string;
}
