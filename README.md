# Form Validation Practice

## Fill out the form and it should validate appropriately

#### TO-DO NEXT

-   make Submit button check everything again

#### TO-DO LATER

##### Features

##### Behavior

##### Style

-   touch up the responsive form grid for a less awkward mid-point

#### DONE

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
