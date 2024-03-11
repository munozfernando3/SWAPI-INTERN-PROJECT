interface Person
{
    name: string; 
    height: string; 
    mass: string; 
    hair_color: string; 
    skin_color: string; 
    eye_color: string; 
    birth_year: string; 
    gender: string; 
    homeworld: string;
    films: string[]; // An array of strings, each string being a URL to a film resource
    species: string[]; // An array of strings, each string being a URL to a species resource
    vehicles: string[]; // An array of strings, each string being a URL to a vehicle resource
    starships: string[]; // An array of strings, each string being a URL to a starship resource
    url:string;
  }
  interface Film {
    title: string;
    release_date: string;
  }
 
  
  interface Starship {
    name: string;
    model: string;
  }
  
  interface Vehicle {
    name: string;
    model: string;
  }
  interface RouteParams {
    id: string;
  }
  interface Species {
    name: string; // The name of this species.
  }
  interface Homeworld {
    name: string; // The name of this planet.
  }
 