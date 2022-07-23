# javascript-clock
Javascript clock source code


It's a fun project to make a clock using javascript. To make a javascript clock we need to first of all call a javascript date object new Date().
we are going to store the data object in a variable. Then to get hours, minutes, and seconds we are using JavaScript Get Date Methods. getHours(), getMinutes(), getSeconds().
we need to use the js date object and get date methods for gate our real-time. But it will return to us in 24 hours format. To solve the issue we gonna use some if cases.
like if the hour is 0 means 12 AM we are returning (0==12). Now we have the challenge to display our time in AM/PM. To do that we are using some simple tricks like (if the hours in less than 12 show AM and if the hour is greater than 12 show PM).
Also for the 12 hours format, we are showing the hours like ( if the hours in greater than 12 remove the hour from 12).
we are storing all our date methods in a variable with concatenation.
The last step is to refresh the clock. For this we need to write the whole clock code in a function, then call the function inside a setInterval() method and set the interval duration 1000 to refresh the data after 1 second every time.

For more info on js date method https://www.w3schools.com/js/js_date_methods.asp 

For more info on js date object https://www.w3schools.com/js/js_dates.asp
