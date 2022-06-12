# **meet**

##  *Goals:*
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique.
The application uses the Google Calendar API to fetch upcoming events.

##  *User Goals:*
Your app will allow users to search for a city and get a list of events hosted in that city. 

##  *Key Features:*
1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

##  *Technical Requirements:*
1. The app must be a React application.
2. The app must be built using the TDD technique.
3. The app must use the Google Calendar API and OAuth2 authentication flow.
4. The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
5. The app’s code must be hosted in a Git repository on GitHub.
6. The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
7. The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
8. The app must pass Lighthouse’s PWA checklist.
9. The app must work offline or in slow network conditions with the help of a service worker.
10. Users may be able to install the app on desktop and add the app to their home screen on mobile.
11. The app must be deployed on GitHub Pages.
12. The API call must use React axios and async/await.
13. The app must implement an alert system using an OOP approach to show information to the user.
14. The app must make use of data visualization (recharts preferred).
15. The app must be covered by tests with a coverage rate >= 90%.
16. The app must be monitored using an online monitoring tool.

##  *User Stories:*
1. As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer 
events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
5. As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

##  *user stories and scenarios:*
1. FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS:
As a user I should be able to click on the event to expand it, so that I cann see the details.

2. Scenario 1: An event element is collapsed by default:
Given the user hasn't started a search,
when the user hasn't clicked on an event element,
then the event details are collapsed.

3. Scenario 2: User can expand an event to see its details
Given the user started searching,
when the user has clicked on an event element,
then the event details are expanded.

4. Scenario 3: User can collapse an event to hide its details
Given a user wants to hide the details,
when the user clicks in the details,
then the event details can be collapsed.

5. FEATURE 3: SPECIFY NUMBER OF EVENTS:
As a user I should be able to choose the number of events listed, so that I can see as many events as I want to.

6. Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user hasn't specified the number of events,
when they begin their search,
then 32 events should be listed by default.

7. Scenario 2: User can change the number of events they want to see
Given the user has specified the number of events,
when they chose how many events they want to see,
then this specific number of events should be shown.

8. FEATURE 4: USE THE APP WHEN OFFLINE:
As a user I should be able to use the app when I am offline, so that I can still see what's going on.

9. Scenario 1: Show cached data when there’s no internet connection
Given the user has no internet connection,
when the user wants to use the app,
then the user should be able to see the cached data.

10. Scenario 2: Show error when user changes the settings (city, time range)
Given the user tries to change the settings (city, time range),
when there is no internet connection available,
then an error message must be shown.

11. FEATURE 5: DATA VISUALIZATION:
As a user, I should be able to click on a chart, so that I can see the upcomming events in each city.

12. Scenario 1: Show a chart with the number of upcoming events in each city
Given the user wants to see the upcomming events in each city,
when they click on a show events button,
then a chrt with the upcomming events should be shown.


