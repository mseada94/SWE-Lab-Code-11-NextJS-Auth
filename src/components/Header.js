import Link from 'next/link';
export default function Header() {
  return (
    <header className="header">
      <img className="logo" src="/images/logo.png" />
      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/todos"><a>Todos</a></Link></li>
        </ul>
      </nav>
      <style jsx>
        {`
          .header {
            display: flex;
            height: 60px;
            padding: 0 10px;
            align-items: center;
            justify-content: flex-start;
            background-color: #fff;
          }
          .logo{
            width: 50px;
          }
          nav ul {
            display: flex;
            justify-content: flex-start;
            padding: 12px;
            list-style-type: none;
          }
          nav li {
            display: block;
            height:40px;
            line-height: 40px;
            text-align: center;
            width: 70px;
            border-right: 2px solid #f7f7f7;
          }
          nav li a {
            display: block;
            text-decoration: none;
            color: #0063f4;
            font-weight: bold;
          }
          nav li a:hover {
            background-color: #eefafc;
            color: #02b3e4;
          }
          nav li a:active {
            background-color: #f7f7f7;
            color: #02b3e4;
          }
        `}
      </style>
    </header>
  );
}
