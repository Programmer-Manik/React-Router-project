import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({user}) => {
    const {name, id, username, email} = user
    return (
        <div className='border border-solid border-red-300 rounded p-5'>
            <h2>No:${id}</h2>
            <h2>Name:${name}</h2>
            <h2>User:${username}</h2>
            <h2>Email:${email}</h2>
            <Link className="border border-solid border-red-200 p-1 rounded" to={`/Items/${id}`}>user details</Link>
        </div>
    );
};

export default Item;