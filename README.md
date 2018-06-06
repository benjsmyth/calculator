# calculator
This is a simple online calculator that I built for [The Odin Project's](https://www.theodinproject.com/dashboard) final JavaScript project in their "Web Development 101" course.

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

**Note**: There is currently a persistent bug in the program that is causing a very specific issue with the key commands. There are some specific instances where doing calculations solely with they key commands will keep displaying the result as "0", even if the actual result is different. If this happens simply refresh the page and it should return to normal. As well, if anyone feels like prying apart my code to figure out where this issue is coming from, please go ahead. 

Otherwise, enjoy my super simple calculator! :)