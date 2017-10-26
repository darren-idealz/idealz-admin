import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CampaignsList from '../CampaignsList'
import Campaign from '../Campaign'

// The Roster component matches one of two different routes
// depending on the full pathname
const Campaigns = () => (
    <Switch>
        <Route exact path='/campaigns' component={CampaignsList}/>
        <Route path='/campaigns/:number' component={Campaign}/>
    </Switch>
)

export default Campaigns