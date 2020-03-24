export default function App({ children }) {
    return (
        <>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>UserId</th>
                <th>Title</th>
                <th>State</th>
            </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
        <style jsx>{`
            table {
                margin: auto;
                font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 90%;
              }
              
              th {
                border: 1px solid #ddd;
                padding: 12px 8px;
                text-align: left;
                background-color: #0063f4;
                color: white;
              }
        `}</style>
        </>
    );
  }
  