import React, { useEffect } from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Timeline from '../components/timeline'


const Dashboard = () => {
    useEffect(() =>{
        document.title="Instagram"
    })
    return (
        <div>
            <Header></Header>
            <Timeline />
            <Sidebar></Sidebar>
        </div>
    )
}

export default Dashboard
