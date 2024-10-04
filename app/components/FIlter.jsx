'use client'
import all_product from '@/assets/all_product';
import { useEffect, useState } from 'react';
import Card from './Card';


const mockProducts = all_product;

export default function Filter() {

  const [products, setProducts] = useState(mockProducts); 
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const filterProducts = () => {
    const filtered = products.filter((product) => {
      return (
        (category === '' || product.category === category) &&
        product.new_price >= minPrice &&
        product.new_price <= maxPrice
      );
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [category, minPrice, maxPrice]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Product Filter</h1>

      {/* Filter Section */}
      <div className="flex gap-4 mb-4 text-black">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2"
        >
          <option value="">All Categories</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="border p-2"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="border p-2"
        />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card key={product.id} 
            name={product.name} 
            category={product.category} 
            old_price={product.old_price} 
            new_price={product.new_price}/>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
