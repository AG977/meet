import { loadFeature, defineFeature } from 'jest-cucumber';
import React from "react";
import { mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {

    given('the user hasn\'t specified the number of events', async () => {
      AppWrapper = await mount(<App />);
    });

    when('they begin their search', () => {
      AppWrapper.update();
    });

    then(/^(\d+) events should be listed by default$/, (arg0) => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });

  });


  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('the user has specified the number of events', async () => {
      AppWrapper = await mount(<App />);
    });

    when('they chose how many events they want to see', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
      NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', { target: { value: 32 } });
    });

    then('this specific number of events should be shown', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      AppWrapper.update();

      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32)

    });

  });



});

