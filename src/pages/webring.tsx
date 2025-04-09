import React from "react";
import Layout from "@theme/Layout";

import froglist from "/static/webring/froglist.json";

export default function Hello() {
  return (
    <Layout title="GP Webring Index" description="GP Webring Index">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
          padding: "3rem 2rem",
          width: "100%",
          maxWidth: "768px",
          margin: "0 auto",
        }}
      >
        <h1>Graphics Programming Webring</h1>
        <ul style={{ padding: 0, margin: 0 }}>
          {froglist.map((frog: any, i: number) => (
            <li
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a href={frog.url} style={{ fontSize: "1.25rem" }}>
                {frog.displayName}
              </a>
              <p>{frog.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
