import './App.css'
import { useState, useEffect } from 'react';

// import custon hook useFetch ()
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]); 

  //codigo refatorado hook post
  //custom hook useFetch()
  //const {data : items} = useFetch (url);

  const {data : items, httpConfig} = useFetch (url);


  const [name, setName] = useState ("");
  const [price, setPrice] = useState ("");

/*  código refatorado criação custom hook useFetch()
  
// inicio recebimento de dados 
  useEffect(() => {
    async function fetchData() {
      const res = await fetch (url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);
// fim recebimento de dados 

    Fim  código refatorado custom hook useFetch() */

// inicio envio de dados 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    }

    /* inicio codigo refatorado post
    const res = await fetch (url, {
      method: "POST",
      headers: {
        "Content-type": "aplication/json"
      },
      body: JSON.stringify(product)
    });

    //inicio envio dinamico
    const addedProduct = await res.json();

    setProducts((prevProducts)=> [...prevProducts, addedProduct]);
    
    //fim codigo refatorado post
    */

    httpConfig(product, "POST");

    setName("");
    setPrice("");

    // fim envio dinamico
  }
// fim envio de dados




  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        
    {/*  codigo refatorado custom hook useFetch   */}
    {/*  {products.map((product) => (  */}
    
        {items && items.map((product) => (  
          <li key={product.id}>{product.name} - R$ {product.price}</li>
        ))}
      </ul>

      <div className="add-products">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name='name' onChange={(e)=> setName(e.target.value)}/>
          </label>
          <label>
            Valor:
            <input type="number" value={price} name='price' onChange={(e)=> setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Cadastrar" className='btn'/>
        </form>
      </div>
    </>
  )
}

export default App
