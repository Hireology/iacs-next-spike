/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'preact/hooks';
import { BasicTemplate } from '../../components/BasicTemplate';
import { Header } from '../../components/Header';
import { Site } from '../../types';

/**
 * Home
 * * Entry point for In-App Career Sites
 * * Fetches initial site data based on URL params (/:org)
 * * Renders dynamic routes
 * ! if no route or org is available, an error page is displayed
 */
export default function Home() {
  const router = useRouter();
  const { organization } = router.query;
  const [page, setPage] = useState({} as Site);

  useEffect(() => {
    async function getOrganization() {
      await axios.get('/api/organization').then((r) => {
        setPage(r?.data?.organization);
      });
    }
    getOrganization();
  }, []);

  if (!organization || !page?.name) return <div>Sorry, no org found</div>;

  return (
    <div>
      <Head>
        <title>Next & Preact Spike</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header routes={page.routes} />
      <BasicTemplate styles={page.styles} layout={page.routes.find((r) => r.name === 'home')} />
    </div>
  );
}
