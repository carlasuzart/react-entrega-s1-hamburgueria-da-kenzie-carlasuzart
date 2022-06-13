import "./style.css";

function Product({ id, name, image, category, price, handleClick }) {
  return (
    <div>
      <div className="container__product">
        <div className="product__image--div" key={id}>
          <img className="product__image" src={image} alt="foto do produto" />
        </div>
        <div className="container__product--description">
          <p className="product__name">{name}</p>
          <p className="product__category">{category}</p>
          <span className="product__price">R${price.toFixed(2)}</span>
          <div>
            <button className="product__button" onClick={() => handleClick(id)}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
