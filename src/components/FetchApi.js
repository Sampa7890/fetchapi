import React, { useEffect, useState } from 'react';
import '../css/FetchApi.css';

export default function FetchApi() {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/comments");
            const data = await res.json();
            console.log(data);
            setData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='card-container'>
            {data.length > 0 ? (
                data.slice(0, 50).map((crr, i) => ( // Limiting to 9 items for a cleaner grid
                    <div key={i} className='card'>
                        <h3>{crr.name}</h3>
                        <h5>{crr.email}</h5>
                        <div>{crr.body}</div>
                    </div>
                ))
            ) : (
                <p>No Data found</p>
            )}
        </div>
    );
}
