import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

    useEffect(() => {
        document.title = "Page Not Found "
    },[])

    return (
        <div className="bg-gray-background">
            <div className="mx-auto max-w-screen-lg">
                <p className="text-center text-xl font-semibold">
                Sorry, this page isn&#39;t available.
                </p>
                <p className="text-center ">
                The link you followed may be broken, or the page may have been removed. <Link to="/"> Go back to Instagram.</Link>
                </p>

            </div>
        </div>
    )
}

export default NotFound
