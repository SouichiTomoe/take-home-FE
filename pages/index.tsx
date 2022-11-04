import Head from 'next/head';
import { NextPage } from 'next';
import Dashboard from '../components/dashboard/Dashboard';

const Home: NextPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Challenge App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Dashboard data={data} />
      </main>
      <footer></footer>
    </>
  );
};

export const getStaticProps = async () => {
  //In order to work with Vercel environment variables.
  let url;
  if (process.env.NODE_ENV === 'production') {
    url = ``;
  } else {
    url = process.env.API_URL;
  }

  const res = await fetch(`${url}/api/home`);
  const data = await res.json();
  return { props: { data } };
};

export default Home;
