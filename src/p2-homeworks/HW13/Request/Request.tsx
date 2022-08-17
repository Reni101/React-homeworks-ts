import React, {useEffect, useState} from 'react';
import {RequestsAPI} from "./RequestsAPI";


const Request = () => {
    let [check, setChecked] = useState(false)
    let [error, setError] = useState("")

    const sendPostHandler = () => {
        RequestsAPI.postRequest()
            .then(res => {
                setChecked(res.data.yourBody.success)
            })
            .catch(err => {
                setError(err.response.statusText)
            })


    }

    return (
        <div>
            <input type="checkbox" checked={check}/>
            <button onClick={sendPostHandler}>Send post Request</button>
            <span> {error}</span>
        </div>
    );
};

export default Request;