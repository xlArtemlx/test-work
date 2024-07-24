import {Alert} from 'react-native';

import {ModalData} from 'types/Modals';

export const askModal = (modalData: ModalData): Promise<boolean> => {
    return new Promise((resolve) => {
        Alert.alert(modalData?.titleText || '', modalData.bodyText, [
            {
                text: modalData?.onOkText,
                onPress: () => {
                    if (modalData.onOkFunc) {
                        modalData.onOkFunc();
                    }
                    resolve(true);
                },
                style: 'cancel',
            },
            {
                text: modalData?.onCloseText,
                onPress: () => resolve(false),
                style: 'cancel',
            },
        ]);
    });
};
