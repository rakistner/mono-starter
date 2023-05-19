import { DocumentNode } from "graphql";
import gql from "graphql-tag";

export const getAccount: DocumentNode = gql`
  query getAccount($id: String) {
    getAccount(id: $id) {
      id
      name
    }
  }
`;

export const saveAccount: DocumentNode = gql`
  mutation saveAccount($input: AccountInput) {
    saveAccount(input: $input) {
      id
      name
    }
  }
`;
