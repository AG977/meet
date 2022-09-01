// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations  } from './api';
import './nprogress.css';



class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "Everywhere",
    numberOfEvents: 32,
  };

  componentDidMount() {
      this.mounted = true;
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }

    componentWillUnmount(){
      this.mounted = false;
    }

  updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'Everywhere') ?
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
    return (
      <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} />
      </div>
    );
  }
}




export default App;
