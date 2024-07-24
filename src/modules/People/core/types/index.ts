import {GENDERS} from '../constants';

export type Genders = typeof GENDERS.ALL | typeof GENDERS.FEMALE | typeof GENDERS.MALE;

export type Character = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: [];
    vehicles: [];
    starships: [];
    created: string;
    edited: string;
    url: string;
};
