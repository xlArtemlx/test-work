import {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {usePeopleActions} from 'modules/People/hooks/usePeopleActions';
import {
    getIsHaveNextPage,
    getIsPeopleLoading,
    getPeople,
    getPeoplePagination,
    getAllPeopleCounter,
} from 'modules/People/redux/selectors';
import {Character} from 'modules/People/core/types';

type FetchPeopleActions = {
    loadMorePeople: () => void;
    people: Character[];
    onEndReachedThreshold: number;
    isLoading: boolean;
};

export const useFetchAllPeople = (): FetchPeopleActions => {
    const people = useSelector(getPeople);
    const page = useSelector(getPeoplePagination);
    const isLoading = useSelector(getIsPeopleLoading);
    const isHaveNextPage = useSelector(getIsHaveNextPage);
    const allPeopleCounter = useSelector(getAllPeopleCounter);
    const {fetchAllPeople, cleanAllPeople} = usePeopleActions();

    const startLoadMore = 0.2;
    const isNeedLoadMore = people.length !== allPeopleCounter;
    const onEndReachedThreshold = isHaveNextPage && isNeedLoadMore ? startLoadMore : -1;

    const loadMorePeople = (): void => {
        if (isLoading) {
            return;
        }
        if (isHaveNextPage) {
            const nextPage = page + 1;
            fetchAllPeople({page: nextPage});
        }
    };

    useEffect(() => {
        fetchAllPeople({page: 1});

        return () => cleanAllPeople();
    }, []);

    return {
        loadMorePeople,
        people,
        onEndReachedThreshold,
        isLoading,
    };
};
