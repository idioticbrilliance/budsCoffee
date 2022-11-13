import React, { useState } from 'react';

import Buds from './Components/Buds/Buds';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import CartProvider from './Store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);
  const hideCartHandler = () => setShowCart(false);

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Buds />
      </main>
    </CartProvider>
  );
}

export default App;
