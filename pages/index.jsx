import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/layout";

export default function IndexPage() {
  const { data: session, status } = useSession();

  return (
    <Layout>
      <h1>Kendo + Next.js</h1>

      {status === "authenticated" ? (
        <div>
          <p>
            Signed in as
            <br />
            <strong>{session.user.email ?? session.user.name}</strong>
          </p>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </div>
      ) : (
        <div>
          <div className="flex flex-col">
            <label>Username</label>
            <input name="username" type="text" />
            <label>Password</label>
            <input name="password" type="password" />
            <button
              onClick={() =>
                signIn("credentials", { username: "jsmith", password: "1234" })
              }
            >
              Sign in
            </button>
          </div>
          <div>
            <button onClick={() => signIn("google")}>
              Sign in with Google
            </button>
          </div>
          <div>
            <button onClick={() => signIn("github")}>
              Sign in with GitHub
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
