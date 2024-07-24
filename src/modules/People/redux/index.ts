import {PayloadAction, createEntityAdapter, createSlice} from '@reduxjs/toolkit';

import {fetchAllPeople} from 'modules/People/redux/asyncActions';

import {Character, Genders} from '../core/types';
import {GENDERS} from '../core/constants';

type PeopleState = {
    isPeopleLoading: boolean;
    people: Record<number, Character>[];
    isHaveNextPage: boolean;
    page: number;
    favoriteCharacters: Record<number, Character>[];
    favoriteCharactersQuantity: number;
    allCounter: number;
    genderFilter: Genders;
};

const defaultState: PeopleState = {
    isPeopleLoading: false,
    people: [],
    isHaveNextPage: false,
    page: 1,
    favoriteCharacters: [],
    favoriteCharactersQuantity: 0,
    allCounter: 0,
    genderFilter: GENDERS.ALL,
};

const peopleAdapter = createEntityAdapter<Character, string>({
    selectId: (person) => person.name,
});
const {selectAll: selectAllPeople} = peopleAdapter.getSelectors();

const favoriteCharactersAdapter = createEntityAdapter<Character, string>({
    selectId: (person) => person.name,
});
const {selectAll: selectAllFavouriteCharacters} = peopleAdapter.getSelectors();

export const peopleReducer = createSlice({
    name: 'peopleModule',
    initialState: {
        ...defaultState,
        people: peopleAdapter.getInitialState(defaultState.people),
        favoriteCharacters: favoriteCharactersAdapter.getInitialState(defaultState.favoriteCharacters),
    },
    reducers: {
        addToFavorite: (state, {payload}: PayloadAction<Character>) => {
            favoriteCharactersAdapter.addOne(state.favoriteCharacters, payload);
            state.favoriteCharactersQuantity = selectAllFavouriteCharacters(state.favoriteCharacters).length;
        },
        deleteFromFavorite: (state, {payload}: PayloadAction<Character>) => {
            favoriteCharactersAdapter.removeOne(state.favoriteCharacters, payload.name);
            state.favoriteCharactersQuantity = selectAllFavouriteCharacters(state.favoriteCharacters).length;
        },
        setGenderFilter: (state, {payload}: PayloadAction<Genders>) => {
            state.genderFilter = payload;
        },
        resetFavoriteCharacters: (state) => {
            state.favoriteCharactersQuantity = 0;
            favoriteCharactersAdapter.removeAll(state.favoriteCharacters);
        },
        cleanAllPeople: (state) => {
            peopleAdapter.removeAll(state.people);
            state.page = 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllPeople.pending, (state) => {
            state.isPeopleLoading = true;
        });
        builder.addCase(fetchAllPeople.fulfilled, (state, {payload}) => {
            const {people, page} = payload;
            state.isHaveNextPage = Boolean(people.next);
            state.page = page;
            state.allCounter = people.count;
            peopleAdapter.addMany(state.people, people.results);
            state.isPeopleLoading = false;
        });
        builder.addCase(fetchAllPeople.rejected, (state) => {
            state.isPeopleLoading = false;
        });
    },
});

const {addToFavorite, deleteFromFavorite, setGenderFilter, resetFavoriteCharacters, cleanAllPeople} =
    peopleReducer.actions;

export {
    fetchAllPeople,
    selectAllPeople,
    addToFavorite,
    cleanAllPeople,
    deleteFromFavorite,
    setGenderFilter,
    resetFavoriteCharacters,
    selectAllFavouriteCharacters,
};

export default peopleReducer.reducer;
