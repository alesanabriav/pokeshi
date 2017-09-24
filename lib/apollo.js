import { createApolloFetch } from 'apollo-fetch';

const url = 'http://localhost:3000';

const apolloFetch = createApolloFetch({ url });

export default apolloFetch;
