import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  let AppWrapper;

  test('An event element is collapsed by default', ({ given, when, then }) => {

    given('the user hasn\'t started a search', () => {
      AppWrapper = mount( <App /> );
    });
    
    when('the user hasn\'t clicked on an event element', () => {
      AppWrapper.update();
    });
    
    then('the event details are collapsed', () => {
      expect(AppWrapper.find('.event_Details')).toHaveLength(0);
    });
  
  });


  test('User can expand an event to see its details', ({ given, when, then }) => {
    
    given('the user started searching', async() => {
      AppWrapper = await mount(<App />);
    });

    when('the user has clicked on an event element', () => {
      AppWrapper.update();
      AppWrapper.find('.btn-details').at(0).simulate('click');
    });

    then('the event details are expanded', () => {
      expect(AppWrapper.find('.event-details')).toHaveLength(1);
    });

  });

  
  test('User can collapse an event to hide its details', ({ given, when, then }) => {
  
    given('a user wants to hide the details', async() => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.btn-details').at(0).simulate('click');
    });

    when('the user clicks in the details', () => {
      AppWrapper.find('.btn-details').at(0).simulate('click');
    });

    then('the event details can be collapsed', () => {
      expect(AppWrapper.find('.event-details')).toHaveLength(0);
    });
  
  });


});