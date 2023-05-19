const getAccount = (id: string) => {
  return {
    id,
    name: id + "_example",
  };
};

export default {
  Query: {
    getAccount: (_: any, args: any) => {
      return getAccount(args.id);
    },
  },
};
