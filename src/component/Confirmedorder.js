
import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Confirmedorder() {
    const [buyData, setBuyData] = useState([]);
   
    
    // Function to fetch cart data
    const fetchCartData = async () => {
        try {
            const response = await axios.get('http://localhost:5001/cartdataconfirm');
            setBuyData(response.data);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };
    useEffect(() => {
        // Fetch cart data when the component mounts
        fetchCartData();
    }, []);
    const totalSum = buyData.reduce((acc, item) => acc + parseFloat(item.Buy), 0);

  return (
   
    <div className='parentCart'>
    <h2 id='cartHead'>Confirmed Orders</h2>

    {buyData.length === 0 ? (
        <p id='emptyCart'>Your order confirmed yet.</p>
    ) : (
        <>
            {buyData.map((item, index) => (
                <div className='childCart' key={index}>
                    <div>
                        <div id='cartHeading'>{item.Heading}</div>
                    </div>
                    <div>
                        <div><b>Rs.{item.Buy}</b></div>
                    </div>
                    
                </div>
            ))}
            <div className="bill">
                <b>Total bill:</b> Rs. {totalSum}
            </div>
            
        </>
    )}
</div>


  )
}
