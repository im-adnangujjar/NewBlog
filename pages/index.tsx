import type { NextPage } from "next";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./HomePage";
import Header from "../src/commonComponent/header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TechloSet Solutions</title>
        <meta name='description' content='TechloSet Solutions' />
        <meta
          name='keywords'
          content='TechloSet Solutions, Web and Mobile Development, Software Development'
        />
        <meta name='author' content='TechloSet Solutions' />
        <meta name='techloset' content='technology solutions company' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      
      <HomePage />
    </div>

  );
};

export default Home;
