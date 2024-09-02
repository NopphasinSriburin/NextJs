"use client";

import React, { useState } from 'react';
import './index.css';
import Product from './itemcart';
import { formatNumber } from './utils';

// Example product data
const products = [
  { name: 'iPhone 15 Pro', image: '/iPhone-15-Pro.jpg', price: 1000 },
  { name: 'iPhone 15', image: '/iPhone-15.jpg', price: 800 },
  { name: 'iPad Pro', image: '/ipad-pro.jpg', price: 1200 },
  { name: 'iPad Air', image: '/iPad-Air.jpg', price: 600 },
  { name: 'iPad', image: '/iPad.jpg', price: 400 },
  { name: 'iPad mini', image: '/Apple_iPad-mini.jpg', price: 500 },
  { name: 'MacBook Air', image: '/MacBook-Air.jpg', price: 1500 },
  { name: 'MacBook Pro', image: '/MacBook-Pro.jpg', price: 2000 },
  { name: 'iMac', image: 'imac.jpg', price: 1800 },
  { name: 'Mac mini', image: '/Mac-mini.jpg', price: 800 },
  { name: 'Mac Studio', image: '/Mac-Studio.jpg', price: 2200 },
];

// Define the type for the product state
interface ProductState {
  name: string;
  image: string;
  price: number;
  count: number;
  itemTotalPrice: number;
}

export default function Homepage() {
  const [productsState, setProductsState] = useState<ProductState[]>(
    products.map(product => ({ ...product, count: 0, itemTotalPrice: 0 }))
  );

  const updateTotalPrice = (index: number, itemTotalPrice: number, count: number) => {
    setProductsState(prevState => {
      const updatedState = [...prevState];
      updatedState[index] = {
        ...updatedState[index],
        count,
        itemTotalPrice,
      };
      return updatedState;
    });
  };

  const totalPrice = productsState.reduce((total, product) => total + product.itemTotalPrice, 0);

  return (
    <div>
      <div className="container">
        {productsState.map((product, index) => (
          <Product
            key={product.name}
            itemname={product.name}
            itemImage={product.image}
            itemPrice={product.price}
            updateTotalPrice={(itemTotalPrice: number, count: number) => updateTotalPrice(index, itemTotalPrice, count)}
          />
        ))}
      </div>
      <div className="total-price">
        Total Price: {formatNumber(totalPrice)} THB
      </div>
    </div>
  );
}
