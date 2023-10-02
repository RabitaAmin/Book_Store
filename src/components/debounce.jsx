
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./debounce.css"; // Import the CSS file

const Debounce = () => {
    const [errorMsg, setErrorMsg] = useState();
    const handleSearch = () => {
        axios.get(`http://127.0.0.1:8000/auth/getAll?search=${value}`)
            .then(resp => {
                console.log(resp.data.data);
                setSearch(resp.data.data)
            })
            .catch((err) => {
                setErrorMsg("Some error occured");
                return "Some error";
            })
            .finally(() => { });
    }

    const [search, setSearch] = useState([])
    const [value, getValue] = useState("");

    useEffect(() => {
        console.log("search: ", search);

        const timeOutFunc = setTimeout(() => {
            handleSearch();
        }, 3000);

        return () => clearTimeout(timeOutFunc);
    }, [search]);

    return (
        <div className="container">
            <div>
                <p className="title">Enter Your Name:</p>
                <input
                    type="text"
                    label="search"
                    className="input-field"
                    onChange={(e) => getValue(e.target.value)}
                />
            </div>
            <div className="result">
                {search && search.map((item) =>
                    <h3 key={item.id}>Name : {item.name}</h3>
                )}
            </div>
        </div>
    );
}

export default Debounce;
