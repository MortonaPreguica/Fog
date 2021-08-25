import React from "react";
import Head from "next/head";
import Header from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>With Iron Session</title>
    </Head>

    <Header />

    <main>
      <div>{children}</div>
    </main>
  </>
);

export default Layout;
