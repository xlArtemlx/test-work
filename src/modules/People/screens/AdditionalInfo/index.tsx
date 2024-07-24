import React from 'react';
import {View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ListItem} from '@rneui/themed';

import {RootStackParamList} from 'navigation/types';

import styles from './styles';

type Props = StackScreenProps<RootStackParamList, 'AdditionalInfo'>;

const AdditionalInfo: React.FC<Props> = ({route}) => {
    const {params: character} = route;
    return (
        <View style={styles.conteiner}>
            <View style={styles.infoContainer}>
                <ListItem bottomDivider containerStyle={styles.listItem}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>Name</ListItem.Title>
                        <ListItem.Subtitle style={styles.subTitle}>{character.name}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>Birth</ListItem.Title>
                        <ListItem.Subtitle style={styles.subTitle}>{character.birth_year}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem containerStyle={styles.listItem}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>Gender</ListItem.Title>
                        <ListItem.Subtitle style={styles.subTitle}>{character.gender}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>Eye color</ListItem.Title>
                        <ListItem.Subtitle style={styles.subTitle}>{character.eye_color}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
            <View style={styles.infoContainer}>
                <ListItem bottomDivider containerStyle={styles.listItem}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>Hair color</ListItem.Title>
                        <ListItem.Subtitle style={styles.subTitle}>{character.hair_color}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>Mass</ListItem.Title>
                        <ListItem.Subtitle style={styles.subTitle}>{character.mass}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem containerStyle={styles.listItem}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>Height</ListItem.Title>
                        <ListItem.Subtitle style={styles.subTitle}>{character.height}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
        </View>
    );
};

export default AdditionalInfo;
