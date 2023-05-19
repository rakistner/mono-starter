# Projects

1. Update the graphql `Account` schema (in `packages/graphql/src/schema/account`) to match the following JSON schema:

```json
{
  "description": "string",
  "email": "string",
  "type": "string",
  "locale": "string"
}
```

Update the AccountInput schema to match. Update the account operations (in `packages/graphql/src/operations/account`) to return the new schema fields.

2. Update the accounts resolver (in `apps/ui/resolvers/account`) to return fake account data for the updated `Account` schema.

3. Add a new form component (can be created in `packages/components` or in `apps/ui/components`) using the [React Hook Form](https://react-hook-form.com/) library. The input fields should be `name`, `description` (HTML textarea), `email`, `type`, and `locale` (HTML select).

4. Add the new form component to the app home page (in `apps/ui/pages/index.tsx`).

5. Create a function to handle the submission of the form. Implement the `saveAccount` mutation using the `useMutation` hook from `@apollo/client`.
