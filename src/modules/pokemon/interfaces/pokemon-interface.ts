export interface Pokemon {
  id: number;
  name: string;
  favorite: boolean;
  url: string;
}


export interface PokemonInfo {
  height:                   number;
  id:                       number;
  name:                     string;
  types:                    Type[];
  weight:                   number;
}

export interface Species {
  name: string;
  url:  string;
}

export interface Type {
  slot: number;
  type: Species;
}
