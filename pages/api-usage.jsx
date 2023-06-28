import Layout from "../components/layout";

export default function ApiUsagePage() {
  return (
    <Layout>
      <h1>API Usage</h1>
      <h2>Session</h2>
      <p>/api/v1/session</p>
      <iframe src="/api/v1/session" />
      <h2>JSON Web Token</h2>
      <p>/api/v1/jwt</p>
      <iframe src="/api/v1/jwt" />
    </Layout>
  );
}
