import React, { useContext } from 'react'
import './../../styles/BigCard.css'
import RatingStars from '../Common/RatingStars'
import DataContext from '../Context/DataContext';

export default function CardProductsBig({ product }) {
    const { setCarrito_Function } = useContext(DataContext);
    return (
        <>
            <div className="card">
                <div className="badge">{product.category}</div>
                <div className="tilt">
                    <div className="img">
                        <img src={`${product.thumbnail}`} alt="Premium Laptop" />
                    </div>
                </div>
                <div className="info">
                    <div className="cat">Sku: {product.sku}</div>
                    <h2 className="title">{product.title}</h2>
                    <p className="desc">{product.description}</p>
                    <div className="feats">
                        <span className="feat">{product.shippingInformation}</span>
                        <span className="feat">{product.warrantyInformation}</span>
                        <span className="feat">{product.returnPolicy}</span>
                    </div>
                    <div className="bottom">
                        <div className="price">
                            <span className="new">${product.price}</span>
                        </div>
                        <button className="btn" onClick={()=> setCarrito_Function(product)}>
                            <span>Add to Cart</span>
                            <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                        </button>
                    </div>
                    <div className="meta">
                        <RatingStars rate={product.rating} />
                        <div className={product.availabilityStatus === "In Stock"? "stock--high": product.availabilityStatus === "Low Stock"? "stock--low": "stock--none"}>{product.availabilityStatus}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
