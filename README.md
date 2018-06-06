# calculator
This is a simple online calculator that I built for The Odin Project's final Javascript project in their "Web Development 101" course.

Current functionality includes support for all basic operations, as well as parenthetic operations, exponents, and negates. There are also some useful key commands that I implemented in order to provide a more fluid user experience:

**Button**	      | **Key Command**
----------------- | ---------------
All Clear  		  | Shift + A
Backspace  		  | Delete
9		   		  | 9
8		   		  | 8
7		   		  | 7
6		  		  | 6
5		   		  | 5
4			      | 4
3		  		  | 3
2		   		  | 2
1		   		  | 1
0		   		  | 0
Decimal    		  | .
Left parentheses  | (
Right parentheses | )
Exponent          | ^
Negate 			  | Shift + -
Divide 			  | /
Multiply 		  | *
Subtract 		  | -
Add 			  | +
Equals 			  | Enter

If a user inputs a number that is too large for the display box, it will automatically add three dots ("...") to signify that a long value is being inputted. Similarly, if the result after equating is too big for the display box, a scrollbar will be added to expose the overflow text.

**Note**: There is currently a particularly persistent bug in the program that is causing a very specific issue with the key commands. If a user clears the calculator by **clicking** the button, every following calculation done only with they key commands will display "0" as the result. This can be resolved with a simple refresh of the page, but it's still a bit frustrating. If anyone feels like prying apart my code to figure out why this is the case, go ahead! 

Otherwise, enjoy my super simple calculator! :)