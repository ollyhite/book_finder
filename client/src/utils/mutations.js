import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: username!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($UserId: ID!, $savedBooks: String!) {
    addBook(UserId: $UserId, savedBooks: $bookId) {
      _id
      username
      savedBooks
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation savedBook($savedBook: String!) {
    savedBook(savedBook: $bookId) {
      _id
      username
      savedBooks
    }
  }
`;
