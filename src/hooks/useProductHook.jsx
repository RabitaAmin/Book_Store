import { useState } from "react";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
const UseProductHook = () => {
    const [upData, setUpData] = useState("");
    const [updateData, setUpdateData] = useState([]);
    const [upExisting, setUpExisting] = useState("");
    const update = (formData) => {
        axiosInstance.post("/book/addBook", formData)
            .then(resp => {
                console.log(`print ${resp}`);
                setUpData(resp)
            })
            .catch(err => { console.log(err) })
    }
    const getData = (formData) => {
        axios.get(`http://127.0.0.1:8000/auth/getAll?isbn=${formData}`)
            .then(resp => {
                console.log(resp.data.data);
                setUpdateData(resp.data.data)
            })
            .catch(err => { console.log(err) })

    }
    const updateExistingData = (formData, _id) => {
        axios.patch(`http://127.0.0.1:8000/book/updateBook?_id=${_id}`, formData)
            .then(resp => {
                console.log(resp.data.data);
                setUpExisting(resp.data.data)
            })
            .catch(err => { console.log(err) })
    }
    return { update, setUpData, upData, updateData, setUpdateData, getData, updateExistingData, upExisting, setUpExisting }

}
export default UseProductHook;