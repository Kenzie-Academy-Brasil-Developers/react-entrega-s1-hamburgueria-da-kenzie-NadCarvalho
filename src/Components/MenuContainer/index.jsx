import "./index.css"
import Product from '../Product'

const MenuContainer = ({ productsList, handleAdd }) => {
  return (
    <ul className="menu-container">
      {productsList.map(product =>
        <li key={product.id}>
          <Product item={product}
            handleClick={handleAdd} />
        </li>
      )}

    </ul>
  )
}

export default MenuContainer;