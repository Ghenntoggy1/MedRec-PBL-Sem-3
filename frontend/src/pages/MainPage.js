import React from 'react'
import { useParams } from 'react-router-dom';

function MainPage() {
    const { userType, idnp } = useParams();

    return (
        <div>
            <p>IDNP: {idnp}</p>
            <p>userType: {userType}</p>
            {/* Display other content on the main page */}
        </div>
    )
}

export default MainPage;