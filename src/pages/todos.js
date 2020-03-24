import { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import TodoTable from '../components/TodoTable';
import Todo from '../components/Todo';

export default function Todos({data}) {
    let [todos, setTodos] = useState(data);
    const todoItems = todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          userId={todo.userId}
          title={todo.title}
          state={todo.completed ? 'Completed' : 'Todo'}
        />
    ));
    return (
        <>
            <Layout pageTitle="Todo" pageDescription="Tanta University">
                <main>
                    <TodoTable>
                        {todoItems}
                    </TodoTable>
                </main>
            </Layout>
            <style jsx>{`
                main {
                    text-align: center;
                    padding-top:20px;
                }
            `}</style>
        </>
    );
}

export async function getServerSideProps(props) {
    console.log(props);
    const url = `https://jsonplaceholder.typicode.com/todos/`;
    const result = await axios.get(url);
    console.log('-----get data-------')
    return { props: { data: result.data } }
}