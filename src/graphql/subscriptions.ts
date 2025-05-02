/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTaekwondoTerms = /* GraphQL */ `subscription OnCreateTaekwondoTerms(
  $filter: ModelSubscriptionTaekwondoTermsFilterInput
) {
  onCreateTaekwondoTerms(filter: $filter) {
    id
    english
    korean
    symbol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTaekwondoTermsSubscriptionVariables,
  APITypes.OnCreateTaekwondoTermsSubscription
>;
export const onUpdateTaekwondoTerms = /* GraphQL */ `subscription OnUpdateTaekwondoTerms(
  $filter: ModelSubscriptionTaekwondoTermsFilterInput
) {
  onUpdateTaekwondoTerms(filter: $filter) {
    id
    english
    korean
    symbol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTaekwondoTermsSubscriptionVariables,
  APITypes.OnUpdateTaekwondoTermsSubscription
>;
export const onDeleteTaekwondoTerms = /* GraphQL */ `subscription OnDeleteTaekwondoTerms(
  $filter: ModelSubscriptionTaekwondoTermsFilterInput
) {
  onDeleteTaekwondoTerms(filter: $filter) {
    id
    english
    korean
    symbol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTaekwondoTermsSubscriptionVariables,
  APITypes.OnDeleteTaekwondoTermsSubscription
>;
