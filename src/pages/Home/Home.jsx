import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Navbar } from '../../components/Navbar/Navbar';

import api from '../../utils/api';

export function Home() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('/products/categories').then((res) => {
            setCategories(res.data)
        })

        api.get('/products').then((res) => {
            setProducts(res.data)
        })
    }, [])

    return (
        <div className='container'>
            <Navbar />
            <h2>Chose a category:</h2>
            {categories.map((categorie, index) => (
                <Link to={`/products/category/${categorie}`} key={index} className='link' >
                    {categorie}
                </Link>
            ))}
            <h2>Products:</h2>
            {products.map((product, index) => (
                <Link to={`/products/${product.id}`} key={index} className='link' >
                    <div className='product-container'>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.rating.rate}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}