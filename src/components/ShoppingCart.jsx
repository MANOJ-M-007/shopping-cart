import CartItem from "./CartItem";

function ShoppingCart({
  items,
  removeItem,
  editItem,
}) {
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
            editItem={editItem}
          />
        ))
      )}
    </div>
  );
}

export default ShoppingCart;