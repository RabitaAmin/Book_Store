// import { useState } from "react";
// import UseProductHook from "../hooks/useProductHook";
// import { json } from "react-router-dom";
// const Update = () => {
//     const [isbn, getIsbn] = useState("");
//     const [name, setName] = useState("");
//     const [_id, setId] = useState("");
//     const data =
//     {
//         name: name
//     }
//     const { getData, setUpdateData, updateData, updateExistingData, setUpExisting, upExisting } = UseProductHook();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         getData(isbn);
//     }
//     const handleUpdate = (e) => {
//         e.preventDefault();
//         updateExistingData(data, _id);
//     }
//     // { console.log(`${JSON.parse(updateData)}`) }
//     return (
//         <>
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <p>Enter Book Id</p>
//                     <input type="text" label="_id" onChange={(e) => getIsbn(e.target.value)} />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//             <div>
//                 {updateData && updateData.map((item) =>
//                     <form onSubmit={handleUpdate}>
//                         <p>Book ID</p>
//                         <input type="text" label="_id" value={item._id} onChange={(e) => setId(e.target.value)} />
//                         <p>Name</p>
//                         <input type="text" label="name" value={item.name} onChange={(e) => setName(e.target.value)} />
//                         <button type="submit">Update</button>
//                     </form>
//                 )}

//             </div>
//         </>
//     )

// }
// export default Update;
import { useState } from "react";
import UseProductHook from "../hooks/useProductHook";
import './Update.css'; // Import the CSS file

const Update = () => {
    const [isbn, getIsbn] = useState("");
    const [name, setName] = useState("");
    const [_id, setId] = useState("");
    const data = {
        name: name
    }

    const { getData, setUpdateData, updateData, updateExistingData, setUpExisting, upExisting } = UseProductHook();

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(isbn);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateExistingData(data, _id);

    }

    return (
        <div className="container">
            <div className="form-group">
                <form onSubmit={handleSubmit}>
                    <p className="label">Enter Book ID</p>
                    <input
                        type="text"
                        label="_id"
                        onChange={(e) => getIsbn(e.target.value)}
                        className="input-field"
                    />
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>
            <div>
                {updateData && updateData.map((item) =>
                    <form onSubmit={handleUpdate} key={item._id}>
                        <p className="label">Book ID</p>
                        <input
                            type="text"
                            label="_id"
                            value={item._id}
                            onChange={(e) => setId(e.target.value)}
                            className="input-field"
                        />
                        <p className="label">Name</p>
                        <input
                            type="text"
                            label="name"
                            value={item.name}
                            onChange={(e) => setName(e.target.value)}
                            className="input-field"
                        />
                        <button type="submit" className="button">Update</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Update;
