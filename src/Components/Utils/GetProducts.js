import { useEffect, useState } from "react";

function GetAll_Products  () {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=200')
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
