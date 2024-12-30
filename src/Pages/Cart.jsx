//bootstrap
import { Container } from 'react-bootstrap'

//redux toolkid
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

//components
import { CartItem } from '../Components'

export default function Cart() {
  const { products, price, allProducts } = useSelector((state) => state.product)
  // console.log(products)
  return (
    <Container>
      <div className='row g-4 mt-3 align-items-start'>
        <div className='col-md-8'>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col ">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => {
              return <CartItem key={prod.id} prod={prod} />
            })}
          </tbody>
        </table>
        </div>

        <div className=' col-md-4 p-3 border rounded'>
          <h4>Buyurtmangiz</h4>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='fw-semibold'>Mahsulotlar({allProducts}):</p>
            <p className='fw-semibold'>{price}$</p>
          </div>
          <div className='d-flex'>
            <button className='btn btn-success flex-fill'>Rasmiylashtirish</button>
          </div>
        </div>
      </div>
    </Container>
  )
}
