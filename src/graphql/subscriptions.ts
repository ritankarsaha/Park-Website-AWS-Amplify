/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePark = /* GraphQL */ `subscription OnCreatePark(
  $filter: ModelSubscriptionParkFilterInput
  $owner: String
) {
  onCreatePark(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateParkSubscriptionVariables,
  APITypes.OnCreateParkSubscription
>;
export const onUpdatePark = /* GraphQL */ `subscription OnUpdatePark(
  $filter: ModelSubscriptionParkFilterInput
  $owner: String
) {
  onUpdatePark(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateParkSubscriptionVariables,
  APITypes.OnUpdateParkSubscription
>;
export const onDeletePark = /* GraphQL */ `subscription OnDeletePark(
  $filter: ModelSubscriptionParkFilterInput
  $owner: String
) {
  onDeletePark(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteParkSubscriptionVariables,
  APITypes.OnDeleteParkSubscription
>;
