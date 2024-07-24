import React, {useState} from 'react';
import {SpeedDial} from '@rneui/base';

import {GENDERS} from 'modules/People/core/constants';
import {Genders} from 'modules/People/core/types';
import {usePeopleActions} from 'modules/People/hooks/usePeopleActions';

const FilterButton: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const {setGenderFilter} = usePeopleActions();

    const onOpenMenu = (): void => setOpen(true);
    const onCloseMenu = (): void => setOpen(false);

    const filterOptions: {key: Genders}[] = [{key: GENDERS.ALL}, {key: GENDERS.FEMALE}, {key: GENDERS.MALE}];

    const filterActions = (): React.JSX.Element[] => {
        return filterOptions.map(({key}) => {
            const handleFilter = (): void => setGenderFilter(key);
            return (
                <SpeedDial.Action
                    key={key}
                    icon={{name: 'add', color: 'white'}}
                    title={key}
                    onPress={handleFilter}
                    color="#66A5AD"
                    titleStyle={{
                        borderRadius: 4,
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        color: '#07575B',
                    }}
                />
            );
        });
    };

    return (
        <SpeedDial
            isOpen={isOpen}
            icon={{name: 'filter-list', color: 'white'}}
            openIcon={{name: 'close', color: 'white'}}
            onOpen={onOpenMenu}
            onClose={onCloseMenu}
            color="#07575B"
            transitionDuration={250}
            labelPressable
        >
            {filterActions()}
        </SpeedDial>
    );
};

export default FilterButton;
