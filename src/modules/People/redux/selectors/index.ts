import {createSelector} from 'reselect';

import {AppState} from 'store/index';

import {Character, Genders} from 'modules/People/core/types';
import {GENDERS} from 'modules/People/core/constants';

import {selectAllPeople, selectAllFavouriteCharacters} from '..';

export const getPeople = (state: AppState): Character[] => selectAllPeople(state.peopleReducer.people);
export const getIsPeopleLoading = (state: AppState): boolean => state.peopleReducer.isPeopleLoading;
export const getIsHaveNextPage = (state: AppState): boolean => state.peopleReducer.isHaveNextPage;
export const getPeoplePagination = (state: AppState): number => state.peopleReducer.page;
export const getQuantityFavoriteCharacters = (state: AppState): number =>
    state.peopleReducer.favoriteCharactersQuantity;

export const getFavoriteCharacters = (state: AppState): Character[] =>
    selectAllFavouriteCharacters(state.peopleReducer.favoriteCharacters);

export const getAllPeopleCounter = (state: AppState): number => state.peopleReducer.allCounter;

export const getFilterGender = (state: AppState): Genders => state.peopleReducer.genderFilter;

export const getFiltredFavoriteCharacters = createSelector(
    (state: AppState) => selectAllFavouriteCharacters(state.peopleReducer.favoriteCharacters),
    (state: AppState) => state.peopleReducer.genderFilter,
    (persons, gender): Character[] => {
        if (GENDERS.ALL === gender) {
            return persons;
        }
        return persons.filter((person) => person.gender === gender);
    },
);
