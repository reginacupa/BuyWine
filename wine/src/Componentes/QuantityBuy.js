import { useState, useContext } from "react"
import { Context } from "../Pages/Product"


export default function QuantityBuy(props) {
    const [quantity, setQuantity] = useState(1)
    const [valueButton, setValueButton] = useState(true)
    const product = props.product
    const setCount = useContext(Context)

    const minus = () => {
        (quantity - 1) === 1 ? setValueButton(true) : setValueButton(false)
        if (quantity !== 1) {
            setQuantity(quantity - 1)
        }
    }

    const plus = () => {
        setValueButton(false)
        setQuantity(quantity + 1)
    }

    const buyProduct = () => {
        if (window.confirm(`Preço final de ${product.title}: ${Math.round((product.price * quantity) * 100) / 100}`)) {
            alert('Produto comprado com sucesso!')
            setQuantity(1)
            // Adicionando mais quando a compra for efetuada
            setCount(value => value + 1)
        }
    }


    return (
    <div className="buttons-product">
        <div className="quantity">
            <span >Quantidade:</span>
            <button disabled={valueButton} className="minus" onClick={minus}>-</button>
            <span>{quantity}</span>
            <button className="plus" onClick={plus}>+</button>
        </div>
        <button className="buy" onClick={buyProduct}>Comprar</button>
    </div>
    );
}
