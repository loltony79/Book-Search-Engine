import { gql } from '@apollo/client';
// Mutati0ons for login add user and save book
// Login user mutation
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// Add user / signup mutation 
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// Save book mutation 
export const SAVE_BOOK = gql`
mutation SaveBook($input: BookInput!) {
  saveBook(input: $input) {
    username
    _id
    bookCount
    email
    savedBooks {
      title
      link
      image
      description
      bookId
      authors
    }
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;