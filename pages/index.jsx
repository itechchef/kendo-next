import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/layout";
import { Button } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";

export default function IndexPage() {
  const { data: session, status } = useSession();

  return (
    <Layout>
      <h1 className="text-5xl mt-4 mb-8">Kendo + Next.js</h1>

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
          <div className="flex flex-col mb-8">
            <Label>Username</Label>
            <Input className="mb-2" name="username" type="text" />
            <Label>Password</Label>
            <Input className="mb-2" name="password" type="password" />
            <Button
              onClick={() =>
                signIn("credentials", { username: "jsmith", password: "1234" })
              }
            >
              Sign in
            </Button>
          </div>
          <div className="flex flex-col mb-4">
            <Button onClick={() => signIn("google")}>
              Sign in with Google
            </Button>
          </div>
          <div className="flex flex-col mb-4">
            <Button onClick={() => signIn("github")}>
              Sign in with GitHub
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
}
