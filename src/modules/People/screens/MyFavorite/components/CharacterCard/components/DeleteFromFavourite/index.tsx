import {Button} from '@rneui/base';
import React from 'react';

import {Character} from 'modules/People/core/types';
import {usePeopleActions} from 'modules/People/hooks/usePeopleActions';

type Props = {
    character: Character;
};

const DeleteFavourite: React.FC<Props> = ({character}) => {
    const {deleteFromFavorite} = usePeopleActions();

    const handleDeleteFromFavourite = (): void => {
        deleteFromFavorite(character);
    };

    return (
        <Button
            onPress={handleDeleteFromFavourite}
            icon={{name: 'delete-outline', color: 'white', size: 28}}
            buttonStyle={{minHeight: '100%', backgroundColor: '#07575B'}}
        />
    );
};

export default DeleteFavourite;
