import { useContext, useState } from "react";

async function CreateOrder_db(id, user, description, detail) {
    try {
        const response = await fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                user: user,
                description: description,
                detail: detail
            }),
        });
        const data = await response.json();
    } catch (error) {
        console.error('Error adding order:', error);
    }
}
export default CreateOrder_db;