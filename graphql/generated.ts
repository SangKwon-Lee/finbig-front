import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: "AdminUser";
  firstname: Scalars["String"];
  id: Scalars["ID"];
  lastname: Scalars["String"];
  username?: Maybe<Scalars["String"]>;
};

export type EmailAuth = {
  __typename?: "EmailAuth";
  code?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isAuth?: Maybe<Scalars["Boolean"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
};

export type EmailAuthAggregator = {
  __typename?: "EmailAuthAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type EmailAuthConnection = {
  __typename?: "EmailAuthConnection";
  aggregate?: Maybe<EmailAuthAggregator>;
  groupBy?: Maybe<EmailAuthGroupBy>;
  values?: Maybe<Array<Maybe<EmailAuth>>>;
};

export type EmailAuthConnectionCode = {
  __typename?: "EmailAuthConnectionCode";
  connection?: Maybe<EmailAuthConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type EmailAuthConnectionCreated_At = {
  __typename?: "EmailAuthConnectionCreated_at";
  connection?: Maybe<EmailAuthConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type EmailAuthConnectionEmail = {
  __typename?: "EmailAuthConnectionEmail";
  connection?: Maybe<EmailAuthConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type EmailAuthConnectionId = {
  __typename?: "EmailAuthConnectionId";
  connection?: Maybe<EmailAuthConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type EmailAuthConnectionIsAuth = {
  __typename?: "EmailAuthConnectionIsAuth";
  connection?: Maybe<EmailAuthConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type EmailAuthConnectionType = {
  __typename?: "EmailAuthConnectionType";
  connection?: Maybe<EmailAuthConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type EmailAuthConnectionUpdated_At = {
  __typename?: "EmailAuthConnectionUpdated_at";
  connection?: Maybe<EmailAuthConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type EmailAuthGroupBy = {
  __typename?: "EmailAuthGroupBy";
  code?: Maybe<Array<Maybe<EmailAuthConnectionCode>>>;
  created_at?: Maybe<Array<Maybe<EmailAuthConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<EmailAuthConnectionEmail>>>;
  id?: Maybe<Array<Maybe<EmailAuthConnectionId>>>;
  isAuth?: Maybe<Array<Maybe<EmailAuthConnectionIsAuth>>>;
  type?: Maybe<Array<Maybe<EmailAuthConnectionType>>>;
  updated_at?: Maybe<Array<Maybe<EmailAuthConnectionUpdated_At>>>;
};

export type EmailAuthInput = {
  code?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  email?: InputMaybe<Scalars["String"]>;
  isAuth?: InputMaybe<Scalars["Boolean"]>;
  type?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  ext?: InputMaybe<Scalars["String"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: InputMaybe<Scalars["Int"]>;
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  related?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  size: Scalars["Float"];
  updated_by?: InputMaybe<Scalars["ID"]>;
  url: Scalars["String"];
  width?: InputMaybe<Scalars["Int"]>;
};

export type Finbig = {
  __typename?: "Finbig";
  apiName?: Maybe<Scalars["String"]>;
  category?: Maybe<Scalars["String"]>;
  contents?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isBest?: Maybe<Scalars["Boolean"]>;
  isShow?: Maybe<Scalars["Boolean"]>;
  order?: Maybe<Scalars["Int"]>;
  period?: Maybe<Scalars["String"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  relationFinbigs?: Maybe<Array<Maybe<Finbig>>>;
  thumbnail?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  user?: Maybe<UsersPermissionsUser>;
  viewCount?: Maybe<Scalars["Long"]>;
};

export type FinbigRelationFinbigsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type FinbigAggregator = {
  __typename?: "FinbigAggregator";
  avg?: Maybe<FinbigAggregatorAvg>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<FinbigAggregatorMax>;
  min?: Maybe<FinbigAggregatorMin>;
  sum?: Maybe<FinbigAggregatorSum>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type FinbigAggregatorAvg = {
  __typename?: "FinbigAggregatorAvg";
  order?: Maybe<Scalars["Float"]>;
};

export type FinbigAggregatorMax = {
  __typename?: "FinbigAggregatorMax";
  order?: Maybe<Scalars["Float"]>;
};

export type FinbigAggregatorMin = {
  __typename?: "FinbigAggregatorMin";
  order?: Maybe<Scalars["Float"]>;
};

export type FinbigAggregatorSum = {
  __typename?: "FinbigAggregatorSum";
  order?: Maybe<Scalars["Float"]>;
};

export type FinbigConnection = {
  __typename?: "FinbigConnection";
  aggregate?: Maybe<FinbigAggregator>;
  groupBy?: Maybe<FinbigGroupBy>;
  values?: Maybe<Array<Maybe<Finbig>>>;
};

export type FinbigConnectionApiName = {
  __typename?: "FinbigConnectionApiName";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type FinbigConnectionCategory = {
  __typename?: "FinbigConnectionCategory";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type FinbigConnectionContents = {
  __typename?: "FinbigConnectionContents";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type FinbigConnectionCreated_At = {
  __typename?: "FinbigConnectionCreated_at";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type FinbigConnectionDescription = {
  __typename?: "FinbigConnectionDescription";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type FinbigConnectionId = {
  __typename?: "FinbigConnectionId";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type FinbigConnectionIsBest = {
  __typename?: "FinbigConnectionIsBest";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type FinbigConnectionIsShow = {
  __typename?: "FinbigConnectionIsShow";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type FinbigConnectionOrder = {
  __typename?: "FinbigConnectionOrder";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type FinbigConnectionPeriod = {
  __typename?: "FinbigConnectionPeriod";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type FinbigConnectionPublished_At = {
  __typename?: "FinbigConnectionPublished_at";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type FinbigConnectionThumbnail = {
  __typename?: "FinbigConnectionThumbnail";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type FinbigConnectionTitle = {
  __typename?: "FinbigConnectionTitle";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type FinbigConnectionType = {
  __typename?: "FinbigConnectionType";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type FinbigConnectionUpdated_At = {
  __typename?: "FinbigConnectionUpdated_at";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type FinbigConnectionUser = {
  __typename?: "FinbigConnectionUser";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type FinbigConnectionViewCount = {
  __typename?: "FinbigConnectionViewCount";
  connection?: Maybe<FinbigConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type FinbigGroupBy = {
  __typename?: "FinbigGroupBy";
  apiName?: Maybe<Array<Maybe<FinbigConnectionApiName>>>;
  category?: Maybe<Array<Maybe<FinbigConnectionCategory>>>;
  contents?: Maybe<Array<Maybe<FinbigConnectionContents>>>;
  created_at?: Maybe<Array<Maybe<FinbigConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<FinbigConnectionDescription>>>;
  id?: Maybe<Array<Maybe<FinbigConnectionId>>>;
  isBest?: Maybe<Array<Maybe<FinbigConnectionIsBest>>>;
  isShow?: Maybe<Array<Maybe<FinbigConnectionIsShow>>>;
  order?: Maybe<Array<Maybe<FinbigConnectionOrder>>>;
  period?: Maybe<Array<Maybe<FinbigConnectionPeriod>>>;
  published_at?: Maybe<Array<Maybe<FinbigConnectionPublished_At>>>;
  thumbnail?: Maybe<Array<Maybe<FinbigConnectionThumbnail>>>;
  title?: Maybe<Array<Maybe<FinbigConnectionTitle>>>;
  type?: Maybe<Array<Maybe<FinbigConnectionType>>>;
  updated_at?: Maybe<Array<Maybe<FinbigConnectionUpdated_At>>>;
  user?: Maybe<Array<Maybe<FinbigConnectionUser>>>;
  viewCount?: Maybe<Array<Maybe<FinbigConnectionViewCount>>>;
};

export type FinbigInput = {
  apiName?: InputMaybe<Scalars["String"]>;
  category?: InputMaybe<Scalars["String"]>;
  contents?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  isBest?: InputMaybe<Scalars["Boolean"]>;
  isShow?: InputMaybe<Scalars["Boolean"]>;
  order?: InputMaybe<Scalars["Int"]>;
  period?: InputMaybe<Scalars["String"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  relationFinbigs?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  thumbnail?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  user?: InputMaybe<Scalars["ID"]>;
  viewCount?: InputMaybe<Scalars["Long"]>;
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
};

export type InputId = {
  id: Scalars["ID"];
};

export type LocaleInput = {
  code?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type Morph =
  | EmailAuth
  | EmailAuthAggregator
  | EmailAuthConnection
  | EmailAuthConnectionCode
  | EmailAuthConnectionCreated_At
  | EmailAuthConnectionEmail
  | EmailAuthConnectionId
  | EmailAuthConnectionIsAuth
  | EmailAuthConnectionType
  | EmailAuthConnectionUpdated_At
  | EmailAuthGroupBy
  | Finbig
  | FinbigAggregator
  | FinbigAggregatorAvg
  | FinbigAggregatorMax
  | FinbigAggregatorMin
  | FinbigAggregatorSum
  | FinbigConnection
  | FinbigConnectionApiName
  | FinbigConnectionCategory
  | FinbigConnectionContents
  | FinbigConnectionCreated_At
  | FinbigConnectionDescription
  | FinbigConnectionId
  | FinbigConnectionIsBest
  | FinbigConnectionIsShow
  | FinbigConnectionOrder
  | FinbigConnectionPeriod
  | FinbigConnectionPublished_At
  | FinbigConnectionThumbnail
  | FinbigConnectionTitle
  | FinbigConnectionType
  | FinbigConnectionUpdated_At
  | FinbigConnectionUser
  | FinbigConnectionViewCount
  | FinbigGroupBy
  | I18NLocale
  | SubscriptionHistory
  | SubscriptionHistoryAggregator
  | SubscriptionHistoryAggregatorAvg
  | SubscriptionHistoryAggregatorMax
  | SubscriptionHistoryAggregatorMin
  | SubscriptionHistoryAggregatorSum
  | SubscriptionHistoryConnection
  | SubscriptionHistoryConnectionCreated_At
  | SubscriptionHistoryConnectionId
  | SubscriptionHistoryConnectionMid
  | SubscriptionHistoryConnectionPaymentMethod
  | SubscriptionHistoryConnectionPaymentStatus
  | SubscriptionHistoryConnectionPeriod
  | SubscriptionHistoryConnectionPrice
  | SubscriptionHistoryConnectionPublished_At
  | SubscriptionHistoryConnectionTitle
  | SubscriptionHistoryConnectionUpdated_At
  | SubscriptionHistoryConnectionUser
  | SubscriptionHistoryGroupBy
  | Token
  | TokenAggregator
  | TokenConnection
  | TokenConnectionCreated_At
  | TokenConnectionId
  | TokenConnectionPublished_At
  | TokenConnectionToken
  | TokenConnectionUpdated_At
  | TokenConnectionUserId
  | TokenGroupBy
  | UploadFile
  | UploadFileAggregator
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMax
  | UploadFileAggregatorMin
  | UploadFileAggregatorSum
  | UploadFileConnection
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionCreated_At
  | UploadFileConnectionExt
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionHeight
  | UploadFileConnectionId
  | UploadFileConnectionMime
  | UploadFileConnectionName
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | UploadFileConnectionSize
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionUrl
  | UploadFileConnectionWidth
  | UploadFileGroupBy
  | UserPermissionsPasswordPayload
  | UsersPermissionsLoginPayload
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsUser
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserAggregatorAvg
  | UsersPermissionsUserAggregatorMax
  | UsersPermissionsUserAggregatorMin
  | UsersPermissionsUserAggregatorSum
  | UsersPermissionsUserConnection
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionDeletedAt
  | UsersPermissionsUserConnectionDownloadCount
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionEmailReception
  | UsersPermissionsUserConnectionExpirationDate
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionIsAdmin
  | UsersPermissionsUserConnectionIsDeleted
  | UsersPermissionsUserConnectionIsSubscribe
  | UsersPermissionsUserConnectionName
  | UsersPermissionsUserConnectionPhone
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionSmsReception
  | UsersPermissionsUserConnectionSubscriptionDate
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserGroupBy
  | VisualData
  | VisualDataAggregator
  | VisualDataConnection
  | VisualDataConnectionCategory
  | VisualDataConnectionContents
  | VisualDataConnectionCreated_At
  | VisualDataConnectionDescription
  | VisualDataConnectionId
  | VisualDataConnectionIsShow
  | VisualDataConnectionPublished_At
  | VisualDataConnectionThumbnail
  | VisualDataConnectionTitle
  | VisualDataConnectionUpdated_At
  | VisualDataConnectionViewCount
  | VisualDataGroupBy
  | CreateEmailAuthPayload
  | CreateFinbigPayload
  | CreateRolePayload
  | CreateSubscriptionHistoryPayload
  | CreateTokenPayload
  | CreateUserPayload
  | CreateVisualDatumPayload
  | DeleteEmailAuthPayload
  | DeleteFilePayload
  | DeleteFinbigPayload
  | DeleteRolePayload
  | DeleteSubscriptionHistoryPayload
  | DeleteTokenPayload
  | DeleteUserPayload
  | DeleteVisualDatumPayload
  | UpdateEmailAuthPayload
  | UpdateFinbigPayload
  | UpdateRolePayload
  | UpdateSubscriptionHistoryPayload
  | UpdateTokenPayload
  | UpdateUserPayload
  | UpdateVisualDatumPayload;

export type Mutation = {
  __typename?: "Mutation";
  createEmailAuth?: Maybe<CreateEmailAuthPayload>;
  createFinbig?: Maybe<CreateFinbigPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createSubscriptionHistory?: Maybe<CreateSubscriptionHistoryPayload>;
  createToken?: Maybe<CreateTokenPayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  createVisualDatum?: Maybe<CreateVisualDatumPayload>;
  deleteEmailAuth?: Maybe<DeleteEmailAuthPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteFinbig?: Maybe<DeleteFinbigPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteSubscriptionHistory?: Maybe<DeleteSubscriptionHistoryPayload>;
  deleteToken?: Maybe<DeleteTokenPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteVisualDatum?: Maybe<DeleteVisualDatumPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  fetchToken?: Maybe<Token>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateEmailAuth?: Maybe<UpdateEmailAuthPayload>;
  updateFileInfo: UploadFile;
  updateFinbig?: Maybe<UpdateFinbigPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateSubscriptionHistory?: Maybe<UpdateSubscriptionHistoryPayload>;
  updateToken?: Maybe<UpdateTokenPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  updateVisualDatum?: Maybe<UpdateVisualDatumPayload>;
  upload: UploadFile;
};

export type MutationCreateEmailAuthArgs = {
  input?: InputMaybe<CreateEmailAuthInput>;
};

export type MutationCreateFinbigArgs = {
  input?: InputMaybe<CreateFinbigInput>;
};

export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};

export type MutationCreateSubscriptionHistoryArgs = {
  input?: InputMaybe<CreateSubscriptionHistoryInput>;
};

export type MutationCreateTokenArgs = {
  input?: InputMaybe<CreateTokenInput>;
};

export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};

export type MutationCreateVisualDatumArgs = {
  input?: InputMaybe<CreateVisualDatumInput>;
};

export type MutationDeleteEmailAuthArgs = {
  input?: InputMaybe<DeleteEmailAuthInput>;
};

export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};

export type MutationDeleteFinbigArgs = {
  input?: InputMaybe<DeleteFinbigInput>;
};

export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};

export type MutationDeleteSubscriptionHistoryArgs = {
  input?: InputMaybe<DeleteSubscriptionHistoryInput>;
};

export type MutationDeleteTokenArgs = {
  input?: InputMaybe<DeleteTokenInput>;
};

export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};

export type MutationDeleteVisualDatumArgs = {
  input?: InputMaybe<DeleteVisualDatumInput>;
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export type MutationFetchTokenArgs = {
  token?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  files: Array<InputMaybe<Scalars["Upload"]>>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
  source?: InputMaybe<Scalars["String"]>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationUpdateEmailAuthArgs = {
  input?: InputMaybe<UpdateEmailAuthInput>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info: FileInfoInput;
};

export type MutationUpdateFinbigArgs = {
  input?: InputMaybe<UpdateFinbigInput>;
};

export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};

export type MutationUpdateSubscriptionHistoryArgs = {
  input?: InputMaybe<UpdateSubscriptionHistoryInput>;
};

export type MutationUpdateTokenArgs = {
  input?: InputMaybe<UpdateTokenInput>;
};

export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type MutationUpdateVisualDatumArgs = {
  input?: InputMaybe<UpdateVisualDatumInput>;
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  file: Scalars["Upload"];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
  source?: InputMaybe<Scalars["String"]>;
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  __typename?: "Query";
  emailAuth?: Maybe<EmailAuth>;
  emailAuths?: Maybe<Array<Maybe<EmailAuth>>>;
  emailAuthsConnection?: Maybe<EmailAuthConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  finbig?: Maybe<Finbig>;
  finbigs?: Maybe<Array<Maybe<Finbig>>>;
  finbigsConnection?: Maybe<FinbigConnection>;
  me?: Maybe<UsersPermissionsMe>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  subscriptionHistories?: Maybe<Array<Maybe<SubscriptionHistory>>>;
  subscriptionHistoriesConnection?: Maybe<SubscriptionHistoryConnection>;
  subscriptionHistory?: Maybe<SubscriptionHistory>;
  token?: Maybe<Token>;
  tokens?: Maybe<Array<Maybe<Token>>>;
  tokensConnection?: Maybe<TokenConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  visualData?: Maybe<Array<Maybe<VisualData>>>;
  visualDataConnection?: Maybe<VisualDataConnection>;
  visualDatum?: Maybe<VisualData>;
};

export type QueryEmailAuthArgs = {
  id: Scalars["ID"];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryEmailAuthsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryEmailAuthsConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryFinbigArgs = {
  id: Scalars["ID"];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryFinbigsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryFinbigsConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryRoleArgs = {
  id: Scalars["ID"];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QuerySubscriptionHistoriesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QuerySubscriptionHistoriesConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QuerySubscriptionHistoryArgs = {
  id: Scalars["ID"];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryTokenArgs = {
  id: Scalars["ID"];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryTokensArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryTokensConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryVisualDataArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryVisualDataConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryVisualDatumArgs = {
  id: Scalars["ID"];
  publicationState?: InputMaybe<PublicationState>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type SubscriptionHistory = {
  __typename?: "SubscriptionHistory";
  MID?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  paymentMethod?: Maybe<Scalars["String"]>;
  paymentStatus?: Maybe<Scalars["String"]>;
  period?: Maybe<Scalars["Int"]>;
  price?: Maybe<Scalars["Int"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  user?: Maybe<UsersPermissionsUser>;
};

export type SubscriptionHistoryAggregator = {
  __typename?: "SubscriptionHistoryAggregator";
  avg?: Maybe<SubscriptionHistoryAggregatorAvg>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<SubscriptionHistoryAggregatorMax>;
  min?: Maybe<SubscriptionHistoryAggregatorMin>;
  sum?: Maybe<SubscriptionHistoryAggregatorSum>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type SubscriptionHistoryAggregatorAvg = {
  __typename?: "SubscriptionHistoryAggregatorAvg";
  period?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

export type SubscriptionHistoryAggregatorMax = {
  __typename?: "SubscriptionHistoryAggregatorMax";
  period?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

export type SubscriptionHistoryAggregatorMin = {
  __typename?: "SubscriptionHistoryAggregatorMin";
  period?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

export type SubscriptionHistoryAggregatorSum = {
  __typename?: "SubscriptionHistoryAggregatorSum";
  period?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

export type SubscriptionHistoryConnection = {
  __typename?: "SubscriptionHistoryConnection";
  aggregate?: Maybe<SubscriptionHistoryAggregator>;
  groupBy?: Maybe<SubscriptionHistoryGroupBy>;
  values?: Maybe<Array<Maybe<SubscriptionHistory>>>;
};

export type SubscriptionHistoryConnectionCreated_At = {
  __typename?: "SubscriptionHistoryConnectionCreated_at";
  connection?: Maybe<SubscriptionHistoryConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type SubscriptionHistoryConnectionId = {
  __typename?: "SubscriptionHistoryConnectionId";
  connection?: Maybe<SubscriptionHistoryConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type SubscriptionHistoryConnectionMid = {
  __typename?: "SubscriptionHistoryConnectionMID";
  connection?: Maybe<SubscriptionHistoryConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type SubscriptionHistoryConnectionPaymentMethod = {
  __typename?: "SubscriptionHistoryConnectionPaymentMethod";
  connection?: Maybe<SubscriptionHistoryConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type SubscriptionHistoryConnectionPaymentStatus = {
  __typename?: "SubscriptionHistoryConnectionPaymentStatus";
  connection?: Maybe<SubscriptionHistoryConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type SubscriptionHistoryConnectionPeriod = {
  __typename?: "SubscriptionHistoryConnectionPeriod";
  connection?: Maybe<SubscriptionHistoryConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type SubscriptionHistoryConnectionPrice = {
  __typename?: "SubscriptionHistoryConnectionPrice";
  connection?: Maybe<SubscriptionHistoryConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type SubscriptionHistoryConnectionPublished_At = {
  __typename?: "SubscriptionHistoryConnectionPublished_at";
  connection?: Maybe<SubscriptionHistoryConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type SubscriptionHistoryConnectionTitle = {
  __typename?: "SubscriptionHistoryConnectionTitle";
  connection?: Maybe<SubscriptionHistoryConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type SubscriptionHistoryConnectionUpdated_At = {
  __typename?: "SubscriptionHistoryConnectionUpdated_at";
  connection?: Maybe<SubscriptionHistoryConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type SubscriptionHistoryConnectionUser = {
  __typename?: "SubscriptionHistoryConnectionUser";
  connection?: Maybe<SubscriptionHistoryConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type SubscriptionHistoryGroupBy = {
  __typename?: "SubscriptionHistoryGroupBy";
  MID?: Maybe<Array<Maybe<SubscriptionHistoryConnectionMid>>>;
  created_at?: Maybe<Array<Maybe<SubscriptionHistoryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<SubscriptionHistoryConnectionId>>>;
  paymentMethod?: Maybe<
    Array<Maybe<SubscriptionHistoryConnectionPaymentMethod>>
  >;
  paymentStatus?: Maybe<
    Array<Maybe<SubscriptionHistoryConnectionPaymentStatus>>
  >;
  period?: Maybe<Array<Maybe<SubscriptionHistoryConnectionPeriod>>>;
  price?: Maybe<Array<Maybe<SubscriptionHistoryConnectionPrice>>>;
  published_at?: Maybe<Array<Maybe<SubscriptionHistoryConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<SubscriptionHistoryConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<SubscriptionHistoryConnectionUpdated_At>>>;
  user?: Maybe<Array<Maybe<SubscriptionHistoryConnectionUser>>>;
};

export type SubscriptionHistoryInput = {
  MID?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  paymentMethod?: InputMaybe<Scalars["String"]>;
  paymentStatus?: InputMaybe<Scalars["String"]>;
  period?: InputMaybe<Scalars["Int"]>;
  price?: InputMaybe<Scalars["Int"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  user?: InputMaybe<Scalars["ID"]>;
};

export type Token = {
  __typename?: "Token";
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  published_at?: Maybe<Scalars["DateTime"]>;
  token?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  userId?: Maybe<Scalars["String"]>;
};

export type TokenAggregator = {
  __typename?: "TokenAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type TokenConnection = {
  __typename?: "TokenConnection";
  aggregate?: Maybe<TokenAggregator>;
  groupBy?: Maybe<TokenGroupBy>;
  values?: Maybe<Array<Maybe<Token>>>;
};

export type TokenConnectionCreated_At = {
  __typename?: "TokenConnectionCreated_at";
  connection?: Maybe<TokenConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type TokenConnectionId = {
  __typename?: "TokenConnectionId";
  connection?: Maybe<TokenConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type TokenConnectionPublished_At = {
  __typename?: "TokenConnectionPublished_at";
  connection?: Maybe<TokenConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type TokenConnectionToken = {
  __typename?: "TokenConnectionToken";
  connection?: Maybe<TokenConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type TokenConnectionUpdated_At = {
  __typename?: "TokenConnectionUpdated_at";
  connection?: Maybe<TokenConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type TokenConnectionUserId = {
  __typename?: "TokenConnectionUserId";
  connection?: Maybe<TokenConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type TokenGroupBy = {
  __typename?: "TokenGroupBy";
  created_at?: Maybe<Array<Maybe<TokenConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TokenConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TokenConnectionPublished_At>>>;
  token?: Maybe<Array<Maybe<TokenConnectionToken>>>;
  updated_at?: Maybe<Array<Maybe<TokenConnectionUpdated_At>>>;
  userId?: Maybe<Array<Maybe<TokenConnectionUserId>>>;
};

export type TokenInput = {
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  token?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars["Float"];
  updated_at: Scalars["DateTime"];
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type UploadFileAggregator = {
  __typename?: "UploadFileAggregator";
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UploadFileAggregatorAvg = {
  __typename?: "UploadFileAggregatorAvg";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMax = {
  __typename?: "UploadFileAggregatorMax";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMin = {
  __typename?: "UploadFileAggregatorMin";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorSum = {
  __typename?: "UploadFileAggregatorSum";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileConnection = {
  __typename?: "UploadFileConnection";
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: "UploadFileConnectionAlternativeText";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionCaption = {
  __typename?: "UploadFileConnectionCaption";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: "UploadFileConnectionCreated_at";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UploadFileConnectionExt = {
  __typename?: "UploadFileConnectionExt";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionFormats = {
  __typename?: "UploadFileConnectionFormats";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["JSON"]>;
};

export type UploadFileConnectionHash = {
  __typename?: "UploadFileConnectionHash";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionHeight = {
  __typename?: "UploadFileConnectionHeight";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type UploadFileConnectionId = {
  __typename?: "UploadFileConnectionId";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UploadFileConnectionMime = {
  __typename?: "UploadFileConnectionMime";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionName = {
  __typename?: "UploadFileConnectionName";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: "UploadFileConnectionPreviewUrl";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionProvider = {
  __typename?: "UploadFileConnectionProvider";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: "UploadFileConnectionProvider_metadata";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["JSON"]>;
};

export type UploadFileConnectionSize = {
  __typename?: "UploadFileConnectionSize";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Float"]>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: "UploadFileConnectionUpdated_at";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UploadFileConnectionUrl = {
  __typename?: "UploadFileConnectionUrl";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionWidth = {
  __typename?: "UploadFileConnectionWidth";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type UploadFileGroupBy = {
  __typename?: "UploadFileGroupBy";
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<
    Array<Maybe<UploadFileConnectionProvider_Metadata>>
  >;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  downloadCount?: InputMaybe<Scalars["Int"]>;
  email: Scalars["String"];
  emailReception?: InputMaybe<Scalars["Boolean"]>;
  expirationDate?: InputMaybe<Scalars["DateTime"]>;
  finbigDownload?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  finbigView?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isSubscribe?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["ID"]>;
  smsReception?: InputMaybe<Scalars["Boolean"]>;
  subscriptionDate?: InputMaybe<Scalars["DateTime"]>;
  subscription_histories?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  username: Scalars["String"];
};

export type UserPermissionsPasswordPayload = {
  __typename?: "UserPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: InputMaybe<Scalars["String"]>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  email: Scalars["String"];
  id: Scalars["ID"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"];
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  controller: Scalars["String"];
  enabled: Scalars["Boolean"];
  id: Scalars["ID"];
  policy?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars["String"];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: "UsersPermissionsRoleAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: "UsersPermissionsRoleConnection";
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: "UsersPermissionsRoleConnectionDescription";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: "UsersPermissionsRoleConnectionId";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: "UsersPermissionsRoleConnectionName";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: "UsersPermissionsRoleConnectionType";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: "UsersPermissionsRoleGroupBy";
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  created_at: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  downloadCount?: Maybe<Scalars["Int"]>;
  email: Scalars["String"];
  emailReception?: Maybe<Scalars["Boolean"]>;
  expirationDate?: Maybe<Scalars["DateTime"]>;
  finbigDownload?: Maybe<Array<Maybe<Finbig>>>;
  finbigView?: Maybe<Array<Maybe<Finbig>>>;
  id: Scalars["ID"];
  isAdmin?: Maybe<Scalars["Boolean"]>;
  isDeleted?: Maybe<Scalars["Boolean"]>;
  isSubscribe?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRole>;
  smsReception?: Maybe<Scalars["Boolean"]>;
  subscriptionDate?: Maybe<Scalars["DateTime"]>;
  subscription_histories?: Maybe<Array<Maybe<SubscriptionHistory>>>;
  updated_at: Scalars["DateTime"];
  username: Scalars["String"];
};

export type UsersPermissionsUserFinbigDownloadArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type UsersPermissionsUserFinbigViewArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type UsersPermissionsUserSubscription_HistoriesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: "UsersPermissionsUserAggregator";
  avg?: Maybe<UsersPermissionsUserAggregatorAvg>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<UsersPermissionsUserAggregatorMax>;
  min?: Maybe<UsersPermissionsUserAggregatorMin>;
  sum?: Maybe<UsersPermissionsUserAggregatorSum>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsUserAggregatorAvg = {
  __typename?: "UsersPermissionsUserAggregatorAvg";
  downloadCount?: Maybe<Scalars["Float"]>;
};

export type UsersPermissionsUserAggregatorMax = {
  __typename?: "UsersPermissionsUserAggregatorMax";
  downloadCount?: Maybe<Scalars["Float"]>;
};

export type UsersPermissionsUserAggregatorMin = {
  __typename?: "UsersPermissionsUserAggregatorMin";
  downloadCount?: Maybe<Scalars["Float"]>;
};

export type UsersPermissionsUserAggregatorSum = {
  __typename?: "UsersPermissionsUserAggregatorSum";
  downloadCount?: Maybe<Scalars["Float"]>;
};

export type UsersPermissionsUserConnection = {
  __typename?: "UsersPermissionsUserConnection";
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: "UsersPermissionsUserConnectionBlocked";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: "UsersPermissionsUserConnectionConfirmed";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: "UsersPermissionsUserConnectionCreated_at";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserConnectionDeletedAt = {
  __typename?: "UsersPermissionsUserConnectionDeletedAt";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserConnectionDownloadCount = {
  __typename?: "UsersPermissionsUserConnectionDownloadCount";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: "UsersPermissionsUserConnectionEmail";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserConnectionEmailReception = {
  __typename?: "UsersPermissionsUserConnectionEmailReception";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionExpirationDate = {
  __typename?: "UsersPermissionsUserConnectionExpirationDate";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: "UsersPermissionsUserConnectionId";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserConnectionIsAdmin = {
  __typename?: "UsersPermissionsUserConnectionIsAdmin";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionIsDeleted = {
  __typename?: "UsersPermissionsUserConnectionIsDeleted";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionIsSubscribe = {
  __typename?: "UsersPermissionsUserConnectionIsSubscribe";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionName = {
  __typename?: "UsersPermissionsUserConnectionName";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserConnectionPhone = {
  __typename?: "UsersPermissionsUserConnectionPhone";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: "UsersPermissionsUserConnectionProvider";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: "UsersPermissionsUserConnectionRole";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserConnectionSmsReception = {
  __typename?: "UsersPermissionsUserConnectionSmsReception";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionSubscriptionDate = {
  __typename?: "UsersPermissionsUserConnectionSubscriptionDate";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: "UsersPermissionsUserConnectionUpdated_at";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: "UsersPermissionsUserConnectionUsername";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: "UsersPermissionsUserGroupBy";
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  deletedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionDeletedAt>>>;
  downloadCount?: Maybe<
    Array<Maybe<UsersPermissionsUserConnectionDownloadCount>>
  >;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  emailReception?: Maybe<
    Array<Maybe<UsersPermissionsUserConnectionEmailReception>>
  >;
  expirationDate?: Maybe<
    Array<Maybe<UsersPermissionsUserConnectionExpirationDate>>
  >;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  isAdmin?: Maybe<Array<Maybe<UsersPermissionsUserConnectionIsAdmin>>>;
  isDeleted?: Maybe<Array<Maybe<UsersPermissionsUserConnectionIsDeleted>>>;
  isSubscribe?: Maybe<Array<Maybe<UsersPermissionsUserConnectionIsSubscribe>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsUserConnectionName>>>;
  phone?: Maybe<Array<Maybe<UsersPermissionsUserConnectionPhone>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  smsReception?: Maybe<
    Array<Maybe<UsersPermissionsUserConnectionSmsReception>>
  >;
  subscriptionDate?: Maybe<
    Array<Maybe<UsersPermissionsUserConnectionSubscriptionDate>>
  >;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type VisualData = {
  __typename?: "VisualData";
  category?: Maybe<Scalars["String"]>;
  contents?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  finbigs?: Maybe<Array<Maybe<Finbig>>>;
  id: Scalars["ID"];
  isShow?: Maybe<Scalars["Boolean"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  viewCount?: Maybe<Scalars["Long"]>;
};

export type VisualDataFinbigsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type VisualDataAggregator = {
  __typename?: "VisualDataAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type VisualDataConnection = {
  __typename?: "VisualDataConnection";
  aggregate?: Maybe<VisualDataAggregator>;
  groupBy?: Maybe<VisualDataGroupBy>;
  values?: Maybe<Array<Maybe<VisualData>>>;
};

export type VisualDataConnectionCategory = {
  __typename?: "VisualDataConnectionCategory";
  connection?: Maybe<VisualDataConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type VisualDataConnectionContents = {
  __typename?: "VisualDataConnectionContents";
  connection?: Maybe<VisualDataConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type VisualDataConnectionCreated_At = {
  __typename?: "VisualDataConnectionCreated_at";
  connection?: Maybe<VisualDataConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type VisualDataConnectionDescription = {
  __typename?: "VisualDataConnectionDescription";
  connection?: Maybe<VisualDataConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type VisualDataConnectionId = {
  __typename?: "VisualDataConnectionId";
  connection?: Maybe<VisualDataConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type VisualDataConnectionIsShow = {
  __typename?: "VisualDataConnectionIsShow";
  connection?: Maybe<VisualDataConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type VisualDataConnectionPublished_At = {
  __typename?: "VisualDataConnectionPublished_at";
  connection?: Maybe<VisualDataConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type VisualDataConnectionThumbnail = {
  __typename?: "VisualDataConnectionThumbnail";
  connection?: Maybe<VisualDataConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type VisualDataConnectionTitle = {
  __typename?: "VisualDataConnectionTitle";
  connection?: Maybe<VisualDataConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type VisualDataConnectionUpdated_At = {
  __typename?: "VisualDataConnectionUpdated_at";
  connection?: Maybe<VisualDataConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type VisualDataConnectionViewCount = {
  __typename?: "VisualDataConnectionViewCount";
  connection?: Maybe<VisualDataConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type VisualDataGroupBy = {
  __typename?: "VisualDataGroupBy";
  category?: Maybe<Array<Maybe<VisualDataConnectionCategory>>>;
  contents?: Maybe<Array<Maybe<VisualDataConnectionContents>>>;
  created_at?: Maybe<Array<Maybe<VisualDataConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<VisualDataConnectionDescription>>>;
  id?: Maybe<Array<Maybe<VisualDataConnectionId>>>;
  isShow?: Maybe<Array<Maybe<VisualDataConnectionIsShow>>>;
  published_at?: Maybe<Array<Maybe<VisualDataConnectionPublished_At>>>;
  thumbnail?: Maybe<Array<Maybe<VisualDataConnectionThumbnail>>>;
  title?: Maybe<Array<Maybe<VisualDataConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<VisualDataConnectionUpdated_At>>>;
  viewCount?: Maybe<Array<Maybe<VisualDataConnectionViewCount>>>;
};

export type VisualDatumInput = {
  category?: InputMaybe<Scalars["String"]>;
  contents?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  finbigs?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  isShow?: InputMaybe<Scalars["Boolean"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  thumbnail?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  viewCount?: InputMaybe<Scalars["Long"]>;
};

export type CreateEmailAuthInput = {
  data?: InputMaybe<EmailAuthInput>;
};

export type CreateEmailAuthPayload = {
  __typename?: "createEmailAuthPayload";
  emailAuth?: Maybe<EmailAuth>;
};

export type CreateFinbigInput = {
  data?: InputMaybe<FinbigInput>;
};

export type CreateFinbigPayload = {
  __typename?: "createFinbigPayload";
  finbig?: Maybe<Finbig>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: "createRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateSubscriptionHistoryInput = {
  data?: InputMaybe<SubscriptionHistoryInput>;
};

export type CreateSubscriptionHistoryPayload = {
  __typename?: "createSubscriptionHistoryPayload";
  subscriptionHistory?: Maybe<SubscriptionHistory>;
};

export type CreateTokenInput = {
  data?: InputMaybe<TokenInput>;
};

export type CreateTokenPayload = {
  __typename?: "createTokenPayload";
  token?: Maybe<Token>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: "createUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateVisualDatumInput = {
  data?: InputMaybe<VisualDatumInput>;
};

export type CreateVisualDatumPayload = {
  __typename?: "createVisualDatumPayload";
  visualDatum?: Maybe<VisualData>;
};

export type DeleteEmailAuthInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteEmailAuthPayload = {
  __typename?: "deleteEmailAuthPayload";
  emailAuth?: Maybe<EmailAuth>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: "deleteFilePayload";
  file?: Maybe<UploadFile>;
};

export type DeleteFinbigInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFinbigPayload = {
  __typename?: "deleteFinbigPayload";
  finbig?: Maybe<Finbig>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: "deleteRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSubscriptionHistoryInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteSubscriptionHistoryPayload = {
  __typename?: "deleteSubscriptionHistoryPayload";
  subscriptionHistory?: Maybe<SubscriptionHistory>;
};

export type DeleteTokenInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTokenPayload = {
  __typename?: "deleteTokenPayload";
  token?: Maybe<Token>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: "deleteUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteVisualDatumInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteVisualDatumPayload = {
  __typename?: "deleteVisualDatumPayload";
  visualDatum?: Maybe<VisualData>;
};

export type EditEmailAuthInput = {
  code?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  email?: InputMaybe<Scalars["String"]>;
  isAuth?: InputMaybe<Scalars["Boolean"]>;
  type?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  ext?: InputMaybe<Scalars["String"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  mime?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  related?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  size?: InputMaybe<Scalars["Float"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type EditFinbigInput = {
  apiName?: InputMaybe<Scalars["String"]>;
  category?: InputMaybe<Scalars["String"]>;
  contents?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  isBest?: InputMaybe<Scalars["Boolean"]>;
  isShow?: InputMaybe<Scalars["Boolean"]>;
  order?: InputMaybe<Scalars["Int"]>;
  period?: InputMaybe<Scalars["String"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  relationFinbigs?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  thumbnail?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  user?: InputMaybe<Scalars["ID"]>;
  viewCount?: InputMaybe<Scalars["Long"]>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type EditSubscriptionHistoryInput = {
  MID?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  paymentMethod?: InputMaybe<Scalars["String"]>;
  paymentStatus?: InputMaybe<Scalars["String"]>;
  period?: InputMaybe<Scalars["Int"]>;
  price?: InputMaybe<Scalars["Int"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  user?: InputMaybe<Scalars["ID"]>;
};

export type EditTokenInput = {
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  token?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  downloadCount?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  emailReception?: InputMaybe<Scalars["Boolean"]>;
  expirationDate?: InputMaybe<Scalars["DateTime"]>;
  finbigDownload?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  finbigView?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isSubscribe?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["ID"]>;
  smsReception?: InputMaybe<Scalars["Boolean"]>;
  subscriptionDate?: InputMaybe<Scalars["DateTime"]>;
  subscription_histories?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type EditVisualDatumInput = {
  category?: InputMaybe<Scalars["String"]>;
  contents?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  finbigs?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  isShow?: InputMaybe<Scalars["Boolean"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  thumbnail?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  viewCount?: InputMaybe<Scalars["Long"]>;
};

export type UpdateEmailAuthInput = {
  data?: InputMaybe<EditEmailAuthInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateEmailAuthPayload = {
  __typename?: "updateEmailAuthPayload";
  emailAuth?: Maybe<EmailAuth>;
};

export type UpdateFinbigInput = {
  data?: InputMaybe<EditFinbigInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateFinbigPayload = {
  __typename?: "updateFinbigPayload";
  finbig?: Maybe<Finbig>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: "updateRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSubscriptionHistoryInput = {
  data?: InputMaybe<EditSubscriptionHistoryInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateSubscriptionHistoryPayload = {
  __typename?: "updateSubscriptionHistoryPayload";
  subscriptionHistory?: Maybe<SubscriptionHistory>;
};

export type UpdateTokenInput = {
  data?: InputMaybe<EditTokenInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTokenPayload = {
  __typename?: "updateTokenPayload";
  token?: Maybe<Token>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: "updateUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateVisualDatumInput = {
  data?: InputMaybe<EditVisualDatumInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateVisualDatumPayload = {
  __typename?: "updateVisualDatumPayload";
  visualDatum?: Maybe<VisualData>;
};

export type VisualDatumQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type VisualDatumQuery = {
  __typename?: "Query";
  visualDatum?: {
    __typename?: "VisualData";
    id: string;
    created_at: any;
    title?: string | null;
    category?: string | null;
    description?: string | null;
    viewCount?: any | null;
    contents?: string | null;
    thumbnail?: string | null;
    finbigs?: Array<{
      __typename?: "Finbig";
      id: string;
      title?: string | null;
      thumbnail?: string | null;
      description?: string | null;
    } | null> | null;
  } | null;
};

export const VisualDatumDocument = gql`
  query visualDatum($id: ID!) {
    visualDatum(id: $id) {
      id
      created_at
      title
      category
      description
      viewCount
      contents
      thumbnail
      finbigs {
        id
        title
        thumbnail
        description
      }
    }
  }
`;

/**
 * __useVisualDatumQuery__
 *
 * To run a query within a React component, call `useVisualDatumQuery` and pass it any options that fit your needs.
 * When your component renders, `useVisualDatumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVisualDatumQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVisualDatumQuery(
  baseOptions: Apollo.QueryHookOptions<
    VisualDatumQuery,
    VisualDatumQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VisualDatumQuery, VisualDatumQueryVariables>(
    VisualDatumDocument,
    options
  );
}
export function useVisualDatumLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VisualDatumQuery,
    VisualDatumQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VisualDatumQuery, VisualDatumQueryVariables>(
    VisualDatumDocument,
    options
  );
}
export type VisualDatumQueryHookResult = ReturnType<typeof useVisualDatumQuery>;
export type VisualDatumLazyQueryHookResult = ReturnType<
  typeof useVisualDatumLazyQuery
>;
export type VisualDatumQueryResult = Apollo.QueryResult<
  VisualDatumQuery,
  VisualDatumQueryVariables
>;
