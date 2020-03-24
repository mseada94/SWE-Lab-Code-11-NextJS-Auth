export default function App({ id, userId, title, state }) {
  return (
    <>
        <tr>
            <td>{id}</td>
            <td>{userId}</td>
            <td>{title}</td>
            <td>{state}</td>
        </tr>
        <style jsx>{`
            tr:nth-child(odd){
              background-color: #fff;
            }

            tr:nth-child(even){
                background-color: #f2f2f2;
            }
              
            tr:hover {
                background-color: #ddd;
            }

            td {
                border: 1px solid #ddd;
                padding: 8px;
              }
        `}</style>
    </>
  );
}
