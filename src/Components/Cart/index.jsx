const Cart = ({cartTotal, currentSale}) => {
    console.log(currentSale);
    return (
        <div className="Cart">
            <span>Subtotal - {cartTotal}</span>
            <ul>{currentSale.map((item) =>
                <li key={item.id}>
                    <h3>{item.name}</h3>
                    <span>Categoria - {item.category}</span>
                    <span>Preço - {item.price} R$</span>
                </li>
            )}
            </ul>
        </div>
    )
}

export default Cart;