import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    errorText: '',
    numberOfEvents: this.props.numberOfEvents,
  };

  changeNumOfEvents = (event) => {
    let numberOfEvents = event.target.value;
    const errorText =
      numberOfEvents < 0 || numberOfEvents > 32 || !numberOfEvents
        ? 'Please choose any number between 1 and 32'
        : '';
    this.setState({
      errorText,
      numberOfEvents,
    });
    if (!errorText) {
      this.props.updateEvents(undefined, numberOfEvents);
    }
  }

  render() {
    return (
      <div className="numberOfEvents text-muted">
        <input
          className="events_number__input my-3"
          type="number"
          min={0}
          onChange={this.changeNumOfEvents}
          value={this.state.numberOfEvents}>
        </input>
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
