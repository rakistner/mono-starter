import gql from "graphql-tag";

const accountSchema = gql`
  type Account {
    id: ID
    name: String
  }

  type Query {
    getAccount(id: String): Account
  }
`;

export default accountSchema;
