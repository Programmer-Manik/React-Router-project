import React, { useId } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const UserId = useLoaderData()
    const navigate = useNavigate()
    const handelNavigate = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h1>User Id No : ${UserId.id}</h1>
            <h1>User name : ${useId.name}</h1>
            <h1>User address : ${useId.address}</h1>
            <h1>User email:${UserId.email}</h1>
            <button onClick={handelNavigate}>go back</button>
        </div>
    );
};

export default UserDetails;