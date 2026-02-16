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
            <strong>Prezzo:</strong> <span>{product.price}€</span>
          </li>
        ))
      }
    </ul>
  }

  return (
    <>
      <h1>Carrello della spesa</h1>

      <div>
        <ProductList
          products={products}
        />
      </div>
    </>
  )
}

export default App
