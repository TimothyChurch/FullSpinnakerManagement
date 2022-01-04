import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

import type { IntrospectionQuery } from 'graphql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  ObjectId: any
}

export type Active = {
  __typename?: 'Active'
  _id?: Maybe<Scalars['ObjectId']>
  address?: Maybe<ActiveAddress>
  bookings?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  cleaner?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  cleanings?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  details?: Maybe<ActiveDetail>
  name?: Maybe<Scalars['String']>
  owner?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  projects?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  stage?: Maybe<Scalars['String']>
}

export type ActiveAddress = {
  __typename?: 'ActiveAddress'
  city?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  zip?: Maybe<Scalars['String']>
}

export type ActiveAddressInsertInput = {
  city?: InputMaybe<Scalars['String']>
  display?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  street?: InputMaybe<Scalars['String']>
  zip?: InputMaybe<Scalars['String']>
}

export type ActiveAddressQueryInput = {
  AND?: InputMaybe<Array<ActiveAddressQueryInput>>
  OR?: InputMaybe<Array<ActiveAddressQueryInput>>
  city?: InputMaybe<Scalars['String']>
  city_exists?: InputMaybe<Scalars['Boolean']>
  city_gt?: InputMaybe<Scalars['String']>
  city_gte?: InputMaybe<Scalars['String']>
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  city_lt?: InputMaybe<Scalars['String']>
  city_lte?: InputMaybe<Scalars['String']>
  city_ne?: InputMaybe<Scalars['String']>
  city_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  display?: InputMaybe<Scalars['String']>
  display_exists?: InputMaybe<Scalars['Boolean']>
  display_gt?: InputMaybe<Scalars['String']>
  display_gte?: InputMaybe<Scalars['String']>
  display_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  display_lt?: InputMaybe<Scalars['String']>
  display_lte?: InputMaybe<Scalars['String']>
  display_ne?: InputMaybe<Scalars['String']>
  display_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  state?: InputMaybe<Scalars['String']>
  state_exists?: InputMaybe<Scalars['Boolean']>
  state_gt?: InputMaybe<Scalars['String']>
  state_gte?: InputMaybe<Scalars['String']>
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  state_lt?: InputMaybe<Scalars['String']>
  state_lte?: InputMaybe<Scalars['String']>
  state_ne?: InputMaybe<Scalars['String']>
  state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  street?: InputMaybe<Scalars['String']>
  street_exists?: InputMaybe<Scalars['Boolean']>
  street_gt?: InputMaybe<Scalars['String']>
  street_gte?: InputMaybe<Scalars['String']>
  street_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  street_lt?: InputMaybe<Scalars['String']>
  street_lte?: InputMaybe<Scalars['String']>
  street_ne?: InputMaybe<Scalars['String']>
  street_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  zip?: InputMaybe<Scalars['String']>
  zip_exists?: InputMaybe<Scalars['Boolean']>
  zip_gt?: InputMaybe<Scalars['String']>
  zip_gte?: InputMaybe<Scalars['String']>
  zip_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  zip_lt?: InputMaybe<Scalars['String']>
  zip_lte?: InputMaybe<Scalars['String']>
  zip_ne?: InputMaybe<Scalars['String']>
  zip_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ActiveAddressUpdateInput = {
  city?: InputMaybe<Scalars['String']>
  city_unset?: InputMaybe<Scalars['Boolean']>
  display?: InputMaybe<Scalars['String']>
  display_unset?: InputMaybe<Scalars['Boolean']>
  state?: InputMaybe<Scalars['String']>
  state_unset?: InputMaybe<Scalars['Boolean']>
  street?: InputMaybe<Scalars['String']>
  street_unset?: InputMaybe<Scalars['Boolean']>
  zip?: InputMaybe<Scalars['String']>
  zip_unset?: InputMaybe<Scalars['Boolean']>
}

export type ActiveDetail = {
  __typename?: 'ActiveDetail'
  bathrooms?: Maybe<Scalars['String']>
  bedrooms?: Maybe<Scalars['String']>
  quests?: Maybe<Scalars['String']>
  sqft?: Maybe<Scalars['String']>
}

export type ActiveDetailInsertInput = {
  bathrooms?: InputMaybe<Scalars['String']>
  bedrooms?: InputMaybe<Scalars['String']>
  quests?: InputMaybe<Scalars['String']>
  sqft?: InputMaybe<Scalars['String']>
}

export type ActiveDetailQueryInput = {
  AND?: InputMaybe<Array<ActiveDetailQueryInput>>
  OR?: InputMaybe<Array<ActiveDetailQueryInput>>
  bathrooms?: InputMaybe<Scalars['String']>
  bathrooms_exists?: InputMaybe<Scalars['Boolean']>
  bathrooms_gt?: InputMaybe<Scalars['String']>
  bathrooms_gte?: InputMaybe<Scalars['String']>
  bathrooms_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  bathrooms_lt?: InputMaybe<Scalars['String']>
  bathrooms_lte?: InputMaybe<Scalars['String']>
  bathrooms_ne?: InputMaybe<Scalars['String']>
  bathrooms_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  bedrooms?: InputMaybe<Scalars['String']>
  bedrooms_exists?: InputMaybe<Scalars['Boolean']>
  bedrooms_gt?: InputMaybe<Scalars['String']>
  bedrooms_gte?: InputMaybe<Scalars['String']>
  bedrooms_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  bedrooms_lt?: InputMaybe<Scalars['String']>
  bedrooms_lte?: InputMaybe<Scalars['String']>
  bedrooms_ne?: InputMaybe<Scalars['String']>
  bedrooms_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  quests?: InputMaybe<Scalars['String']>
  quests_exists?: InputMaybe<Scalars['Boolean']>
  quests_gt?: InputMaybe<Scalars['String']>
  quests_gte?: InputMaybe<Scalars['String']>
  quests_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  quests_lt?: InputMaybe<Scalars['String']>
  quests_lte?: InputMaybe<Scalars['String']>
  quests_ne?: InputMaybe<Scalars['String']>
  quests_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sqft?: InputMaybe<Scalars['String']>
  sqft_exists?: InputMaybe<Scalars['Boolean']>
  sqft_gt?: InputMaybe<Scalars['String']>
  sqft_gte?: InputMaybe<Scalars['String']>
  sqft_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sqft_lt?: InputMaybe<Scalars['String']>
  sqft_lte?: InputMaybe<Scalars['String']>
  sqft_ne?: InputMaybe<Scalars['String']>
  sqft_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ActiveDetailUpdateInput = {
  bathrooms?: InputMaybe<Scalars['String']>
  bathrooms_unset?: InputMaybe<Scalars['Boolean']>
  bedrooms?: InputMaybe<Scalars['String']>
  bedrooms_unset?: InputMaybe<Scalars['Boolean']>
  quests?: InputMaybe<Scalars['String']>
  quests_unset?: InputMaybe<Scalars['Boolean']>
  sqft?: InputMaybe<Scalars['String']>
  sqft_unset?: InputMaybe<Scalars['Boolean']>
}

export type ActiveInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>
  address?: InputMaybe<ActiveAddressInsertInput>
  bookings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleaner?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleanings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  details?: InputMaybe<ActiveDetailInsertInput>
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  projects?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  stage?: InputMaybe<Scalars['String']>
}

export type ActiveQueryInput = {
  AND?: InputMaybe<Array<ActiveQueryInput>>
  OR?: InputMaybe<Array<ActiveQueryInput>>
  _id?: InputMaybe<Scalars['ObjectId']>
  _id_exists?: InputMaybe<Scalars['Boolean']>
  _id_gt?: InputMaybe<Scalars['ObjectId']>
  _id_gte?: InputMaybe<Scalars['ObjectId']>
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  _id_lt?: InputMaybe<Scalars['ObjectId']>
  _id_lte?: InputMaybe<Scalars['ObjectId']>
  _id_ne?: InputMaybe<Scalars['ObjectId']>
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  address?: InputMaybe<ActiveAddressQueryInput>
  address_exists?: InputMaybe<Scalars['Boolean']>
  bookings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  bookings_exists?: InputMaybe<Scalars['Boolean']>
  bookings_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  bookings_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleaner?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleaner_exists?: InputMaybe<Scalars['Boolean']>
  cleaner_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleaner_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleanings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleanings_exists?: InputMaybe<Scalars['Boolean']>
  cleanings_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleanings_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  details?: InputMaybe<ActiveDetailQueryInput>
  details_exists?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name_gt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_lt?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_ne?: InputMaybe<Scalars['String']>
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  owner?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  owner_exists?: InputMaybe<Scalars['Boolean']>
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  owner_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  projects?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  projects_exists?: InputMaybe<Scalars['Boolean']>
  projects_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  projects_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  stage?: InputMaybe<Scalars['String']>
  stage_exists?: InputMaybe<Scalars['Boolean']>
  stage_gt?: InputMaybe<Scalars['String']>
  stage_gte?: InputMaybe<Scalars['String']>
  stage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  stage_lt?: InputMaybe<Scalars['String']>
  stage_lte?: InputMaybe<Scalars['String']>
  stage_ne?: InputMaybe<Scalars['String']>
  stage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum ActiveSortByInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  StageAsc = 'STAGE_ASC',
  StageDesc = 'STAGE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type ActiveUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>
  _id_unset?: InputMaybe<Scalars['Boolean']>
  address?: InputMaybe<ActiveAddressUpdateInput>
  address_unset?: InputMaybe<Scalars['Boolean']>
  bookings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  bookings_unset?: InputMaybe<Scalars['Boolean']>
  cleaner?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleaner_unset?: InputMaybe<Scalars['Boolean']>
  cleanings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleanings_unset?: InputMaybe<Scalars['Boolean']>
  details?: InputMaybe<ActiveDetailUpdateInput>
  details_unset?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_unset?: InputMaybe<Scalars['Boolean']>
  owner?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  owner_unset?: InputMaybe<Scalars['Boolean']>
  projects?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  projects_unset?: InputMaybe<Scalars['Boolean']>
  stage?: InputMaybe<Scalars['String']>
  stage_unset?: InputMaybe<Scalars['Boolean']>
}

export type Cleaner = {
  __typename?: 'Cleaner'
  _id?: Maybe<Scalars['ObjectId']>
  company?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  properties?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  website?: Maybe<Scalars['String']>
}

export type CleanerInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>
  company?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  properties?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  website?: InputMaybe<Scalars['String']>
}

export type CleanerQueryInput = {
  AND?: InputMaybe<Array<CleanerQueryInput>>
  OR?: InputMaybe<Array<CleanerQueryInput>>
  _id?: InputMaybe<Scalars['ObjectId']>
  _id_exists?: InputMaybe<Scalars['Boolean']>
  _id_gt?: InputMaybe<Scalars['ObjectId']>
  _id_gte?: InputMaybe<Scalars['ObjectId']>
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  _id_lt?: InputMaybe<Scalars['ObjectId']>
  _id_lte?: InputMaybe<Scalars['ObjectId']>
  _id_ne?: InputMaybe<Scalars['ObjectId']>
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  company?: InputMaybe<Scalars['String']>
  company_exists?: InputMaybe<Scalars['Boolean']>
  company_gt?: InputMaybe<Scalars['String']>
  company_gte?: InputMaybe<Scalars['String']>
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  company_lt?: InputMaybe<Scalars['String']>
  company_lte?: InputMaybe<Scalars['String']>
  company_ne?: InputMaybe<Scalars['String']>
  company_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  email?: InputMaybe<Scalars['String']>
  email_exists?: InputMaybe<Scalars['Boolean']>
  email_gt?: InputMaybe<Scalars['String']>
  email_gte?: InputMaybe<Scalars['String']>
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  email_lt?: InputMaybe<Scalars['String']>
  email_lte?: InputMaybe<Scalars['String']>
  email_ne?: InputMaybe<Scalars['String']>
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  phone?: InputMaybe<Scalars['String']>
  phone_exists?: InputMaybe<Scalars['Boolean']>
  phone_gt?: InputMaybe<Scalars['String']>
  phone_gte?: InputMaybe<Scalars['String']>
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  phone_lt?: InputMaybe<Scalars['String']>
  phone_lte?: InputMaybe<Scalars['String']>
  phone_ne?: InputMaybe<Scalars['String']>
  phone_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  properties?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  properties_exists?: InputMaybe<Scalars['Boolean']>
  properties_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  properties_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  website?: InputMaybe<Scalars['String']>
  website_exists?: InputMaybe<Scalars['Boolean']>
  website_gt?: InputMaybe<Scalars['String']>
  website_gte?: InputMaybe<Scalars['String']>
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  website_lt?: InputMaybe<Scalars['String']>
  website_lte?: InputMaybe<Scalars['String']>
  website_ne?: InputMaybe<Scalars['String']>
  website_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum CleanerSortByInput {
  CompanyAsc = 'COMPANY_ASC',
  CompanyDesc = 'COMPANY_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  WebsiteAsc = 'WEBSITE_ASC',
  WebsiteDesc = 'WEBSITE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type CleanerUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>
  _id_unset?: InputMaybe<Scalars['Boolean']>
  company?: InputMaybe<Scalars['String']>
  company_unset?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  email_unset?: InputMaybe<Scalars['Boolean']>
  phone?: InputMaybe<Scalars['String']>
  phone_unset?: InputMaybe<Scalars['Boolean']>
  properties?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  properties_unset?: InputMaybe<Scalars['Boolean']>
  website?: InputMaybe<Scalars['String']>
  website_unset?: InputMaybe<Scalars['Boolean']>
}

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload'
  deletedCount: Scalars['Int']
}

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload'
  insertedIds: Array<Maybe<Scalars['ObjectId']>>
}

export type Mutation = {
  __typename?: 'Mutation'
  deleteManyActives?: Maybe<DeleteManyPayload>
  deleteManyCleaners?: Maybe<DeleteManyPayload>
  deleteManyOwners?: Maybe<DeleteManyPayload>
  deleteManyVendors?: Maybe<DeleteManyPayload>
  deleteOneActive?: Maybe<Active>
  deleteOneCleaner?: Maybe<Cleaner>
  deleteOneOwner?: Maybe<Owner>
  deleteOneVendor?: Maybe<Vendor>
  insertManyActives?: Maybe<InsertManyPayload>
  insertManyCleaners?: Maybe<InsertManyPayload>
  insertManyOwners?: Maybe<InsertManyPayload>
  insertManyVendors?: Maybe<InsertManyPayload>
  insertOneActive?: Maybe<Active>
  insertOneCleaner?: Maybe<Cleaner>
  insertOneOwner?: Maybe<Owner>
  insertOneVendor?: Maybe<Vendor>
  replaceOneActive?: Maybe<Active>
  replaceOneCleaner?: Maybe<Cleaner>
  replaceOneOwner?: Maybe<Owner>
  replaceOneVendor?: Maybe<Vendor>
  updateManyActives?: Maybe<UpdateManyPayload>
  updateManyCleaners?: Maybe<UpdateManyPayload>
  updateManyOwners?: Maybe<UpdateManyPayload>
  updateManyVendors?: Maybe<UpdateManyPayload>
  updateOneActive?: Maybe<Active>
  updateOneCleaner?: Maybe<Cleaner>
  updateOneOwner?: Maybe<Owner>
  updateOneVendor?: Maybe<Vendor>
  upsertOneActive?: Maybe<Active>
  upsertOneCleaner?: Maybe<Cleaner>
  upsertOneOwner?: Maybe<Owner>
  upsertOneVendor?: Maybe<Vendor>
}

export type MutationDeleteManyActivesArgs = {
  query?: InputMaybe<ActiveQueryInput>
}

export type MutationDeleteManyCleanersArgs = {
  query?: InputMaybe<CleanerQueryInput>
}

export type MutationDeleteManyOwnersArgs = {
  query?: InputMaybe<OwnerQueryInput>
}

export type MutationDeleteManyVendorsArgs = {
  query?: InputMaybe<VendorQueryInput>
}

export type MutationDeleteOneActiveArgs = {
  query: ActiveQueryInput
}

export type MutationDeleteOneCleanerArgs = {
  query: CleanerQueryInput
}

export type MutationDeleteOneOwnerArgs = {
  query: OwnerQueryInput
}

export type MutationDeleteOneVendorArgs = {
  query: VendorQueryInput
}

export type MutationInsertManyActivesArgs = {
  data: Array<ActiveInsertInput>
}

export type MutationInsertManyCleanersArgs = {
  data: Array<CleanerInsertInput>
}

export type MutationInsertManyOwnersArgs = {
  data: Array<OwnerInsertInput>
}

export type MutationInsertManyVendorsArgs = {
  data: Array<VendorInsertInput>
}

export type MutationInsertOneActiveArgs = {
  data: ActiveInsertInput
}

export type MutationInsertOneCleanerArgs = {
  data: CleanerInsertInput
}

export type MutationInsertOneOwnerArgs = {
  data: OwnerInsertInput
}

export type MutationInsertOneVendorArgs = {
  data: VendorInsertInput
}

export type MutationReplaceOneActiveArgs = {
  data: ActiveInsertInput
  query?: InputMaybe<ActiveQueryInput>
}

export type MutationReplaceOneCleanerArgs = {
  data: CleanerInsertInput
  query?: InputMaybe<CleanerQueryInput>
}

export type MutationReplaceOneOwnerArgs = {
  data: OwnerInsertInput
  query?: InputMaybe<OwnerQueryInput>
}

export type MutationReplaceOneVendorArgs = {
  data: VendorInsertInput
  query?: InputMaybe<VendorQueryInput>
}

export type MutationUpdateManyActivesArgs = {
  query?: InputMaybe<ActiveQueryInput>
  set: ActiveUpdateInput
}

export type MutationUpdateManyCleanersArgs = {
  query?: InputMaybe<CleanerQueryInput>
  set: CleanerUpdateInput
}

export type MutationUpdateManyOwnersArgs = {
  query?: InputMaybe<OwnerQueryInput>
  set: OwnerUpdateInput
}

export type MutationUpdateManyVendorsArgs = {
  query?: InputMaybe<VendorQueryInput>
  set: VendorUpdateInput
}

export type MutationUpdateOneActiveArgs = {
  query?: InputMaybe<ActiveQueryInput>
  set: ActiveUpdateInput
}

export type MutationUpdateOneCleanerArgs = {
  query?: InputMaybe<CleanerQueryInput>
  set: CleanerUpdateInput
}

export type MutationUpdateOneOwnerArgs = {
  query?: InputMaybe<OwnerQueryInput>
  set: OwnerUpdateInput
}

export type MutationUpdateOneVendorArgs = {
  query?: InputMaybe<VendorQueryInput>
  set: VendorUpdateInput
}

export type MutationUpsertOneActiveArgs = {
  data: ActiveInsertInput
  query?: InputMaybe<ActiveQueryInput>
}

export type MutationUpsertOneCleanerArgs = {
  data: CleanerInsertInput
  query?: InputMaybe<CleanerQueryInput>
}

export type MutationUpsertOneOwnerArgs = {
  data: OwnerInsertInput
  query?: InputMaybe<OwnerQueryInput>
}

export type MutationUpsertOneVendorArgs = {
  data: VendorInsertInput
  query?: InputMaybe<VendorQueryInput>
}

export type Owner = {
  __typename?: 'Owner'
  _id?: Maybe<Scalars['ObjectId']>
  address?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  properties?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  role?: Maybe<Scalars['String']>
  stage?: Maybe<Scalars['String']>
}

export type OwnerInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>
  address?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  properties?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  role?: InputMaybe<Scalars['String']>
  stage?: InputMaybe<Scalars['String']>
}

export type OwnerQueryInput = {
  AND?: InputMaybe<Array<OwnerQueryInput>>
  OR?: InputMaybe<Array<OwnerQueryInput>>
  _id?: InputMaybe<Scalars['ObjectId']>
  _id_exists?: InputMaybe<Scalars['Boolean']>
  _id_gt?: InputMaybe<Scalars['ObjectId']>
  _id_gte?: InputMaybe<Scalars['ObjectId']>
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  _id_lt?: InputMaybe<Scalars['ObjectId']>
  _id_lte?: InputMaybe<Scalars['ObjectId']>
  _id_ne?: InputMaybe<Scalars['ObjectId']>
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  address?: InputMaybe<Scalars['String']>
  address_exists?: InputMaybe<Scalars['Boolean']>
  address_gt?: InputMaybe<Scalars['String']>
  address_gte?: InputMaybe<Scalars['String']>
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  address_lt?: InputMaybe<Scalars['String']>
  address_lte?: InputMaybe<Scalars['String']>
  address_ne?: InputMaybe<Scalars['String']>
  address_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  email?: InputMaybe<Scalars['String']>
  email_exists?: InputMaybe<Scalars['Boolean']>
  email_gt?: InputMaybe<Scalars['String']>
  email_gte?: InputMaybe<Scalars['String']>
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  email_lt?: InputMaybe<Scalars['String']>
  email_lte?: InputMaybe<Scalars['String']>
  email_ne?: InputMaybe<Scalars['String']>
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  firstName?: InputMaybe<Scalars['String']>
  firstName_exists?: InputMaybe<Scalars['Boolean']>
  firstName_gt?: InputMaybe<Scalars['String']>
  firstName_gte?: InputMaybe<Scalars['String']>
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  firstName_lt?: InputMaybe<Scalars['String']>
  firstName_lte?: InputMaybe<Scalars['String']>
  firstName_ne?: InputMaybe<Scalars['String']>
  firstName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  lastName?: InputMaybe<Scalars['String']>
  lastName_exists?: InputMaybe<Scalars['Boolean']>
  lastName_gt?: InputMaybe<Scalars['String']>
  lastName_gte?: InputMaybe<Scalars['String']>
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  lastName_lt?: InputMaybe<Scalars['String']>
  lastName_lte?: InputMaybe<Scalars['String']>
  lastName_ne?: InputMaybe<Scalars['String']>
  lastName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  phone?: InputMaybe<Scalars['String']>
  phone_exists?: InputMaybe<Scalars['Boolean']>
  phone_gt?: InputMaybe<Scalars['String']>
  phone_gte?: InputMaybe<Scalars['String']>
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  phone_lt?: InputMaybe<Scalars['String']>
  phone_lte?: InputMaybe<Scalars['String']>
  phone_ne?: InputMaybe<Scalars['String']>
  phone_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  properties?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  properties_exists?: InputMaybe<Scalars['Boolean']>
  properties_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  properties_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  role?: InputMaybe<Scalars['String']>
  role_exists?: InputMaybe<Scalars['Boolean']>
  role_gt?: InputMaybe<Scalars['String']>
  role_gte?: InputMaybe<Scalars['String']>
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  role_lt?: InputMaybe<Scalars['String']>
  role_lte?: InputMaybe<Scalars['String']>
  role_ne?: InputMaybe<Scalars['String']>
  role_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  stage?: InputMaybe<Scalars['String']>
  stage_exists?: InputMaybe<Scalars['Boolean']>
  stage_gt?: InputMaybe<Scalars['String']>
  stage_gte?: InputMaybe<Scalars['String']>
  stage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  stage_lt?: InputMaybe<Scalars['String']>
  stage_lte?: InputMaybe<Scalars['String']>
  stage_ne?: InputMaybe<Scalars['String']>
  stage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum OwnerSortByInput {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  StageAsc = 'STAGE_ASC',
  StageDesc = 'STAGE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type OwnerUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>
  _id_unset?: InputMaybe<Scalars['Boolean']>
  address?: InputMaybe<Scalars['String']>
  address_unset?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  email_unset?: InputMaybe<Scalars['Boolean']>
  firstName?: InputMaybe<Scalars['String']>
  firstName_unset?: InputMaybe<Scalars['Boolean']>
  lastName?: InputMaybe<Scalars['String']>
  lastName_unset?: InputMaybe<Scalars['Boolean']>
  phone?: InputMaybe<Scalars['String']>
  phone_unset?: InputMaybe<Scalars['Boolean']>
  properties?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  properties_unset?: InputMaybe<Scalars['Boolean']>
  role?: InputMaybe<Scalars['String']>
  role_unset?: InputMaybe<Scalars['Boolean']>
  stage?: InputMaybe<Scalars['String']>
  stage_unset?: InputMaybe<Scalars['Boolean']>
}

export type Query = {
  __typename?: 'Query'
  active?: Maybe<Active>
  actives: Array<Maybe<Active>>
  cleaner?: Maybe<Cleaner>
  cleaners: Array<Maybe<Cleaner>>
  owner?: Maybe<Owner>
  owners: Array<Maybe<Owner>>
  vendor?: Maybe<Vendor>
  vendors: Array<Maybe<Vendor>>
}

export type QueryActiveArgs = {
  query?: InputMaybe<ActiveQueryInput>
}

export type QueryActivesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<ActiveQueryInput>
  sortBy?: InputMaybe<ActiveSortByInput>
}

export type QueryCleanerArgs = {
  query?: InputMaybe<CleanerQueryInput>
}

export type QueryCleanersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<CleanerQueryInput>
  sortBy?: InputMaybe<CleanerSortByInput>
}

export type QueryOwnerArgs = {
  query?: InputMaybe<OwnerQueryInput>
}

export type QueryOwnersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<OwnerQueryInput>
  sortBy?: InputMaybe<OwnerSortByInput>
}

export type QueryVendorArgs = {
  query?: InputMaybe<VendorQueryInput>
}

export type QueryVendorsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<VendorQueryInput>
  sortBy?: InputMaybe<VendorSortByInput>
}

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload'
  matchedCount: Scalars['Int']
  modifiedCount: Scalars['Int']
}

export type Vendor = {
  __typename?: 'Vendor'
  _id?: Maybe<Scalars['ObjectId']>
  email?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  projects?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  type?: Maybe<Scalars['String']>
}

export type VendorInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  projects?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  type?: InputMaybe<Scalars['String']>
}

export type VendorQueryInput = {
  AND?: InputMaybe<Array<VendorQueryInput>>
  OR?: InputMaybe<Array<VendorQueryInput>>
  _id?: InputMaybe<Scalars['ObjectId']>
  _id_exists?: InputMaybe<Scalars['Boolean']>
  _id_gt?: InputMaybe<Scalars['ObjectId']>
  _id_gte?: InputMaybe<Scalars['ObjectId']>
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  _id_lt?: InputMaybe<Scalars['ObjectId']>
  _id_lte?: InputMaybe<Scalars['ObjectId']>
  _id_ne?: InputMaybe<Scalars['ObjectId']>
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  email?: InputMaybe<Scalars['String']>
  email_exists?: InputMaybe<Scalars['Boolean']>
  email_gt?: InputMaybe<Scalars['String']>
  email_gte?: InputMaybe<Scalars['String']>
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  email_lt?: InputMaybe<Scalars['String']>
  email_lte?: InputMaybe<Scalars['String']>
  email_ne?: InputMaybe<Scalars['String']>
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name?: InputMaybe<Scalars['String']>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name_gt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_lt?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_ne?: InputMaybe<Scalars['String']>
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  phone?: InputMaybe<Scalars['String']>
  phone_exists?: InputMaybe<Scalars['Boolean']>
  phone_gt?: InputMaybe<Scalars['String']>
  phone_gte?: InputMaybe<Scalars['String']>
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  phone_lt?: InputMaybe<Scalars['String']>
  phone_lte?: InputMaybe<Scalars['String']>
  phone_ne?: InputMaybe<Scalars['String']>
  phone_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  projects?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  projects_exists?: InputMaybe<Scalars['Boolean']>
  projects_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  projects_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  type?: InputMaybe<Scalars['String']>
  type_exists?: InputMaybe<Scalars['Boolean']>
  type_gt?: InputMaybe<Scalars['String']>
  type_gte?: InputMaybe<Scalars['String']>
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  type_lt?: InputMaybe<Scalars['String']>
  type_lte?: InputMaybe<Scalars['String']>
  type_ne?: InputMaybe<Scalars['String']>
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum VendorSortByInput {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type VendorUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>
  _id_unset?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  email_unset?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_unset?: InputMaybe<Scalars['Boolean']>
  phone?: InputMaybe<Scalars['String']>
  phone_unset?: InputMaybe<Scalars['Boolean']>
  projects?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  projects_unset?: InputMaybe<Scalars['Boolean']>
  type?: InputMaybe<Scalars['String']>
  type_unset?: InputMaybe<Scalars['Boolean']>
}
export default {
  __schema: {
    queryType: {
      name: 'Query',
    },
    mutationType: {
      name: 'Mutation',
    },
    subscriptionType: null,
    types: [
      {
        kind: 'OBJECT',
        name: 'Active',
        fields: [
          {
            name: '_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address',
            type: {
              kind: 'OBJECT',
              name: 'ActiveAddress',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'bookings',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'cleaner',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'cleanings',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'details',
            type: {
              kind: 'OBJECT',
              name: 'ActiveDetail',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'owner',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'projects',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'stage',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ActiveAddress',
        fields: [
          {
            name: 'city',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'display',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'state',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'street',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'zip',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ActiveDetail',
        fields: [
          {
            name: 'bathrooms',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'bedrooms',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'quests',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'sqft',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Cleaner',
        fields: [
          {
            name: '_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'company',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'properties',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'website',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteManyPayload',
        fields: [
          {
            name: 'deletedCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'InsertManyPayload',
        fields: [
          {
            name: 'insertedIds',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Mutation',
        fields: [
          {
            name: 'deleteManyActives',
            type: {
              kind: 'OBJECT',
              name: 'DeleteManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'deleteManyCleaners',
            type: {
              kind: 'OBJECT',
              name: 'DeleteManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'deleteManyOwners',
            type: {
              kind: 'OBJECT',
              name: 'DeleteManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'deleteManyVendors',
            type: {
              kind: 'OBJECT',
              name: 'DeleteManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'deleteOneActive',
            type: {
              kind: 'OBJECT',
              name: 'Active',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteOneCleaner',
            type: {
              kind: 'OBJECT',
              name: 'Cleaner',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteOneOwner',
            type: {
              kind: 'OBJECT',
              name: 'Owner',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteOneVendor',
            type: {
              kind: 'OBJECT',
              name: 'Vendor',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'insertManyActives',
            type: {
              kind: 'OBJECT',
              name: 'InsertManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'insertManyCleaners',
            type: {
              kind: 'OBJECT',
              name: 'InsertManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'insertManyOwners',
            type: {
              kind: 'OBJECT',
              name: 'InsertManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'insertManyVendors',
            type: {
              kind: 'OBJECT',
              name: 'InsertManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'insertOneActive',
            type: {
              kind: 'OBJECT',
              name: 'Active',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'insertOneCleaner',
            type: {
              kind: 'OBJECT',
              name: 'Cleaner',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'insertOneOwner',
            type: {
              kind: 'OBJECT',
              name: 'Owner',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'insertOneVendor',
            type: {
              kind: 'OBJECT',
              name: 'Vendor',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'replaceOneActive',
            type: {
              kind: 'OBJECT',
              name: 'Active',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'replaceOneCleaner',
            type: {
              kind: 'OBJECT',
              name: 'Cleaner',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'replaceOneOwner',
            type: {
              kind: 'OBJECT',
              name: 'Owner',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'replaceOneVendor',
            type: {
              kind: 'OBJECT',
              name: 'Vendor',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'updateManyActives',
            type: {
              kind: 'OBJECT',
              name: 'UpdateManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'set',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateManyCleaners',
            type: {
              kind: 'OBJECT',
              name: 'UpdateManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'set',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateManyOwners',
            type: {
              kind: 'OBJECT',
              name: 'UpdateManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'set',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateManyVendors',
            type: {
              kind: 'OBJECT',
              name: 'UpdateManyPayload',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'set',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateOneActive',
            type: {
              kind: 'OBJECT',
              name: 'Active',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'set',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateOneCleaner',
            type: {
              kind: 'OBJECT',
              name: 'Cleaner',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'set',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateOneOwner',
            type: {
              kind: 'OBJECT',
              name: 'Owner',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'set',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateOneVendor',
            type: {
              kind: 'OBJECT',
              name: 'Vendor',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'set',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'upsertOneActive',
            type: {
              kind: 'OBJECT',
              name: 'Active',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'upsertOneCleaner',
            type: {
              kind: 'OBJECT',
              name: 'Cleaner',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'upsertOneOwner',
            type: {
              kind: 'OBJECT',
              name: 'Owner',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'upsertOneVendor',
            type: {
              kind: 'OBJECT',
              name: 'Vendor',
              ofType: null,
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Owner',
        fields: [
          {
            name: '_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'firstName',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'lastName',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'properties',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'role',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'stage',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        fields: [
          {
            name: 'active',
            type: {
              kind: 'OBJECT',
              name: 'Active',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'actives',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'OBJECT',
                  name: 'Active',
                  ofType: null,
                },
              },
            },
            args: [
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sortBy',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'cleaner',
            type: {
              kind: 'OBJECT',
              name: 'Cleaner',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'cleaners',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'OBJECT',
                  name: 'Cleaner',
                  ofType: null,
                },
              },
            },
            args: [
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sortBy',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'owner',
            type: {
              kind: 'OBJECT',
              name: 'Owner',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'owners',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'OBJECT',
                  name: 'Owner',
                  ofType: null,
                },
              },
            },
            args: [
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sortBy',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'vendor',
            type: {
              kind: 'OBJECT',
              name: 'Vendor',
              ofType: null,
            },
            args: [
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'vendors',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'OBJECT',
                  name: 'Vendor',
                  ofType: null,
                },
              },
            },
            args: [
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'sortBy',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateManyPayload',
        fields: [
          {
            name: 'matchedCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'modifiedCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Vendor',
        fields: [
          {
            name: '_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'projects',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'type',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Any',
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery
export type OwnersQueryVariables = Exact<{ [key: string]: never }>

export type OwnersQuery = { __typename?: 'Query'; owners: Array<{ __typename?: 'Owner'; firstName?: string | null | undefined; lastName?: string | null | undefined } | null | undefined> }

export const OwnersDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'Owners' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'owners' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }] } }] } }] } as unknown as DocumentNode<OwnersQuery, OwnersQueryVariables>
