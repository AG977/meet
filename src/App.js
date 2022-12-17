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




class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "All",
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  };

  componentDidMount() {
      this.mounted = true;
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }

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



  render() {
    if (this.state.showWelcomeScreen === undefined) return <div
    className="App" />

    return (
      <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <EventList events={this.state.events} />
      <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} updateEvents={() => this.updateEvents()} />
      {!navigator.onLine && <OfflineAlert text={'You are currently offline, data may be not updated.'}/>}
      <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
        getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}




export default App;
