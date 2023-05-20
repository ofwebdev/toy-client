import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const BlogPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>

          <div className="bg-white shadow-md rounded p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">
              What is an access token and refresh token?
            </h2>
            <p className="mb-4">
              An access token is a security credential that is issued by an
              authentication server and is used to authenticate and authorize
              API requests. It represents the user's identity and permissions
              and is typically included in the request headers for API calls.
            </p>
            <p className="mb-4">
              A refresh token is a long-lived token that is used to obtain a new
              access token when the current access token expires. It allows the
              user to stay logged in without requiring them to provide their
              credentials again.
            </p>
            <p className="mb-4">
              Access tokens should be stored in the client-side application's
              memory or local storage, while refresh tokens should be securely
              stored on the server-side.
            </p>
          </div>

          <div className="bg-white shadow-md rounded p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">
              Compare SQL and NoSQL databases
            </h2>
            <p className="mb-4">
              SQL (Structured Query Language) databases are relational databases
              that store and manage data in structured tables with predefined
              schemas. They are suitable for complex data relationships and
              transactions, and offer ACID (Atomicity, Consistency, Isolation,
              Durability) compliance.
            </p>
            <p className="mb-4">
              NoSQL (Not Only SQL) databases are non-relational databases that
              provide flexible schemas and scalable performance. They are
              suitable for handling large volumes of unstructured or
              semi-structured data and offer high availability and horizontal
              scalability.
            </p>
          </div>

          <div className="bg-white shadow-md rounded p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">
              What is Express.js? What is Nest.js?
            </h2>
            <p className="mb-4">
              Express.js is a minimalistic and flexible web application
              framework for Node.js. It provides a robust set of features for
              building web applications and APIs, such as routing, middleware
              support, template engines, and database integration. It is widely
              used and has a large ecosystem of extensions and libraries.
            </p>
            <p className="mb-4">
              Nest.js is a progressive Node.js framework for building efficient,
              scalable, and maintainable server-side applications. It is built
              on top of Express.js and provides an opinionated structure and
              powerful features, such as dependency injection, modular
              architecture, built-in validation, and TypeScript support. It is
              often used for building enterprise-grade applications.
            </p>
          </div>

          <div className="bg-white shadow-md rounded p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">
              What is MongoDB aggregate and how does it work?
            </h2>
            <p className="mb-4">
              MongoDB's aggregate is a powerful feature that allows for advanced
              data analysis and manipulation within a collection. It follows a
              pipeline-based approach where you define a sequence of stages to
              process the data.
            </p>
            <p className="mb-4">
              Each stage in the pipeline performs a specific operation. Commonly
              used stages include `$match` for filtering documents, `$group` for
              grouping and aggregating data, `$project` for reshaping and
              including/excluding fields, and `$sort` for sorting the output.
            </p>
            <p className="mb-4">
              The documents from the collection are passed through the stages in
              the specified order. The output of one stage becomes the input for
              the next stage. This allows you to perform complex data
              manipulations and obtain the desired results.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
