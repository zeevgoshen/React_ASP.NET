# Autocomplete in C# ASP.Net and React
 
22/02/20 - Ze'ev Goshen.
-------------------------------------------------------------

I used Chrome, in maximized view mode, most of the time.

Time considerations did not leave me options for testing on
many browsers, I was more focused on the functionality
so only Chrome and Edge were tried.
 
This is the first React project I ever did. Many things are
still left for me to learn.


The 2 main components:

components\AutoCompleteText
components\SuggestionsComponent


Functionality
*************
1) The app loads and once the main component finishes loading (AutoCompleteText), it sends a
fetch request for people's data from the server (GET) endpoint and retrieves json data in an
async fashion.

The rational behind this is that once the client has all the data it might need
later on, the rest of the workload will be done on the client machine, to save
server effort.

2) Search for values like "deve" "ad" "se".....(examples).
3) The regex search is executed on the name and work title.
4) After typing more than 2 letters the full list of people shows up, with the entered text highlighted.
5) The data received in json format is filtered by pressing the "search" button.
6) Highlighted text can appear several times in each employee record.
7) No third party used.

Todos:
======
Image loading could be improved on the results view.

Inline CSS should be moved to .css files.

Security - checking for user-entered characters that could be used for
malicious purposes is something I started but didn't finish (escape function in index.js)

Error handling - reading online I got the impression that logs/messages could be 
more beneficial than try/catch. I added a logging mechanism on the server and in
AutoCompleteText controller but not implemented everywhere.

At the end it took a big effort and a big number of hours to absorb React as fast
as possible. Although most concepts looks straightforward, implementing everything
and testing nothing gets broken is what took most of the time and I had to make choices
on what is top priority and what is not.
