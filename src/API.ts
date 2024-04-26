/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateParkInput = {
  id?: string | null,
  name: string,
  image: S3ObjectInput,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelParkConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelParkConditionInput | null > | null,
  or?: Array< ModelParkConditionInput | null > | null,
  not?: ModelParkConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
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

export type Park = {
  __typename: "Park",
  id: string,
  name: string,
  image: S3Object,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type UpdateParkInput = {
  id: string,
  name?: string | null,
  image?: S3ObjectInput | null,
};

export type DeleteParkInput = {
  id: string,
};

export type ModelParkFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelParkFilterInput | null > | null,
  or?: Array< ModelParkFilterInput | null > | null,
  not?: ModelParkFilterInput | null,
  owner?: ModelStringInput | null,
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

export type ModelParkConnection = {
  __typename: "ModelParkConnection",
  items:  Array<Park | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionParkFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionParkFilterInput | null > | null,
  or?: Array< ModelSubscriptionParkFilterInput | null > | null,
  owner?: ModelStringInput | null,
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

export type CreateParkMutationVariables = {
  input: CreateParkInput,
  condition?: ModelParkConditionInput | null,
};

export type CreateParkMutation = {
  createPark?:  {
    __typename: "Park",
    id: string,
    name: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateParkMutationVariables = {
  input: UpdateParkInput,
  condition?: ModelParkConditionInput | null,
};

export type UpdateParkMutation = {
  updatePark?:  {
    __typename: "Park",
    id: string,
    name: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteParkMutationVariables = {
  input: DeleteParkInput,
  condition?: ModelParkConditionInput | null,
};

export type DeleteParkMutation = {
  deletePark?:  {
    __typename: "Park",
    id: string,
    name: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetParkQueryVariables = {
  id: string,
};

export type GetParkQuery = {
  getPark?:  {
    __typename: "Park",
    id: string,
    name: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListParksQueryVariables = {
  filter?: ModelParkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParksQuery = {
  listParks?:  {
    __typename: "ModelParkConnection",
    items:  Array< {
      __typename: "Park",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateParkSubscriptionVariables = {
  filter?: ModelSubscriptionParkFilterInput | null,
  owner?: string | null,
};

export type OnCreateParkSubscription = {
  onCreatePark?:  {
    __typename: "Park",
    id: string,
    name: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateParkSubscriptionVariables = {
  filter?: ModelSubscriptionParkFilterInput | null,
  owner?: string | null,
};

export type OnUpdateParkSubscription = {
  onUpdatePark?:  {
    __typename: "Park",
    id: string,
    name: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteParkSubscriptionVariables = {
  filter?: ModelSubscriptionParkFilterInput | null,
  owner?: string | null,
};

export type OnDeleteParkSubscription = {
  onDeletePark?:  {
    __typename: "Park",
    id: string,
    name: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
