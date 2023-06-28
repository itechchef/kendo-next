import { useSession } from "next-auth/react";
import Layout from "../components/layout";

export default function MePage() {
  const { data } = useSession();

  return (
    <Layout>
      <h1>Me</h1>
      <p>My content</p>
    </Layout>
  );
}
