
Feature: Show/hide an event's details 

Scenario: An event element is collapsed by default
 Given the user hasn't started a search 
 When the user hasn't clicked on an event element
 Then the event details are collapsed

Scenario: User can expand an event to see its details
 Given the user started searching
 When the user has clicked on an event element
 Then the event details are expanded

Scenario: User can collapse an event to hide its details 
 Given a user wants to hide the details
 When the user clicks in the details
 Then the event details can be collapsed