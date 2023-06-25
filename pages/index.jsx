import Head from "next/head";
import Link from "next/link";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";


const Home = () => {


  
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>ChatWithDoc</title>
      </Head>

      <Header />

      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Chat{" "}
          <span className="relative whitespace-nowrap text-indigo-600">
            <span className="relative">With</span>
          </span>{" "}
          Document
        </h1>

        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">

        </h2>
        <Link
        className="bg-indigo-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-indigo-700 transition"
        href="/chat"
        >
        Get Started
      </Link>
      
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
          
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
