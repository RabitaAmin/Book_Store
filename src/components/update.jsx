import { useState } from "react";
import UseProductHook from "../hooks/useProductHook";
const Update = () => {
    const [isbn, getIsbn] = useState("");
    const [name, setName] = useState("");
    const [_id, setId] = useState("");
    const data =
    {
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
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>Enter Book Id</p>
                    <input type="text" label="_id" onChange={(e) => getIsbn(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
            {console.log(`print ${updateData}`)}
            <div>
                {updateData && updateData.map((item) =>
                    <form onSubmit={handleUpdate}>
                        <p>Book ID</p>
                        <input type="text" label="_id" value={item._id} onChange={(e) => setId(e.target.value)} />
                        <p>Name</p>
                        <input type="text" label="name" value={item.name} onChange={(e) => setName(e.target.value)} />
                        <button type="submit">Update</button>
                    </form>
                )}

            </div>
        </>
    )

}
export default Update;