module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    navigation: './src/navigation',
                    services: './src/services',
                    store: './src/store',
                    modules: './src/modules',
                    types: './src/types',
                    modals: './src/modals',
                },
            },
        ],
    ],
};
