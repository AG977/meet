// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken  } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "All",
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
    true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
        }
      }); 
    }
  } 

    componentWillUnmount(){
      this.mounted = false;
    }

  updateEvents = (
    location = this.state.currentLocation,
    eventCount = this.state.numberOfEvents
  ) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'All') ?
    events :
    events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents.slice(0, eventCount),
      currentLocation: location,
    });
  });
};

updateNumberOfEvents = (numberOfEvents) => {
  this.setState({ numberOfEvents });
  this.updateEvents(this.currentLocation, numberOfEvents);
};

getData = () => {
  const {locations, events} = this.state;
  const data = locations.map((location)=>{
    const number = events.filter((event) => event.location === location).length
    const city = location.split(', ').shift()
    return {city, number};
  })
  return data;
};

  render() {
    const {
      locations,
      numberOfEvents,
      events,
    } = this.state;
    
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />;

    return (
      <div className="App">
      <h1>Meet App</h1>
      {!navigator.onLine && <OfflineAlert text={'You are currently offline, data may not be updated.'}/>}
      <h4>Choose your nearest city</h4>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <h4>How many events would you like to see on this page?</h4>
      <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} updateEvents={() => this.updateEvents()} />
      <div className="data-vis-wrapper">
      <h4>Events by genre</h4>
      <EventGenre events={events} />
      <h4>Events in each city</h4>
      <ResponsiveContainer height={400} >
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <CartesianGrid />
      <XAxis type="category" dataKey="city" name="city" />
      <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter data={this.getData()} fill="#daa520" />
      </ScatterChart>
      </ResponsiveContainer>
      </div>
      <h5>List of events:</h5>
      <EventList events={this.state.events} />
      <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
        getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}


export default App;
