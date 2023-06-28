import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin`
      if (req.nextUrl.pathname === "/admin") {
        return token?.role === "admin"; // Admin role
      }
      // `/me`
      return !!token; // If there is a token, the user is authenticated
    },
  },
});

export const config = { matcher: ["/admin", "/me"] };
