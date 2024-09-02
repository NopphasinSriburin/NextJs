"use client";

import React, { useState, useEffect } from 'react';
import './index.css';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { formatNumber } from './utils';

interface ProductProps {
  itemname: string;
  itemImage: string;
  itemPrice: number;
  updateTotalPrice: (itemTotalPrice: number, delta: number) => void;
}

export default function Product({ itemname, itemImage, itemPrice, updateTotalPrice }: ProductProps) {
  const [count, setCount] = useState(0);
  const [itemTotalPrice, setItemTotalPrice] = useState(0);

  useEffect(() => {
    const newItemTotalPrice = count * itemPrice;
    setItemTotalPrice(newItemTotalPrice);
    updateTotalPrice(newItemTotalPrice, count);
  }, [count, itemPrice, updateTotalPrice]);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="product">
      <img src={itemImage} alt={itemname} className="product-image" />
      <h3>{itemname}</h3>
      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton onClick={handleDecrement}>
          <RemoveIcon />
        </IconButton>
        <span>{count}</span>
        <IconButton onClick={handleIncrement}>
          <AddIcon />
        </IconButton>
        <span>{formatNumber(itemTotalPrice)} THB</span>
      </Stack>
    </div>
  );
}
