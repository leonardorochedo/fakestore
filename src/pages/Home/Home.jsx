import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Navbar } from '../../components/Navbar/Navbar';

import api from '../../utils/api';

import './Home.css';

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
            <div className="categories">
                {categories.map((categorie, index) => (
                    <Link to={`/products/category/${categorie}`} key={index} className='link category' >
                        {categorie.toUpperCase()}
                    </Link>
                ))}
            </div>
            <h2>Products:</h2>
            <div className="products">
                {products.map((product, index) => (
                    <Link to={`/products/${product.id}`} key={index} className='link product' >
                        <div className='product-div'>
                            <img src={product.image} alt={product.title} />
                            <div className="product-info">
                                <p>{product.title}</p>
                                <div className="product-price-rating">
                                    <p>💲{product.price}</p>
                                    <p>⭐{product.rating.rate}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}