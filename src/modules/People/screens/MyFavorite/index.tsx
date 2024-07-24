import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import {
    getFilterGender,
    getFiltredFavoriteCharacters,
    getQuantityFavoriteCharacters,
} from 'modules/People/redux/selectors';
import {Character} from 'modules/People/core/types';
import {usePeopleActions} from 'modules/People/hooks/usePeopleActions';

import {askModal} from 'modals/nativeModals/nativeModals';

import CharacterCard from './components/CharacterCard';
import FilterButton from './components/FilterButton';
import styles from './styles';

const MyFavorite: React.FC = () => {
    const count = useSelector(getQuantityFavoriteCharacters);
    const genderFilter = useSelector(getFilterGender);
    const people = useSelector(getFiltredFavoriteCharacters);
    const peopleCount = people.length;

    const {resetFavoriteCharacters} = usePeopleActions();

    const handleReset = async (): Promise<void> => {
        if (!count) {
            return;
        }
        await askModal({
            titleText: 'Are you sure you want to reset all characters?',
            bodyText: '',
            onOkFunc: resetFavoriteCharacters,
            onOkText: 'Yes',
            onCloseText: 'No',
        });
    };

    const renderItem = useCallback(({item}: ListRenderItemInfo<Character>): JSX.Element => {
        return <CharacterCard character={item} />;
    }, []);

    const keyExtractor = useCallback((item: Character) => item.name, []);

    return (
        <>
            <View style={styles.containerResult}>
                <Text style={styles.textResult}>
                    Total result {genderFilter} {peopleCount}
                </Text>
                <TouchableOpacity onPress={handleReset}>
                    <Text style={styles.textReset}>Reset All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={people}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ListFooterComponentStyle={{marginBottom: 40}}
            />
            <FilterButton />
        </>
    );
};

export default MyFavorite;
