import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/WishlistSlices';
import { addToCart } from '../redux/slices/CartSlices';


function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handlewishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div>
      <Row className='ms-5 me-3' style={{marginTop:'100px'}}>
        { wishlistArray?.length>0?
          wishlistArray?.map((item)=>(
        <Col className='mb-5 border-4 rounded' sm={12} md={6} lg={4} xl={3}>
          <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)' }}>
          <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>{item.title.slice(0,20)}...</Card.Title>
                <Card.Text>
                  <p>{item.description.slice(0,60)}... </p>
                  <p className='fw-bolder'>Price : $ {item.price}</p>
                </Card.Text>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
                    <Button onClick={()=>handlewishlist(item)} variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
                  </div>
            </Card.Body>
         </Card>
        </Col>
          )):
          <div style={{height:'100%'}} className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://kctvietnam.vn/wp-content/plugins/cart-popup/images/loading.gif" height={'300px'} alt="no image" />
            <h3 className='text-danger fw-bolder'> Your Whislist is Empty</h3>
            <Link to={'/'} style={{marginTop:'20px',marginBottom:'25px',fontWeight:'700',textDecoration:'none',background:'orange',padding:'10px',border:'none',borderRadius:'5px'}}>
              <i class="fa-solid fa-arrow-left"></i> Back to Home</Link>
          </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist