
RCA points app
Magic AI Summary
System Access & Authentication
User Roles & Permissions
1.	Administrator
o	Set up account and house system
o	Add teacher accounts
o	Add student accounts
o	Manage house assignments
2.	Teacher
o	Add student accounts
o	Manage parent communications
3.	Student
o	Basic access
o	Parent email setup required
Authentication
•	Integration with Clever or Microsoft 365
•	Parent email confirmation system
o	Customizable notification frequency
Points System
Core Features
1.	Transaction System
o	Transaction Records Include:
	Student/House identification
	Point value
	Award date
	Reason for points
2.	Key Rules
o	Points are additive only (no deductions)
o	Annual reset of transaction history
o	Houses and student assignments persist
o	Student points separate from house points
Technical Requirements
1.	API Integration
o	Real-time data access
o	Multiple access points support
o	Live variable tracking
2.	Display Systems
o	Live school displays
	Recent awards
	Current rankings
o	Real-time updates
o	Leaderboard integration
Leaderboards
Features
1.	Dual Tracking
o	Student rankings
o	House rankings
2.	Sorting Capabilities
o	Name
o	Date
o	Points
o	Custom filters
Technical Specifications
•	Recommended sorting algorithm: Merge Sort (O(n log n))
•	Alternative: Quick Sort
Point Award System
Interface Requirements
1.	Student Lookup
o	Search by name/username
o	House affiliation
2.	Award Fields
o	Point value
o	Reason (dropdown)
o	Custom reason options
o	Optional detailed description
Store System
Student Interface
•	Point balance display
•	Item inventory
•	Purchase confirmation
•	Transaction history
•	Personal point management
Teacher Interface
•	Inventory management
•	Price setting
•	Item description
•	Stock control
Profile Pages
Features
1.	Visual Elements
o	Profile pictures
o	House crest (dynamic)
o	House description
2.	Point Display
o	Current balance
o	Transaction history
o	House contribution
 
Full Description
Sawyer
Sign in

An Administrator sets up the account and number of houses. From there, they add teacher accounts. Both administrators and teachers can add students. All students and teachers are randomly assigned a house. When a student account is set up, teachers may also set up parent emails for that student.
	Admin: Can add student and teacher accounts
	Teacher: Can add student accounts
	Student: When a student account is added, set up parent emails
When parents receive email, they must click to confirm, and how often they would like to receive emails about their student earning points.
	If possible, signing up with Clever or Microsoft 365 would be ideal.

Crest has live variables for place in leaderboard, and team points

Weston
Leaderboard/points
•	Basically, we need a sort of transaction system to keep track of points
o	Need history of all past transactions
o	Each transaction needs to have variables for
	Student/house earning the points
	How many points
	The date the points were awarded
o	Some things to keep in mind
	Points are NEVER subtracted or removed
•	Meant to reward good behavior does not punish
	Transaction history can be deleted each school year
•	Students stay in the same house though, so although points are deleted, houses and their students remain the same until graduation
o	This data needs to be stored in some sort of API that can be read easily from a variety of places in the platform
	Leaderboard (Detailed below)
	Award Points (detailed below)
	LIVE screens across the school
•	https://stackoverflow.com/questions/4061197/how-do-they-make-real-time-data-live-on-a-web-page
•	One showing recent awarded
•	One showing top rankings
o	Leaderboard
o	House leaderboard
•	On top of having a transaction list for all points awarded, students and houses should also have their own points tied to them and shown throughout the site
o	Independent of transaction list
o	Simple integer variable, changed with point additions
	Maybe reset year by year? (Ask Tara Best)
o	This data needs to be stored, read, and changed easily from a variety of places in the platform
	Leaderboard (Detailed below)
	Award Points (detailed below)
•	Leaderboard
o	One for the students, one for the houses
o	Leaderboard needs to read data from all students and sort them by points
	If data is not already presorted, this will require a sorting algorithm
•	Suggestions for algorithm
o	Merge Sort (Time complexity O(n log n) REALLY GOOD)
o	Quick Sort (Time complexity O(n log n) to O(n^2) Either really good, or abysmal depending on scenario
	May want filters to sort by date, name, or other variables (Ask Tara Best)
•	If so, this may require looking at transaction data as well as student/house data
o	Good luck :)
•	Award Points
o	Needs to be able to lookup students by name/username/etc. To award points
o	Basic fields including
	How many points
	What reason
•	Select from dropdown
o	Need a way for staff to create their own options
•	Add greater description (Optional)
	Who gets the points/what house
Rachel
Store:
-	For students
o	They should be able to see how many points they have/can use
o	The items should be clickable and be able to have a set amount of stock
	Most likely have some sort of pop up to make sure it's what they want
o	They also should be able to see what exactly happened to their points/have some sort of item history
o	If they do use their points, it shouldn’t take away from the house points, just that student's points
	Ex: House: 15 Student: 5, student uses 5 points, House: 15 Student: 0
o	Probably will need to have the site read data about all the items that are in the store, and take that to display them
	More reusable
	Don't have to change whole website when store options change
-	For teachers
o	They should be able to change and manage what items can be added, price, description, and amount
Profile pages:
-	Should have their pictures on them
-	A description of their house
-	Have updating crest (Look at Page 5)
 
Client emails:
Administration sets up the account, the houses, enters teachers names to give them access to give students points, and enters all student names into the app and assigns them to a house.  All students and teachers are assigned to a house. Here is a screenshot below.  We go into manage, under staff, we enter staff names, emails, and their house. We enter guardians name, email, and link them to a student (so that when students receive a point, parents get notified) then we go into students, and enter each students name, and house.  We have rosters set up, so each class is linked together.  I can easily give a class a point, and the system will give 1 point to each student in that class.  The categories allows us to set up what we are giving a point for.  I will put a screen shot at the bottom so that you can see what that looks like as well.  We enter everything manually through the website, which then comes out nice and clean on the app.  It would be nice to meet in person.  I could screenshare on zoom and show you the website, but the app looks different and I'd like you to see that as well and play with it a bit to see the functions, and the options, especially for reports.  We use the reports a lot.  The final screenshot at the bottom is what shows on the tv screen throughout our school.  Let me know what days you are in the week after spring break and I will see what I can do to make it over there.  Thank you all so much. 

