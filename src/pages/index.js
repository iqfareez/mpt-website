import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-bottom--sm"
            href='https://play.google.com/store/apps/details?id=live.iqfareez.waktusolatmalaysia'>
            Get app on Google Play Store
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-bottom--sm"
            to='docs/intro'>
            Read docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={"Welcome"}
      description="Simple and easy to use Prayer times app for Malaysia. Reliable data from JAKIM Malaysia. Available for Android and the web.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
