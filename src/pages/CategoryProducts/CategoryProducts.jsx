import { useState, useEffect } from 'react';

import { Link, useParams } from "react-router-dom";

import { Navbar } from '../../components/Navbar/Navbar';

import api from '../../utils/api';

export function CategoryProducts() {

    const { category } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get(`/products/category/${category}`).then((res) => {
            setProducts(res.data)
        })
    }, [])

    return (
        <div className="container">
            <Navbar />
            <h2>{category.toUpperCase()} products:</h2>
            {products.map((product, index) => (
                <Link to={`/products/${product.id}`} key={index}>
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