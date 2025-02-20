import gql from 'graphql-tag'
import * as Urql from '@urql/vue'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  ObjectId: any
}

export type Airdna = {
  path?: InputMaybe<Scalars['String']>
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

export type DefaultPayload = {
  __typename?: 'DefaultPayload'
  status: Scalars['String']
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
  deleteManyCleaners?: Maybe<DeleteManyPayload>
  deleteManyOwners?: Maybe<DeleteManyPayload>
  deleteManyProperties?: Maybe<DeleteManyPayload>
  deleteManyVendors?: Maybe<DeleteManyPayload>
  deleteOneCleaner?: Maybe<Cleaner>
  deleteOneOwner?: Maybe<Owner>
  deleteOneProperty?: Maybe<Property>
  deleteOneVendor?: Maybe<Vendor>
  insertManyCleaners?: Maybe<InsertManyPayload>
  insertManyOwners?: Maybe<InsertManyPayload>
  insertManyProperties?: Maybe<InsertManyPayload>
  insertManyVendors?: Maybe<InsertManyPayload>
  insertOneCleaner?: Maybe<Cleaner>
  insertOneOwner?: Maybe<Owner>
  insertOneProperty?: Maybe<Property>
  insertOneVendor?: Maybe<Vendor>
  replaceOneCleaner?: Maybe<Cleaner>
  replaceOneOwner?: Maybe<Owner>
  replaceOneProperty?: Maybe<Property>
  replaceOneVendor?: Maybe<Vendor>
  updateManyCleaners?: Maybe<UpdateManyPayload>
  updateManyOwners?: Maybe<UpdateManyPayload>
  updateManyProperties?: Maybe<UpdateManyPayload>
  updateManyVendors?: Maybe<UpdateManyPayload>
  updateOneCleaner?: Maybe<Cleaner>
  updateOneOwner?: Maybe<Owner>
  updateOneProperty?: Maybe<Property>
  updateOneVendor?: Maybe<Vendor>
  upsertOneCleaner?: Maybe<Cleaner>
  upsertOneOwner?: Maybe<Owner>
  upsertOneProperty?: Maybe<Property>
  upsertOneVendor?: Maybe<Vendor>
}

export type MutationDeleteManyCleanersArgs = {
  query?: InputMaybe<CleanerQueryInput>
}

export type MutationDeleteManyOwnersArgs = {
  query?: InputMaybe<OwnerQueryInput>
}

export type MutationDeleteManyPropertiesArgs = {
  query?: InputMaybe<PropertyQueryInput>
}

export type MutationDeleteManyVendorsArgs = {
  query?: InputMaybe<VendorQueryInput>
}

export type MutationDeleteOneCleanerArgs = {
  query: CleanerQueryInput
}

export type MutationDeleteOneOwnerArgs = {
  query: OwnerQueryInput
}

export type MutationDeleteOnePropertyArgs = {
  query: PropertyQueryInput
}

export type MutationDeleteOneVendorArgs = {
  query: VendorQueryInput
}

export type MutationInsertManyCleanersArgs = {
  data: Array<CleanerInsertInput>
}

export type MutationInsertManyOwnersArgs = {
  data: Array<OwnerInsertInput>
}

export type MutationInsertManyPropertiesArgs = {
  data: Array<PropertyInsertInput>
}

export type MutationInsertManyVendorsArgs = {
  data: Array<VendorInsertInput>
}

export type MutationInsertOneCleanerArgs = {
  data: CleanerInsertInput
}

export type MutationInsertOneOwnerArgs = {
  data: OwnerInsertInput
}

export type MutationInsertOnePropertyArgs = {
  data: PropertyInsertInput
}

export type MutationInsertOneVendorArgs = {
  data: VendorInsertInput
}

export type MutationReplaceOneCleanerArgs = {
  data: CleanerInsertInput
  query?: InputMaybe<CleanerQueryInput>
}

export type MutationReplaceOneOwnerArgs = {
  data: OwnerInsertInput
  query?: InputMaybe<OwnerQueryInput>
}

export type MutationReplaceOnePropertyArgs = {
  data: PropertyInsertInput
  query?: InputMaybe<PropertyQueryInput>
}

export type MutationReplaceOneVendorArgs = {
  data: VendorInsertInput
  query?: InputMaybe<VendorQueryInput>
}

export type MutationUpdateManyCleanersArgs = {
  query?: InputMaybe<CleanerQueryInput>
  set: CleanerUpdateInput
}

export type MutationUpdateManyOwnersArgs = {
  query?: InputMaybe<OwnerQueryInput>
  set: OwnerUpdateInput
}

export type MutationUpdateManyPropertiesArgs = {
  query?: InputMaybe<PropertyQueryInput>
  set: PropertyUpdateInput
}

export type MutationUpdateManyVendorsArgs = {
  query?: InputMaybe<VendorQueryInput>
  set: VendorUpdateInput
}

export type MutationUpdateOneCleanerArgs = {
  query?: InputMaybe<CleanerQueryInput>
  set: CleanerUpdateInput
}

export type MutationUpdateOneOwnerArgs = {
  query?: InputMaybe<OwnerQueryInput>
  set: OwnerUpdateInput
}

export type MutationUpdateOnePropertyArgs = {
  query?: InputMaybe<PropertyQueryInput>
  set: PropertyUpdateInput
}

export type MutationUpdateOneVendorArgs = {
  query?: InputMaybe<VendorQueryInput>
  set: VendorUpdateInput
}

export type MutationUpsertOneCleanerArgs = {
  data: CleanerInsertInput
  query?: InputMaybe<CleanerQueryInput>
}

export type MutationUpsertOneOwnerArgs = {
  data: OwnerInsertInput
  query?: InputMaybe<OwnerQueryInput>
}

export type MutationUpsertOnePropertyArgs = {
  data: PropertyInsertInput
  query?: InputMaybe<PropertyQueryInput>
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
  properties?: Maybe<Array<Maybe<Property>>>
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
  properties?: InputMaybe<OwnerPropertiesRelationInput>
  role?: InputMaybe<Scalars['String']>
  stage?: InputMaybe<Scalars['String']>
}

export type OwnerPropertiesRelationInput = {
  create?: InputMaybe<Array<InputMaybe<PropertyInsertInput>>>
  link?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
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
  properties?: InputMaybe<Array<InputMaybe<PropertyQueryInput>>>
  properties_exists?: InputMaybe<Scalars['Boolean']>
  properties_in?: InputMaybe<Array<InputMaybe<PropertyQueryInput>>>
  properties_nin?: InputMaybe<Array<InputMaybe<PropertyQueryInput>>>
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
  properties?: InputMaybe<OwnerPropertiesRelationInput>
  properties_unset?: InputMaybe<Scalars['Boolean']>
  role?: InputMaybe<Scalars['String']>
  role_unset?: InputMaybe<Scalars['Boolean']>
  stage?: InputMaybe<Scalars['String']>
  stage_unset?: InputMaybe<Scalars['Boolean']>
}

export type Property = {
  __typename?: 'Property'
  _id?: Maybe<Scalars['ObjectId']>
  address?: Maybe<PropertyAddress>
  bookings?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  cleaner?: Maybe<Array<Maybe<Cleaner>>>
  cleanings?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  details?: Maybe<PropertyDetail>
  events?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  management?: Maybe<PropertyManagement>
  name?: Maybe<Scalars['String']>
  owner?: Maybe<Array<Maybe<Owner>>>
  pms?: Maybe<Scalars['ObjectId']>
  status?: Maybe<Scalars['String']>
  todos?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
}

export type PropertyAddress = {
  __typename?: 'PropertyAddress'
  city?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  zip?: Maybe<Scalars['String']>
}

export type PropertyAddressInsertInput = {
  city?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  street?: InputMaybe<Scalars['String']>
  zip?: InputMaybe<Scalars['String']>
}

export type PropertyAddressQueryInput = {
  AND?: InputMaybe<Array<PropertyAddressQueryInput>>
  OR?: InputMaybe<Array<PropertyAddressQueryInput>>
  city?: InputMaybe<Scalars['String']>
  city_exists?: InputMaybe<Scalars['Boolean']>
  city_gt?: InputMaybe<Scalars['String']>
  city_gte?: InputMaybe<Scalars['String']>
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  city_lt?: InputMaybe<Scalars['String']>
  city_lte?: InputMaybe<Scalars['String']>
  city_ne?: InputMaybe<Scalars['String']>
  city_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
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

export type PropertyAddressUpdateInput = {
  city?: InputMaybe<Scalars['String']>
  city_unset?: InputMaybe<Scalars['Boolean']>
  state?: InputMaybe<Scalars['String']>
  state_unset?: InputMaybe<Scalars['Boolean']>
  street?: InputMaybe<Scalars['String']>
  street_unset?: InputMaybe<Scalars['Boolean']>
  zip?: InputMaybe<Scalars['String']>
  zip_unset?: InputMaybe<Scalars['Boolean']>
}

export type PropertyCleanerRelationInput = {
  create?: InputMaybe<Array<InputMaybe<CleanerInsertInput>>>
  link?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
}

export type PropertyDetail = {
  __typename?: 'PropertyDetail'
  HOT?: Maybe<Scalars['String']>
  bathrooms?: Maybe<Scalars['String']>
  bedrooms?: Maybe<Scalars['String']>
  entry?: Maybe<Scalars['String']>
  guests?: Maybe<Scalars['String']>
}

export type PropertyDetailInsertInput = {
  HOT?: InputMaybe<Scalars['String']>
  bathrooms?: InputMaybe<Scalars['String']>
  bedrooms?: InputMaybe<Scalars['String']>
  entry?: InputMaybe<Scalars['String']>
  guests?: InputMaybe<Scalars['String']>
}

export type PropertyDetailQueryInput = {
  AND?: InputMaybe<Array<PropertyDetailQueryInput>>
  HOT?: InputMaybe<Scalars['String']>
  HOT_exists?: InputMaybe<Scalars['Boolean']>
  HOT_gt?: InputMaybe<Scalars['String']>
  HOT_gte?: InputMaybe<Scalars['String']>
  HOT_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  HOT_lt?: InputMaybe<Scalars['String']>
  HOT_lte?: InputMaybe<Scalars['String']>
  HOT_ne?: InputMaybe<Scalars['String']>
  HOT_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  OR?: InputMaybe<Array<PropertyDetailQueryInput>>
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
  entry?: InputMaybe<Scalars['String']>
  entry_exists?: InputMaybe<Scalars['Boolean']>
  entry_gt?: InputMaybe<Scalars['String']>
  entry_gte?: InputMaybe<Scalars['String']>
  entry_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  entry_lt?: InputMaybe<Scalars['String']>
  entry_lte?: InputMaybe<Scalars['String']>
  entry_ne?: InputMaybe<Scalars['String']>
  entry_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  guests?: InputMaybe<Scalars['String']>
  guests_exists?: InputMaybe<Scalars['Boolean']>
  guests_gt?: InputMaybe<Scalars['String']>
  guests_gte?: InputMaybe<Scalars['String']>
  guests_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  guests_lt?: InputMaybe<Scalars['String']>
  guests_lte?: InputMaybe<Scalars['String']>
  guests_ne?: InputMaybe<Scalars['String']>
  guests_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type PropertyDetailUpdateInput = {
  HOT?: InputMaybe<Scalars['String']>
  HOT_unset?: InputMaybe<Scalars['Boolean']>
  bathrooms?: InputMaybe<Scalars['String']>
  bathrooms_unset?: InputMaybe<Scalars['Boolean']>
  bedrooms?: InputMaybe<Scalars['String']>
  bedrooms_unset?: InputMaybe<Scalars['Boolean']>
  entry?: InputMaybe<Scalars['String']>
  entry_unset?: InputMaybe<Scalars['Boolean']>
  guests?: InputMaybe<Scalars['String']>
  guests_unset?: InputMaybe<Scalars['Boolean']>
}

export type PropertyInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>
  address?: InputMaybe<PropertyAddressInsertInput>
  bookings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleaner?: InputMaybe<PropertyCleanerRelationInput>
  cleanings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  details?: InputMaybe<PropertyDetailInsertInput>
  events?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  management?: InputMaybe<PropertyManagementInsertInput>
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<PropertyOwnerRelationInput>
  pms?: InputMaybe<Scalars['ObjectId']>
  status?: InputMaybe<Scalars['String']>
  todos?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
}

export type PropertyManagement = {
  __typename?: 'PropertyManagement'
  income?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['DateTime']>
}

export type PropertyManagementInsertInput = {
  income?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['DateTime']>
}

export type PropertyManagementQueryInput = {
  AND?: InputMaybe<Array<PropertyManagementQueryInput>>
  OR?: InputMaybe<Array<PropertyManagementQueryInput>>
  income?: InputMaybe<Scalars['String']>
  income_exists?: InputMaybe<Scalars['Boolean']>
  income_gt?: InputMaybe<Scalars['String']>
  income_gte?: InputMaybe<Scalars['String']>
  income_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  income_lt?: InputMaybe<Scalars['String']>
  income_lte?: InputMaybe<Scalars['String']>
  income_ne?: InputMaybe<Scalars['String']>
  income_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  start?: InputMaybe<Scalars['DateTime']>
  start_exists?: InputMaybe<Scalars['Boolean']>
  start_gt?: InputMaybe<Scalars['DateTime']>
  start_gte?: InputMaybe<Scalars['DateTime']>
  start_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  start_lt?: InputMaybe<Scalars['DateTime']>
  start_lte?: InputMaybe<Scalars['DateTime']>
  start_ne?: InputMaybe<Scalars['DateTime']>
  start_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

export type PropertyManagementUpdateInput = {
  income?: InputMaybe<Scalars['String']>
  income_unset?: InputMaybe<Scalars['Boolean']>
  start?: InputMaybe<Scalars['DateTime']>
  start_unset?: InputMaybe<Scalars['Boolean']>
}

export type PropertyOwnerRelationInput = {
  create?: InputMaybe<Array<InputMaybe<OwnerInsertInput>>>
  link?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
}

export type PropertyQueryInput = {
  AND?: InputMaybe<Array<PropertyQueryInput>>
  OR?: InputMaybe<Array<PropertyQueryInput>>
  _id?: InputMaybe<Scalars['ObjectId']>
  _id_exists?: InputMaybe<Scalars['Boolean']>
  _id_gt?: InputMaybe<Scalars['ObjectId']>
  _id_gte?: InputMaybe<Scalars['ObjectId']>
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  _id_lt?: InputMaybe<Scalars['ObjectId']>
  _id_lte?: InputMaybe<Scalars['ObjectId']>
  _id_ne?: InputMaybe<Scalars['ObjectId']>
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  address?: InputMaybe<PropertyAddressQueryInput>
  address_exists?: InputMaybe<Scalars['Boolean']>
  bookings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  bookings_exists?: InputMaybe<Scalars['Boolean']>
  bookings_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  bookings_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleaner?: InputMaybe<Array<InputMaybe<CleanerQueryInput>>>
  cleaner_exists?: InputMaybe<Scalars['Boolean']>
  cleaner_in?: InputMaybe<Array<InputMaybe<CleanerQueryInput>>>
  cleaner_nin?: InputMaybe<Array<InputMaybe<CleanerQueryInput>>>
  cleanings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleanings_exists?: InputMaybe<Scalars['Boolean']>
  cleanings_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleanings_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  details?: InputMaybe<PropertyDetailQueryInput>
  details_exists?: InputMaybe<Scalars['Boolean']>
  events?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  events_exists?: InputMaybe<Scalars['Boolean']>
  events_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  events_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  management?: InputMaybe<PropertyManagementQueryInput>
  management_exists?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name_gt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_lt?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_ne?: InputMaybe<Scalars['String']>
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  owner?: InputMaybe<Array<InputMaybe<OwnerQueryInput>>>
  owner_exists?: InputMaybe<Scalars['Boolean']>
  owner_in?: InputMaybe<Array<InputMaybe<OwnerQueryInput>>>
  owner_nin?: InputMaybe<Array<InputMaybe<OwnerQueryInput>>>
  pms?: InputMaybe<Scalars['ObjectId']>
  pms_exists?: InputMaybe<Scalars['Boolean']>
  pms_gt?: InputMaybe<Scalars['ObjectId']>
  pms_gte?: InputMaybe<Scalars['ObjectId']>
  pms_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  pms_lt?: InputMaybe<Scalars['ObjectId']>
  pms_lte?: InputMaybe<Scalars['ObjectId']>
  pms_ne?: InputMaybe<Scalars['ObjectId']>
  pms_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  status?: InputMaybe<Scalars['String']>
  status_exists?: InputMaybe<Scalars['Boolean']>
  status_gt?: InputMaybe<Scalars['String']>
  status_gte?: InputMaybe<Scalars['String']>
  status_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  status_lt?: InputMaybe<Scalars['String']>
  status_lte?: InputMaybe<Scalars['String']>
  status_ne?: InputMaybe<Scalars['String']>
  status_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  todos?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  todos_exists?: InputMaybe<Scalars['Boolean']>
  todos_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  todos_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
}

export enum PropertySortByInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PmsAsc = 'PMS_ASC',
  PmsDesc = 'PMS_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type PropertyUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>
  _id_unset?: InputMaybe<Scalars['Boolean']>
  address?: InputMaybe<PropertyAddressUpdateInput>
  address_unset?: InputMaybe<Scalars['Boolean']>
  bookings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  bookings_unset?: InputMaybe<Scalars['Boolean']>
  cleaner?: InputMaybe<PropertyCleanerRelationInput>
  cleaner_unset?: InputMaybe<Scalars['Boolean']>
  cleanings?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  cleanings_unset?: InputMaybe<Scalars['Boolean']>
  details?: InputMaybe<PropertyDetailUpdateInput>
  details_unset?: InputMaybe<Scalars['Boolean']>
  events?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  events_unset?: InputMaybe<Scalars['Boolean']>
  management?: InputMaybe<PropertyManagementUpdateInput>
  management_unset?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_unset?: InputMaybe<Scalars['Boolean']>
  owner?: InputMaybe<PropertyOwnerRelationInput>
  owner_unset?: InputMaybe<Scalars['Boolean']>
  pms?: InputMaybe<Scalars['ObjectId']>
  pms_unset?: InputMaybe<Scalars['Boolean']>
  status?: InputMaybe<Scalars['String']>
  status_unset?: InputMaybe<Scalars['Boolean']>
  todos?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>
  todos_unset?: InputMaybe<Scalars['Boolean']>
}

export type Query = {
  __typename?: 'Query'
  airdna?: Maybe<DefaultPayload>
  cleaner?: Maybe<Cleaner>
  cleaners: Array<Maybe<Cleaner>>
  owner?: Maybe<Owner>
  owners: Array<Maybe<Owner>>
  properties: Array<Maybe<Property>>
  property?: Maybe<Property>
  vendor?: Maybe<Vendor>
  vendors: Array<Maybe<Vendor>>
}

export type QueryAirdnaArgs = {
  input?: InputMaybe<Airdna>
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

export type QueryPropertiesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<PropertyQueryInput>
  sortBy?: InputMaybe<PropertySortByInput>
}

export type QueryPropertyArgs = {
  query?: InputMaybe<PropertyQueryInput>
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

export type PropertiesQueryVariables = Exact<{ [key: string]: never }>

export type PropertiesQuery = { __typename?: 'Query'; properties: Array<{ __typename?: 'Property'; _id?: any | null | undefined; name?: string | null | undefined; status?: string | null | undefined; owner?: Array<{ __typename?: 'Owner'; _id?: any | null | undefined; firstName?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> }

export type PropertyQueryVariables = Exact<{
  _id?: InputMaybe<Scalars['ObjectId']>
}>

export type PropertyQuery = { __typename?: 'Query'; property?: { __typename?: 'Property'; _id?: any | null | undefined; name?: string | null | undefined; status?: string | null | undefined; owner?: Array<{ __typename?: 'Owner'; _id?: any | null | undefined; firstName?: string | null | undefined; lastName?: string | null | undefined } | null | undefined> | null | undefined; address?: { __typename?: 'PropertyAddress'; street?: string | null | undefined; city?: string | null | undefined; state?: string | null | undefined; zip?: string | null | undefined } | null | undefined } | null | undefined }

export type PeopleQueryVariables = Exact<{ [key: string]: never }>

export type PeopleQuery = { __typename?: 'Query'; owners: Array<{ __typename?: 'Owner'; _id?: any | null | undefined; firstName?: string | null | undefined; properties?: Array<{ __typename?: 'Property'; name?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined>; cleaners: Array<{ __typename?: 'Cleaner'; _id?: any | null | undefined; company?: string | null | undefined } | null | undefined>; vendors: Array<{ __typename?: 'Vendor'; _id?: any | null | undefined; name?: string | null | undefined } | null | undefined> }

export type OwnersQueryVariables = Exact<{
  _id?: InputMaybe<Scalars['ObjectId']>
}>

export type OwnersQuery = { __typename?: 'Query'; owners: Array<{ __typename?: 'Owner'; _id?: any | null | undefined; firstName?: string | null | undefined; lastName?: string | null | undefined } | null | undefined> }

export type VendorsQueryVariables = Exact<{ [key: string]: never }>

export type VendorsQuery = { __typename?: 'Query'; vendors: Array<{ __typename?: 'Vendor'; _id?: any | null | undefined; name?: string | null | undefined } | null | undefined> }

export type CleanersQueryVariables = Exact<{ [key: string]: never }>

export type CleanersQuery = { __typename?: 'Query'; cleaners: Array<{ __typename?: 'Cleaner'; _id?: any | null | undefined; company?: string | null | undefined } | null | undefined> }

export type AddPropertyMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
  street?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  zip?: InputMaybe<Scalars['String']>
  bedrooms?: InputMaybe<Scalars['String']>
  bathrooms?: InputMaybe<Scalars['String']>
  guests?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<Scalars['ObjectId']>
  cleaner?: InputMaybe<Scalars['ObjectId']>
}>

export type AddPropertyMutation = { __typename?: 'Mutation'; insertOneProperty?: { __typename?: 'Property'; _id?: any | null | undefined; name?: string | null | undefined; address?: { __typename?: 'PropertyAddress'; street?: string | null | undefined; city?: string | null | undefined; state?: string | null | undefined; zip?: string | null | undefined } | null | undefined; details?: { __typename?: 'PropertyDetail'; bedrooms?: string | null | undefined; bathrooms?: string | null | undefined; guests?: string | null | undefined } | null | undefined } | null | undefined }

export type LinkOwnerMutationVariables = Exact<{
  owner?: InputMaybe<Scalars['ObjectId']>
  property?: InputMaybe<Scalars['ObjectId']>
}>

export type LinkOwnerMutation = { __typename?: 'Mutation'; updateOneOwner?: { __typename?: 'Owner'; _id?: any | null | undefined; address?: string | null | undefined; email?: string | null | undefined; firstName?: string | null | undefined; lastName?: string | null | undefined; phone?: string | null | undefined; role?: string | null | undefined; stage?: string | null | undefined } | null | undefined }

export const PropertiesDocument = gql`
    query Properties {
  properties {
    _id
    name
    status
    owner {
      _id
      firstName
    }
  }
}
    `

export function usePropertiesQuery(options: Omit<Urql.UseQueryArgs<never, PropertiesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PropertiesQuery>({ query: PropertiesDocument, ...options })
}
export const PropertyDocument = gql`
    query Property($_id: ObjectId) {
  property(query: {_id: $_id}) {
    _id
    name
    status
    owner {
      _id
      firstName
      lastName
    }
    address {
      street
      city
      state
      zip
    }
  }
}
    `

export function usePropertyQuery(options: Omit<Urql.UseQueryArgs<never, PropertyQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PropertyQuery>({ query: PropertyDocument, ...options })
}
export const PeopleDocument = gql`
    query People {
  owners {
    _id
    firstName
    properties {
      name
    }
  }
  cleaners {
    _id
    company
  }
  vendors {
    _id
    name
  }
}
    `

export function usePeopleQuery(options: Omit<Urql.UseQueryArgs<never, PeopleQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PeopleQuery>({ query: PeopleDocument, ...options })
}
export const OwnersDocument = gql`
    query Owners($_id: ObjectId) {
  owners(query: {_id: $_id}) {
    _id
    firstName
    lastName
  }
}
    `

export function useOwnersQuery(options: Omit<Urql.UseQueryArgs<never, OwnersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OwnersQuery>({ query: OwnersDocument, ...options })
}
export const VendorsDocument = gql`
    query Vendors {
  vendors {
    _id
    name
  }
}
    `

export function useVendorsQuery(options: Omit<Urql.UseQueryArgs<never, VendorsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<VendorsQuery>({ query: VendorsDocument, ...options })
}
export const CleanersDocument = gql`
    query Cleaners {
  cleaners {
    _id
    company
  }
}
    `

export function useCleanersQuery(options: Omit<Urql.UseQueryArgs<never, CleanersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CleanersQuery>({ query: CleanersDocument, ...options })
}
export const AddPropertyDocument = gql`
    mutation addProperty($name: String, $status: String, $street: String, $city: String, $state: String, $zip: String, $bedrooms: String, $bathrooms: String, $guests: String, $owner: ObjectId, $cleaner: ObjectId) {
  insertOneProperty(
    data: {name: $name, status: $status, address: {street: $street, city: $city, state: $state, zip: $zip}, details: {bedrooms: $bedrooms, bathrooms: $bathrooms, guests: $guests}, owner: {link: [$owner]}, cleaner: {link: [$cleaner]}}
  ) {
    _id
    name
    address {
      street
      city
      state
      zip
    }
    details {
      bedrooms
      bathrooms
      guests
    }
  }
}
    `

export function useAddPropertyMutation() {
  return Urql.useMutation<AddPropertyMutation, AddPropertyMutationVariables>(AddPropertyDocument)
}
export const LinkOwnerDocument = gql`
    mutation LinkOwner($owner: ObjectId, $property: ObjectId) {
  updateOneOwner(query: {_id: $owner}, set: {properties: {link: [$property]}}) {
    _id
    address
    email
    firstName
    lastName
    phone
    role
    stage
  }
}
    `

export function useLinkOwnerMutation() {
  return Urql.useMutation<LinkOwnerMutation, LinkOwnerMutationVariables>(LinkOwnerDocument)
}
