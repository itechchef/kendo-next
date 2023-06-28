import { useSession } from "next-auth/react";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";

export default function Layout({ children }) {
  const { data: session, status } = useSession();

  return (
    <>
      <Header />
      {status === "authenticated" && <Nav />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
