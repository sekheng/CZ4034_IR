import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchEngine() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('https://api.example.com/data')
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleChange} />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {filteredData.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}