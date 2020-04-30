import { useState } from 'react';
export default function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        onLogin(username, password);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password" 
                />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
       
        <style jsx>{`
            form {
                margin auto;
                margin-top: 10px;
                max-width: 400px;
                width: 100%;
                padding: 20px;
                text-align: center;
            }
            label {
                color: #222222;
                display: block;
                font-weight: bold;
                font-size: 16px;
                line-height: 14px;
                margin: auto 0;
                max-width: 400px;
                width: 100%;
                text-align: left;
            }
            input {
                display: block;
                margin: auto 0;
                width: 100%;
                max-width: 380px;
                padding: 0 10px;
                border: 1px solid #cccccc;
                border-radius: 4px;
                font-size: 14px;
                font-family: Arial;
                line-height: 14px;
                height: 34px;
                color: #555;
                margin-top: 3px;
                margin-bottom: 15px;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
            }
            input:focus {
                border-color: #66afe9;
                outline: 0;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
            }
            button {
                color: #fff;
                margin: auto;
                width: 200px;
                background-color: #0063f4;
                margin-top: 5px;
                padding: 6px 16px;
                font-weight: bold;
                border-radius: 4px;
                font-size: 16px;
                font-family: Arial;
                line-height: 16px;
                height: 34px;
                text-align: center;
                vertical-align: middle;
                border: 1px solid #0293f4;
                cursor: pointer;
            }
            button:hover{
                background-color: #0293f4;
            }
        `}</style>
        </>
    );
  }
  