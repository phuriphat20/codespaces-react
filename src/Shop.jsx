import { useEffect, useState } from 'react';
import './Shop.css';
import axios from 'axios';

function Item(props) {
    return (
        <div key={props.id} onClick={() => props.callback(props)}>
            <img src={props.img} alt={props.name} width={200} height={200} /><br />
            id: {props.id} <br />
            name: {props.name} <br />
            price: {props.price} <br />
        </div>
    );
}

export default function Shop() {
    const [products, setProducts] = useState([]);
    const URL = "https://didactic-goggles-x55qgjjx4gpvf5p-5000.app.github.dev";
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        axios.get(`${URL}/api/products`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    function addCart(item) {
        setCart([...cart, { id: item.id, name: item.name, price: item.price, img: item.img }]);
        setTotal(total + item.price);
    }

    function removeCart(item) {
        setTotal(total - item.price);
        setCart(cart.filter(_item => _item.id !== item.id));
    }

    const productList = products.map(item => (
        <Item key={item.id} {...item} callback={addCart} />
    ));

    const cartList = cart.map(item => (
        <li key={item.id}>
            {item.id} {item.name} {item.price}
            <button onClick={() => removeCart(item)}>Delete</button>
        </li>
    ));

    return (
        <>
            <div className='grid-container'>{productList}</div>
            <h1>Cart</h1>
            <button onClick={() => { setCart([]); setTotal(0); }}>Clear All</button>
            <ol>{cartList}</ol>
            <h1>Total: {total}</h1>
        </>
    );
}
