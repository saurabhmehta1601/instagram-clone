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
            <div className="bg-gray-background">
            <Header />
            <div className="grid grid-cols-3 gap-4 justify">
                <Timeline />
                <Sidebar />
            </div>
            </div>
            <Timeline />
            <Sidebar></Sidebar>
        </div>
    )
}

export default Dashboard
