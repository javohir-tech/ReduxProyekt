
//icons
import { Bag } from 'react-bootstrap-icons'

//react router  dom
import { Link } from 'react-router-dom'

//react redux
import { useDispatch } from 'react-redux'
import { addProduct } from '../Feauters/ProductSlice'


export default function SingleProduct({ id, image, product, price, reviews, title }) {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    e.preventDefault()
    dispatch(addProduct({ ...product, amount: 1 }))
  }

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: "none", color: "black" }} className='d-block shadow rounded'>
      <div className='image bg-dark rounded'>
        <img src={image} alt={title} className='rounded img-fluid' />
      </div>
      <div className='p-3'>
        <h5 className=''>{title}</h5>
        <p className='bg-warning  d-inline px-1 rounded'>{reviews} ta sharh</p>
        <div className='d-flex justify-content-between mt-3 align-items-center'>
          <div>
            <h4>{price}</h4>
          </div>
          <div>
            <button onClick={handleChange} className='btn btn-success'> <Bag /> </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

