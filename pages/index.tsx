import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SearchHome from "../components/SearchHome";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-5 mt-10 w-full lg:w-1/2 mx-auto justify-center">
        <img className="m-auto " height="300" width="300" src="/home-illustration.png"/>
        <SearchHome />
      </main>
      <Footer/>
    </>
  );
};

export default Home;
