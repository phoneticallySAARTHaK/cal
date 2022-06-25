# React calander

 Buit using pure react, and vanilla CSS, bootstrapped by create-react-app
 
 Hooks used:
 - state
 - reducer
 - context
 - ref
 
 Features:
 
1. Date logic from scratch - No API, No Library, Only JS Date object.
2. Built with mobile first approach
3. Different modes - day, week, month, year, event list
4. Syncronised mode shifting - e.g. Week mode always displays "Sunday" first, and internally date is maintained while switching modes
5. Highlight current time, (and day as well, in week and month mode). This is optimized to only do it if the current day is visble, i.e. no false highlight
6. events
7. clickable cells to directly add events, double click a cell to directly add events
8. Click anywhere to close the sidebar, and stop the event from triggering any other event listner
9. Media query to not make an absurdly long sidebar
10. Allow users to choose to enter  either the end time or the duration of event (range)

Tradeoffs/Limitations:
- currently, events can only in multiples of hours
- box shadow does not cover whole page
- Each cell has its own date object - tolerable for day and week, but needs a new components for month and year.
- Please don't make me style form components 🥲

To DO:
- month
- year
- Change date fom event form
- drag to copy, and delete events directly from the cell
- Add service worker to install the webapp locally.
- STYLING
- Snap to "now" in the day/week mode first time (useEffect) 
- Use localstorage (or IndexDB) for persistent storage
- Add media queries to make it more suitable for wide screens
