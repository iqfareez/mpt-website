import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_mobile_application_re_13u3.svg').default,
    description: (
      <>
        MPT was designed from the the ground up to be simple
        and pleasing to the eye
      </>
    ),
  },
  {
    title: 'Features packed',
    Svg: require('@site/static/img/undraw_apps_re_ienc.svg').default,
    description: (
      <>
        Aside of a prayer time app, MPT contains a lot of useful features
        that shall increase your Muslim productivity
      </>
    ),
  },
  {
    title: 'Active development',
    Svg: require('@site/static/img/undraw_futuristic_interface_re_0cm6.svg').default,
    description: (
      <>
        Expect new features and bug fixes for a long time to come. (Inshallah)
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
