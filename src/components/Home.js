import React from 'react'
const Home = (props) => {
  console.log('home',props.data)
  return (

    <div>
        <div className='add-to-cart'>
          <span className='cart-count'>{props.data.length}</span>
            <img src="https://www.shutterstock.com/shutterstock/photos/1690453492/display_1500/stock-vector-shopping-cart-vector-icon-flat-design-isolated-on-white-background-1690453492.jpg" alt="" />

        </div>
      <h1>Home component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
<img src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>

        <div className='text-wrapper item'>
<span>
    Iphone
</span>
<span>
    Price:$1000.00
</span>
        </div>

        <div className='btn-wrapper item'>
            <button onClick={()=>props.addToCartHandler({price:1000,name:'iphone 11'})}
            >Add To Cart</button>

        </div>
      </div>

    </div>
  )
}

export default Home
