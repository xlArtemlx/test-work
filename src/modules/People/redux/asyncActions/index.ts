import {createAsyncThunk} from '@reduxjs/toolkit';

import {AppState} from 'store/index';

import {PeopleResponse} from 'modules/People/core/api/types';
import {Character} from 'modules/People/core/types';
import * as requests from 'modules/People/core/api/requests';

export const fetchAllPeople = createAsyncThunk<
    {people: PeopleResponse<Character>; page: number},
    {page: number},
    {state: AppState}
>('quotePage/fetchAllQuotes', async (params, thunkAPI) => {
    const {page} = params;

    try {
        const {data: people} = await requests.fetchPeople({
            page,
        });

        return {people, page};
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
