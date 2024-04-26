/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPark = /* GraphQL */ `query GetPark($id: ID!) {
  getPark(id: $id) {
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
` as GeneratedQuery<APITypes.GetParkQueryVariables, APITypes.GetParkQuery>;
export const listParks = /* GraphQL */ `query ListParks(
  $filter: ModelParkFilterInput
  $limit: Int
  $nextToken: String
) {
  listParks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListParksQueryVariables, APITypes.ListParksQuery>;
