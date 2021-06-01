import React,{useState} from 'react'
import receiptData from '../../../receiptData'
import Form from '../../Form/Form'

function Receipt(props) {
    const [receipt, setReceipt] = useState("")
    
    return (
        <ul>
            {receiptData.map((item) =>(
                item.order.map((orders) =>(
                    <div className="receiptBody">
                        <h2>{item.person}</h2>
                        <br />
                        <b><li>{orders.main}</li></b>
                        <hr />
                        <li>Protein: {orders.protein}</li>
                        <li>Rice: {orders.rice}</li>
                        <li>Sauce: {orders.sauce}</li>
                        <li>Drink: {orders.drink}</li>
                        <li>Cost: {orders.cost}</li>
                        <li>Paid: {item.paid ? 'true': 'false'}</li>
                    </div>
                    
                ))
            ))}
            
        </ul>
    )
}

export default Receipt

// return(
//     <div>
//     <li>{receipt.person}</li>
//     <li>{receipt.order}</li>
//     </div>
    
// )