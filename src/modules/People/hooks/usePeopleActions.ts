import {useDispatch} from 'react-redux';

import {AppDispatch} from 'store/index';

import {
    addToFavorite,
    fetchAllPeople,
    setGenderFilter,
    resetFavoriteCharacters,
    deleteFromFavorite,
    cleanAllPeople,
} from '../redux';
import {Character, Genders} from '../core/types';

type PeopleActions = {
    fetchAllPeople: ({page}: {page: number}) => void;
    addToFavorite: (character: Character) => void;
    deleteFromFavorite: (character: Character) => void;
    setGenderFilter: (gender: Genders) => void;
    resetFavoriteCharacters: () => void;
    cleanAllPeople: () => void;
};

export const usePeopleActions = (): PeopleActions => {
    const dispatch = useDispatch<AppDispatch>();

    return {
        fetchAllPeople: ({page}) => dispatch(fetchAllPeople({page})),
        addToFavorite: (character) => dispatch(addToFavorite(character)),
        deleteFromFavorite: (character) => dispatch(deleteFromFavorite(character)),
        setGenderFilter: (gender) => dispatch(setGenderFilter(gender)),
        resetFavoriteCharacters: () => dispatch(resetFavoriteCharacters()),
        cleanAllPeople: () => dispatch(cleanAllPeople()),
    };
};
