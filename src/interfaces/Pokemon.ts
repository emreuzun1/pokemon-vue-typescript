export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: number;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedApiSource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem;
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  species: NamedApiSource;
  stats: PokemonStat[];
  types: PokemonType[];
}

interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedApiSource;
}

interface VersionGameIndex {
  game_index: number;
  version: NamedApiSource;
}

interface PokemonHeldItem {
  item: NamedApiSource;
  version_details: PokemonHeldItemVersion;
}

interface PokemonHeldItemVersion {
  version: NamedApiSource;
  rarity: number;
}

interface PokemonMove {
  move: NamedApiSource;
  version_group_details: PokemonMoveVersion[];
}

interface PokemonMoveVersion {
  move_learn_method: NamedApiSource;
  version_group: NamedApiSource;
  level_learned_at: number;
}

export interface PokemonStat {
  stat: NamedApiSource;
  effor: number;
  base_stat: number;
}

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

interface PokemonTypePast {
  generation: NamedApiSource;
  types: PokemonType[];
}

export interface PokemonType {
  slot: number;
  type: NamedApiSource;
}

export interface NamedApiSource {
  name: string;
  url: string;
}
