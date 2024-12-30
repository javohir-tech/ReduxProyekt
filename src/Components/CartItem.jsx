//bootstrap icons
import { Trash } from 'react-bootstrap-icons'

//redux
import { useDispatch } from 'react-redux'
import { addAmount, removeAmount, removeProduct } from '../Feauters/ProductSlice'

export default function CartItem({ prod }) {
    const { thumbnail, amount, price, description, brand, title, id } = prod
    const dispatch = useDispatch()
    return (
        <tr>
            <td>
                <div className='d-flex align-items-center gap-3'>
                    <img src={thumbnail} style={{ width: "64px" }} className='img-fluid' alt={title} />
                    <div>
                        <h6 className='mb-0'>Price : {price}$</h6>
                        <p>Name: {title}</p>
                    </div>
                </div>
            </td>
            <td><div className='d-flex justify-content-center align-items-center gap-3'>
                <button onClick={() => {
                    if (prod.amount == 1) {
                        dispatch(removeProduct(id))
                    } else {
                        dispatch(removeAmount(id))
                    }
                }} className='btn btn-secondary'>-</button>
                <p className='mb-0 fw-semibold fs-5'>{amount}</p>
                <button onClick={() => { dispatch(addAmount(id)) }} className='btn btn-secondary'>+</button>
            </div></td>
            <td>
                <button onClick={() => dispatch(removeProduct(id))} className='btn btn-danger mx-auto d-block'><Trash /></button>
            </td>
        </tr>
    )
}
