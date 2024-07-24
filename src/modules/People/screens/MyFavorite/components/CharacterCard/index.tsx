import React, {memo} from 'react';
import {Icon, ListItem} from '@rneui/base';

import {goToAdditionalInfo} from 'services/navigation';

import {Character} from 'modules/People/core/types';

import DeleteFavourite from './components/DeleteFromFavourite';
import styles from './styles';

type Props = {
    character: Character;
};

const CharacterCard: React.FC<Props> = memo(({character}) => {
    const {name} = character;

    const handleOpenInfo = (): void => {
        goToAdditionalInfo({character});
    };

    const leftContent = (): JSX.Element => {
        return <DeleteFavourite character={character} />;
    };

    return (
        <ListItem.Swipeable
            onPress={handleOpenInfo}
            bottomDivider
            containerStyle={styles.container}
            leftContent={leftContent}
        >
            <Icon name="chevron-right" />
            <ListItem.Content>
                <ListItem.Title>{name}</ListItem.Title>
            </ListItem.Content>
        </ListItem.Swipeable>
    );
});

export default CharacterCard;
