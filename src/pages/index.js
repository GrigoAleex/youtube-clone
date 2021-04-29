import React, { useState } from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Home() {
    const [sidebarOpen, setSidebarOpen] = useState();

    const toggleSidebarOpen = () => setSidebarOpen(!sidebarOpen);

    return (
        <div>
            <Header toggleSidebar={toggleSidebarOpen}/>
            <Sidebar toggle={toggleSidebarOpen} isOpen={sidebarOpen}/>
            
        </div>
    )
}

export default Home
