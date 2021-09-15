import "./index.css"

const Product = ({ item, handleClick }) => {

    return (
        <div className="product">
            <h3>{item.name}</h3>
            <span>Categoria - {item.category}</span>
            <span>Preço - {item.price} R$</span>
            <button onClick={() => handleClick(item.id)}>Adicionar</button>
        </div>
    )
}

export default Product;