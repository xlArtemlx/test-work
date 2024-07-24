import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, ListRenderItemInfo, View} from 'react-native';

import {Character} from 'modules/People/core/types';

import {useFetchAllPeople} from './hooks/useFetchAllPeople';
import CharacterCard from './components/CharacterCard';
import styles from './styles';

const AllPeople: React.FC = () => {
    const {loadMorePeople, people, onEndReachedThreshold, isLoading} = useFetchAllPeople();

    const renderItem = useCallback(({item}: ListRenderItemInfo<Character>): JSX.Element => {
        return <CharacterCard character={item} />;
    }, []);

    const keyExtractor = useCallback((item: Character) => item.name, []);

    const renderLoader = (): React.ReactElement | null => {
        return isLoading ? (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#07575B" />
            </View>
        ) : null;
    };

    const onEndReached = (): void => {
        if (people.length) {
            loadMorePeople();
        }
    };

    return (
        <FlatList
            data={people}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListFooterComponent={renderLoader}
            onEndReached={onEndReached}
            onEndReachedThreshold={onEndReachedThreshold}
            ListFooterComponentStyle={{marginBottom: 40}}
        />
    );
};

export default AllPeople;
