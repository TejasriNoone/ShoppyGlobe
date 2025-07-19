import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosClient.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map(p => (
        <div key={p._id}>
          <h2>{p.name}</h2>
          <p>{p.description}</p>
          <strong>₹{p.price}</strong>
        </div>
      ))}
    </div>
  );
}

export default Home;
