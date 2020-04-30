export default function TodoTable({ children }) {
    return (
        <>
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
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
  