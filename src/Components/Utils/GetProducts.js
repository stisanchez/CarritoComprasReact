import { useEffect, useState } from "react";

function GetAll_Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
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
