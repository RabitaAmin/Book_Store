import { useState } from "react";
import axios from "axios"
const UseProductHook = () => {
    const [upData, setUpData] = useState("");
    const [updateData, setUpdateData] = useState([]);
    const [upExisting, setUpExisting] = useState("");
    const update = (formData) => {
        axios.post("http://127.0.0.1:8000/book/addBook", formData)
            .then(resp => {
                console.log(`print ${resp}`);
                setUpData(resp)
            })
            .catch(err => { console.log(err) })
    }
    const getData = (formData) => {
        axios.get(`http://127.0.0.1:8000/auth/getAll?isbn=${formData}`)
            .then(resp => {
                console.log(resp);
                setUpdateData(resp.data)
            })
            .catch(err => { console.log(err) })

    }
    const updateExistingData = (formData, _id) => {
        axios.patch(`http://127.0.0.1:8000/book/updateBook?_id=${_id}`, formData)
            .then(resp => {
                console.log(resp);
                setUpExisting(resp)
            })
            .catch(err => { console.log(err) })
    }
    return { update, setUpData, upData, updateData, setUpdateData, getData, updateExistingData, upExisting, setUpExisting }

}
export default UseProductHook;