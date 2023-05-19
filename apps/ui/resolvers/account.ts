import type { Account, AccountInput } from "starter-graphql/types/types";

const logIdentifier = "[graphql]:";

const getAccount = (id: string): Account => {
  return {
    id,
    name: id + "_example",
  };
};

const saveAccount = (input: AccountInput): Account => {
  console.info(logIdentifier, " saveAccount ", input);
  return {
    id: "NEW_ACCOUNT_ID",
    name: input.name,
  };
};

const resolver = {
  Query: {
    getAccount: (_: any, args: any): Account => {
      return getAccount(args.id);
    },
  },
  Mutation: {
    saveAccount: (_: any, args: any): Account => {
      return saveAccount(args.input);
    },
  },
};

export default resolver;
