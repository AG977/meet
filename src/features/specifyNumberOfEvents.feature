
Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number 
 Given the user hasn't specified the number of events
 When they begin their search
 Then 32 events should be listed by default

Scenario: User can change the number of events they want to see
 Given the user has specified the number of events
 When they chose how many events they want to see
 Then this specific number of events should be shown







