import { useEffect, useState } from "react";

function GetAll_Orders() {

 const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
            .catch(err => {
                console.log("error", err);
            });
    }, []);

    return {
        orders        
    };
}

export default GetAll_Orders;
