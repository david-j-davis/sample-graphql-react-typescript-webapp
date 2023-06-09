/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Joke = {
  __typename?: 'Joke';
  id?: Maybe<Scalars['ID']>;
  joke?: Maybe<Scalars['String']>;
  permalink?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  joke?: Maybe<Joke>;
};


export type QueryJokeArgs = {
  id?: InputMaybe<Scalars['ID']>;
  query?: InputMaybe<Scalars['String']>;
};
