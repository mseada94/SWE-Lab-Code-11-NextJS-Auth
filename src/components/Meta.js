import Head from 'next/head';

export default function Meta({pageTitle, pageDescription}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="Description" content={pageDescription}></meta>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
      <style jsx global>
        {`
          html, body {
            height: 100%;
            margin: 0;
            font-family: "Open Sans", sans-serif;
          }
          body {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            background-image: linear-gradient(120deg, #f7f7f7 0%, #eefafc 100%);   
          }
        `}
      </style>
    </>
  );
}