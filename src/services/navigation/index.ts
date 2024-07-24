import {createNavigationContainerRef} from '@react-navigation/native';

import {RootStackParamList} from 'navigation/types';
import {screensName} from 'navigation/screensName';

import {Character} from 'modules/People/core/types';

export const rootNavigationRef = createNavigationContainerRef<RootStackParamList>();

export const goToAdditionalInfo = ({character}: {character: Character}): void => {
    if (rootNavigationRef.isReady()) {
        rootNavigationRef.navigate(screensName.additionalInfo, character);
    }
};

export const goBack = (): void => {
    if (rootNavigationRef.isReady()) {
        rootNavigationRef.goBack();
    }
};
