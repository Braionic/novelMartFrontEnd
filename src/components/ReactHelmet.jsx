import React from "react";
import { Helmet } from "react-helmet";

export default function ReactHelmet({pageTitle="home", page="/"}) {
  return (
    <Helmet>
         <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      <link rel="canonical" href={`${page}`} />
    </Helmet>
  );
}
