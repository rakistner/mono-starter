import gql from "graphql-tag";

const accountSchema = gql`
  type Account {
    id: ID
    name: String
  }

  input AccountInput {
    id: ID
    name: String
  }

  type Query {
    getAccount(id: String): Account
  }

  type Mutation {
    saveAccount(input: AccountInput): Account
  }
`;

export default accountSchema;
