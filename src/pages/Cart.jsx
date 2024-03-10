import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slices/CartSlices'

function Cart() {

  const cartArray = useSelector((state)=>state.cartReducer)
  // console.log(cartArray);
  const dispatch = useDispatch()

  const [ total, setTotal ] = useState(0)
  const navigate = useNavigate()

  //function to find the sum of the given array
  const getTotal = ()=>{
    if(cartArray.length>0){
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  console.log(total);

  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handlecart = ()=>{
    alert('Thank You..... Your order placed Successfully....')
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <div style={{marginTop:'100px'}}>
        {cartArray?.length>0?
        <div className="row w-100">
          <div className="col-lg-6 m-5">
          <div className="table shadow border">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Products</th>
                <th>Image</th>
                <th>Discount</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray?.map((item,index)=>(
                  <tr>
                  <td>{index+1}</td>
                  <td>{item.category}</td>
                  <td>{item.title}</td>
                  <td><img style={{width:'100px',height:'100px',padding:'5px'}} src={item.thumbnail} alt="no image" /></td>
                  <td>{item.discountPercentage} %</td>
                  <td>$ {item.price}</td>
                  <td> <Button onClick={()=>(dispatch(removeFromCart(item.id)))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button> </td>
                  </tr>
                ))
              }
            </tbody>
          </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
            <div className="border shadow p-5">
              <h3 className='text-info fw-bolder text-center mb-4'>Cart Summary</h3>
              <h4>Total number of Products : <span className='text-warning fw-bolder fs-4 '>{cartArray.length}</span> </h4>
              <h4>Total Price :<span className='text-warning fw-bolder fs-4 '> ${total}</span></h4>
              <Button onClick={handlecart} className='btn btn-info fw-bolder rounded w-100 mt-3'>CheckOut</Button>
            </div>
          </div>
        </div>:
        <div style={{height:'100%'}} className='d-flex justify-content-center align-items-center flex-column'>
        <img src="https://media2.giphy.com/media/ymK7l3nEeJvluafmGi/giphy.gif" height={'300px'} alt="no image" />
        <h3 className='text-danger fw-bolder'> Your Cart is Empty</h3>
        <Link to={'/'} style={{marginTop:'20px',marginBottom:'25px',fontWeight:'700',textDecoration:'none',background:'orange',padding:'10px',border:'none',borderRadius:'5px'}}>
          <i class="fa-solid fa-arrow-left"></i> Back to Home</Link>
        </div>
        }
    </div>
  )
}

export default Cart

