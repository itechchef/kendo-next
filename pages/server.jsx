import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import Layout from "../components/layout";

import { useSession } from "next-auth/react";

export default function ServerSidePage() {
  const { data: session } = useSession();

  return (
    <Layout>
      <h1>Server Side Rendering</h1>

      {session ? (
        <p>Signed in as {session.user.email}</p>
      ) : (
        <a href="/api/auth/signin">Sign in</a>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      session,
    },
  };
}
