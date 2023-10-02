// import axios from "axios"
// import { useState, useEffect } from "react";
// import Update from './update';
// import UseProductHook from "../hooks/useProductHook";
// import axiosInstance from "../utils/axiosInstance";
// const Axios = () => {

//     const { update } = UseProductHook();
//     const [product, setProduct] = useState("")
//     const handleClick = () => {
//         axiosInstance.get("/auth/getAll")
//             .then(res => {
//                 console.log(res.data);
//                 setProduct(res.data)
//             })
//             .catch(err => { console.log(err) })

//     }
//     const [isbn, setIsbn] = useState("");
//     const [name, setName] = useState("");
//     const [price, setPrice] = useState(null);
//     const [category, setCategory] = useState("");
//     const [stock, setStock] = useState(null);
//     const [author, setAuthor] = useState("");
//     const [publisher, setPublisher] = useState("");
//     const data = {
//         isbn: isbn,
//         name: name,
//         price: price,
//         category: category,
//         stock: stock,
//         author: author,
//         publisher: publisher
//     }
//     console.log(data);
//     const handleUpdate = (e) => {
//         e.preventDefault();
//         // axios.post("http://127.0.0.1:8000/book/addBook", data)
//         //     .then(resp => {
//         //         console.log(`yoo ${resp}`);
//         //         setUpData(resp)
//         //     })
//         //     .catch(err => { console.log(err) })
//         update(data);
//         setIsbn("");
//         setName("");
//         setPrice("");
//         setCategory("");
//         setStock("");
//         setAuthor("");
//         setPublisher("");
//     }
//     // console.log(`now ${upData.data.name}`)

//     return (
//         <>
//             <button onClick={handleClick}>Click Me</button>
//             <div>{product && product.data.map((item) =>
//                 <h3>{item.name}</h3>

//             )}</div>
//             <div>
//                 <form onSubmit={handleUpdate}>
//                     <p>ISBN</p>
//                     <input type="text" label="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
//                     <p>Name</p>
//                     <input type="text" label="name" value={name} onChange={(e) => setName(e.target.value)} />
//                     <p>Price</p>
//                     <input type="text" label="price" value={price} onChange={(e) => setPrice(e.target.value)} />
//                     <p>Category</p>
//                     <input type="text" label="category" value={category} onChange={(e) => setCategory(e.target.value)} />
//                     <p>Stock</p>
//                     <input type="text" label="stock" value={stock} onChange={(e) => setStock(e.target.value)} />
//                     <p>Author</p>
//                     <input type="text" label="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
//                     <p>Publisher</p>
//                     <input type="text" label="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
//                     <button type="submit">Add Button</button>
//                 </form>
//             </div>
//             <Update />
//         </>

//     )
// }
// export default Axios;
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import UseProductHook from "../hooks/useProductHook";
import Update from './update';
import axiosInstance from "../utils/axiosInstance";
import "./Axios.css";

const Axios = () => {
    const { update } = UseProductHook();
    const [product, setProduct] = useState("");

    const handleClick = () => {
        axiosInstance.get("/auth/getAll")
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => { console.log(err) });
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
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        update(data);

        setIsbn("");
        setName("");
        setPrice("");
        setCategory("");
        setStock("");
        setAuthor("");
        setPublisher("");
    }

    return (
        <div className="container">
            <div className="button-container">
                <button className="button" onClick={handleClick}>Click Me</button>
            </div>
            <div>
                {product && product.data.map((item) => (
                    <h3 key={item.id}>{item.name}</h3>
                ))}
            </div>
            <div className="form-group">
                <form onSubmit={handleUpdate}>
                    <p className="label">ISBN</p>
                    <input
                        type="text"
                        label="isbn"
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        className="input-field"
                    />
                    <p className="label">Name</p>
                    <input
                        type="text"
                        label="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-field"
                    />
                    <p className="label">Price</p>
                    <input
                        type="text"
                        label="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="input-field"
                    />
                    <p className="label">Category</p>
                    <input
                        type="text"
                        label="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="input-field"
                    />
                    <p className="label">Stock</p>
                    <input
                        type="text"
                        label="stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="input-field"
                    />
                    <p className="label">Author</p>
                    <input
                        type="text"
                        label="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="input-field"
                    />
                    <p className="label">Publisher</p>
                    <input
                        type="text"
                        label="publisher"
                        value={publisher}
                        onChange={(e) => setPublisher(e.target.value)}
                        className="input-field"
                    />
                    <button type="submit" className="button">Add Button</button>
                </form>
            </div>
            {/* <Update /> */}
        </div>
    );
}

export default Axios;
