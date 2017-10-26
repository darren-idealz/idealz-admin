import React from 'react'
import ThirdSection from '../ThirdSection'
import './style.css'


const Dashboard = () => (
    <div className="thirdSectionContainer">
        <ThirdSection chartType="Pie" icon="users" title="Registration" dataset="http://local.idealz.com/test.php?filename=camp1.json" options="" />
        <ThirdSection chartType="Pie" icon="gender" title="Gender" dataset="http://local.idealz.com/test.php?filename=camp2.json" options="" />
        <ThirdSection chartType="HorizontalBar" icon="location" title="GeoLocations" dataset="http://local.idealz.com/test.php?filename=geocities.json" options="" />
    </div>
)

export default Dashboard