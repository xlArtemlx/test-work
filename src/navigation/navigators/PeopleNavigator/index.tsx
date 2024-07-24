/* eslint-disable react/react-in-jsx-scope */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector} from 'react-redux';

import {screensName} from 'navigation/screensName';
import {PeopleNavigatorParamList} from 'navigation/types';

import AllPeople from 'modules/People/screens/AllPeople';
import MyFavorite from 'modules/People/screens/MyFavorite';
import {getAllPeopleCounter, getQuantityFavoriteCharacters} from 'modules/People/redux/selectors';

const Tab = createMaterialTopTabNavigator<PeopleNavigatorParamList>();

const PeopleNavigator: React.FC = () => {
    const allPeopleCounter = useSelector(getAllPeopleCounter);
    const favoriteCounter = useSelector(getQuantityFavoriteCharacters);

    return (
        <Tab.Navigator screenOptions={{swipeEnabled: false}}>
            <Tab.Screen
                name={screensName.allPeople}
                component={AllPeople}
                options={{
                    tabBarLabel: `All People (${allPeopleCounter})`,
                    tabBarStyle: {
                        borderBottomColor: 'white',
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#003B46',
                    },
                }}
            />
            <Tab.Screen
                name={screensName.myFavorite}
                component={MyFavorite}
                options={{
                    tabBarLabel: `My Favorite (${favoriteCounter})`,
                    tabBarIndicatorStyle: {
                        backgroundColor: '#003B46',
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default PeopleNavigator;
