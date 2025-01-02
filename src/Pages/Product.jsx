//react router dom
import { useLoaderData, useParams } from 'react-router-dom'

//loader 
import { request } from '../Util/Request'

//icons  
import { Trash } from 'react-bootstrap-icons'

//react redux toolkid
import { useDispatch, useSelector } from 'react-redux'

//productSlice
import { addAmount, addProduct, removeAmount, removeProduct } from '../Feauters/ProductSlice'


//loader
export const loader = async ({ params }) => {
  const req = await request.get(`/products/${params.id}`)
  return req.data
}


export default function Product() {

  const data = useLoaderData()
  console.log(data)

  //redux tollkid
  const dispatch = useDispatch()

  const { products } = useSelector((state) => state.product)

  const productInCart = products.find((prod) => prod.id == data.id)


  return (
    <div className='container my-3'>
      <div className="row gap-3">
        <div className="col-md-5 d-flex justify-content-center bg-dark ">
          <img src={data.thumbnail} className='img-fluid' alt={data.title} />
        </div>
        <div className="col-md-6">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <h3>Brend : {data.brand}</h3>
          <p>Stock : {data.stock}</p>
          <h3>Price: {data.price}</h3>
          <div className='d-flex align-iitems-center gap-4 mt-4'>
            {
              !productInCart
                ?
                (<button className='btn btn-success' onClick={() => dispatch(addProduct({ ...data, amount: 1 }))}>Savatga Qo'shish</button>)
                :
                (
                  <div className='d-flex align-iitems-center gap-4'>
                    <button

                      className='btn btn-success' onClick={() => {
                        if (productInCart.amount == 1) {
                          dispatch(removeProduct(data.id))
                        } else {
                          dispatch(removeAmount(data.id))
                        }
                      }} >-</button>
                    <h4 className='text-dark'>{productInCart.amount}</h4>
                    <button className='btn btn-success' onClick={()=>dispatch(addAmount(data.id))}>+</button>
                    <button className=' btn btn-danger' onClick={()=>dispatch(removeProduct(data.id))}><Trash /></button>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
