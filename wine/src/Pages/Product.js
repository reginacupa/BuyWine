import { createContext, useEffect, useState } from "react"
import Item from "../Componentes/Item/item"
import Produtos from "../Produtos.json"

export const Context = createContext()

export default function Products() {
  const [productList, setProductList] = useState([Produtos.vinhos])
  const [ setCount ]=useState(0)
  console.log(Produtos.vinhos)

  useEffect(() => {
    setProductList(Produtos.vinhos)
    
  }, [])

  return (
    <div className="content-product">
      
      <section className="main-products"> 
     <Context.Provider value={setCount}>  
        {productList.map((p, index) => (
          <Item key={index} product={p} setCount={setCount} />
        )) ??"Lista carregando"}
        </Context.Provider>       
      </section>
    </div>
  )
}
