import React,{useState} from "react";


function MyComponent(){

    const [name , setName] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }



    const [quantity , setQuantity] = useState(1)

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }


    const [comment , setComment] = useState("")

    function handleCommentChange(event){
        setComment(event.target.value)
    }


    const [payment , setPayment] = useState();

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }


    const [shipping , setShipping] = useState("Delivery");

    function handleShippingChange(event){
        setShipping(event.target.value)
    }



    return(
        <div>
            <input type="text" onChange={handleNameChange}  value={name}/>
            <p>Name :{name}</p><br />

            <input type="number" onChange={handleQuantityChange}  value={quantity}/>
            <p>Quantity :{quantity}</p><br />

            <textarea onChange={handleCommentChange} value={comment} cols="30" rows="10" placeholder="Please share your concept with us"></textarea>
            <p>Comment : {comment}</p><br />

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Enter your Payment</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="giftcard">Giftcard</option>
            </select>
            <p>Payment : {payment}</p><br />

            <label>
                <input  value="Pick up" type="radio"
                checked={shipping === "Pick up"}
                onChange={handleShippingChange}/>
                Pick up
            </label>
            <label >
                <input value="Delivery" type="radio" 
                checked={shipping === "Delivery"}
                onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping : {shipping}</p>

        </div>

    );

}


export default MyComponent
