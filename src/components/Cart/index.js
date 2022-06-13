import "./style.css";

const Cart = ({ currentSale, setCurrentSale, removeProduct }) => {
  const total = currentSale.reduce((acc, atual) => {
    return acc + atual.price;
  }, 0);
  return (
    <div className="cart">
      <div className="cart__title">
        <p className="cart__title--p">Carrinho de Compras</p>
      </div>
      <div>
        {currentSale.map((product) => (
          <div className="cart__product">
            <img
              className="cart__product--img"
              src={product.img}
              alt={product.name}
            ></img>
            <div className="cart__product--text">
              <p className="cart__product--name">{product.name}</p>
              <p className="cart__product--category">{product.category}</p>
            </div>
            <button
              className="cart__product--button"
              id={product.id}
              onClick={(event) => removeProduct(event.target.id)}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
      <div>
        {currentSale.length > 0 ? (
          <>
            <div className="cartTotal">
              <div className="cartTotal__text">
                <p className="cartTotal__text--total">Total</p>
                <span className="cartTotal__text--price">
                  R$ {total.toFixed(2)}
                </span>
              </div>
              <div>
                <button
                  className="cartTotal__button"
                  onClick={() => setCurrentSale([])}
                >
                  Remover todos
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="cart__empty">
            <p className="cart__empty--title">Sua sacola está vazia</p>
            <p className="cart__empty--text">Adicione itens</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
