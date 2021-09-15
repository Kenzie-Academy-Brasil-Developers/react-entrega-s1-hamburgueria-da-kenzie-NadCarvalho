const FilterProduct = ({filteredProducts, showProducts, inputValue, setInputValue}) => {
    return (
        <div className="filteredProduct">
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className="btnFilter" onClick={() => showProducts()}>Pesquisar</button>
        </div>
    )
}

export default FilterProduct;