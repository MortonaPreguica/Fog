import React, { useState } from "react";
import useUser from "../lib/useUser";
import Layout from "../components/Layout";
import Form from "../components/Form";
import fetchJson from "../lib/fetchJson";

const Login = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.prevent.default();

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      );
    } catch (error) {
      console.error("An unexpected error happended:", error);
      setErrorMsg(error.data.message);
    }
  }
  return (
    <Layout>
      <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
    </Layout>
  );
};

export default Login;
