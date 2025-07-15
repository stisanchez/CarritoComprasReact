import { useEffect, useState } from "react";

function GetAll_Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        //fetch('https://fakestoreapi.com/products')
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setProducts(data.products);
            })
            .catch(err => {
                console.log("error", err)
            });
    }, []);

    return {
        products
    };
}

export default GetAll_Products;
