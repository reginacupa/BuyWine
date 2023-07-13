import { useLocation, useNavigate, useParams } from "react-router"


export default function ProductDetails() {
  
  let { state } = useLocation();

  let { id } = useParams();

  
  const navigate = useNavigate()

  return (
    <div className="detailed-content">
      <div>
        <button className="back" onClick={() => navigate('/products')}>Voltar</button>
        <div>
          <img className="detailed-image" src={state.p.image} alt="" />
        </div>
        <div>
          <h2>{state.p.title} - {id}</h2>
          <p>{state.p.description}</p>
        </div>
      </div>
    </div>
  )
}
