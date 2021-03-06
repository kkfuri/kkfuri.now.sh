import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* title */}
      <title>Diego Kfuri</title>

      {/* Search Engine */}
      <meta
        name="description"
        content="Personal page for Diego Kfuri, software engineer"
      />
      <meta
        name="image"
        content="https://avatars0.githubusercontent.com/u/42350846"
      />

      {/* Schema.org for Google */}
      <meta itemProp="name" content="Diego Kfuri" />
      <meta
        itemprop="description"
        content="Personal page for Diego Kfuri, software engineer"
      />
      <meta
        itemprop="image"
        content="https://avatars0.githubusercontent.com/u/42350846"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Diego Kfuri" />
      <meta
        name="twitter:description"
        content="Personal page for Diego Kfuri, software engineer"
      />
      <meta name="twitter:site" content="@kfurinho" />
      <meta
        name="twitter:image:src"
        content="https://avatars0.githubusercontent.com/u/42350846"
      />

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta name="og:title" content="Diego Kfuri" />
      <meta
        name="og:description"
        content="Personal page for Diego Kfuri, software engineer"
      />
      <meta
        name="og:image"
        content="https://avatars0.githubusercontent.com/u/42350846"
      />
      <meta name="og:url" content="https://kkfuri.now.sh/" />
      <meta name="og:site_name" content="Diego Kfuri" />
      <meta name="og:locale" content="pt_BR" />
      <meta name="og:type" content="website" />

      {/* favicon */}
      <link rel="icon" href="favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="favicon/site.webmanifest" />
    </Head>
  );
}
