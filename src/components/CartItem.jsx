function CartItem({ item, removeItem, editItem }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{item.name}</h3>

      <p>₹ {item.price}</p>

      <button onClick={() => editItem(item)}>Edit</button>

      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
