/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTaekwondoTerms = /* GraphQL */ `mutation CreateTaekwondoTerms(
  $input: CreateTaekwondoTermsInput!
  $condition: ModelTaekwondoTermsConditionInput
) {
  createTaekwondoTerms(input: $input, condition: $condition) {
    id
    english
    korean
    symbol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTaekwondoTermsMutationVariables,
  APITypes.CreateTaekwondoTermsMutation
>;
export const updateTaekwondoTerms = /* GraphQL */ `mutation UpdateTaekwondoTerms(
  $input: UpdateTaekwondoTermsInput!
  $condition: ModelTaekwondoTermsConditionInput
) {
  updateTaekwondoTerms(input: $input, condition: $condition) {
    id
    english
    korean
    symbol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTaekwondoTermsMutationVariables,
  APITypes.UpdateTaekwondoTermsMutation
>;
export const deleteTaekwondoTerms = /* GraphQL */ `mutation DeleteTaekwondoTerms(
  $input: DeleteTaekwondoTermsInput!
  $condition: ModelTaekwondoTermsConditionInput
) {
  deleteTaekwondoTerms(input: $input, condition: $condition) {
    id
    english
    korean
    symbol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTaekwondoTermsMutationVariables,
  APITypes.DeleteTaekwondoTermsMutation
>;
