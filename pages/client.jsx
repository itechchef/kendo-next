import { useSession } from "next-auth/react";
import Layout from "../components/layout";

export default function ClientPage() {
  const { data: session, status } = useSession();
  return (
    <Layout>
      <h1 className="text-5xl mb-4">Client Side Rendering</h1>

      {status === "authenticated" ? (
        <p>Signed in as {session.user.email}</p>
      ) : (
        <a href="/api/auth/signin">Sign in</a>
      )}
    </Layout>
  );
}
