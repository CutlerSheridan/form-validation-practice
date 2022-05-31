# Form Validation Practice

## Fill out the form and it should validate appropriately

Each field waits to validate until you leave that field, then shows a warning if the field is invalid. Then, if you return to the field, it checks for validity after every keystroke. Once rendered valid and user has moved to another field, if user returns to that field, it does not check for validity again until user leaves that field again, under the assumption user understands validity constraints due to their previous valid input.

The exceptions to this are Password and Confirm Password, each of which always checks every keystroke to indicate which requirements have been met. Once anything has been entered in Confirm Password, every future keystroke in Password also updates the "passwords match" requirement under Confirm Password.

Layout is responsive. Displays differently on mobile vs. desktop.

#### TO-DO NEXT

#### TO-DO LATER

##### Features

##### Behavior

##### Style

#### DONE

_1.0.0_

-   change splash font
-   change secondary color from grey to orange-ish
-   fix splash image height on desktop

_0.5.0_

-   adjust intro text max-width
-   adjust layout change breakpoint
-   add drop-shadow to focused field
-   add splash image
-   adjust splash image height
-   add splash credit
-   create color scheme
-   add form credit

_0.4.0_

-   make Submit button check everything again
-   make submit button add "input" event listener so typing in one of them will check every keystroke

_0.3.0_

-   flesh out isFieldValid()
-   write isPasswordValid()
-   write isConfirmPasswordValid()
-   if Confirm Password is unmatched, make typing in Password check if Confirm Password becomes a match
-   make Confirm Password field lose invalid group styling if typing in Password and it matches
-   prevent Confirm Password from being valid if empty
-   make Password only change Confirm Password state if CP has already been deemed invalid
-   make Password also change Confirm Password state if CP has already been deemed valid

_0.2.0_

-   write base isFieldValid() function
-   write isNameValid()
-   get isFieldValid() working with FIRST NAME field
-   add eventListener logic so initially it only checks for errors upon blur, then, if it's invalid, it checks after every keystroke, then if it becomes valid again and blurs, it only checks on the next blur, and so on

_0.1.1_

-   add html pattern regex for zip code and country

_0.1.0_

-   add all the form fields
-   add responsive grid so there are two columns if it's wide enough

_0.0.2_

-   fix README formatting
-   adjust styling
-   fix splash so it doesn't fuck up from adjacent form being too long

_0.0.1_

-   create splash
-   create intro
-   create form
-   add a few form fields
-   create submit section
-   add some basic styling
-   add invalid indication styling
-   add format switch breakpoint for splash to change from fullscreen to left side of screen

_0.0.0_

-   initial commit
