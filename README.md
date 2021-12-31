# Autocomplete in C# ASP.Net and React
 
22/02/20 - Ze'ev Goshen.
-------------------------------------------------------------

<u>2 main components:</u>

a. components\AutoCompleteText

b. components\SuggestionsComponent


Functionality
-------------

1) Once the main component loads (AutoCompleteText), it sends a
fetch request for people's data from the server (GET) endpoint and retrieves json data.

The rational behind this is that once the client has all the data it might need
later on, the rest of the workload will be done on the client machine, to save
server effort.

2) Search for values like "deve" "ad" "se".....(examples).
3) The regex search is executed on the name and work title.
4) After typing more than 2 letters the full list of people shows up, with the entered text highlighted.
5) The data received in json format is filtered by pressing the "search" button.
6) Highlighted text can appear several times in each employee record.
