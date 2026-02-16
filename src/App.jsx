import { useState } from "react";

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  function ProductList({ products }) {
    return <ul>
      {
        products.map((product, i) => (
          <li key={i}>
            <strong>Prodotto:</strong> <span>{product.name}</span> <br />
            <strong>Prezzo:</strong> <span>{product.price}€</span> <br />
            <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
          </li>
        ))
      }
    </ul>
  }


  const [addedProducts, setAddedProducts] = useState([])

  function addToCart(product) {
    const productFound = addedProducts.find((p) => p.name === product.name)

    !productFound ?
      setAddedProducts(curr => {
        return [...curr, { ...product, quantity: 1 }]
      }) : ""
  }


  return (
    <>
      <h1>Carrello della spesa</h1>

      <div>
        <h4>Prodotti 📝</h4>

        <ProductList
          products={products}
        />

        {addedProducts.length ?
          <div>
            <h4>Carrello 🛒</h4>
            <ul>
              {
                addedProducts.map((product, i) => (
                  <li key={i}>
                    <strong>Prodotto:</strong> <span>{product.name}</span> <br />
                    <strong>Prezzo:</strong> <span>{product.price}€</span> <br />
                    <strong>Quantità:</strong> <span>{product.quantity}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          :
          <h4>Il carrello è vuoto</h4>
        }
      </div>
    </>
  )
}

export default App
