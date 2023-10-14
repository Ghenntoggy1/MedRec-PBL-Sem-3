import React from 'react'
import { useParams } from 'react-router-dom';

function MainPage() {
    const { userType } = useParams();

    return (
        <div>{userType}</div>
    )
}

export default MainPage