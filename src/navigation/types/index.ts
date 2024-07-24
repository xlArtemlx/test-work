import {NavigatorScreenParams} from '@react-navigation/native';

import {Character} from 'modules/People/core/types';

export type PeopleNavigatorParamList = {
    AllPeople: undefined;
    MyFavorite: undefined;
};

export type RootStackParamList = {
    AdditionalInfo: Character;
    PeopleNavigator: NavigatorScreenParams<PeopleNavigatorParamList>;
};
