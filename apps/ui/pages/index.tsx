import Image from "next/image";
import Layout from "../components/layout";
import Button from "components/button";
import { useLazyQuery } from "@apollo/client";
import GET_ACCOUNT from "starter-graphql/operations/account";
import styles from "./index.module.css";

export default function Page() {
  const [getAccount, { data }] = useLazyQuery(GET_ACCOUNT);
  return (
    <Layout>
      <div className={styles.main}>
        <p>
          Get started by editing&nbsp;
          <code>src/pages/index.tsx</code>
        </p>
        {data ? <p>{JSON.stringify(data)}</p> : null}
        <Button
          className={styles.button}
          onClick={() => getAccount({ variables: { id: "1" } })}
        >
          Click me!
        </Button>
      </div>
    </Layout>
  );
}
