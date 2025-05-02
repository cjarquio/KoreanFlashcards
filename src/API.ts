/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTaekwondoTermsInput = {
  id?: string | null,
  english: string,
  korean: string,
  symbol?: string | null,
};

export type ModelTaekwondoTermsConditionInput = {
  english?: ModelStringInput | null,
  korean?: ModelStringInput | null,
  symbol?: ModelStringInput | null,
  and?: Array< ModelTaekwondoTermsConditionInput | null > | null,
  or?: Array< ModelTaekwondoTermsConditionInput | null > | null,
  not?: ModelTaekwondoTermsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TaekwondoTerms = {
  __typename: "TaekwondoTerms",
  id: string,
  english: string,
  korean: string,
  symbol?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTaekwondoTermsInput = {
  id: string,
  english?: string | null,
  korean?: string | null,
  symbol?: string | null,
};

export type DeleteTaekwondoTermsInput = {
  id: string,
};

export type ModelTaekwondoTermsFilterInput = {
  id?: ModelIDInput | null,
  english?: ModelStringInput | null,
  korean?: ModelStringInput | null,
  symbol?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTaekwondoTermsFilterInput | null > | null,
  or?: Array< ModelTaekwondoTermsFilterInput | null > | null,
  not?: ModelTaekwondoTermsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTaekwondoTermsConnection = {
  __typename: "ModelTaekwondoTermsConnection",
  items:  Array<TaekwondoTerms | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTaekwondoTermsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  english?: ModelSubscriptionStringInput | null,
  korean?: ModelSubscriptionStringInput | null,
  symbol?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTaekwondoTermsFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaekwondoTermsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateTaekwondoTermsMutationVariables = {
  input: CreateTaekwondoTermsInput,
  condition?: ModelTaekwondoTermsConditionInput | null,
};

export type CreateTaekwondoTermsMutation = {
  createTaekwondoTerms?:  {
    __typename: "TaekwondoTerms",
    id: string,
    english: string,
    korean: string,
    symbol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTaekwondoTermsMutationVariables = {
  input: UpdateTaekwondoTermsInput,
  condition?: ModelTaekwondoTermsConditionInput | null,
};

export type UpdateTaekwondoTermsMutation = {
  updateTaekwondoTerms?:  {
    __typename: "TaekwondoTerms",
    id: string,
    english: string,
    korean: string,
    symbol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTaekwondoTermsMutationVariables = {
  input: DeleteTaekwondoTermsInput,
  condition?: ModelTaekwondoTermsConditionInput | null,
};

export type DeleteTaekwondoTermsMutation = {
  deleteTaekwondoTerms?:  {
    __typename: "TaekwondoTerms",
    id: string,
    english: string,
    korean: string,
    symbol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTaekwondoTermsQueryVariables = {
  id: string,
};

export type GetTaekwondoTermsQuery = {
  getTaekwondoTerms?:  {
    __typename: "TaekwondoTerms",
    id: string,
    english: string,
    korean: string,
    symbol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTaekwondoTermsQueryVariables = {
  filter?: ModelTaekwondoTermsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTaekwondoTermsQuery = {
  listTaekwondoTerms?:  {
    __typename: "ModelTaekwondoTermsConnection",
    items:  Array< {
      __typename: "TaekwondoTerms",
      id: string,
      english: string,
      korean: string,
      symbol?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTaekwondoTermsSubscriptionVariables = {
  filter?: ModelSubscriptionTaekwondoTermsFilterInput | null,
};

export type OnCreateTaekwondoTermsSubscription = {
  onCreateTaekwondoTerms?:  {
    __typename: "TaekwondoTerms",
    id: string,
    english: string,
    korean: string,
    symbol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTaekwondoTermsSubscriptionVariables = {
  filter?: ModelSubscriptionTaekwondoTermsFilterInput | null,
};

export type OnUpdateTaekwondoTermsSubscription = {
  onUpdateTaekwondoTerms?:  {
    __typename: "TaekwondoTerms",
    id: string,
    english: string,
    korean: string,
    symbol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTaekwondoTermsSubscriptionVariables = {
  filter?: ModelSubscriptionTaekwondoTermsFilterInput | null,
};

export type OnDeleteTaekwondoTermsSubscription = {
  onDeleteTaekwondoTerms?:  {
    __typename: "TaekwondoTerms",
    id: string,
    english: string,
    korean: string,
    symbol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
