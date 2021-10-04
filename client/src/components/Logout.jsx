import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const Logout = () => {
    const history = useHistory()
    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                Accept:"application/json",
                "content-type": "application/json",
            },
            credentials:"include"
        
        }).then((res) => {
            console.log(res);
            if (!res.status === 200){
                const error = new Error(res.error)
                throw error;
            }
            history.push("/login")
        }
        ).catch((err) => { console.log(err)})
    })
    return (
        <>
        </>
    )
}
export default Logout
