/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'preact/hooks';
import { BasicTemplate } from '../../../components/BasicTemplate';
import { Header } from '../../../components/Header';
import { Site } from '../../../types';

/**
 * About
 * * Fetches site data based on URL params (/:org)
 * ! if no route or org is available, an error page is displayed
 */
export default function About() {
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
      <main>
        <Header routes={page.routes} />
        <BasicTemplate styles={page.styles} layout={page.routes.find((r) => r.name === 'about')} />
      </main>
    </div>
  );
}
