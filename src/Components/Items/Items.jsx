import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Items = () => {
    const mani = useLoaderData()
    
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 '>
            {
                mani.map(use => <Item
                key={use.id}
                user={use}
                ></Item>)
            }
        </div>
    );
};

export default Items;