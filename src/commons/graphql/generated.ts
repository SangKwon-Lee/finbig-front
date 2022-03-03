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

export type FinbigQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type FinbigQuery = {
  __typename?: "Query";
  finbig?: {
    __typename?: "Finbig";
    id: string;
    created_at: any;
    updated_at: any;
    title?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    order?: number | null;
    viewCount?: any | null;
    isBest?: boolean | null;
    category?: string | null;
    type?: string | null;
    period?: string | null;
    contents?: string | null;
    isShow?: boolean | null;
    apiName?: string | null;
    relationFinbigs?: Array<{
      __typename?: "Finbig";
      id: string;
      title?: string | null;
      description?: string | null;
      thumbnail?: string | null;
    } | null> | null;
  } | null;
};

export type FinbigsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
}>;

export type FinbigsQuery = {
  __typename?: "Query";
  finbigs?: Array<{
    __typename?: "Finbig";
    id: string;
    created_at: any;
    updated_at: any;
    title?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    order?: number | null;
    viewCount?: any | null;
    isBest?: boolean | null;
    category?: string | null;
    type?: string | null;
    period?: string | null;
    contents?: string | null;
    isShow?: boolean | null;
    apiName?: string | null;
  } | null> | null;
};

export type FinbigsConnectionQueryVariables = Exact<{
  where?: InputMaybe<Scalars["JSON"]>;
}>;

export type FinbigsConnectionQuery = {
  __typename?: "Query";
  finbigsConnection?: {
    __typename?: "FinbigConnection";
    aggregate?: {
      __typename?: "FinbigAggregator";
      count?: number | null;
      totalCount?: number | null;
    } | null;
  } | null;
};

export type UpdateFinbigMutationVariables = Exact<{
  input?: InputMaybe<UpdateFinbigInput>;
}>;

export type UpdateFinbigMutation = {
  __typename?: "Mutation";
  updateFinbig?: {
    __typename?: "updateFinbigPayload";
    finbig?: {
      __typename?: "Finbig";
      id: string;
      title?: string | null;
    } | null;
  } | null;
};

export type CreateEmailAuthMutationVariables = Exact<{
  input?: InputMaybe<CreateEmailAuthInput>;
}>;

export type CreateEmailAuthMutation = {
  __typename?: "Mutation";
  createEmailAuth?: {
    __typename?: "createEmailAuthPayload";
    emailAuth?: { __typename?: "EmailAuth"; code?: string | null } | null;
  } | null;
};

export type EmailAuthsQueryVariables = Exact<{ [key: string]: never }>;

export type EmailAuthsQuery = {
  __typename?: "Query";
  emailAuths?: Array<{
    __typename?: "EmailAuth";
    id: string;
    code?: string | null;
  } | null> | null;
};

export type DeleteEmailAuthMutationVariables = Exact<{
  input?: InputMaybe<DeleteEmailAuthInput>;
}>;

export type DeleteEmailAuthMutation = {
  __typename?: "Mutation";
  deleteEmailAuth?: {
    __typename?: "deleteEmailAuthPayload";
    emailAuth?: {
      __typename?: "EmailAuth";
      id: string;
      code?: string | null;
    } | null;
  } | null;
};

export type CreateSubscriptionHistoryMutationVariables = Exact<{
  input?: InputMaybe<CreateSubscriptionHistoryInput>;
}>;

export type CreateSubscriptionHistoryMutation = {
  __typename?: "Mutation";
  createSubscriptionHistory?: {
    __typename?: "createSubscriptionHistoryPayload";
    subscriptionHistory?: {
      __typename?: "SubscriptionHistory";
      id: string;
      created_at: any;
      period?: number | null;
    } | null;
  } | null;
};

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "UsersPermissionsLoginPayload";
    jwt?: string | null;
    user: {
      __typename?: "UsersPermissionsMe";
      id: string;
      email: string;
      confirmed?: boolean | null;
      blocked?: boolean | null;
      role?: {
        __typename?: "UsersPermissionsMeRole";
        id: string;
        name: string;
        description?: string | null;
        type?: string | null;
      } | null;
    };
  };
};

export type CreateTokenMutationVariables = Exact<{
  input: CreateTokenInput;
}>;

export type CreateTokenMutation = {
  __typename?: "Mutation";
  createToken?: {
    __typename?: "createTokenPayload";
    token?: { __typename?: "Token"; id: string } | null;
  } | null;
};

export type FetchTokenMutationVariables = Exact<{
  userId?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
}>;

export type FetchTokenMutation = {
  __typename?: "Mutation";
  fetchToken?: {
    __typename?: "Token";
    id: string;
    token?: string | null;
    userId?: string | null;
  } | null;
};

export type UpdateTokenMutationVariables = Exact<{
  input?: InputMaybe<UpdateTokenInput>;
}>;

export type UpdateTokenMutation = {
  __typename?: "Mutation";
  updateToken?: {
    __typename?: "updateTokenPayload";
    token?: { __typename?: "Token"; id: string; token?: string | null } | null;
  } | null;
};

export type DeleteTokenMutationVariables = Exact<{
  input?: InputMaybe<DeleteTokenInput>;
}>;

export type DeleteTokenMutation = {
  __typename?: "Mutation";
  deleteToken?: {
    __typename?: "deleteTokenPayload";
    token?: { __typename?: "Token"; id: string } | null;
  } | null;
};

export type TokenQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type TokenQuery = {
  __typename?: "Query";
  token?: {
    __typename?: "Token";
    id: string;
    created_at: any;
    userId?: string | null;
    token?: string | null;
  } | null;
};

export type TokensQueryVariables = Exact<{
  sort?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
}>;

export type TokensQuery = {
  __typename?: "Query";
  tokens?: Array<{
    __typename?: "Token";
    id: string;
    userId?: string | null;
    token?: string | null;
  } | null> | null;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser?: {
    __typename?: "createUserPayload";
    user?: {
      __typename?: "UsersPermissionsUser";
      id: string;
      email: string;
      confirmed?: boolean | null;
      blocked?: boolean | null;
      role?: {
        __typename?: "UsersPermissionsRole";
        id: string;
        name: string;
        description?: string | null;
        type?: string | null;
      } | null;
    } | null;
  } | null;
};

export type UsersQueryVariables = Exact<{
  sort?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
}>;

export type UsersQuery = {
  __typename?: "Query";
  users?: Array<{
    __typename?: "UsersPermissionsUser";
    id: string;
    email: string;
    username: string;
    name?: string | null;
    smsReception?: boolean | null;
    emailReception?: boolean | null;
    phone?: string | null;
    isDeleted?: boolean | null;
    deletedAt?: any | null;
    downloadCount?: number | null;
    subscriptionDate?: any | null;
    expirationDate?: any | null;
    isSubscribe?: boolean | null;
    created_at: any;
    subscription_histories?: Array<{
      __typename?: "SubscriptionHistory";
      id: string;
      created_at: any;
      title?: string | null;
      price?: number | null;
      period?: number | null;
    } | null> | null;
  } | null> | null;
};

export type UserQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type UserQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "UsersPermissionsUser";
    id: string;
    email: string;
    username: string;
    name?: string | null;
    isSubscribe?: boolean | null;
    expirationDate?: any | null;
    smsReception?: boolean | null;
    subscriptionDate?: any | null;
    emailReception?: boolean | null;
    phone?: string | null;
    isAdmin?: boolean | null;
    isDeleted?: boolean | null;
    deletedAt?: any | null;
    downloadCount?: number | null;
    finbigDownload?: Array<{
      __typename?: "Finbig";
      id: string;
      title?: string | null;
      description?: string | null;
      thumbnail?: string | null;
      isBest?: boolean | null;
    } | null> | null;
    finbigView?: Array<{
      __typename?: "Finbig";
      id: string;
      title?: string | null;
      description?: string | null;
      thumbnail?: string | null;
      isBest?: boolean | null;
    } | null> | null;
    subscription_histories?: Array<{
      __typename?: "SubscriptionHistory";
      id: string;
      title?: string | null;
      price?: number | null;
      period?: number | null;
      created_at: any;
      paymentMethod?: string | null;
      paymentStatus?: string | null;
    } | null> | null;
  } | null;
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser?: {
    __typename?: "updateUserPayload";
    user?: {
      __typename?: "UsersPermissionsUser";
      id: string;
      email: string;
      phone?: string | null;
      smsReception?: boolean | null;
      expirationDate?: any | null;
      emailReception?: boolean | null;
    } | null;
  } | null;
};

export type CreateVisualDatumMutationVariables = Exact<{
  input?: InputMaybe<CreateVisualDatumInput>;
}>;

export type CreateVisualDatumMutation = {
  __typename?: "Mutation";
  createVisualDatum?: {
    __typename?: "createVisualDatumPayload";
    visualDatum?: {
      __typename?: "VisualData";
      id: string;
      title?: string | null;
    } | null;
  } | null;
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

export type VisualDataQueryVariables = Exact<{
  sort?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
}>;

export type VisualDataQuery = {
  __typename?: "Query";
  visualData?: Array<{
    __typename?: "VisualData";
    id: string;
    created_at: any;
    title?: string | null;
    category?: string | null;
    description?: string | null;
    viewCount?: any | null;
    isShow?: boolean | null;
    contents?: string | null;
    thumbnail?: string | null;
  } | null> | null;
};

export type VisualDataConnectionQueryVariables = Exact<{
  where?: InputMaybe<Scalars["JSON"]>;
}>;

export type VisualDataConnectionQuery = {
  __typename?: "Query";
  visualDataConnection?: {
    __typename?: "VisualDataConnection";
    aggregate?: {
      __typename?: "VisualDataAggregator";
      count?: number | null;
    } | null;
  } | null;
};

export type UpdateVisualDatumMutationVariables = Exact<{
  input?: InputMaybe<UpdateVisualDatumInput>;
}>;

export type UpdateVisualDatumMutation = {
  __typename?: "Mutation";
  updateVisualDatum?: {
    __typename?: "updateVisualDatumPayload";
    visualDatum?: { __typename?: "VisualData"; id: string } | null;
  } | null;
};

export type DeleteVisualDatumMutationVariables = Exact<{
  input?: InputMaybe<DeleteVisualDatumInput>;
}>;

export type DeleteVisualDatumMutation = {
  __typename?: "Mutation";
  deleteVisualDatum?: {
    __typename?: "deleteVisualDatumPayload";
    visualDatum?: { __typename?: "VisualData"; id: string } | null;
  } | null;
};

export const FinbigDocument = gql`
  query finbig($id: ID!) {
    finbig(id: $id) {
      id
      created_at
      updated_at
      title
      description
      thumbnail
      order
      viewCount
      isBest
      category
      type
      period
      contents
      isShow
      apiName
      relationFinbigs {
        id
        title
        description
        thumbnail
      }
    }
  }
`;

/**
 * __useFinbigQuery__
 *
 * To run a query within a React component, call `useFinbigQuery` and pass it any options that fit your needs.
 * When your component renders, `useFinbigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFinbigQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFinbigQuery(
  baseOptions: Apollo.QueryHookOptions<FinbigQuery, FinbigQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FinbigQuery, FinbigQueryVariables>(
    FinbigDocument,
    options
  );
}
export function useFinbigLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FinbigQuery, FinbigQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FinbigQuery, FinbigQueryVariables>(
    FinbigDocument,
    options
  );
}
export type FinbigQueryHookResult = ReturnType<typeof useFinbigQuery>;
export type FinbigLazyQueryHookResult = ReturnType<typeof useFinbigLazyQuery>;
export type FinbigQueryResult = Apollo.QueryResult<
  FinbigQuery,
  FinbigQueryVariables
>;
export const FinbigsDocument = gql`
  query finbigs($sort: String, $limit: Int, $start: Int, $where: JSON) {
    finbigs(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
      created_at
      updated_at
      title
      description
      thumbnail
      order
      viewCount
      isBest
      category
      type
      period
      contents
      isShow
      apiName
    }
  }
`;

/**
 * __useFinbigsQuery__
 *
 * To run a query within a React component, call `useFinbigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFinbigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFinbigsQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFinbigsQuery(
  baseOptions?: Apollo.QueryHookOptions<FinbigsQuery, FinbigsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FinbigsQuery, FinbigsQueryVariables>(
    FinbigsDocument,
    options
  );
}
export function useFinbigsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FinbigsQuery, FinbigsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FinbigsQuery, FinbigsQueryVariables>(
    FinbigsDocument,
    options
  );
}
export type FinbigsQueryHookResult = ReturnType<typeof useFinbigsQuery>;
export type FinbigsLazyQueryHookResult = ReturnType<typeof useFinbigsLazyQuery>;
export type FinbigsQueryResult = Apollo.QueryResult<
  FinbigsQuery,
  FinbigsQueryVariables
>;
export const FinbigsConnectionDocument = gql`
  query finbigsConnection($where: JSON) {
    finbigsConnection(where: $where) {
      aggregate {
        count
        totalCount
      }
    }
  }
`;

/**
 * __useFinbigsConnectionQuery__
 *
 * To run a query within a React component, call `useFinbigsConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFinbigsConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFinbigsConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFinbigsConnectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FinbigsConnectionQuery,
    FinbigsConnectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FinbigsConnectionQuery,
    FinbigsConnectionQueryVariables
  >(FinbigsConnectionDocument, options);
}
export function useFinbigsConnectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FinbigsConnectionQuery,
    FinbigsConnectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FinbigsConnectionQuery,
    FinbigsConnectionQueryVariables
  >(FinbigsConnectionDocument, options);
}
export type FinbigsConnectionQueryHookResult = ReturnType<
  typeof useFinbigsConnectionQuery
>;
export type FinbigsConnectionLazyQueryHookResult = ReturnType<
  typeof useFinbigsConnectionLazyQuery
>;
export type FinbigsConnectionQueryResult = Apollo.QueryResult<
  FinbigsConnectionQuery,
  FinbigsConnectionQueryVariables
>;
export const UpdateFinbigDocument = gql`
  mutation updateFinbig($input: updateFinbigInput) {
    updateFinbig(input: $input) {
      finbig {
        id
        title
      }
    }
  }
`;
export type UpdateFinbigMutationFn = Apollo.MutationFunction<
  UpdateFinbigMutation,
  UpdateFinbigMutationVariables
>;

/**
 * __useUpdateFinbigMutation__
 *
 * To run a mutation, you first call `useUpdateFinbigMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFinbigMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFinbigMutation, { data, loading, error }] = useUpdateFinbigMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFinbigMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateFinbigMutation,
    UpdateFinbigMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateFinbigMutation,
    UpdateFinbigMutationVariables
  >(UpdateFinbigDocument, options);
}
export type UpdateFinbigMutationHookResult = ReturnType<
  typeof useUpdateFinbigMutation
>;
export type UpdateFinbigMutationResult =
  Apollo.MutationResult<UpdateFinbigMutation>;
export type UpdateFinbigMutationOptions = Apollo.BaseMutationOptions<
  UpdateFinbigMutation,
  UpdateFinbigMutationVariables
>;
export const CreateEmailAuthDocument = gql`
  mutation createEmailAuth($input: createEmailAuthInput) {
    createEmailAuth(input: $input) {
      emailAuth {
        code
      }
    }
  }
`;
export type CreateEmailAuthMutationFn = Apollo.MutationFunction<
  CreateEmailAuthMutation,
  CreateEmailAuthMutationVariables
>;

/**
 * __useCreateEmailAuthMutation__
 *
 * To run a mutation, you first call `useCreateEmailAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmailAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmailAuthMutation, { data, loading, error }] = useCreateEmailAuthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEmailAuthMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateEmailAuthMutation,
    CreateEmailAuthMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateEmailAuthMutation,
    CreateEmailAuthMutationVariables
  >(CreateEmailAuthDocument, options);
}
export type CreateEmailAuthMutationHookResult = ReturnType<
  typeof useCreateEmailAuthMutation
>;
export type CreateEmailAuthMutationResult =
  Apollo.MutationResult<CreateEmailAuthMutation>;
export type CreateEmailAuthMutationOptions = Apollo.BaseMutationOptions<
  CreateEmailAuthMutation,
  CreateEmailAuthMutationVariables
>;
export const EmailAuthsDocument = gql`
  query emailAuths {
    emailAuths {
      id
      code
    }
  }
`;

/**
 * __useEmailAuthsQuery__
 *
 * To run a query within a React component, call `useEmailAuthsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailAuthsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailAuthsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEmailAuthsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    EmailAuthsQuery,
    EmailAuthsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<EmailAuthsQuery, EmailAuthsQueryVariables>(
    EmailAuthsDocument,
    options
  );
}
export function useEmailAuthsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EmailAuthsQuery,
    EmailAuthsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<EmailAuthsQuery, EmailAuthsQueryVariables>(
    EmailAuthsDocument,
    options
  );
}
export type EmailAuthsQueryHookResult = ReturnType<typeof useEmailAuthsQuery>;
export type EmailAuthsLazyQueryHookResult = ReturnType<
  typeof useEmailAuthsLazyQuery
>;
export type EmailAuthsQueryResult = Apollo.QueryResult<
  EmailAuthsQuery,
  EmailAuthsQueryVariables
>;
export const DeleteEmailAuthDocument = gql`
  mutation deleteEmailAuth($input: deleteEmailAuthInput) {
    deleteEmailAuth(input: $input) {
      emailAuth {
        id
        code
      }
    }
  }
`;
export type DeleteEmailAuthMutationFn = Apollo.MutationFunction<
  DeleteEmailAuthMutation,
  DeleteEmailAuthMutationVariables
>;

/**
 * __useDeleteEmailAuthMutation__
 *
 * To run a mutation, you first call `useDeleteEmailAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEmailAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEmailAuthMutation, { data, loading, error }] = useDeleteEmailAuthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteEmailAuthMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteEmailAuthMutation,
    DeleteEmailAuthMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteEmailAuthMutation,
    DeleteEmailAuthMutationVariables
  >(DeleteEmailAuthDocument, options);
}
export type DeleteEmailAuthMutationHookResult = ReturnType<
  typeof useDeleteEmailAuthMutation
>;
export type DeleteEmailAuthMutationResult =
  Apollo.MutationResult<DeleteEmailAuthMutation>;
export type DeleteEmailAuthMutationOptions = Apollo.BaseMutationOptions<
  DeleteEmailAuthMutation,
  DeleteEmailAuthMutationVariables
>;
export const CreateSubscriptionHistoryDocument = gql`
  mutation createSubscriptionHistory($input: createSubscriptionHistoryInput) {
    createSubscriptionHistory(input: $input) {
      subscriptionHistory {
        id
        created_at
        period
      }
    }
  }
`;
export type CreateSubscriptionHistoryMutationFn = Apollo.MutationFunction<
  CreateSubscriptionHistoryMutation,
  CreateSubscriptionHistoryMutationVariables
>;

/**
 * __useCreateSubscriptionHistoryMutation__
 *
 * To run a mutation, you first call `useCreateSubscriptionHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubscriptionHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubscriptionHistoryMutation, { data, loading, error }] = useCreateSubscriptionHistoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSubscriptionHistoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSubscriptionHistoryMutation,
    CreateSubscriptionHistoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSubscriptionHistoryMutation,
    CreateSubscriptionHistoryMutationVariables
  >(CreateSubscriptionHistoryDocument, options);
}
export type CreateSubscriptionHistoryMutationHookResult = ReturnType<
  typeof useCreateSubscriptionHistoryMutation
>;
export type CreateSubscriptionHistoryMutationResult =
  Apollo.MutationResult<CreateSubscriptionHistoryMutation>;
export type CreateSubscriptionHistoryMutationOptions =
  Apollo.BaseMutationOptions<
    CreateSubscriptionHistoryMutation,
    CreateSubscriptionHistoryMutationVariables
  >;
export const LoginDocument = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const CreateTokenDocument = gql`
  mutation createToken($input: createTokenInput!) {
    createToken(input: $input) {
      token {
        id
      }
    }
  }
`;
export type CreateTokenMutationFn = Apollo.MutationFunction<
  CreateTokenMutation,
  CreateTokenMutationVariables
>;

/**
 * __useCreateTokenMutation__
 *
 * To run a mutation, you first call `useCreateTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTokenMutation, { data, loading, error }] = useCreateTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTokenMutation,
    CreateTokenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTokenMutation, CreateTokenMutationVariables>(
    CreateTokenDocument,
    options
  );
}
export type CreateTokenMutationHookResult = ReturnType<
  typeof useCreateTokenMutation
>;
export type CreateTokenMutationResult =
  Apollo.MutationResult<CreateTokenMutation>;
export type CreateTokenMutationOptions = Apollo.BaseMutationOptions<
  CreateTokenMutation,
  CreateTokenMutationVariables
>;
export const FetchTokenDocument = gql`
  mutation fetchToken($userId: String, $token: String) {
    fetchToken(userId: $userId, token: $token) {
      id
      token
      userId
    }
  }
`;
export type FetchTokenMutationFn = Apollo.MutationFunction<
  FetchTokenMutation,
  FetchTokenMutationVariables
>;

/**
 * __useFetchTokenMutation__
 *
 * To run a mutation, you first call `useFetchTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFetchTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fetchTokenMutation, { data, loading, error }] = useFetchTokenMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useFetchTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    FetchTokenMutation,
    FetchTokenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<FetchTokenMutation, FetchTokenMutationVariables>(
    FetchTokenDocument,
    options
  );
}
export type FetchTokenMutationHookResult = ReturnType<
  typeof useFetchTokenMutation
>;
export type FetchTokenMutationResult =
  Apollo.MutationResult<FetchTokenMutation>;
export type FetchTokenMutationOptions = Apollo.BaseMutationOptions<
  FetchTokenMutation,
  FetchTokenMutationVariables
>;
export const UpdateTokenDocument = gql`
  mutation updateToken($input: updateTokenInput) {
    updateToken(input: $input) {
      token {
        id
        token
      }
    }
  }
`;
export type UpdateTokenMutationFn = Apollo.MutationFunction<
  UpdateTokenMutation,
  UpdateTokenMutationVariables
>;

/**
 * __useUpdateTokenMutation__
 *
 * To run a mutation, you first call `useUpdateTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTokenMutation, { data, loading, error }] = useUpdateTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTokenMutation,
    UpdateTokenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTokenMutation, UpdateTokenMutationVariables>(
    UpdateTokenDocument,
    options
  );
}
export type UpdateTokenMutationHookResult = ReturnType<
  typeof useUpdateTokenMutation
>;
export type UpdateTokenMutationResult =
  Apollo.MutationResult<UpdateTokenMutation>;
export type UpdateTokenMutationOptions = Apollo.BaseMutationOptions<
  UpdateTokenMutation,
  UpdateTokenMutationVariables
>;
export const DeleteTokenDocument = gql`
  mutation deleteToken($input: deleteTokenInput) {
    deleteToken(input: $input) {
      token {
        id
      }
    }
  }
`;
export type DeleteTokenMutationFn = Apollo.MutationFunction<
  DeleteTokenMutation,
  DeleteTokenMutationVariables
>;

/**
 * __useDeleteTokenMutation__
 *
 * To run a mutation, you first call `useDeleteTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTokenMutation, { data, loading, error }] = useDeleteTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTokenMutation,
    DeleteTokenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTokenMutation, DeleteTokenMutationVariables>(
    DeleteTokenDocument,
    options
  );
}
export type DeleteTokenMutationHookResult = ReturnType<
  typeof useDeleteTokenMutation
>;
export type DeleteTokenMutationResult =
  Apollo.MutationResult<DeleteTokenMutation>;
export type DeleteTokenMutationOptions = Apollo.BaseMutationOptions<
  DeleteTokenMutation,
  DeleteTokenMutationVariables
>;
export const TokenDocument = gql`
  query token($id: ID!) {
    token(id: $id) {
      id
      created_at
      userId
      token
    }
  }
`;

/**
 * __useTokenQuery__
 *
 * To run a query within a React component, call `useTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTokenQuery(
  baseOptions: Apollo.QueryHookOptions<TokenQuery, TokenQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TokenQuery, TokenQueryVariables>(
    TokenDocument,
    options
  );
}
export function useTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TokenQuery, TokenQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TokenQuery, TokenQueryVariables>(
    TokenDocument,
    options
  );
}
export type TokenQueryHookResult = ReturnType<typeof useTokenQuery>;
export type TokenLazyQueryHookResult = ReturnType<typeof useTokenLazyQuery>;
export type TokenQueryResult = Apollo.QueryResult<
  TokenQuery,
  TokenQueryVariables
>;
export const TokensDocument = gql`
  query tokens($sort: String, $limit: Int, $start: Int, $where: JSON) {
    tokens(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
      userId
      token
    }
  }
`;

/**
 * __useTokensQuery__
 *
 * To run a query within a React component, call `useTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokensQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTokensQuery(
  baseOptions?: Apollo.QueryHookOptions<TokensQuery, TokensQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TokensQuery, TokensQueryVariables>(
    TokensDocument,
    options
  );
}
export function useTokensLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TokensQuery, TokensQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TokensQuery, TokensQueryVariables>(
    TokensDocument,
    options
  );
}
export type TokensQueryHookResult = ReturnType<typeof useTokensQuery>;
export type TokensLazyQueryHookResult = ReturnType<typeof useTokensLazyQuery>;
export type TokensQueryResult = Apollo.QueryResult<
  TokensQuery,
  TokensQueryVariables
>;
export const CreateUserDocument = gql`
  mutation createUser($input: createUserInput!) {
    createUser(input: $input) {
      user {
        id
        email
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const UsersDocument = gql`
  query users($sort: String, $limit: Int, $start: Int, $where: JSON) {
    users(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
      email
      username
      name
      smsReception
      emailReception
      phone
      isDeleted
      deletedAt
      downloadCount
      subscriptionDate
      expirationDate
      isSubscribe
      created_at
      downloadCount
      subscription_histories {
        id
        created_at
        title
        price
        period
      }
    }
  }
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const UserDocument = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      email
      username
      name
      isSubscribe
      expirationDate
      smsReception
      subscriptionDate
      emailReception
      phone
      isAdmin
      isDeleted
      deletedAt
      downloadCount
      finbigDownload {
        id
        title
        description
        thumbnail
        isBest
      }
      finbigView {
        id
        title
        description
        thumbnail
        isBest
      }
      subscription_histories {
        id
        title
        price
        period
        created_at
        paymentMethod
        paymentStatus
      }
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UpdateUserDocument = gql`
  mutation updateUser($input: updateUserInput!) {
    updateUser(input: $input) {
      user {
        id
        email
        phone
        smsReception
        expirationDate
        emailReception
      }
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const CreateVisualDatumDocument = gql`
  mutation createVisualDatum($input: createVisualDatumInput) {
    createVisualDatum(input: $input) {
      visualDatum {
        id
        title
      }
    }
  }
`;
export type CreateVisualDatumMutationFn = Apollo.MutationFunction<
  CreateVisualDatumMutation,
  CreateVisualDatumMutationVariables
>;

/**
 * __useCreateVisualDatumMutation__
 *
 * To run a mutation, you first call `useCreateVisualDatumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVisualDatumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVisualDatumMutation, { data, loading, error }] = useCreateVisualDatumMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVisualDatumMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateVisualDatumMutation,
    CreateVisualDatumMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateVisualDatumMutation,
    CreateVisualDatumMutationVariables
  >(CreateVisualDatumDocument, options);
}
export type CreateVisualDatumMutationHookResult = ReturnType<
  typeof useCreateVisualDatumMutation
>;
export type CreateVisualDatumMutationResult =
  Apollo.MutationResult<CreateVisualDatumMutation>;
export type CreateVisualDatumMutationOptions = Apollo.BaseMutationOptions<
  CreateVisualDatumMutation,
  CreateVisualDatumMutationVariables
>;
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
export const VisualDataDocument = gql`
  query visualData($sort: String, $limit: Int, $start: Int, $where: JSON) {
    visualData(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
      created_at
      title
      category
      description
      viewCount
      isShow
      contents
      thumbnail
    }
  }
`;

/**
 * __useVisualDataQuery__
 *
 * To run a query within a React component, call `useVisualDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useVisualDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVisualDataQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useVisualDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    VisualDataQuery,
    VisualDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VisualDataQuery, VisualDataQueryVariables>(
    VisualDataDocument,
    options
  );
}
export function useVisualDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VisualDataQuery,
    VisualDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VisualDataQuery, VisualDataQueryVariables>(
    VisualDataDocument,
    options
  );
}
export type VisualDataQueryHookResult = ReturnType<typeof useVisualDataQuery>;
export type VisualDataLazyQueryHookResult = ReturnType<
  typeof useVisualDataLazyQuery
>;
export type VisualDataQueryResult = Apollo.QueryResult<
  VisualDataQuery,
  VisualDataQueryVariables
>;
export const VisualDataConnectionDocument = gql`
  query visualDataConnection($where: JSON) {
    visualDataConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

/**
 * __useVisualDataConnectionQuery__
 *
 * To run a query within a React component, call `useVisualDataConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useVisualDataConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVisualDataConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useVisualDataConnectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    VisualDataConnectionQuery,
    VisualDataConnectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    VisualDataConnectionQuery,
    VisualDataConnectionQueryVariables
  >(VisualDataConnectionDocument, options);
}
export function useVisualDataConnectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VisualDataConnectionQuery,
    VisualDataConnectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    VisualDataConnectionQuery,
    VisualDataConnectionQueryVariables
  >(VisualDataConnectionDocument, options);
}
export type VisualDataConnectionQueryHookResult = ReturnType<
  typeof useVisualDataConnectionQuery
>;
export type VisualDataConnectionLazyQueryHookResult = ReturnType<
  typeof useVisualDataConnectionLazyQuery
>;
export type VisualDataConnectionQueryResult = Apollo.QueryResult<
  VisualDataConnectionQuery,
  VisualDataConnectionQueryVariables
>;
export const UpdateVisualDatumDocument = gql`
  mutation updateVisualDatum($input: updateVisualDatumInput) {
    updateVisualDatum(input: $input) {
      visualDatum {
        id
      }
    }
  }
`;
export type UpdateVisualDatumMutationFn = Apollo.MutationFunction<
  UpdateVisualDatumMutation,
  UpdateVisualDatumMutationVariables
>;

/**
 * __useUpdateVisualDatumMutation__
 *
 * To run a mutation, you first call `useUpdateVisualDatumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVisualDatumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVisualDatumMutation, { data, loading, error }] = useUpdateVisualDatumMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVisualDatumMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateVisualDatumMutation,
    UpdateVisualDatumMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateVisualDatumMutation,
    UpdateVisualDatumMutationVariables
  >(UpdateVisualDatumDocument, options);
}
export type UpdateVisualDatumMutationHookResult = ReturnType<
  typeof useUpdateVisualDatumMutation
>;
export type UpdateVisualDatumMutationResult =
  Apollo.MutationResult<UpdateVisualDatumMutation>;
export type UpdateVisualDatumMutationOptions = Apollo.BaseMutationOptions<
  UpdateVisualDatumMutation,
  UpdateVisualDatumMutationVariables
>;
export const DeleteVisualDatumDocument = gql`
  mutation deleteVisualDatum($input: deleteVisualDatumInput) {
    deleteVisualDatum(input: $input) {
      visualDatum {
        id
      }
    }
  }
`;
export type DeleteVisualDatumMutationFn = Apollo.MutationFunction<
  DeleteVisualDatumMutation,
  DeleteVisualDatumMutationVariables
>;

/**
 * __useDeleteVisualDatumMutation__
 *
 * To run a mutation, you first call `useDeleteVisualDatumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVisualDatumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVisualDatumMutation, { data, loading, error }] = useDeleteVisualDatumMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteVisualDatumMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteVisualDatumMutation,
    DeleteVisualDatumMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteVisualDatumMutation,
    DeleteVisualDatumMutationVariables
  >(DeleteVisualDatumDocument, options);
}
export type DeleteVisualDatumMutationHookResult = ReturnType<
  typeof useDeleteVisualDatumMutation
>;
export type DeleteVisualDatumMutationResult =
  Apollo.MutationResult<DeleteVisualDatumMutation>;
export type DeleteVisualDatumMutationOptions = Apollo.BaseMutationOptions<
  DeleteVisualDatumMutation,
  DeleteVisualDatumMutationVariables
>;
