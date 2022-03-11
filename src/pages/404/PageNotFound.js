import React, {useState} from 'react'
import { Link } from 'react-router-dom'


import { auth } from 'libs/firebase'
import {onAuthStateChanged} from 'firebase/auth'

function PageNotFound(props) {
    const [isUser, setIsUser] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    })

    return (
        <>
            <aside>
                <header>
                    <h1> 404 | Page not found</h1>
                    {
                        isUser ? <Link to={'/dashboard'}>back to safety</Link > : <Link to={'/'}>back to safety</Link > // ternary operator ?  : 
                    }
                </header>
            </aside>
        </>
    )
}

export default PageNotFound 