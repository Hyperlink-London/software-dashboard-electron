import {useState} from 'react'
import TopBar from '@/components/TopBar.jsx';
import MainDash from '@/components/mainDash.jsx';
import PodProgress from "@/components/podProgress.jsx";
import PastRun from "@/components/pastRun.jsx";


import './App.css';

function App() {

    const [activeTab, setActiveTab] = useState('Home');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className="h-screen flex flex-col">
            <TopBar activeTab={activeTab} onTabChange={handleTabChange}/>
            {activeTab === 'Home' && <MainDash />}
            {activeTab === 'Past Runs' && <PastRun />}
            <PodProgress/>
        </div>
    );
}

export default App
