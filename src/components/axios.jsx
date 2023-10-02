import axios from "axios"
import { useState, useEffect } from "react";
import Update from './update';
import UseProductHook from "../hooks/useProductHook";
const Axios = () => {

    const { update } = UseProductHook();
    const [product, setProduct] = useState("")
    const handleClick = () => {
        axios.get("http://127.0.0.1:8000/auth/getAll")
            .then(res => {
                console.log(res.data);
                setProduct(res.data)
            })
            .catch(err => { console.log(err) })

    }
    const [isbn, setIsbn] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(null);
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(null);
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const data = {
        isbn: isbn,
        name: name,
        price: price,
        category: category,
        stock: stock,
        author: author,
        publisher: publisher
    }
    console.log(data);
    const handleUpdate = (e) => {
        e.preventDefault();
        // axios.post("http://127.0.0.1:8000/book/addBook", data)
        //     .then(resp => {
        //         console.log(`yoo ${resp}`);
        //         setUpData(resp)
        //     })
        //     .catch(err => { console.log(err) })
        update(data);
        setIsbn("");
        setName("");
        setPrice("");
        setCategory("");
        setStock("");
        setAuthor("");
        setPublisher("");
    }
    // console.log(`now ${upData.data.name}`)

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <div>{product && product.data.map((item) =>
                <h3>{item.name}</h3>

            )}</div>
            <div>
                <form onSubmit={handleUpdate}>
                    <p>ISBN</p>
                    <input type="text" label="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                    <p>Name</p>
                    <input type="text" label="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <p>Price</p>
                    <input type="text" label="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <p>Category</p>
                    <input type="text" label="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <p>Stock</p>
                    <input type="text" label="stock" value={stock} onChange={(e) => setStock(e.target.value)} />
                    <p>Author</p>
                    <input type="text" label="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <p>Publisher</p>
                    <input type="text" label="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
                    <button type="submit">Add Button</button>
                </form>
            </div>
            <Update />
        </>

    )
}
export default Axios;