import Layout from "../components/layout";
import Button from "components/button";
import { useLazyQuery } from "@apollo/client";
import { getAccount as GetAccountDocument } from "starter-graphql/operations/account";
import styles from "./index.module.css";

export default function Page() {
  const [getAccount, { data }] = useLazyQuery(GetAccountDocument);
  return (
    <Layout>
      <div className={styles.main}>
        <p>
          Get started by editing&nbsp;
          <code>ui/pages/index.tsx</code>
        </p>
        {data ? <p>{JSON.stringify(data)}</p> : null}
        <Button
          className={styles.button}
          onClick={() => {
            getAccount({ variables: { id: "1" } });
          }}
        >
          Click me!
        </Button>
      </div>
    </Layout>
  );
}
