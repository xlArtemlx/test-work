import {Icon} from '@rneui/base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {goBack} from 'services/navigation';

const BackButton: React.FC = () => {
    return (
        <TouchableOpacity onPress={goBack}>
            <Icon size={36} type="material-community" name="chevron-left" color="#003B46" />
        </TouchableOpacity>
    );
};

export default BackButton;
