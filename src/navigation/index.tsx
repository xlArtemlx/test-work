import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {rootNavigationRef} from 'services/navigation';

import AdditionalInfo from 'modules/People/screens/AdditionalInfo';

import {RootStackParamList} from './types';
import {screensName} from './screensName';
import BackButton from './components/BackButton';
import PeopleNavigator from './navigators/PeopleNavigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <NavigationContainer ref={rootNavigationRef}>
            <RootStack.Navigator>
                <RootStack.Screen
                    name={screensName.peopleNavigator}
                    component={PeopleNavigator}
                    options={{
                        gestureEnabled: false,
                        headerTitleAlign: 'center',
                        title: 'Characters',
                        headerTitleStyle: {
                            color: '#ebf5f7',
                        },
                        headerStyle: {
                            backgroundColor: '#66A5AD',
                        },
                    }}
                />
                <RootStack.Screen
                    name={screensName.additionalInfo}
                    component={AdditionalInfo}
                    options={{
                        gestureEnabled: false,
                        headerBackTitleVisible: false,
                        headerTitleAlign: 'center',
                        title: 'Info',
                        headerTitleStyle: {
                            color: '#ebf5f7',
                        },
                        headerStyle: {
                            backgroundColor: '#66A5AD',
                        },
                        headerLeft: BackButton,
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
