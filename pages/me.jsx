import { useSession } from "next-auth/react";
import Layout from "../components/layout";

export default function MePage() {
  const { data } = useSession();

  return (
    <Layout>
      <h1 className="text-5xl mb-4">Me</h1>
      <p>My content</p>
    </Layout>
  );
}
