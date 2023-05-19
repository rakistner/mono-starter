import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import accountResolver from "../../resolvers/account";
import accountSchema from "starter-graphql/schema/account";

const resolvers = {
  Query: {
    ...accountResolver.Query,
  },
  Mutation: {
    ...accountResolver.Mutation,
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs: [accountSchema],
});

export default startServerAndCreateNextHandler(server);
