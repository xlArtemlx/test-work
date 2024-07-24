import {Button} from '@rneui/base';
import React from 'react';

import {Character} from 'modules/People/core/types';
import {usePeopleActions} from 'modules/People/hooks/usePeopleActions';

type Props = {
    character: Character;
};

const AddToFavourite: React.FC<Props> = ({character}) => {
    const {addToFavorite} = usePeopleActions();

    const handleAddToFavourite = (): void => {
        addToFavorite(character);
    };

    return (
        <Button
            onPress={handleAddToFavourite}
            icon={{name: 'favorite-outline', color: 'white', size: 28}}
            buttonStyle={{minHeight: '100%', backgroundColor: '#07575B'}}
        />
    );
};

export default AddToFavourite;
