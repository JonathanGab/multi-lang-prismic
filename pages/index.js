import styles from '../styles/Home.module.css';
import { createClient } from '../prismicio';
import { PrismicRichText } from '@prismicio/react';
import { PrismicLink } from '@prismicio/react';
import { linkResolver } from '../prismicio';
import React from 'react';
export default function Home({ navigation }) {
  console.log(navigation);
  return (
    <div className={styles.container}>
      <PrismicLink href={linkResolver('fr-fr')} locale={'fr-fr'}>
        <button aria-label="French"> FR</button>
      </PrismicLink>
      <span className={styles.span_lang}>|</span>
      <PrismicLink href={linkResolver('en-us')} locale={'en-us'}>
        <button aria-label="English">EN</button>
      </PrismicLink>
      <span className={styles.span_lang}>|</span>
      <PrismicLink href={linkResolver('es-es')} locale={'es-es'}>
        <button aria-label="Español">EN</button>
      </PrismicLink>
      {navigation.data.navigationGroup.map((item, index) => (
        <React.Fragment key={index}>
          <PrismicRichText field={item.navigationMenu} />
        </React.Fragment>
      ))}
    </div>
  );
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle('navigation', { lang: locale });

  return {
    props: {
      navigation,
    },
  };
}
