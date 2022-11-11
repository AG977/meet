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
    currentLocation: "All",
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

    updateEvents = (location, eventCount) => {
      getEvents().then((events) => {
        let locationEvents;
        if (location === undefined) {
          locationEvents = events.slice(0, eventCount);
        } else if (eventCount === undefined) {
          locationEvents =
            location === 'all'
              ? events.slice(0, eventCount)
              : events.filter((event) => event.location === location).slice(0, eventCount);
        }
  
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          numberOfEvents: eventCount,
          currentLocation: location,
        });
      });
    };
  
    getData = () => {
      const { locations, events } = this.state;
      const data = locations.map((location) => {
        const number = events.filter((event) => event.location === location).length;
        const city = location.split(', ').shift();
        return { city, number };
      });
      return data;
    };


  render() {
    return (
      <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <EventList events={this.state.events} />
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
      </div>
    );
  }
}




export default App;
