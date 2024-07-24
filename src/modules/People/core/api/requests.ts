import {AxiosResponse} from 'axios';

import restApi from 'services/api';

export const fetchPeople = (params: {page: number}): Promise<AxiosResponse> => restApi.get(`people/`, {params});
