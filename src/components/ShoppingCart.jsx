import CartItem from "./CartItem";

function ShoppingCart({ items, removeItem }) {
  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeItem={removeItem}
          />
        ))
      )}
    </div>
  );
}

export default ShoppingCart;