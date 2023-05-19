import { DocumentNode } from "graphql";
import gql from "graphql-tag";

const getAccount: DocumentNode = gql`
  query getAccount($id: String) {
    getAccount(id: $id) {
      id
      name
    }
  }
`;

export default getAccount;
