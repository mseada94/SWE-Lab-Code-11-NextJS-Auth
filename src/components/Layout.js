import Header from "./Header";
import Meta from './Meta';

export default function Layout({children, pageTitle, pageDescription}) {
  return (
    <>
      <Meta pageTitle={pageTitle} pageDescription={pageDescription} />
      <Header />
      <h1>{pageTitle}</h1>
      <div className="container">{children}</div>

      <style jsx>
        {`
          h1{
            margin: 0;
            height: 250px;
            color: #ffffff;
            font-family:"balboa",sans-serif;
            font-weight: 300;
            font-size: 2.5rem;
            line-height: 250px;
            text-align: center;
            background: #02b3e4;
            background: -webkit-linear-gradient(to left, #0063f4, #0293f4, #02b3e4);
            background: linear-gradient(to left, #0063f4, #0293f4, #02b3e4);
          }
      `}
      </style>
    </>
  );
}
