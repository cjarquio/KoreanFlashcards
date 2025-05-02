/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTaekwondoTerms = /* GraphQL */ `query GetTaekwondoTerms($id: ID!) {
  getTaekwondoTerms(id: $id) {
    id
    english
    korean
    symbol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTaekwondoTermsQueryVariables,
  APITypes.GetTaekwondoTermsQuery
>;
export const listTaekwondoTerms = /* GraphQL */ `query ListTaekwondoTerms(
  $filter: ModelTaekwondoTermsFilterInput
  $limit: Int
  $nextToken: String
) {
  listTaekwondoTerms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      english
      korean
      symbol
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTaekwondoTermsQueryVariables,
  APITypes.ListTaekwondoTermsQuery
>;
