import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ username: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' id='username' onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
            </div>

            <label htmlFor='password'>Password:</label>
            <input type='text' name='password' id='password' />

            <input type='submit' value='Login' />

        </form>
    )
}

export default LoginForm