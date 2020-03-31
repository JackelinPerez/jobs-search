import ApolloClient, {gql} from 'apollo-boost';

export const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
});

export const jobsQuery = gql`
{
	jobs{
    title
    company{
        name
        websiteUrl
        logoUrl
      }
    locationNames
    countries{
      name
    }
    cities{
      name
    }
    remotes{
      type
    }
    description
    tags{
      name
    }
    postedAt
  }
  }
`;