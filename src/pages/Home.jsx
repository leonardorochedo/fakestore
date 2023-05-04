import { useState, useEffect } from 'react';

import api from '../utils/api';

export function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('/products').then((res) => {
            setProducts(res.data)
        })
    }, [])

    return (
        <div className='container'>
            <h1 className='title'>Produtos abaixo:</h1>
            {products.map((product, index) => (
                <div key={index} className='product-container'>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{product.rating.rate}</p>
                </div>
            ))}
        </div>
    )
}