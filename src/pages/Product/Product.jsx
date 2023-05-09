import { useState, useEffect } from 'react';

import { Link, useParams } from "react-router-dom";

import { Navbar } from '../../components/Navbar/Navbar';

import api from '../../utils/api';

import './Product.css';

export function Product() {

    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        api.get(`/products/${id}`).then((res) => {
            setProduct({
                title: res.data.title,
                image: res.data.image,
                price: res.data.price,
                rate: res.data.rating.rate,
                count: res.data.rating.count,
                category: res.data.category,
                description: res.data.description
            })
        })
    }, [])

    return (
        <div className='container'>
                <Navbar />
                <div className='product-view'>
                    <h1 className='title'>{product.title}</h1>
                    <img src={product.image} alt={product.title} />
                    <p className='price'>💲{product.price}</p>
                    <h2>Avaliations</h2>
                    <div className='rating'>
                        <p>⭐{product.rate}</p>
                        <p>💬{product.count}</p>
                    </div>
                    <h2>Description</h2>
                    <p className='description'>{product.description}</p>
                </div>
        </div>
    )
}