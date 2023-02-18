import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'https://icanhazdadjoke.com/graphql',
    documents: ['src/**/*.tsx'],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: [],
        },
    },
}

export default config
