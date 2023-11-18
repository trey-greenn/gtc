import { gql} from "graphql-request";

import { GraphQLClient } from "graphql-request";


const graphqlURL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clp49rfwb4ket01t8avct5q9a/master"

export const getBiz = async () => {
    const graphQLClient = new GraphQLClient(graphqlURL);
    const query = gql`
    query EtcBizs {
        etcBizs {
          answer
          bizDescript
          founded
          marketCap
          number
          revenue
          bizSLug
        }
      }
    `;
    const result = await graphQLClient.request<any>(query);
  
    return result.etcBizs;
  };