/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPark = /* GraphQL */ `mutation CreatePark(
  $input: CreateParkInput!
  $condition: ModelParkConditionInput
) {
  createPark(input: $input, condition: $condition) {
    id
    name
    image {
      bucket
      region
      key
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateParkMutationVariables,
  APITypes.CreateParkMutation
>;
export const updatePark = /* GraphQL */ `mutation UpdatePark(
  $input: UpdateParkInput!
  $condition: ModelParkConditionInput
) {
  updatePark(input: $input, condition: $condition) {
    id
    name
    image {
      bucket
      region
      key
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateParkMutationVariables,
  APITypes.UpdateParkMutation
>;
export const deletePark = /* GraphQL */ `mutation DeletePark(
  $input: DeleteParkInput!
  $condition: ModelParkConditionInput
) {
  deletePark(input: $input, condition: $condition) {
    id
    name
    image {
      bucket
      region
      key
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteParkMutationVariables,
  APITypes.DeleteParkMutation
>;
