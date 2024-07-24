import React, {memo} from 'react';
import {Icon, ListItem} from '@rneui/base';

import {goToAdditionalInfo} from 'services/navigation';

import {Character} from 'modules/People/core/types';

import AddToFavourite from './components/AddToFavourite';
import styles from './styles';

type Props = {
    character: Character;
};

const CharacterCard: React.FC<Props> = memo(({character}) => {
    const {name} = character;

    const handleOpenInfo = (): void => {
        goToAdditionalInfo({character});
    };

    const rightContent = (): JSX.Element => {
        return <AddToFavourite character={character} />;
    };

    return (
        <ListItem.Swipeable
            onPress={handleOpenInfo}
            bottomDivider
            containerStyle={styles.container}
            rightContent={rightContent}
        >
            <ListItem.Content>
                <ListItem.Title>{name}</ListItem.Title>
            </ListItem.Content>
            <Icon name="chevron-left" />
        </ListItem.Swipeable>
    );
});

export default CharacterCard;
