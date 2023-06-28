import { SessionProvider } from "next-auth/react";

import "@progress/kendo-theme-default/dist/all.css";
import "./styles.scss";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
