import Product from '../Product'

const MenuContainer = ({ productsList, handleAdd }) => {
  return (
    <ul>
      {productsList.map(product =>
        <li>
          <Product item={product}
            handleClick={handleAdd} />
        </li>
      )}

    </ul>
  )
}

export default MenuContainer;