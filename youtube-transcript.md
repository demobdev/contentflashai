the rapid evolution of AI is introducing a plethora of unimaginable tools and
0:06
people are going wild with this in this video I will teach you a stepbystep way
0:11
on how to build your first AI s that has the potential to be a passive income for
0:17
you ladies and gentlemen I introduce to you tradecraft AI this is the landing
0:24
page of the application this page highlights all the important aspects of this project like the ability to
0:31
generate a Twitter thread Instagram caption and Linkin post using our AI I
0:37
have signed up with click authentication already so let's click on this dashboard link here to start generating
0:45
content on this dashboard page I have the ability to generate a Twitter thread
0:50
Instagram caption and Linkin post with the free tier I only have
0:56
about 30 points and I have to subscribe to get more points so when I click on the get more points it takes me to the
1:04
pricing page and I would like to go for the basic plan so I'll click on choose
1:11
plan and it takes me to the stripe payment page so let's add our email and
1:17
the card information is going to be this number here we add a month and a year and a
1:26
CVC and I will click on subscribe [Music]
1:33
so now we have 100 points added to our already existing point we have more credits now so to create a Content we
1:41
select the type let's go with Twitter threade and inside this prompt here we
1:46
can literally generate any thread of our choice so I'll enter the prompt Thread
1:52
about space and using the power of Gemini AI we are able to generate a thread on the
1:58
Fly which the user can copy this and paste it on their Twitter which is now X
2:05
but still called it Twitter by the way so users can do same for Linkin post and
2:10
Instagram caption and we also have you know a mo up here that shows a preview
2:16
of how the Trad is going to look like on Twitter I assure you of a beginner friendly step-by-step guide on building
2:23
a software as a service using strip for payment click for user authentication
2:28
dle for storing without Much Ado let's get right in these are some of the tools we will be
2:35
using to build this up first on the list is mail trap mail trap is an email
2:40
delivery platform that allow you to test send and manage all your emails infrastructure all in one place we are
2:48
using ma TR because of its Simplicity making it easy for developers to send emails to users to demonstrate how it
2:55
works I have already logged in with my Gmail account so on the the dashboard
3:04
page we have varieties of features available on this platform we will cover
3:09
those in more details in the email section of this application ma trap also offers an mpm package for sending emails
3:17
from the client side with minimal
3:24
configuration more on M trap will be discussed in these tutorials next on the list we have shat
3:31
CN shat CN is a customizable component library for building modern web app with
3:36
react inwind CSS it includes nearly every component you might need for
3:41
building a modern website such as buttons card dialogues alerts and more
3:47
you will be integrating many of these components throughout the application click is an authentication platform that
3:53
provides login options via password social identity providers onetime email
3:59
or SMS codee assess and a multiactor authentication along with basic user
4:05
management you will set up a custom hook to retrieve user information after logging in and stall it inside our
4:11
database stripe is a payment platform that allow you to accept credit cards debit card and popular payment method
4:19
from all around the world this will be needful and important for enabling our users to purchase points for the use on
4:25
the platform
project setup
4:58
e e
database setup
5:41
this is the documentation page for dril orm so on this page you can read more about the theory and how dzil om works
5:49
and you know the under the hood technicalities and everything that you want to know about dzil but I'll focus
5:55
more on the Practical aspect of dzil so I'll place the link to this
6:01
documentation page in the description as usual to read more about brazle orm but
6:07
in the nutshell drizzle is a lightweight typescript object relational mapping for SQL databases so what it does is to
6:14
provide you with a simple and intuitive API for database operations so if you have an idea on how to write SQL codes
6:22
to interact with databases you should find this very easy to use it also allows you to Define your database
6:29
schemas using JavaScript classes and de creators which makes it easy to work
6:34
with your database so the database include my SQL postgress and SQL light
6:41
dzo omm works in hand with neon neon on the under hand is just a platform for
6:47
managing our databases on the cloud so more about this will be explained when we start writing the code so I will
6:54
scroll down here and click on postgress SQL to install neon andrz omm for this
7:02
project so I'll copy all these commands here move back to my code
7:10
editor and paste the code
7:16
here so the package has been installed successfully we can now write our schemers and connect to the database so
7:24
let me minimize this terminal and over here
7:30
we are going to create a file inside the root directory named drizzle. config.js
7:37
inside the root directory you're going to have drizzle.
7:44
config.js on this page we are going to have our
7:50
dialect our schema and our database credentials okay so first thing first
7:58
let's create the skeleton for this object so we are going to export default
8:03
an object and this object is going to house the first property is going to be the
8:10
dialect we have the dialect to be
8:18
progressed and we have the schema here so the second property is going to
8:23
be the schema so we Define the schema and we are going to specify the
8:29
path to locate this schema we don't have the schema yet but we're going to create that in a second so let's specify the
8:36
path to be utils database schema. typescript let's go ahead and create
8:43
this schema file inside the root directory we are going to create a new folder named
8:52
utils inside the utils we going to have a new folder named DB to house all our
8:59
database code and we create a new file named
9:05
schema. typescript inside this file we are going to have all the schemers for the project
database schemas
9:13
you're going to have user schema subscription and generated content we have to start by importing all the
9:19
necessary functions and types from Dro orm so we start by importing all these
9:26
from Brazil omm PG
9:34
call we have integer which is going to be used to define the integers columns
9:40
you have a variable character to Define variable characters column we have um PG
9:47
table to define the post girls table okay and we have the serial we have
9:55
test we have Tim stamp and
10:00
Boolean after importing all these necessary functions and types we are going to Define our tables so the first
10:07
table is going to be the user table and we Define it this way so you're going to have export
10:13
constant and the variable name is going to be users so we call the PG table
10:20
function which accept two arguments so the first argument is going to be the
10:25
table name you're going to type users here and the second argument is going to
10:31
be an object to defin all the fields for the said table so you're going to have
10:38
ID and this ID is going to be an auto incrementing primary key column named ID
10:44
you're going to have a Serial ID do primary
10:51
key and we have no stripe customer ID
11:01
this is going to be a unique test column for storing stripe customer ID okay so
11:07
we have the test and we have stripe underscore
11:13
customer _ ID and this is going to be a unique field we don't want any duplicates in
11:21
this field so we have the stripe customer
11:26
ID all right and next we are going to create the email field to store the user
11:33
email going to have a test email and this is going to
11:40
be a not now um column and it's supposed to be a unique column as well so we just
11:48
add append the unique function to the um object the test
11:54
object and next we have the name which is having the test as well just name you
12:02
know the name of the field is name literally and we have
12:07
Point inside the user table so the point is going to be the integer for storing
12:13
the point with the default value of 50 so by default we want to give users 50
12:18
point to test our application out before they make a decision to subscribe or purchase more points that's going to be
12:26
an integer and the name is going to be point and the default value is going to be 50
12:34
sorry 50 here and the last field of this table is
12:40
going to be created at so we want to get the time stamp at which you know this
12:46
user was created right you have the time stamp and we provide the column name to
12:54
be created at dot default
12:59
now so we have default now next we are going to create the
13:06
subscription table so for this table you're going to have the name defined the table as
13:14
subscription right subscriptions DG
13:20
table we have subscriptions to be the name of the table and the second argument is going
13:27
to be the fil the first field that you're going to have is going to be you know basically
13:34
same as this one you're going to have an auto incrementing primary key with a
13:39
column named ID so we have we paste that over here and we create a user
13:46
ID we store the user ID this is going to be a forign key referencing the ID
13:52
column in the user table so this user ID is going to be an integer
13:59
we are referencing the user ID from the users table so
14:06
dot reference references this is a
14:13
function we get or return the user.
14:19
ID and we don't want this to be now so not
14:27
now and then next field we going to create is going to be the stripe subscription ID subscription
14:35
[Music] ID this is going to be a variable
14:43
character and the name is going to be stripe
14:49
subscription uncore [Music] ID and the length is going to be 255
14:57
ktic for the subscription [Music]
15:02
ID we don't want this field to be Nile so we add the not Nile function
15:10
okay next is going to be the plan so we have plans for the various subscriptions
15:16
and this is going to be the field to have you know or store the plant we have a variable character and the name is
15:24
just plan the length 50
15:30
the length of the character should be 50 and not
15:36
now and we have the status the status is going to be a variable
15:44
character and the length of the statues should be 50 and not now the next field
15:52
is going to be the current Period start which is going to stall the current period for the starting of the
15:58
subscription and you're going to have a current period end which is also going to save the period end for the
16:05
subscription we are going to charge the subscription on a monthly base okay so
16:10
you want to store the starting period of the subscription and the ending period of the subscription so that we can you
16:17
know know when the subscription has expired or not we have the
16:23
current um period starts and this is going to be a time
16:31
stamp the name is going to be current Period
16:39
start dot not now and we have current period
16:51
end we have current period end
16:59
to be a time stamp as well so this is going to be similar so I'll copy
17:04
everything here paste it at this side and change the start to
17:10
end and the final field in this table is going to be the cancel art period so
17:15
I'll copy this and change this to cancel at
17:24
period period end and we going to have have
17:31
cancel at period end not now end the default
17:38
value is going to be false a bullan right
17:43
false we have that here so we have an error here saying
17:49
Okay so let's change this to Boolean not a time stamp so we have a Boolean and we are good to go the final
17:57
schema we are going to create create is going to be the generated content schema
18:04
okay so let's define the generated content table so export
18:15
constant generated content and we have the PG
18:25
table generated content to be the name of the table and the second um argument
18:33
should be the fields you're going to have an ID as usual which is going to be
18:40
Auto incrementing so we provide the ID and we are also going to save the user key here
18:48
and we are going to have a foreign key referencing the ID from the user table as well so we are going to copy
18:57
this paste it over here and create these four
19:03
Fields so we start with content so we have
19:10
content test um
19:15
content not now we have
19:24
prompt test and the name of the color colum should be prompt so we give it a name
19:32
prompt not now and we have the content type so
19:40
you're going to have three types of content Instagram Twitter and Linkin for
19:46
this project so we create a variable
19:51
character and give the column name content
19:57
type and you're going to to have a length to be 50 and this is a notal
20:06
field we have created at and this is going to be a time stamp
20:14
similar to what we had in the user table so I'll copy that and paste it over
20:22
here and with that we just created the schemers for this application so our
20:28
next Target is going to um finish up the configuration file inside here and push
20:36
all these schemers to Neon to have an interface to interact with our database
20:41
so let's move back to the D config and Contin with the rest of the configuration so here we have the output
20:50
so the output is going to be um drizzle so this is how we do it
20:57
drizzle and we we have the DB credentials so this is the object to
21:04
hold the URL connection string of the new console so we have DB
21:12
credentials and inside here we have URL and connection
21:19
string so I'll move to the neon console and copy the URL string paste it here so
21:27
that we can continue with the rest of the code so back to my browser I'll search for neon
21:39
console click on this first
21:47
link so you have to sign up first before you can create a project so I'll place
21:52
this link inside the description so you can check it out and once you visit the
21:58
exact URL you will be asked to sign up so you sign up with your email and you
22:05
can pick things from there so you already have a project I'll click on
22:10
this and inside the dashboard we can click on this drop down here database
22:17
drop down and create a new database so for this um project we going to give the
22:24
database a name threadcraft I already have threadcraft so this's say something
22:29
like threadcraft _ a and hit on the create
22:36
button it wait for a while for this to be created and we have it created I'll
22:41
copy this um connection string copy this snippet code snippet move back to my
22:48
code editor and paste it over here so ideally we have to create a m file
22:54
you're going to create that in a second but for now let's just you know paste the connection string
22:59
here and do same for the connection string comma here and we are good to
23:08
go now the next thing we are going to do is to push this schemes to Neon console
23:15
so when we push these schemas we will be able to click on these
23:20
tables and select a database to see all the schemers that we have
23:26
right so let's move back to the vs code we don't have any schemers yet so we can
23:32
see this side is empty when I select a different project you can see I have um schemers
23:40
available here and some data here so let's move back to Trad craftcore AI
23:45
this table so back to the um code editor you move back to package.json file in this
23:54
file you're going to add these two scripts to The Script object of the
23:59
package.json file and what this command are going to do is to P all the schemers to the ne
24:07
console so these are going to be the commands so the first command is going
24:13
to be named DB [Music] push and this command is going to be
24:20
drizzle so let's bring the double quotation drizzle um kit
24:30
wish and we have DB
24:37
Studio which is going to be [Music] npx
24:43
Brazil hit and studio all right so these two
24:50
commands the first command is going to pach the schemers as I said and the second command is going to open up a
24:56
studio where we can interact with our database in a graphical user
25:02
interface so I'll give this a save and um check everything one more
25:08
time to go over this to make sure we have everything in place and same for dzo
25:15
config I think we are good to go so let's run the
25:21
command and PM run DB push
25:29
wait for a while for this to be pushed to the neon
25:43
console and we have a successful push so we have the um schemers being pulled
25:49
from the database and all the changes has been applied so when I move back to
25:54
the new console and refresh this dashboard
26:05
we can see we have all these schemas we have generated content subscription and user schemas and these are the exact
26:12
schemas that we created over here we have the users we have the subscriptions
26:18
and generated content so things are looking great so to test the second
26:24
command we also run npm run DB studio and this is going to spin up a
26:32
studio for us I'll run this wait for a while and we have the
26:38
studio up and running so I'll hit on command on Mac OS and control on Windows
26:45
click on this link to open it in your
26:54
browser and we have a very similar interface to Neon cons conso right so we
27:00
have the interface here and same interface over here as well so it's up to you to choose which interface you
27:07
would love to work with for me I prefer the new console so you can decide which
27:13
one is better for you and work with that so I'll click on this close button to
27:18
close this studio I think um we are good to go
27:23
so the next thing we are going to work on so the next thing we are going to do
clerk setup + sign up + sign in routes
27:29
is to set up click for our authentication so I'll move to the
27:34
layout page here and I'll move to my browser and search
27:41
for cck docs click on this first
27:50
link and quick start and tutorials or go for next
27:56
JS looking at this installation steps the first on the list is to install the
28:01
click nestjs I'll copy this command and move
28:06
back to my terminal paste it over
28:12
here and this is going to install the click nestjs for us and back to the
28:18
documentation page we have to set up an environment variable so we are going to create a M.L file but before we do that
28:27
I want to to move to click
28:36
dashboard on this dashboard you have to sign up first if this is your first time opening this dashboard you will create a
28:43
project so create an application and give the application the name
28:51
threadcraft AI okay you have threadcraft ai
28:58
and we will create the application so we have the application created so back to this um documentation
29:06
page I'll refresh this page and on
29:13
the local. M section environment variable section I'll click on this drop
29:18
down and select threadcraft AI so we are going to create this file
29:24
inside our root directory and is going to be replace the
29:29
file here and add it to the G ignore file so we have to add m. loal so that
29:37
we don't mistakely Commit This to um GitHub we have that and we are going to
29:46
copy everything here the next public click publishable key and the click
29:51
secret you paste that inside the M.L file so the next on the list is to add a
29:59
middleware to our application so the middleware grants you access to the user authentication State throughout our
30:07
application so we have um yeah so we are going to create a
30:14
middleware here inside the root directory middleware
30:20
typescript and we are going to copy this code this code here
30:28
paste it inside the middleway we save
30:36
this and we add the fourth step so the fourth step is saying we should add a
30:42
click provider to our component so what we going to do here is move back to our
30:48
layout page our layout page and inside the
30:54
layout page so we are going to import CLI Provider from
31:01
click nextest JS click next GE so we have that here
31:09
click provider and for this project we are going to render everything in a dark
31:15
theme you're going to have a dark mode for the entire application so we will need to install click themes as well
31:23
okay so to install clect themes we have to run this command here
31:28
npm um y add at
31:37
click theme I hope I had that right so let's
31:42
you know confirm that so click
31:47
themes and check it
31:56
here okay so is supposed to be themes not theme I
32:01
copy that and paste it here so you're going to import that and we have the
32:07
dark you going to import dark mode from cleck
32:13
theme collect themes oops clict [Music]
32:19
themes all right so things are looking great and um we scroll down a little
32:26
bit and right right before the HTML in the body tag we create the elect
32:32
provider so the next thing you're going to do is to work on the sign in and sign up page so when we move to this section
32:39
of the documentation this one here the link will be placed in the description as usual so we have um the steps to build
32:47
your own sign in and sign out Pages for next JS app with click
32:53
right so to build um a sign up page we have to create a route and for this
32:59
project we have the we are using the nextjs app directory and not the pages
33:05
router so I'll click on this so we are going to copy this and paste it over here so inside
33:14
the app directory we're going to create this folder have um sign up like this
33:20
and inside on this folder we are going to create page
33:28
. TSX and copi this code here paste it
33:34
right here inside the sign up page so for this project we want to customize
33:39
the sign up page right so to do that um I would like us to change this page to
33:46
sign up sign up page and inside this return here we are going
33:54
to have a div okay you're going to have a div
34:00
and this da is going to have a class name so for this class we want to you know Place everything in the center
34:08
right so we have F justify Center item
34:14
Center and we want um the minimum height to fit the screen so we have the minimum
34:20
height to be a screen and the background should be black we have this customization and
34:28
inside the sign up component from click nextjs we have um these um properties
34:34
that we can add so one being appearance and this appearance object is to
34:40
customize the sign up page to your own choice so we target the element object inside the appearance object and Target
34:49
the um form button primary so we have a form button
34:54
primary and this is going to be BG background color of
34:59
blue and when we overover on this button we want to have a different variant of
35:05
the blue color so you're going to have um background blue
35:11
600 test small more and the case should be normal the
35:18
normal case save this think everything is looking great over
35:25
here and we create a different um routes for the sign in so we follow
35:31
the same procedure we scroll down here we have the signin
35:37
page we copy this open the app folder and create this
35:42
folder you have the sign in and create a page. TSX file we have page. TSX and
35:50
this is also going to be the sign in page or the project right sign in so
35:57
basically we are going to have the same code here I'll copy everything in the sign up and paste it in the sign in and
36:05
change the sign in to um sign up to sign in sorry so we
36:12
have sign in and this is supposed to be sign in
36:18
page I'll give this a save and we are done creating the sign in and sign up
36:24
for the um project right so we need a button to navigate to this sign in or
36:30
sign up um route to spin up the modal for a user to sign in on click um click
navbar
36:37
authentication so the next thing we are going to do is to create the navigation bar
36:42
component this Navar here
36:48
um let me search for the project we have tradecraft
36:55
F this naar here so we have the logo we have the title all these links and um
37:01
The Click authentication icon here and the user profile icon here after the
37:07
user has signed up or signed in let's work on the nav bar and create this um
37:13
landing page and move to the other pages so for the nav bar you're going to
37:18
create a new folder named component inside the root directory so we have component
37:28
and we are going to create a new folder um a new file instead Nam nav
37:36
bar. TSX so this is going to be the Navar for
37:42
the um project or the application this is a client component
37:47
so we going to have use clients imported at the top here and import link from
37:54
next link you're going to need this
37:59
so from click nextjs we want to import all of these right so import all this
38:06
from um click nextjs so the first thing you're
38:11
going to import is the sign in button we need this button to be able to um spin
38:16
up the modal for signing up sign up
38:21
button we need the user button after user has logged in we need the sign out
38:27
button to sign out a user we also need the signed
38:32
in so sorry the signed out button is a state to um check if a user has signed
38:38
out and the signed in is a state to check if the user has signed in and we have the user authentication which is an
38:45
object that contains all the information after user has
38:50
authenticated and you're going to import use State and use effect from react use
38:56
state and use
39:02
effect so we export a function named
39:09
Navar and this Navar we are going to um get a user
39:15
ID from the use o so the use O is a hook that contains varieties of
39:22
objects so we have the use of hook initialize here and in inside this use
39:28
or hook we have um all these properties we have user ID and so much
39:35
you know we have actor get token and all these objects but we are interested in
39:41
user ID for now and have this state so you're going to have a state to check if the menu is
39:48
open or if it's scrolled so when we check this project
39:53
here um I tend to mobile view we can see
39:59
we have this menu showing here so we want to build a state to check whether
40:05
this menu has been opened or closed so that we can you know change the icon here and the function here to close or
40:12
open the um menu and the scroll state is to check if
40:17
the user is scrolling on the application so we can have this sub to effect here that shows or makes the nav bar stand
40:26
out right back to code we create those States so
40:31
you're going to have the it's menu
40:36
open we have set this menu
40:42
open we have used itate
40:47
false by default you want to have a false and the constant for the
40:54
isced set isced
41:05
we have used it and that is also going to have a false by
41:11
default all right next we are going to create a use effect so this use effect is going to um
41:19
control the state whether a user has started scrolling on the application so that we can have this um effect on the
41:26
Navar so we create a constant named handle
41:35
scroll is going to be a function and inside this function we are
41:43
going to set a scrolled the state we created over here to window do scroll on
41:52
the Y AIS so the window object is having this property scroll y as soon as a user
41:59
starts scrolling on the app we are going to have this value updated in real time
42:05
by the window object so we want to detect if this value is greater than 10
42:11
and if that is the case it's going to rain a Boolean so true then we set the
42:16
scroll to true and show this effect here right so to demonstrate this we can
42:24
have um we can log the scroll y on the console so let's
42:32
have something like console.log before I do that let me just return an empty
42:40
Dev doing nothing for now and
42:45
log console.log we have window do scroll
42:54
Why move back to um
43:00
page and you're going to import
43:13
Navar so when I move back to Local Host Port 3001 refresh this
43:19
page and inspect check the console we have zero for the initial um
43:29
value as soon as I start scrolling provided we have enough elements on the
43:36
screen so we have to add more element to this page so that we'll be able to scroll and see the value here so I'll
43:43
create a paragraph write um here a paragraph and fill them with a random
43:50
test save it refresh the page
43:55
and um boom we have a value here so this is
44:01
updating in real time all right things are looking good back to the nav bar we
44:07
can continue working on this scroll on functionality so as soon as the window
44:13
do scroll Y is greater than 10 we update this state to be
44:19
true and we have to add this code here window. add event listener to listen to a scroll event
44:29
so anytime there is a scroll event you want to call the handle
44:35
scroll this is what we have here we have that here and inside this use effect we are
44:41
going to add this code that is going to remove the scroll um event listener
44:47
after we are done using it so
44:52
return you're going to have um window Dot remove event
44:58
listener you have the scroll and handle
45:05
scroll all right so inside this um return let's get rid of
45:12
this we are going to have header we create a header
45:20
element and inside the header element we are going to have this class name for
45:26
the Navar so we add a class name inside
45:38
here so we want to use a template string because we will be rendering some classes
45:43
conditionally so this Navar is supposed to have a faced property we have faced
45:49
top zero left zero we want this to stick to the top
45:56
and we have right zero as well and the Z index is 50
46:02
because we want it to be on top of all the elements on the page we add a transition
46:09
or duration of
46:14
duration 300 milliseconds for this effect so when I scroll we have this
46:21
fade effect here so that's what we just created the transition
46:27
and when the user has scrolled on the application so we going to render this
46:32
background color here if the user has scrolled on the application okay so we
46:38
have that check here it's
46:43
scrolled if that is the case we want to um
46:50
render this okay so this supposed to be inside the
46:56
temp play string is screwed we want to have
47:08
this you want to have um a background color of
47:13
gray 980 and a backdrop of Blair so we have
47:20
backdrop BL um you want to BL it let's
47:26
change this m M2 [Music] MD and anything other than this you want
47:33
to have the background to be transparent so you can see by default we
47:39
have the background to be transparent and as soon as we start scrolling we have the effect here so this is going to
47:45
make sure to handle that for us awesome and inside the header we are going to
47:51
create a na element and inside the header we are going to create a na element
47:58
so this nav element is going to have um a class name
48:07
container MSO because you want to Center everything and PX of
48:12
four and so I think I should save this and move back to the page. TSX to test
48:20
everything out so this what we going to do before we test what we have let me
48:26
add um just a test to expand of bircraft
48:34
AI fed craft Ai and back to the layout we want to make this application a dark
48:42
um theme so let's add these classes to the [Music] body so we are going to get rid of every
48:49
class here and rep place it with this okay
48:58
so we have background of black we have test white and this property and also
49:03
change the font of this application so I'll get rid of everything here replace it with the inter font so
49:11
you have to import
49:17
enter from
49:24
next font Google so we have that in place back to the page we uncomment the
49:31
Navar out and check what we have on the Local
49:37
Host Port 31 so we just have tradecraft the test
49:44
here and we have the um back to the na bar on a small
49:50
screen you want to have the padding
49:56
to be eight small screen and above and padding on the vertical as it should be
50:02
four and we also have from small screen upwards the padding on the vertical a
50:09
should be six you have that space created over here so next you're going to have this
50:16
da here and this da is going to contain all these so you're going to have the
50:21
tradecraft logo and all the elements on the right hand side
50:27
so we give it a class name Flex Flex
50:35
WP justify between item
50:41
Center Mass width 6 XL Ms
50:48
O2 and create another div for the logo and the um test
50:57
so the actual logo and the test of the logo so you have the test here in a
51:02
span you have to put everything in the link because when the user click on this logo you want to send them to the
51:09
homepage we have a link oops link
51:21
here put this span inside the link
51:28
and give it an hre to direct us to the homepage when
51:34
user click on this and the link is going to have a class okay we're going to have
51:40
a flex and item Center you want to Center the items and give a space
51:47
between the logo and the test so this div is also going to have
51:54
this classes flex and item Center the logo is going to be a zap
52:01
icon so for this project we are going to use l it react icon so L it react icons
52:08
contains every single icon that you may need in your application so for the logo
52:15
it's just a zap icon so you have zap and you're just going to use this
52:21
for the logo I'll call the zap icon here
52:29
um from LD react so let's import it over here
52:35
import from losd react so we have to install this first
52:42
okay okay okay um
53:01
copy this install user
53:14
react and we can call the zap icon here so from losd
53:23
react we can call the zap icon now
53:29
and over here you want to start the zap icon you want the width and height to be
53:37
eight and change the test to Blue um
53:46
500 let's save this and move back to the page we have everything looking great
53:54
here um the only thing left here is to increase the size of this test so we
53:59
have to make sure it looks exactly like this one back to the span we going to add
54:06
this classes we going to have a class name test
54:11
Excel and from a small screen upwards you want to have the test to be 2 XL
54:17
font should be bold and the test should be white I save that
54:28
and move back to yes we have the test showing
54:34
beautifully so TR craft AI
54:42
awesome so next let's create a button that is only going to be shown on the mobile screen to help the user navigate
54:50
so you're going to have a hand begger icon and so this is what I'm talking about
55:00
this icon here so let's create that
55:06
button it's going to have the following class properties let's add them and um add the
55:14
rest of the element so we have class name and we want to hide this from small
55:20
screen upwards test white for course outline now
55:30
and when the user click on the button we add an on
55:36
click we want to show the menu we have set it's menu open
55:49
to to is menu open so we have that and
55:55
this is going to open the menu when it is closed and um close it when it is
56:00
opened so let's render the respective icons for each state when the menu is
56:06
open what icon do you want to show if the menu is open we definitely want to
56:12
show the close button you're going to have X it's a button from Lucid react
56:17
and provide a class name width of six and height of six
56:29
and when the menu is open you want to just show the menu
56:35
icon with same classes paste that here
56:44
awesome so we can save this and move to the Local Host for
56:52
31 minimize it and let's see what we have so we have the menu here the menu
56:57
icon when I click on this nothing is going to show because there is no menu to render but the toggle state is
57:04
working perfectly fine
57:14
awesome so next we are going to create a div that is going to hold all the menu
57:19
items for us this da is going to have a class name
57:26
and this is going to be a template string because we want to render some classes um conditionally so we have a
57:33
width of full SM with the width should be Auto so from small screen and upwards
57:40
we want the width to be Auto and we want to conditionally render
57:47
the hidden state so when the menu is open is open
57:53
menu open you want to have a block class so meaning we want to show all the menu
57:59
items else we want to hide them so that is what this um div is
58:06
doing for us and we want to have these classes on
58:12
the small screen and upwards you want to have a block margin top of four SM
58:18
margin top of zero so from small screen and upwards you want to have a margin top of
58:24
zero we save that that and inside this div we are going to have
58:29
the menu items so we create a
58:38
div give it a class name Flex Flex column this are going to contain all the
58:46
um menu icons for this project and flex row you want to display within the row form from small screen and upwards you
58:53
want to um have item Center and the space on in
58:59
between um the icons are supposed to be X we have space
59:08
X and we are going to render the menu items so we create this array to hold
59:15
all the menu items so the first item is
59:21
features the second item is prizing
59:26
we have docks and the third item is
59:33
docks map so we looping through every item and rendering them on the
59:41
Navar so we could have created an array over here to display all these but they
59:49
are the same so you can move this um array here from this side and create a
59:56
separate variable for the arrays and loop through them over here so we want to render each of the elements as a
1:00:03
link and this is what we want to do we want to have a key the key is going to
1:00:10
be the item name and the hre is going to be
1:00:16
this so for slash whatever the name of the item is so item. lowercase
1:00:26
so if we are rendering the features the link is going to be features same for prizing and
1:00:32
docs and we have a class name or the link the class name is going to be
1:00:39
this you're going to have a test gray of 300 um when you over on this link you
1:00:45
want to have a test of white and a transition color when we over on the um
1:00:52
nav links so I'll have that class basted over here test gray 300 over test white and
1:01:00
transition colors inside the link let's render the item so I have the item here
1:01:06
rendered and we have this pan here so this pan is going to show this
1:01:13
effect when I over on the link here this side here we have this effect
1:01:22
see this effect um a diff that shows a background color transitioning from
1:01:28
position zero all the way up to the end here so it's a cool effect let's add
1:01:34
that going to be a span and I'm going to copy that paste it
1:01:40
over here and give it a save so we move back to Local Host Port
1:01:46
31 we can see that effect taking place over here
1:01:51
awesome so after displaying all the links you want to condition show the dashboard link only if a user has logged
1:01:59
in right so to do that we are going to use
1:02:04
the you're going to have the user ID that we got from the use or um Hook
1:02:12
from click this user ID we are going to check so if and only if there is
1:02:18
something inside the user ID or there is a value available in the user ID you
1:02:24
want to renter this link that's all what this is saying you want to render this
1:02:30
link and the link is going to be
1:02:36
dashboard and it's going to have the same effect when we over it so I add the span here and the link is going to have
1:02:43
the same class name as what we had here I'll copy
1:02:53
that and I will also add a link so we
1:02:58
are yet to create all these pages okay so don't worry about the pages for now so the page for the dashboard is going
1:03:05
to be on generate so when the user clicks on this dashboard we want to send them to the generate page we don't have
1:03:12
all these Pages yet but we are going to create them to be able to navigate to um
1:03:18
each page respectively we have the dashboard which is going to be rendered
1:03:24
only if a user has signed up we don't have it showing here because we haven't signed up and next we are going to have
1:03:32
the sign out component okay so this sign out component is coming from CLI the one
1:03:39
we imported over here [Music]
1:03:44
and we are going to check if the user are signed out so if the user has
1:03:52
signed out we want to show the these links okay
1:03:57
we want to show the sign in and sign up link that is only if the user has signed out or the user hasn't authenticated
1:04:05
with us yet so we are going to have the sign
1:04:12
in button from click and the mode you
1:04:17
want it to show as a model and inside the sign in we are going to have a button named sign in so
1:04:26
you have a button here with all these classes so the test color is gray we
1:04:32
have the hover effect to be white and transition colors and all these
1:04:37
properties and we are going to have the sign out sign up button sorry the sign up
1:04:44
button to be um a button as well so you're going to have that button
1:04:51
here with all these class names so we have the sign up button created so these
1:04:58
are going to be shown only if the user hasn't authenticated with us yet on the other hand side if the user has signed
1:05:04
in we want to show this icon here this beautiful icon here that has
1:05:10
the user profile and other informations so we are going to
1:05:17
um have that here to sign
1:05:24
in and we call the user button so that is also coming from click we get this
1:05:31
button after a user has logged in and the appearance of this
1:05:37
button we have the appearance object or property is going to um have this style
1:05:45
so on the element property we want to change the Avatar
1:05:51
BX to width of 10 and height of 10
1:05:57
and we just that we are done with our Navar so let's move back to local hostport
1:06:03
31 to see what we have so we have the um you know when we scroll down we see the
1:06:10
background changing we have the tradecraft logo here we have the features pricing dos and sign in link
1:06:17
here we have the sign up button here so let's click on the sign up
1:06:23
button and it shows us this model to sign up to the application so very soon
1:06:29
we are going to create a hook that is going to get all the information from um
1:06:35
the sign in user and save it inside our database so we're going to create a hook for click and in the hook it returns an
1:06:43
object after a user has signed in successfully you're going to use that information save it inside our database
1:06:51
so back to the code um
1:06:58
for the sign up button we are supposed to make it a modal as well when we check here it takes us on a new page so I have
1:07:05
to um add the mode to modal as
1:07:14
well give it a save and move back to this application
1:07:19
refresh the page click on sign up and boom we have a mod out also aome things are looking
1:07:26
great so next we are going to create a hook that is going to help us save all
clerk hooks + ngrok
1:07:32
the user information inside our database using click hooks so to start with the hooks I will
1:07:38
search for click web hooks to click web
1:07:45
Hooks and I will click on this link here
1:07:58
and move to this
1:08:04
side awesome so this is what we are looking for on this page so this is the steps to set up a
1:08:12
hook and when we go through the steps we are going to be able to set up a rep
1:08:18
hook for click authentication right awesome so the first thing we
1:08:25
going to do is to set up NG Rock So NG rock is a software that is going to help
1:08:30
us expose this um Local Host po 31 to the Internet so that we'll be able to
1:08:37
test the web hook locally without that we can use this local hostpot 31 to test
1:08:43
our web hook with click so let's get NG Rock installed I'll search on nrock
1:08:52
installation and I will click on this link here on this page it shows us all the
1:08:58
operating system we can install NG rock on we have the windows and you have Mac OS Linux Docker
1:09:05
and others so I am on Mac OS so I'll click on this tab if you're on Windows
1:09:11
you click on this tab and follow the installation procedure I've already installed this so there is no need to
1:09:18
install it on my um PC again so to test whether we have NG Rock
1:09:26
installed or not I will open my terminal type this command here NG Rock if you
1:09:31
have it installed you're going to see all this information appeared in our terminal so now to expose The Local Host
1:09:38
sport 31 to the Internet so the port might be different in your case it could be 3,000 or any other port number at all
1:09:47
you just have to type here NG Rock HTTP and followed by the port number so in
1:09:53
this case I'll type 3,000 and one hit enter and we have a forwarding URL so
1:10:01
this is the URL connecting to our local hostport 3001 when I copy this exact
1:10:07
URL and paste it in my um browser search for
1:10:12
this you can see we have the exact code in local hostport 3001 so this is the URL that we are
1:10:20
going to use to test the web hook out so once we have the URL let's create these
1:10:26
folders so inside the um app
1:10:32
directory so inside the app directory we going to create a new folder named
1:10:38
API inside the API folder we are going to have a folder named web
1:10:44
hooks so for this project we are going to have two web hooks the first one is going to be click and the second one is
1:10:51
going to be stripe so I'll create two folders the first being
1:10:56
click and the second one being strip so we have these two hooks
1:11:05
created and inside the click folder we are going to create a file named route.
1:11:11
TS so this we are following this um you know installation process so we have set
1:11:18
up the NG Rock and we have forwarded the local hostport 3,000 to the Internet so
1:11:24
now we are to create an endpoint and that is what we just did creating the click um API web hooks inside the app
1:11:32
directory we have done that and the next thing we going to do is to copy this um
1:11:40
Local Host variables to our local to our M.L file so back to um this file we will
1:11:50
paste this so the next public click publishable key I think we already we have this I'll get rid of this one here
1:11:59
we have the secret as well we have the secret as well I'll get
1:12:05
rid of that and yeah everything is okay so we have the web hook secret so these
1:12:12
are the keys that are going to be used to you know communicate with the CL web
1:12:17
hook you have to make sure we have this installed and the next step is to create
1:12:24
a middleware we already have the middleware created so this is the middleware we created it when we setting
1:12:30
up the sign in and sign up page you can move back to that section in the video and watch how we did it and we are going
1:12:38
to install this um package so you will use this
1:12:43
svix to verify web hook signatures so I'll get that installed over
1:12:53
here awesome so we have the svix installed so what is next on the list we
1:13:00
have create an endpoint in your application okay so we have we have
1:13:06
created that you know the web hook route we've created that already so we are
1:13:11
going to copy everything here and paste it inside the um you know
1:13:18
the web hook route so back to our code in this file here we paste everything
1:13:26
here awesome so what is going to happen is we
1:13:32
are going to copy this exact URL here the one exposed to the internet and
1:13:38
append API for/ web hook for/ click so anytime a new user signs up we are going
1:13:45
to be directed to this exact URL so this is a post request and this is going to run as soon as a user signs up and we
1:13:52
are going to check if we have a web Secret and we already have that we copy that so that is created here and if you
1:14:01
don't have any web hook secret you're going to throw an error and get all
1:14:07
these headers all this payload and the svix ID the time stamp and signature we
1:14:14
do the checkings here if they exist else we going to throw an error uh so the body contains the information of the
1:14:20
user you're going to get that saved in the variable and we are going to do whatever you want to do with it inside
1:14:27
our application for now we are just logging everything to the console so to test this out we have to create an event
1:14:36
inside web hook and this event is going to you know help us um log the right
1:14:41
type of data for this application so I'll move to click
1:14:46
dashboard this page here and I will go to
1:14:52
configuration scroll the way down to um web hooks this page
1:15:00
here on this page we are going to add an endpoint right we are going to add an
1:15:06
endpoint so the endpoint is going to be this Local Host Port 31 URL that we just
1:15:12
expose to the internet back to the click dashboard all
1:15:19
right so here we going to add an endpoint I'll click on ADD endpoint and copy this URL
1:15:26
here paste it here and add this path so we are going to have
1:15:32
API web Hooks and click right so we have
1:15:37
API for/ web hook web hooks sorry and click so I'll
1:15:45
give this a save but before we save this let's add the event so the event we are interested in
1:15:53
is when a user is created right so I will select everything here the user.
1:15:59
created event user. created at Edge deleted and updated so these are the
1:16:04
event that we are interested in I'll click on create so let's create
1:16:19
them and we have our first web hook created so to test this out we have to
1:16:26
sign up with a new user so we have the you know the object being logged in
1:16:33
the console so we are going to see everything right here in our terminal
1:16:39
I'll scroll this all the way up to get more space for us to see what the you
1:16:45
know web Hook is returning for us so back to this section Local Host
1:16:52
Port no back to this URL the one is on the internet we are going to sign up
1:16:57
with a Gmail account I'll click on sign up and continue with a Google
1:17:07
address continue on so we are supposed to see a user icon
1:17:14
here and let's go check the click dashboard to see what we have all right
1:17:21
so we have the user icon displayed here let's check the click dashboard and refresh this
1:17:29
page so the error rate is 0.0 so let's move back to the terminal to see what we
1:17:35
have so we have an error here let's scroll the way up to you know learn
1:17:41
about the
1:17:46
error okay so it says so please add a web hook secret so I thought we added
1:17:52
the web hook secret let's check that one so in the M file um
1:17:58
okay so there is one more thing that we have to add before this can work so let's go get the webook secret so back
1:18:05
to the CL dashboard on this endpoint page when we scroll all the way down we
1:18:11
have a signning secret over here so when I click on this I icon it's going to
1:18:17
display for me um this web hook secret so I'll copy
1:18:23
that and move back here replace it with this one give it a save and fingers
1:18:31
cross we should get a successful you know hook creation all right so let's test this
1:18:37
out so back to the um this URL here I'm going to refresh the
1:18:45
page and log
1:18:52
out so let's go to the click dashboard and get rid of the just login user so
1:18:58
back to users tab so on the users tab it s for us all the users that are signed
1:19:03
up to the platform so I'll just get rid of the user here click on this and delete
1:19:11
user awesome so I'm going to sign up
1:19:18
again with the same email and check if we have the web hook created
1:19:27
Ed all right so let's check this out back to Local Host B 3,000 and one and
1:19:34
looks like we have something awesome so the web Hook is running we
1:19:40
have the user data and we have the email address me Albert here and any other
1:19:46
information that we will need from the logged in user the given name the
1:19:52
profile and everything at all so um we are going to need this to insert the new
1:19:58
user inside our database okay so I'll move back here and what do we have to do next okay
1:20:08
so next we are going to create the actions we have to create an action to
1:20:13
save the new user inside our database so over here in the web
1:20:20
hook click web hook we are going to add um something here so what we going to do
1:20:28
here is to uncomment this out so what we going to do here is to check for these
1:20:33
two types user created and user updated so if these two events are being
1:20:39
triggered we want to save the new user inside our database or update the user
1:20:46
inside our database so we are going to create an if statement and have this check event. type if the event. type is
1:20:54
equal to user do created or if the event
1:21:02
type equals user updated we want to do the following so the first thing we want to
1:21:09
do is to distract this information from the event. data so as I mentioned this
1:21:15
data event here contains all the information about the user so let's
1:21:21
distract some of this information so from from event. data we are going to distract the
1:21:30
ID the email address first name and last
1:21:38
name and over here we going to create a variable for the email so the email is an object so
1:21:46
we have to get the actual email by accessing this array so email addresses
1:21:52
zero and on the first index we get the actual email address and also for the
1:21:59
name we are going to create a concatenation for the first name and second name so we
1:22:06
have a template string here and we are going to write first name and second
1:22:13
name so we are going to realize these are the information that we going to need in the create or update user
1:22:20
function to insert the user inside our database so once we have have these variables
1:22:26
created you're going to have an if statement to check if the email exist because we only want to you know insert
1:22:33
a new user or update a user if there is an actual email so you're going to have a TR
1:22:48
catch and we have the error object inside a tri catch we going to
1:22:54
have this function here I wait create or update
1:23:00
user and we pass in the ID the
1:23:08
email and the name oops name awesome so
1:23:13
we have that and in the catch block we are going to conso dolog this error console. error
1:23:23
you're going to have this error here that is going to say error
1:23:28
creating or updating user updating user and we loog the
1:23:35
actual error and
1:23:40
return a new
1:23:46
response error processing user data you have a status by
1:23:56
500 so you're going to log so we have that and um this function is supposed to
1:24:04
be created okay in the actions before we can you know use it so back in the U
1:24:10
folder we going to create this file named actions.
1:24:16
TX and before we work on the actions we need this file here DB config
1:24:24
GSX and inside this function we are going to export the database object so
1:24:31
that we can use it in all the actions page okay so we going to import neon we
1:24:38
need that from neon database
1:24:44
everless we going to import
1:24:52
drel from dzil om neon
1:24:57
[Music] HTTP and we going to have you're going
1:25:04
to import all the
1:25:16
schemers we have that and we create a constant named SQL to hold the newon you know server
1:25:23
object so process. M so we have to create a process. m to
1:25:30
store the URL so you have process. M do
1:25:37
database database URL so I'll have that here and paste it
1:25:48
here and you know copy the URL here so
1:25:54
in actual sense after we are done pushing all the schemers to the neon console you can
1:26:01
delete this file to prevent yourself from exposing your database URL because you only need this to you
1:26:08
know deploy the schemers to the neon console so after we are done with that we can get rid of this
1:26:14
file and we going to have the URL here save
1:26:21
it and back to um DB config we are going to export the
1:26:30
database instance so export constant DB which is going to be
1:26:37
drizzle and we pass in this parameters so we have SQL and the schema
1:26:44
object so this is how we do it I'll move back to the actions to
1:26:50
create the um create or update user
1:26:55
inside the actions file so this is going to be a very
1:27:00
simple function so you're going to export um a sync function and create the
1:27:05
function name the function name is going to be create or update
1:27:11
user and the parameters that we are going to need is the
1:27:18
click user [Music] ID click user ID
1:27:25
string we have the email to be string and we have the name to be string
1:27:33
as well so let's create the body of the function but before we do that let's
1:27:39
call the function here create or update
1:27:44
user awesome so we have the function imported let's write the body of the
1:27:49
function so as usual you're going to put everything in a TR catch block
1:27:55
and inside this Tri block we are going to create a constant that is going to
1:28:00
get the existing user so we first want to sech the existing
1:28:06
user and see if we are going to get something from the database and if that
1:28:11
is the case we want to update right we want to update so we have um existing
1:28:21
user equal a wait DB so we have to first import the
1:28:28
database from the config file that we
1:28:33
created the be config and also import all these from
1:28:39
dzal omm you're going to import EQ we are
1:28:45
going to know the uses of these functions in a second EQ
1:28:50
SQL and descending order from Dro Dro orm and finally we are going to
1:28:59
import all the schemers from schemes so we have
1:29:15
users subscription generated content I'll give that a save and move
1:29:22
back here so we have db.
1:29:28
select so we want to select from the user table from
1:29:33
user us say table sorry and um we want to check wherever
1:29:43
the user do stripe customer ID is equal to the click user ID because we are
1:29:50
saving this click user ID in the customer ID field over here in the schema we have the
1:29:57
stripe customer ID so that is going to be the ID we are going to use to check whether we have an existing user that's
1:30:04
where the EQ function comes in so the EQ function is to compare two variables to see if they are the same and that is
1:30:11
going to return Ouran and users the stripe customer ID
1:30:19
We compare that with click user ID and and we have
1:30:27
limit one and
1:30:33
execute so that is going to be the variable to check whether we have an existing user so next we check if
1:30:41
existing user exists if the value is true we want to
1:30:47
update a user okay so this is going to be the code to
1:30:53
up upate the user so you're going to create a constant to hold the updated user and we want to update the user
1:31:00
collection right and set the name and email so these are the columns that we
1:31:06
want to update the name and user wherever the stripe customer ID
1:31:12
equals click ID return and execute log the updated user and return the updated
1:31:18
user so the next step here is to create a new user if there is no you know exist
1:31:23
listing user to be updated right so that's what you're going to have here
1:31:30
and um we going to create a constant new user and we going to have
1:31:37
thewait db. insect so you want to insert inside the user users um data or table
1:31:46
with these values so what are the values that you want to insert inside this user
1:31:52
um collection you want to have the email have the name the stripe customer
1:31:57
[Music] ID and that's going to be click user
1:32:03
ID and by default you want to give the user 50 points to test out the
1:32:09
application before they make any decision to purchase more
1:32:14
points and we add the do returning and do execute
1:32:27
you save that and we going to log the new user created to the console for the bagging
1:32:35
purposes so console.log and you have new user
1:32:44
created you have new user a new user object
1:32:56
and the error side is going to you're going to have this as the
1:33:02
error and let me copy this paste it over here so we have the
1:33:07
error so there's one more thing before we you know exit this page to test
1:33:14
whether the new user is going to be inserted inside our database or not we
1:33:19
are going to um send a new user and email address using mail trap okay so
1:33:26
let me have a comment here send welcome
1:33:32
email to new users okay so um we going
sending email ( mailtrap )
1:33:38
to use M trap for this okay and to test this out I will create a file inside the
1:33:46
root directory before we create the function to send the email I'll create a new file in the RO directory um named
1:33:54
index oops where is the file named index do
1:34:03
MJS so inside this file we are going to you know have the ma trap set up to test
1:34:11
whether you can see an email or not so this is what I'm going to do first thing first let's move to mail trap dashboard
1:34:18
so um I'm going to search for M trap
1:34:24
and this is going to open the dashboard for us so to get the dashboard you visit
1:34:30
this URL and you'll be asked to sign up if you don't have an account and as soon
1:34:36
as you are done signing up you are going to you know be ushered with this dashboard okay so we have varities of
1:34:43
features in mail trap you have the ability you know to send an email you have the email marketing which is a new
1:34:49
feature being added to mail trap so once you're interested in this dashboard is sending
1:34:55
domains so you can add one domain in the fre account to be able to send um emails
1:35:02
on your own custom domain but for this project we just going to go with the default domain which is demo trap.com so
1:35:10
this is going to be the domain to send our emails so over here we have all this information so let's click on the
1:35:16
integration
1:35:21
Tab and over here we have have all the credentials to set up M trap we have the host address we have the port username
1:35:29
password or and all this information and you have a code
1:35:35
cipet so mail trap is having a package that can be used to send email at the client site so to use that I'll search
1:35:43
on M trap um npm and on this page we can install the
1:35:52
M trap package to be able to send email with ease I'll copy this move back to my
1:35:58
terminal and paste it here to get it installed awesome so we have it
1:36:04
installed and we are going to import our mil trap client from Mil trap and over here we
1:36:13
are going to create these three variables so the first variable is going to be a constant to hold the
1:36:22
token the second variable is going to be a constant to hold the sender
1:36:30
email and
1:36:35
the and the fourth constant is going to be the recipient address
1:36:41
constant recipient email so for the token we
1:36:46
going to get that over here we copy this um password
1:36:54
to be our token you copy that back to this side I'll paste the
1:37:02
token and the sender email since we are using the um demo mail trap.com um
1:37:10
domain we are going to send it from the hello at domain
1:37:18
mail.com and finally the recipient address is just going to be my email address so me Albert
1:37:27
gmail.com so we have that here
1:37:32
awesome so let's write the code the next thing you're going to do is to check if the token exists so if
1:37:39
token exist um we want to we want to run this
1:37:46
piece of code else we want to throw a new error we throw new
1:37:52
error and the error is going to be M trap
1:37:59
token
1:38:05
environment variable is not set else we create a variable for the client so to
1:38:11
initialize the client client equals new M trap client and here
1:38:19
we are going to pass in the token as an argument token and create a constant for the
1:38:27
sender which is going to be so you have the name so let's give the sender a name
1:38:34
m trap test and we have email to be send that
1:38:45
email so being so we have the send function available on the client I'll call client. send
1:38:53
and inside this function we're going to have all these
1:38:59
so the first thing is going to be um the from so who is this from you pass in the
1:39:06
sender two so the two is going to have um an
1:39:12
email objects and the property so recipent
1:39:21
email we have the subject is going to be [Music]
1:39:27
hello from M trap and we have a
1:39:32
test that says welcome to dread craft
1:39:44
AI so this is just a simple test message but this can be complex by sending an
1:39:50
HTML template to make it really professional and beauty for for your application so we have the object and we
1:39:57
have dot then console do
1:40:02
log and we have catch. catch console.
1:40:10
Arrow awesome so now we can test this out so to test this out we are going to
1:40:17
have node index. MJS
1:40:23
and we have a success true message ID so when I check my email I have this mail
1:40:31
trap U message sent to me awesome we can create the function to
1:40:37
actually send an email when a new user has been signed up so insert the
1:40:44
details I am going to create a new file named
1:40:51
mrap dotx so before we write any code here let's
1:40:57
create um this environment
1:41:02
variable so we are going to have M trap API
1:41:09
token and that is going to be this [Music] token or the token you have available in
1:41:16
your dashboard so I will paste that
1:41:22
here and and we are good to go so inside the M trap the typescript file you're
1:41:28
going to have all this code here which I'm going to copy and explain this line by line since
1:41:35
we have already created a similar code in the index. MJS so inside this m trap. typescript we
1:41:43
are going to create a variable named client and we initialize the M trap like
1:41:49
this because this is going to run on the server and we going to get get the window undefined error so we have to
1:41:56
initialize it this way you create a constant very similar to what we did at the
1:42:02
index over here we um import the mail trap create a
1:42:08
client provide the token and we create the actual function to send the emails
1:42:14
we check if you don't have any window do undefine error if we pass that we check if the client is not initialized we
1:42:21
initialize it here and we have the sender TR craft AI the email domain is
1:42:26
hello at domain mail trap so so if you have your own custom domain setup you can replace that here and we can send
1:42:34
the actual email after a user has logged in so this is the
1:42:40
HTML um template as I mentioned this was just a test over here you can go out by
1:42:47
creating your own HTML template to make it look really professional and beautiful
1:42:54
so as we can see integrating build trap is very easy and straightforward we give this a save and back to the
1:43:00
actions we are going to call this function um send welcome email let's
1:43:09
call that function here send welcome email and it accept to argument the
1:43:17
email and the name if that is save and and I
1:43:24
[Music] think we are good to go so let's test this all out to see if
1:43:31
you're going to get a new user inserted in our database and we continue with the rest
1:43:36
of the application so back to the um click
1:43:43
dashboard let's refresh this
1:43:48
page um delete this user
1:43:54
and over here we are going to create a new user so let's sign up one more time is
1:44:01
our Gmail account click on continue
1:44:08
on so let's check to see if we have the new user created inside the database and
1:44:13
we don't have any error at the terminal looks
1:44:18
like um we have the new user created
1:44:24
beautiful and let's check our database
1:44:31
refresh and boom we have a new user so I always get excited when we get things
1:44:37
done on the first try without going through any errors and stress get me so
landing page
1:44:43
the next thing we are going to work on is the landing page so back to the page
1:44:49
um TSX we can get get rid of everything here we don't want to see um this code
1:44:57
these ones here let's get rid of
1:45:05
them and have a clean you know fresh page to work
1:45:11
on awesome so let's create the homepage so we are going to have a
1:45:18
parent Dave with these classes so with regards to the styling of this project I'm not going to spend
1:45:24
more time explaining all the CSS and Tailwind um styles which is going to prolong this video as a result so I'll
1:45:31
copy most of the code and explain things to you line by line so we have this parent div that's going to position
1:45:38
everything correctly have the background color and all that and right after the
1:45:44
header you're going to have the main div you have the main div and the main
1:45:49
da is having this class as well we paste that
1:45:56
here inside the main element we going to have this da to have um the you
1:46:04
know threadcraft
1:46:11
AI so to add this animated icons and the test over here so back to the um main da
1:46:22
main section I'll copy all the decorative
1:46:27
elements paste them over here so we need all these icons so the
1:46:32
sparkle icons the zap icon and the trending app icon all these are going to come from LD
1:46:38
react you're going to import the sparkle
1:46:46
icons the zap icon and the trending app app
1:46:54
icon you give that a save Sparkles not Sparkle awesome let's check what we have
1:47:01
on the screen Local Host for 3,000 so we have um this
1:47:11
icons so next let's work on the hero section which is going to contain the
1:47:17
actual test and the rest of the other elements in the homepage so let's copy
1:47:23
this D here which is going to create the hero section for
1:47:28
us and for this section we are going to need a
1:47:35
button you have to import the button the link and also the rocket
1:47:41
icon so I am going to import rocket
1:47:51
icon import
1:47:57
link on next link and import button so this button is
1:48:06
going to come from Sharden let's move back to the browser and on The Shard Cen page let's search
1:48:14
for a button so we have
1:48:20
button copy this command and paste it over
1:48:33
here and we can now import this button since we have created it let's import
1:48:46
button from component UI button so as soon as we installed this button we have
1:48:51
a new folder created here UI inside the component directory to store all the um
1:48:58
to house all the components that we going to install from Shard Cen so now everything is set for the
1:49:05
hero section move back to the Local H sport 3 2001 refresh the
1:49:13
page and boom you have this over here beautiful so let's work on this next um
1:49:20
the supercharge your social media presents with all this card this section here and this last part
1:49:29
here so I'll copy that as well back to the code um
1:49:39
editor minimize this hero section and create the card section or the feature
1:49:45
section so we are going to have um that copied
1:49:53
and paste it over here so let's import Twitter Instagram
1:50:02
and Linkin icon from LD react so to need Twitter
1:50:10
icon Instagram icon and Linked In
1:50:19
icon so think with that we can check if we have it on the screen we
1:50:27
have it at Local Host Port 31 and the next section is going to be
1:50:33
the benefit section and the last section is going to be call to action section so
1:50:39
these are the benefit section let's copy that and paste it over
1:50:51
here and called the check cycle
1:51:02
icon all these are you know basic um Tailwind CSS Styles and component so I
1:51:09
wouldn't spend much time explaining this into details which I mentioned earlier on that is going to prolong this video
1:51:16
so let's focus on the business logic and the Styles can you know be figured out
1:51:22
as you read it line by line beautiful so we have the
1:51:31
um we have the benefit section created so finally let's create the call to
1:51:37
action
1:51:48
section so the call to action section requires on this so let's first import the arrow
1:51:56
right icon from L react Arrow right
1:52:09
icon and we are going to import sign up button from click so sign up
1:52:17
button sign up button
1:52:26
[Music] oops from click next um
1:52:35
GS and we are going to import off from next JS
1:52:44
server JS server so let's initialize the Earth we
1:52:51
create a constant and we initialize the Earth which is going to have all these objects so we
1:52:59
going to distract them if object that we need so the only object we need here is the user ID I'll just distract the user
1:53:06
ID and that will be
1:53:12
it and we have um the call to action section created
1:53:21
beautifully so next we are going to work on the pages the pricing page and the
pricing page + stripe setup & webhooks
1:53:26
dashboard page inside the app directory I'm going to create a new folder
1:53:39
prizing and have the page file created with TSX all
1:53:46
right awesome so on this page we are going to set up the pricing page so this is how the pricing page
1:53:53
looks like so we are going to have the pricing
1:54:00
plans as a title here and you know the type of plans that we have in the system
1:54:06
so we have the basic Pro and Enterprise so let's import um use client
1:54:12
here because this is going to be a client component and we are going to create an array of
1:54:20
objects to hold the pricing plans you're going to have the basic plan the
1:54:27
amount the price and the features so I'll copy
1:54:33
that and inside here paste it over here so we have the basic plan the pro and we
1:54:39
have the Enterprise so these are the arrays of objects containing the pricing plan let's create a component for this
1:54:46
page so you're going to have a sport default function pricing
1:54:55
page oops pricing
1:55:03
page and we are going to um return these
1:55:10
deves so let's have this Dave to be the parent da of this whole page and close
1:55:16
this Dave inside this da we are going to import the nav bar so we have the nav bar imported
1:55:27
and we are going to have a main um element to hold with the title and these
1:55:35
cards and I'm going to copy the main element and paste it over here so you have the main element copied and inside
1:55:43
this main element you're are going to have the header for this page which is going to be prizing plans I'll P that
1:55:50
here give it a save move back to Local Host sport 31 and refresh this
1:55:56
page when we click on the prizing page we are supposed to see what we did all right so we have the pricing plan as a
1:56:04
title so the next thing you're going to do is to Loop through all the pricing plans so we are going to have um this
1:56:12
here let's create a Dave so this is going to be the Dave that is going to
1:56:18
contain or wrap around all these element okay
1:56:24
and have this piece of code so we are going to Loop through the
1:56:32
prizing plant using the map function and this is going to have um
1:56:38
two callback the plan and also the
1:56:49
index so we are going to have a da this div here let me copy
1:56:55
that um copy this whole div and paste it over here so we would
1:57:02
have to import a couple of things and you have to import the check icon and
1:57:08
the button from the UI folder so the check icon is going to come from Lucid
1:57:13
react I have that imported check
1:57:20
icon and we going to have um the button imported from the UI component and we
1:57:27
give this a save and go back to Local hostport 3 2001 you can see we have all
1:57:34
these pricing plans updated and you can see them over here next we are going to make these buttons functionable when a
1:57:41
user click on choose plan it should show us a page from stripe that a user can enter their credit card and make a
1:57:48
payment for the plan so let's move back to the code and over here we are going
1:57:54
to have an onclick onclick um
1:57:59
event so the onclick event is going to be the function to handle the um how do
1:58:09
you call it to handle the subscription so we are first going to
1:58:16
check so let's create the function the name of the function is going to be
1:58:22
handle um subscribed we here to create this function handle
1:58:31
subscribe we have plan do price ID um so this plan ID is going to come
1:58:38
from stripe so we are going to have that so this is the pricing plan that I
1:58:43
created for the project you get rid of that and set it up from um stripe okay
1:58:51
so we have the prizing ID let's work on this actual function to handle the subscribe so
1:58:59
inside here we are going to create the function to subscribe a plan to a
1:59:05
plan so the function is going to um so let's create a
1:59:13
function andle subscribe and a sync function with the price ID as a
1:59:23
parameter the type of string and here we are going to check
1:59:28
something here so let's create these state so the first state is going to be if a user has signed in and the second
1:59:36
state is going to be it's loading to keep track of whether user has click on
1:59:41
the pricing plan or not so we are going to get the assigned in state from the
1:59:47
used user Hook from um like next JS so
1:59:54
to do that we are going to have this here so let's create a
1:59:59
constant and you know um called use
2:00:04
user from click nextjs I'll click on that and we going to get all these
2:00:10
objects distract them a signed in and the user object as a
2:00:16
whole and the next state is going to be the is loading state so you have a constant have is
2:00:23
loading set is loading and we have US
2:00:31
state to be false the default value should be false let's import use
2:00:36
state from react oops use
2:00:42
State and use effect from
2:00:49
react so we have that and let's check so we are going to check
2:00:56
if a user has signed in so if it's if not is signed in we want to return we
2:01:03
don't want this function to execute you return from um when the user click on this function else want to set it
2:01:10
loading state to true so that we can show you know a spinner or an animation
2:01:16
or an indication whether you know the process is initiating so once we have
2:01:21
have that you write the try catch block to handle errors and um to catch any
2:01:29
errors that may appear so let's create a constant name response here await
2:01:38
sech API create checkout
2:01:47
session and you to have this object where did we get this from
2:01:52
so as soon as a user clicks on this button the handle subscribe button this
2:01:57
one here we want to send a post request to this endpoint right we haven't
2:02:04
created it yet but we are going to create it in a second so we send um a post request to this endpoint so this
2:02:11
function is going to handle the creation of the subscription for the said user so the method is going to be a post so you
2:02:18
have method to be post and we add
2:02:24
headers it's going to be an object you're going to have the content
2:02:30
type to be um application Json and we going to have a body so the
2:02:36
body is going to be the um price ID and the user ID so we are going to stringify
2:02:44
everything using the json. stringify function you provide um this object so
2:02:50
you have price idid right and we have user ID user ID to be the user do ID so
2:03:00
remember we getting this user from the hook the use user hook here this whole
2:03:05
user object so you send that as a body to the post um request or to this
2:03:12
endpoint so you're going to create this endpoint and handle everything that we are sending
2:03:20
okay so next we are going to check if the there is no response
2:03:27
so if response dot okay so we are negating everything
2:03:32
here so if the response is not okay right so after we are done sending this
2:03:38
to the um this end point we get a response back right so if the response
2:03:43
is not okay it means we had an error so we going to have this code here create a
2:03:48
constant for the error and through a new error so we have this code
2:03:54
here else we want to get the section ID from the responsejson the section
2:04:01
[Music] ID from await so we await that from
2:04:07
response sing operation Json the section ID is going to be
2:04:15
distracted from the response so when you create the endpoint you're going to understand um where all these are coming
2:04:21
from and create a constant or stripe okay and we are going
2:04:28
to load stripe to load stripe we don't have um stripe imported yet so we are
2:04:34
going to install the stripe package to be able to um use that so the stripe
2:04:40
package is um this package here we are going to type um
2:04:47
Yan at at stripe for SL stripe.js so
2:04:53
this is the package that's going to help us load stripe and you know handle any
2:04:58
red Direction and all that you're going to have load
2:05:07
stripe let's import that over
2:05:14
here from stripe Js
2:05:23
you're going to have the load stripe function here inside this function
2:05:28
you're going to pass in the stripe publishable key so I think um let's create that and
2:05:36
import it later on so process. M you're going to have Nest
2:05:43
public oops next public stripe
2:05:52
publishable key we don't have that created yet so
2:05:58
let's add um this exclamation mark to get rid of this error so once we are
2:06:03
done initializing stripe we want to do this so we check first if the stripe has
2:06:09
been initialized successfully so if not stripe we have to throw this
2:06:15
error and if the stripe was able to initialize we are going to redirect so
2:06:21
we have stripe do redirect to check out and we pass in the section ID inside the
2:06:28
catch block we are going to have this and we are going to have a
2:06:34
finally to set it loading to
2:06:42
false I know this code might look a little bit confusing I just hang on with
2:06:48
me we are going to get everything when we create the end point here and also
2:06:53
the stripe web hook so next on the list is to um work on the stripe this
2:07:00
endpoint here this API create checkout um section and create the hook to have
2:07:07
all the pieces joined together so inside this API directory let's create um this
2:07:14
new folder named create checkout section
2:07:26
and we have to add the K here check out El this is not going to work the
2:07:31
checkout section is supposed to be the same create checkout section and create
2:07:39
a route do typescript file
2:07:47
here before we even start writing the code for this page I want want us to um
2:07:52
get the the stripe publishable key first and continue on with the route
2:08:01
page let me just paste that here and we are going to visit stripe to
2:08:08
get our publishable key so let's search for
2:08:15
stripe and click on this link here let's click on this dashboard link
2:08:23
which is going to take us to the dashboard before you can see this
2:08:29
dashboard you have to create an account on stripe so if you haven't done that kindly do that before you come back to
2:08:36
watch this section on the left hand side here I'm going to click on this button here which is going to show a drop down
2:08:43
of all the application I've created with my stripe account so I click on create a new account and named it
2:08:50
threadcraft or AI the country of operations I'm going to leave it to the
2:08:55
default one and create the account to confirm your account has been
2:09:02
created you check this section here to see if the name here matches the one you created if that is not the case click on
2:09:09
this button to select it manually so I'll just leave it like this and to get
2:09:14
the publisher key I will move to this section here and we have for developers
2:09:20
so our click on the publishable key copy that move back to my code editor and
2:09:26
paste it over here so this key is needed to initialize the stripe payment over
2:09:33
here um the pricing page at this section here where we initialize the
2:09:39
stripe so we need that and let's move on to the route. TS so inside here we are
2:09:48
going to import next response um next
2:09:55
response from next server and import stripe
2:10:00
okay from
2:10:07
stripe so we have to install it by running Yan add stripe
2:10:22
so to remind ourselves this is the page that is going to handle the create checkout section so when the user clicks
2:10:28
on this button this choose plan button it is going to trigger this
2:10:35
function called the handle subscribe and this function is going to send a request
2:10:41
to this endpoint which we are creating over here and in this endpoint we are
2:10:48
going to get things like the price ID the user ID and and also set the mode of
2:10:53
subscription the payment method types and all the other configuration for
2:10:58
stripe so we have stripe um imported over here we we are going to create a
2:11:05
constant named stripe to initialize stripe so we have stripe initialized and
2:11:11
we have process do m. stripe secret so we need the secret key to initialize um
2:11:20
stripe so to get the stripe secret key copy
2:11:27
this same name here paste it in the M.L file and paste it over here so to get
2:11:35
the secret to get the secret key move back to the stripe dashboard and we
2:11:40
click on this secret key over here so review key and copy to the clipboard
2:11:46
I'll paste it over here give it a save and that will be it for the stripe
2:11:52
secret key so back to the um route um
2:11:57
page we have the secret key loaded in the m so this is going to work so we
2:12:04
have to provide the API version this is important and we have
2:12:09
API version to be this one here so we have the post request here
2:12:21
function you have the post this a post request you're going to have the request
2:12:28
um call back to be
2:12:34
request and here you're going to have the TR catch
2:12:40
block so inside this TR catch block remember at the pricing page we are sending we are stringifying this object
2:12:48
the price ID and the user ID so we we going to distract those here
2:12:56
constant re are weight for all the request do Json so we
2:13:04
get all those objects from the request. Json and distract the price [Music]
2:13:11
ID and the user ID we are going to need that so after we are done distracting
2:13:19
you're going to have a check here if if not price ID or if not user
2:13:25
ID we want to return this going to
2:13:30
return next responsejson to have um this Arrow here missing price
2:13:36
ID or user ID else we want to create a section
2:13:44
right we want to create a section so if you want to know what to do next we have to check this um document
2:13:51
page let's search for um stripe check out section
2:13:58
example and on this page
2:14:03
here how to set up the section get the subscription ID and all that so I'll
2:14:10
place this link in the description and you can have a detailed understanding of how we are setting up the route this way
2:14:19
so we create a constant to hold the section and we have
2:14:25
await stripe. checkout do section do
2:14:32
create so we create the mode which is going to be
2:14:38
subscription and the payment type sorry payment method type types is going to be
2:14:47
card so we have a whole lot of payment method type we have card you know and
2:14:53
you have um Amazon pay and all these other payment methods so we are going to
2:15:00
go with the card for this project and we have line items right so the line items is an
2:15:10
object that has the price so we are going to get the price
2:15:15
from the price ID over here which we are here to create so we are going to create
2:15:21
that very soon and we are going to you know have
2:15:27
the quantity so the quantity is going to be one and we are going to have the success
2:15:32
URL so next we are going to create the success URL and the cancel URL so I'll
2:15:38
paste those over here and we have to create a next public base
2:15:44
URL so over here in the M we are going to create that and the base you URL
2:15:51
remember should be a URL that has been exposed to the Internet so if you write
2:15:57
local hostport 3001 we won't be able to test the stripe web hook which we are
2:16:02
going to create in a second so the base URL is supposed to be this one here the
2:16:09
URL exposed to the um the internet so I'll paste that here give it a save and
2:16:16
move back to the route page and same for the ccel URL which is
2:16:23
going to send the user back to the pricing page and the last um property you're going to set here is the client
2:16:30
reference ID which is going to be the user ID remember we are passing the user
2:16:35
ID here um user ID here price and user ID
2:16:42
so we have that give this a save and
2:16:47
return we are going to return this next response with the section ID so we have
2:16:54
that code over here and inside the catch block we are going to log or return any
2:17:02
you know next response error here so we so we console do log
2:17:08
the arrow here and we return um this next response so let's make the error
2:17:15
type of any to get rid of this error
2:17:22
and we are done creating the route for the um create checkout section so now
2:17:29
the next thing you're going to do is to get the pricing ID this IDs the price
2:17:35
IDs and you know set up the payment so back to
2:17:43
stripe we can create um products so let's create a
2:17:48
product um where is it so on this [Music]
2:17:55
page let's go to the payment page um product catalog instead and we
2:18:04
don't have any product here so let's create a new product so um the name of the product is
2:18:12
going to be um let's make it threadcraft
2:18:19
AI payment payment plan and leave the
2:18:26
description you're going to leave the upload here and this should be recurring because we want to charge the user on a
2:18:32
monthly base and if you want it to be a one time payment you click on one of so
2:18:37
you're going to leave it at recurring the price for the first product is going to be
2:18:43
$9 and you're are going to build
2:18:48
monthly so let's add the
2:18:55
product so we have the product here and when we click on this
2:19:00
product we should be able to get the price ID inside the product let's click
2:19:06
on the price and we have the price ID somewhere
2:19:14
here all right so we have the price ID here we click on it to copy it paste it
2:19:19
inside um this side here inside the pricing page the price ID you paste this
2:19:26
and move back to product catalog and create a new payment plan so
2:19:34
I made it PL so I just have to edit the name to make it plan instead of Plan
2:19:41
update product move back to the product catalog
2:19:49
add a new product and this is going to be tread craft AI payment
2:19:54
plan the price for this is going to be $29 recuring monthly and I'll click on
2:20:01
ADD product you have a second payment plan
2:20:09
click on that click on price and get the price ID over here copy it and paste it at this
2:20:18
side beautiful so we have the price ID
2:20:24
here and so I think we should test this out so let's see if we can spin up the
2:20:30
payment page for um stripe payment so let's move to the pricing page and add
2:20:38
um these things here so inside the button let's add this
2:20:45
we add this so we check if um the user has
2:20:50
click on this button and we are in the loading State we write processing else
2:20:56
we have the choose plan as the default test for this button and we are also going to disable this button if you
2:21:02
don't have a price ID so let's add this line here to check if um we are loading
2:21:08
or we have we don't have a price ID we disable this button so let's save this
2:21:15
and if everything goes as planned we should see a pricing page pop up on
2:21:22
the um when we click on the choose plan so fingers crossed let's test this out
2:21:29
to see if you'll be able to show the pricing page inside this application
2:21:35
let's move to the um this URL
2:21:41
here the one we Expos The Local Host spot 3,000 on let's refresh it
2:21:54
and try to sign in if you haven't already so let's refresh it to see if we
2:22:01
have signed in so we have signed in let's click on
2:22:06
the pricing page so on this page let's try and see if we can set up the basic plan let so
2:22:15
let's click on choose plan for the basic plan
2:22:22
and lo and behold we have a stripe payment page shown up here this is
2:22:28
beautiful and amazing it's a huge milestone for this project next on the
2:22:33
list is to create a web hook that is going to um stall the subscription
2:22:39
information inside our database anytime the user subscribe so let's move back to
2:22:45
the code editor back to code editor and
2:22:51
inside the web hook folder we have click and stripe we already set up the um click web hook so let's work on the
2:22:58
stripe web hook for now I'll create a new
2:23:04
file um named route and inside here we are going to
2:23:09
have our web hook set up so this page is going to look very similar to what we did at the endpoint
2:23:17
for create checkout session so so we going to import um stripe we going to
2:23:22
import Nest response and some other functions so let me just copy the
2:23:29
headers here um stripe andless response paste it over here and import headers you will
2:23:37
need headers from next
2:23:49
headers and and we are going to initialize stripe to I'll copy this
2:23:55
exact code here and paste it over here and create um a post request function so
2:24:02
we have this same function here and we are going to write the body of the
2:24:07
function inside this function we want to create a constant body which is going to um hold
2:24:17
the request DOT test so I wait request.
2:24:22
test so on stripe dashboard we are going to create a web hook and anytime a user
2:24:28
subscribe we are going to get um a request. test from stripe okay that's
2:24:34
what we are doing over here and we create a constant for Signature which is going to be headers doget stripe
2:24:42
signature we have that here we give that save and we check
2:24:51
if the signature doesn't exist we throw an error so if signature doesn't exist
2:24:57
we console do log and error and return next um response let's create a variable
2:25:04
to hold event so event in strip a set of events that happens when the user takes
2:25:11
an action so an example of event could be a user has created um a subscription
2:25:17
or cancell a subscription or updated a subscription we create a variable event and we are
2:25:23
getting this event type from stripe the one we imported over here and we are going to um have a TR
2:25:32
catch block here so the event um variable is going to be used later in this code and I'm going to explain
2:25:39
everything for you inside this Tri catch block we are going to have the event we
2:25:45
going to have the event variable that we created so we have the event variable here inside this
2:25:51
try um event equals
2:25:57
stripe do web hook web hooks do
2:26:02
construct event and we have the
2:26:08
body we have the signature and we have the stripe web hook secret let's go get that stripe web
2:26:17
hook Secret
2:26:25
give this a save and um back to our m. local paste that here
2:26:33
so back to the stripe dashboard we are going to search for web
2:26:40
hook over here and click on this link here developers web hooks click on that
2:26:51
and inside this page we are going to create a web hook so we set up an
2:26:58
endpoint and this Endo is going to um be the Local Host Port 31 that we exposed
2:27:07
to the internet I'll copy this URL paste it here and iend
2:27:14
[Music] API web hooks for/ stripe
2:27:23
so once we add this endpoint URL we scroll down to add event so what event
2:27:28
do we want to listen to We want to listen to um checkout event I will click
2:27:36
on all the checkout event over here that is what we are interested
2:27:42
in and then you can read more on events and see which might be the best one for
2:27:48
you or maybe later on you decide to improve this project can read more on on
2:27:53
this event so I'll click on add event add
2:28:02
endpoint and we have our web hook
2:28:08
created so we need a signning secret we review that copy this back to um so back
2:28:17
to the m file we paste that over here to continue with the code so we have the
2:28:23
stripe web hook secret being added to our M variable
2:28:29
variables so here we are going to have this code so if you don't have um the
2:28:34
secret set up or the sign nature being not verified you want to log these
2:28:41
errors let's change the error to e r r and make the type
2:28:47
any awesome we have that
2:28:53
created so next we are going to have this condition here if event. type
2:29:00
equals [Music] checkout the section the session dot completed that
2:29:09
means if a user has successfully um registered or subscribed to our
2:29:14
platform we want to do the following so we want to store the session the user ID
2:29:19
and subscription ID in this variables so I'll have those variables so I'll paste those variables
2:29:26
here and so we have the section user ID and the subscription ID we have them
2:29:32
stored we check if the user ID and the subscription ID doesn't exist then we
2:29:38
throw an error so that's is what we have over here and have a TR catch and block
2:29:46
inside this TR catch blog we are going to create a constant to hold the subscription
2:29:54
okay to hold the subscription using the subscription ID so we have the
2:30:00
subscription we get that from um stripe subscription. retrieve with the
2:30:06
subscription ID so as soon as we have that variable
2:30:11
created we are going to check if we don't have any subscription found we are
2:30:17
going to throw this error no item found in the subscription then we create a variable
2:30:23
for the price ID with the subscription. item data.
2:30:29
price ID so we get the price ID on this um object and create a variable to stall
2:30:36
the plan and also the points to add when the user subscribe so these variables
2:30:41
here you have the plan and the points to add so now when the user clicks on the
2:30:47
plan this is what we want to do using the price ID we want to have a stretch
2:30:53
statement that is going to compare the price ID so if we are on this price ID
2:31:00
this one over here we want to make the plan this variable that we created here the plan to be basic and the points to
2:31:07
add to be 10 and if we on a pro you want to make the price you want to make the
2:31:13
plan price and also the points to add 500 all right so I'll paste that stretch
2:31:21
um statement code here and change these price IDs so for
2:31:28
the $9 copy this price ID place it with this one do same for the 90 or the Pro
2:31:36
Plan you place it here and you have that switch so if the price ID is this you're
2:31:43
going to have these variables change to basic and points to add to be 100 all right
2:31:58
so now after we are done getting the plan the subscription ID and the user ID
2:32:03
we can insert um the plan inside our database so we are going to create a
2:32:08
function in the actions file to create or update a subscription so we create a
2:32:14
constant update subscription
2:32:20
equals await um create or
2:32:25
update subscription which we don't have yet so
2:32:30
let's go ahead and create this function inside the actions to create or update
2:32:35
[Music] subscription all right so back to the
2:32:41
actions file we will create um this
2:32:46
function so we have the function here s ort a sync function create or update
2:32:56
subscription and this function is going to have these as the argument so you're going to have the user ID and that is
2:33:04
going to be a string we also going to have the stripe um subscription
2:33:10
ID stripe subscription ID to be a string we are going to have the plan either
2:33:17
basic Pro or Enterprise to be a string as well we have the status is going to
2:33:23
be a string and we have the current Period
2:33:29
start to be a date sorry date and the current period
2:33:37
end to also be a date so we have this and inside the
2:33:45
function body we are going to have our Tri cat block as usual and inside this catch block we are going to um create a
2:33:53
constant that is going to check whether a user um was found with that specific
2:34:00
subscription ID or not so over here we are going to create this
2:34:08
constant um we give it a name users so what we doing here is to get the ID from
2:34:13
the users table where the users do stripe customer ID is equal to the user
2:34:19
ID ID you are getting from the create or update subscription so the checkin is going to
2:34:25
be like this if there is no user so this is going to return a true or false so if
2:34:32
there is no user we want to console.log this error here meaning we couldn't find
2:34:38
a user with um this stripe customer ID else we want to check if there is an
2:34:45
existing subscription okay so we have this constant
2:34:52
here um named existing subscription and what we doing here is to um and we are
2:34:58
going to check wherever the subscription do stripe um subscription ID equals the stripe subscription ID that we are
2:35:06
getting from this um this function so this is a column in the database and
2:35:11
this is coming from um this argument over here so we have that um and this is
2:35:17
going to return an of existing subscription so if there is
2:35:23
a subscription available we want to update the
2:35:28
subscription so we going to have a variable created and the name of the variable is going to be subscription so
2:35:36
we create a variable name a variable
2:35:42
subscription and you're going to have a check
2:35:47
here so if um existing subscriptions as I mentioned
2:35:54
this is going to return an array so we are going to check if the length is greater than zero meaning we have a list
2:36:02
of subscription for the user from the user so we are going to update um this
2:36:12
field the subscription field with the plan status current Period start and
2:36:18
current period end so I'll paste that code over here and we have the subscription await
2:36:26
update subscription table and reset the plan um column the statute column the
2:36:33
current Period start column and the current period end column to um we update it inside the
2:36:40
subscription schema so we are getting all these from the argument of this
2:36:46
function so this is going to update the function if you have a list of subscription else
2:36:52
we create a new subscription so to create a new subscription we are going
2:36:58
to have this code here this piece of code which is going to um inser you know
2:37:05
inside the subscription schema all these values so the user ID stripe customer ID the plan status current period and
2:37:12
current period and and execute this
2:37:18
function and return
2:37:28
subscription so at the catch block we are going to have this piece of code which is going to log an error if we
2:37:35
fail to create or update a subscription so let's go over one more
2:37:40
time what you're doing here is to check if there is no user then we log this error else we check for an existing
2:37:48
subscription right to be check for an existing subscription which is going to return an array to this variable so if
2:37:55
the array in this variable is greater than zero meaning we are getting a data coming from the database right we want
2:38:02
to update the subscription with um at where the subscription stripe
2:38:08
subscription ID is equal to the stripe subscription ID so we are checking whether the subscription. stripe
2:38:14
subscription ID is equal to the stripe subscription ID we are getting from this function this argument
2:38:20
here and we update the subscription else meaning we don't have any subscription
2:38:27
yet so you create a new one that's going to be it for this
2:38:33
function I'll give this a save and move back to the
2:38:39
um this side here the stripe rout page
2:38:45
so inside this function here we going to provide the user ID we also going to pass in the subscription
2:38:53
ID the plan and for the status we are going to
2:38:59
provide active and we have this new dates here
2:39:05
to register the time at which the subscription started and ended so we
2:39:11
have those here so let's call this function create
2:39:19
or update subscription you have that function called and next let's have this if
2:39:26
statement to check if we aren't able to update the subscription let's throw this
2:39:32
error to prevent the application from stopping so um updated subscription so
2:39:39
let's add a d here so this is supposed to be updated subscription so we check
2:39:45
if the subscription wasn't updated um properly we handle the error gracefully
2:39:50
to prevent the application from breaking and the next thing you're going to do here is after you are done updating the
2:39:58
or creating the subscription we have to add the user point the next thing you're going to do is to update the point so
2:40:05
for a basic plan the user gets 100 points and for the Pro Plan the user gets um I
2:40:11
think 500 points all right so let's create a function to do just that so I
2:40:17
wait update user point and we are going to create this
2:40:23
function inside the actions so back to actions we are going to have um this
2:40:30
function so let's create a function skeleton so as sync function and update
2:40:37
user point and we are expecting this argument the user ID to be string for
2:40:45
the type to be string the point to be a number
2:40:54
and we are going to
2:41:01
um we are going to update the user table with the points that um are supposed to
2:41:08
be rewarded to the user based on the subscription plan activated so we are going to have that
2:41:17
here and over here we are updating the user um the users table so what we doing
2:41:23
here is to update the point with the already existing point that the user have with the current new Point coming
2:41:30
from this function that's where the user do stripe customer ID it calls the user
2:41:35
ID we return and execute and if there is any error we are going to log this to
2:41:42
the console we give this a save back to the
2:41:47
route for the stripe um so we update we call the function here update user Point provide them with
2:41:55
all the necessary arguments that are required so the arguments are going to be the user ID and the point to add so
2:42:03
remember here inside the switch statement we had this variable here points to add So based on the price ID
2:42:10
we update the point to add variable so that is going to um be passed down to
2:42:17
this function and um in the catch block for this
2:42:23
function we are going to you know throw any error that may
2:42:29
happen Okay so we have that and finally we are going to
2:42:36
return next
2:42:41
response Json receiv
2:42:48
received to be [Music] true so what this line is doing here is
2:42:53
to send a Json response with a key received so this key received being said
2:42:59
to True indicating that the request was successfully received and processed so
2:43:04
we give this a save and I think we can try this out to see if we are going to
2:43:11
get um the point updated inside the database after we are done um you know
2:43:16
subscribing to the application um this URL here refresh the
2:43:24
page and try to um purchase a plan so
2:43:30
let's try to subscribe to the basic
2:43:35
plan we are in the testing mode and we can use an actual credit card so let's
2:43:41
paste um this number here so we add a month and a year let's make this 2026
2:43:49
the CVC can be any number and we can subscribe so we add an
2:43:58
email and and a card
2:44:04
name and try to
2:44:11
subscribe so before we check whether this works or not let's move back to the
2:44:17
um prizing page and um pricing page
2:44:24
here um nope let's move to the um create
2:44:29
checkout session um route file here yes inside this file remember after a user
2:44:36
has successfully you know subscribed to the platform we are taking them to the
2:44:41
generate um page right which happens to be the dashboard as well we don't have
2:44:46
this page yet that is why we have this error here saying page not found so we are going to add this later on but let's
2:44:53
check if um the subscription points were added or not so back in the database new
2:44:59
console let's refresh um this page and when we check the points we see
2:45:06
150 here so meaning the subscription worked a user is awarded 50 point to
2:45:12
test the application out and for the basic plan we have 100 points to be added to the already existing point we
2:45:19
now have 150 so meaning it worked let's move to the subscription table to check
2:45:24
what we have inside inside the subscription table we have a subscription and it happens to be
2:45:31
the basic plan that we created this is awesome um the plan is working the
2:45:38
subscription is working let's move back to the code
2:45:44
editor and create the generate page
dashboard page
2:45:50
so inside the app directory we going to create this folder named
2:45:55
generate let's create a file um named page.
2:46:02
TSX before we um start writing the code for this dashboard when we check the published
2:46:11
website threadcraft AI let me SE that here Trad craft AI
2:46:19
ny.
2:46:24
app when we click on the dashboard you can see we have a card we
2:46:32
have a card here we have input element and we have a test area right we
2:46:39
have a test area we also have a select to you know choose the content type and
2:46:45
all that so to do this we will need to install all these components um from
2:46:51
Shard CN right so inside Shard CN we are going to search for
2:47:00
input copy the code move back here paste it inside the
2:47:06
terminal to install it and we are also going to search for um test area
2:47:19
copy it paste it here we are going to search for test um
2:47:26
sorry
2:47:34
select paste it here
2:47:39
and and we are going to have a
2:47:47
card click click on this side to copy
2:47:52
it paste it inside my terminal to [Music]
2:48:01
install awesome so we have everything installed so we have installed all the
2:48:06
packages from Sharden so let's import them here we have the button input test
2:48:11
area and select and let's move
2:48:17
here so let's write the code for the main
2:48:30
component so this is what we are trying to build so when we check this here we
2:48:36
have the dashboard we have the History Section here which list all the history of the content created by the user we
2:48:43
have the point um card here and we have this content form to help the user create their content so we are going to
2:48:50
create a div to contain all the elements in this page so we return this
2:48:57
component and we are going to have this div here which is going to be the parent day
2:49:05
for all the content so the first element we are going to import is going to be the Navar
2:49:11
we are going to need the Navar here so let's import that move back to the Local Host sport
2:49:20
31 sign in and click on
2:49:27
dashboard click on dashboard and we have the Navar beautiful so let's create the rest
2:49:35
of the element these ones here okay so um back
2:49:41
to my code editor so let's have this div here
2:49:50
so let's have this D here so what this div is going to do is to display the content in a grid form so as we can see
2:49:58
we have the grade here so now we can create the History Section this one over
2:50:03
here I'll copy this code here so we have the code here so I'll add this comment
2:50:12
here left side bar History Section so um so for the
2:50:20
History Section we need the clock icon this icon here and we are going to import that from um losd react so back
2:50:30
here import to Los it react we going to import the clock icon
2:50:38
clock imported from LD react so we save this and back to Local
2:50:47
H spot 31 we have the History Section here so inside this History Section we
2:50:52
going to have a list of all the histories right and for now we don't have any history so for the History
2:50:59
Section anytime a user creates a new content we save the content inside our
2:51:04
database which is later on going to be displayed as the history so we are going
2:51:09
to get back here and generate all the histories let's write histories here to
2:51:16
list all the histories for the History Section and the next thing we are going to create here is the main Dave so right
2:51:23
after the History Section Dave let's create another D giving it a um comment
2:51:29
name main container area and we are going to have the main
2:51:34
div over here so for the main Dave you're going to have this div
2:51:41
here and inside this Dave we have the point to be displayed so the first
2:51:46
element in this da is going to to be the point to be displayed so we create that
2:51:52
as well and I'll copy that code
2:51:58
here and paste it at this side so we are going to have
2:52:05
that let's add a comment Point
2:52:12
display and have the code here so for this part we need to import the zap icon
2:52:19
this one here let's import it from LD react so we have zap
2:52:26
icon and we also have to import link from nestjs so
2:52:37
link and when we give this a save and check our Local Host P
2:52:42
31 we have the available point over here so when the user click on get more
2:52:47
points they are being taken to the pricing page so that's what we have here
2:52:52
so later on we are going to display the point from the database okay and right
2:52:58
after the point um div section we are going to create um another Dave to have the
2:53:06
content generation form to content generation
2:53:12
form so for the content generation form you're going to have this D here so
2:53:18
inside this da we are going to create um this section here this drop down when a
2:53:24
user clicks on this content type we have the Twitter icon and the name the title
2:53:29
here we have the Instagram icon and the caption Linked In Post and the title so let's create
2:53:35
that before we create the content drop down let's create this constant
2:53:40
here so up at the top here way before the export default
2:53:47
function we are going to to have this array here so we create a constant named
2:53:52
content type the content type is going to be an array of object you're going to
2:53:59
have a value and a label right so the value and a
2:54:05
label so you have Twitter you have Instagram and Linkedin so back to the um
2:54:12
content generation form let's list all the um content type in a select form so
2:54:18
I'll paste that code here and we have to import all these icons from um Lucid react so
2:54:27
Twitter Instagram and
2:54:34
[Music] Linkedin awesome so we have um these
2:54:41
icons imported so let's comment these out and we are going to create these functions in a second I will comment
2:54:47
this and save it move back to um Local Host SP
2:54:53
3001 and we have the drop down here so next is to have the form that is going
2:55:00
to generate the content based on the content type selected so back to my
2:55:06
code so let's create the form for that
2:55:12
and the form is going to be at this section I'll minimize um
2:55:20
this but before that I think we should work on the set content type and the
2:55:25
content type State before we create the form so this is just a state we are
2:55:33
going to create a state for um content content
2:55:41
type and set content type you have a use state
2:55:51
and the default value is going to be the first um element in the content type
2:55:58
array so we have that and we have to import the use state
2:56:04
from react so use state from
2:56:09
react and use effect you give that save and move back
2:56:17
to the section here minimize uncomment this
2:56:23
out and minimize it over here so for the form we are going to
2:56:29
have um this D here so we have to create a state for the prompt and set prompt we
2:56:35
are going to create that over here we have the state and when we save
2:56:43
this so we do it use client and the error is is going to go
2:56:50
away and boom we have it inside this main Dave beautiful so looking exactly
2:56:57
like this one already so the next thing we are going to do is when a user click on a content
2:57:05
type so for example an Instagram caption we display an upload icon here for the
2:57:12
user to upload an image to generate a caption and I think that is the only use
2:57:18
case where we would need to upload an image so we are going to create a section that is going to check for the
2:57:24
content type to check if the content type is Instagram we display this upload
2:57:31
icon so we have that here and we are going to create the
2:57:39
handle image upload and also create the state to
2:57:44
display the image if we upload an image
2:57:49
all right so let's work on the handle image upload or the Instagram um content
2:57:57
type so the handle image upload function is going to be a very simple
2:58:02
function we are going to have that here and have a check for the files property
2:58:08
on the target object if that is set meaning we have an image uploaded so we
2:58:14
are going to have a set image State here to um the path to the uploaded image so that
2:58:22
we can render it or pass it to the Gemini AI to generate the content for us
2:58:27
I'll save this [Music] and and I move back to the
2:58:34
code select Instagram we have the upload image button here so next let's create
2:58:40
this button generate content button for five points and we create the section to
2:58:48
display the content after a user has generated them so this is the button
2:58:53
that is going to help us generate content using Gemini AI so we have a couple of things to
2:59:00
configure first being the handle generate function we have to have um it loading State user point and this
2:59:08
constant here points per generation so we are going to create all these so first let's
2:59:16
import the loader two icon from lid react and create this
2:59:22
date so back to this side here we are going to have the points so
2:59:30
let's check what are missing here we have to get the user
2:59:35
point so we need a state for
2:59:42
that and we are going to have a constant named
2:59:48
points per
2:59:54
generation those constant here we have the point per generation to
2:59:59
be five and we also have this content here MK to length to um you know
3:00:05
restrain the AI from generating more than 280 characters for Twitter so next thing I think we have to
3:00:13
create the the handle generate
3:00:19
function we have to create the handle generate function so back
3:00:26
here so this is the handle generate function so there is a whole lot going on here and everything is going to be
3:00:32
explained line by line so that we understand the whole flow of um
3:00:38
generating the content so first thing first we have to install the Google generative AI package
3:00:45
so I install that here yeah and add Google generative
3:00:51
AI whilst we wait for this to get installed let's move back to this section here and search for Gemini API
3:01:04
key clicking on this link is going to take us to the Gemini API Studio to get
3:01:09
our key so on this page we are going to
3:01:16
generate an API key but before that let's move back to the documentation page on this page you can learn on how
3:01:23
to um set up the Gemini API and create a function to interact with the model when
3:01:29
we click on Gemini models at the model section here it shows us all the
3:01:34
varieties of model they have each of them with their input types output types
3:01:39
and what they are being optimized for so you can read more about this at
3:01:45
this documentation section we are going to be interested in test
3:01:52
generation so this is the documentation we are going to use to set up the Gemini API in our project so I will link this
3:02:01
in the description back to our code
3:02:08
editor so we have the Google generative AI package installed I'll import that
3:02:14
here so we going to import the Google gener ative Ai and parts from Google
3:02:20
generative Ai and the next thing we are going to do is to set up the API key and
3:02:26
initialize the Gemini AI so at the top here we are going to paste this code
3:02:32
here and the first line is to get the Gemini API key from the environment
3:02:40
variables and the second line is to initialize Google generative AI with the API key so let's get the API key so on
3:02:48
this page we are going to click on get API key create API key and select a
3:02:55
project and generate the API
3:03:04
key we copy the code move back to ourm
3:03:10
file you paste the code here and we are going to um copy this variable name next
3:03:19
um public Gemini API key um where is it
3:03:25
we have that here paste it and give it a
3:03:33
save so let's go ahead and explain this function line by line so we have um we
3:03:38
are checking if the generative AI has been initialized that's why you're checking
3:03:44
here or if there is a user ID so let's get the user ID so for the user object
3:03:50
we are going to use um the use user Hook from click authentication so at this side here we
3:03:58
are going to paste um this code and call the use user Hook from
3:04:06
click so this is going to get us um the user object so we have other um
3:04:12
properties distracted from the hook like the is signed in and it's loaded so this
3:04:17
are going to be important later on in this code so for the user object we can assess the ID so we check if the
3:04:24
generative AI has been initialized or the user ID has been initialized or the
3:04:30
user Point equals now or the user point is less than Point
3:04:35
per generation so we check this and if any of these has not been initialized
3:04:41
successfully we are going to alert through this alert that says not enough point or API key not set and return from
3:04:49
this function so we don't go ahead to generate anything at all so right after this check we set the loading state to
3:04:56
true meaning we have started the generation process and inside this Tri cat block so on this line here we have
3:05:04
the model variable which is going to hold the initialization of this um Gemini AI do get generative model so for
3:05:12
this project we using the Gemini 1.5 Pro back to the documentation side you can
3:05:17
read more about the models their strength and the best use cases right
3:05:22
you can read more about them at the Gemini section
3:05:30
here all right so you can read more about them over here so let's continue on with the rest
3:05:38
of the function so right after getting the model we are going to create a variable
3:05:45
to hold the prompt test so we have a template string that start with generate
3:05:50
and we have the content type here which is going to be the content type the user has selected so we say generate content
3:05:57
type so it could be LinkedIn or Twitter or Instagram so generate Twitter content
3:06:03
about then we provide the prompt as a variable here remember the prompt is
3:06:10
going to be here so anything the user types in this test area is going to be
3:06:17
The Prompt so back to this side we check if the content type equals
3:06:25
Twitter we provide an additional prompt saying provide a thread of five tweets
3:06:31
each under 280 characters so at this part we create a
3:06:36
variable named image part so we check if the content type is Instagram and we
3:06:42
have an image uploaded we want to create a file reader stream so we initially
3:06:47
this file reader store it in this variable so what this function is doing here is to read the image
3:06:54
data and we are going to get the base 64 data from the image data that has been
3:07:00
read um using this function so we check if the B 64 string
3:07:07
exists you create an image part so as we can see here that image part you have
3:07:14
the image part variable here which is going to be the part of the image and also the M type of the
3:07:22
image so we check if the Bas 6 defa data exist so we have the image pass object
3:07:28
and inside that object we create another object named inline data so the Gemini AI needs that so we have the inline data
3:07:36
here and the first property is going to be data which is supposed to be a Bas 64
3:07:42
string as we can see here Bas 64 string and a MIM type
3:07:47
which um is going to determine the type of the image being it jeeg PNG or any
3:07:54
other mime type so we check all that for the um if the content type is
3:08:01
Instagram and if that is the case we append this to the prompt so generate an
3:08:08
Instagram content about we add the prompt and we add describe the image and
3:08:15
incorporate it into the caption so this is going to generate the Instagram caption for us so over here we
3:08:22
initialize the image path with the prompt test and if there is an image path we push it to the path using the
3:08:30
image path so if you have multiple image uploaded we are going to generate the
3:08:35
content based on that and the generated test is going to be stored in this
3:08:40
variable here and we can get the test itself on the um test function on the
3:08:47
respon object that is going to be save here so over here we are going to check
3:08:53
if the content type is Twitter and split the generated test by double new L to
3:08:59
separate the tweet and also we are going to filter out any empty tweet after trimming the white
3:09:05
space and else for any other content type we are going to wrap the generated
3:09:11
test in an array so we need this state to stall the
3:09:16
generated content we create that over
3:09:23
here so after generating the content we save it in the set generated content
3:09:29
state so after generating the content we want to update the user Point using the
3:09:34
user ID and the point per generation so in this case it's going to be five remember we already have this function
3:09:41
created so when you check the actions you can see we have the function created
3:09:46
this was cre when we were writing the code for the hook this side
3:09:52
here web hook for the stripe update user
3:09:59
Point um this section
3:10:05
here this side here all right so let's close this and back to the generate we
3:10:13
just have to call the function import it to update user point
3:10:18
and we are good to go so this function returns an updated
3:10:23
user and we are going to set the updated point to the set usero state so we have
3:10:29
that state created here set usero
3:10:35
State and after generating this content we want to save it inside our database
3:10:41
right so we are going to create this function in the actions um file save
3:10:47
generated content so to the actions file utils DB actions we are going to create
3:10:54
um that function so we have that function
3:10:59
here and all we are doing so in this function we have the user ID the content
3:11:05
prompt and content type as argument so we have the so we are going to insert it
3:11:13
inside the generated content table so the value are going to be the user ID we get that from selecting the
3:11:21
ID from the users table where the stripe customer ID equals the user ID we are
3:11:27
going to get from this argument we save the content The Prompt the content type
3:11:33
append the returning function execute function and return the saved content so we save this move back
3:11:41
to generate and call this function here
3:11:47
save generate content all right so if the content was saved
3:11:53
successfully you want to update the history state to display it in real time
3:11:58
at the history section at the History Section over here
3:12:05
so let's so we are going to create the state for the
3:12:13
history we scroll to the side
3:12:19
and we have to create a type for the history so the history type is going to
3:12:24
be this an ID content type a prompt content
3:12:31
and created art date so we have
3:12:36
that so that is going to set the saved content in the history in real
3:12:43
time so let's have this use effects here
3:12:50
that's are going to check if we have um if we have an API key set so the first
3:12:56
one has to do with I'm checking if you have an API key set if that is not the
3:13:01
case we throw this error at the console so this second Hook is going to
3:13:07
check if the user data is loaded and the user is not signed in you redirect them
3:13:12
to the homepage else if the user is signed in and data is available we fetch
3:13:17
the user point and the content history so let's get this router
3:13:23
imported so let's get this router imported so we going to use use
3:13:30
router so we going to have a constant here router equals use router from Nest
3:13:37
navigation so we save it and that is going to handle the red direction for us so let's create the
3:13:45
fetch user Point function and F content history and this function is just going
3:13:51
to get the user point if the ID exists we get the user Point using the get user
3:13:57
Point function so let's create this function in the actions file
3:14:03
actions we are going to create the get user Point
3:14:09
function so that function is going to have the user
3:14:15
ID and we are going to um select the point the user ID and
3:14:21
the email from the users table and check where the users do stripe customer ID
3:14:27
equals the user ID we return all the data that we have so if a user exist we
3:14:33
return with zero else we are going to return the user and get the point so this is going to return the points for
3:14:40
us giving a user ID so back to the
3:14:45
generate page we can import that function to get user
3:14:50
Point provide the user ID as required in the function and this is going to return the
3:14:56
points for us if the point equals z we attempt to create or update a user so
3:15:02
let's import this function here create or update user and we are going to set the user
3:15:10
points so after we are done checking all these we set the user point with the
3:15:15
updated user do point point we give this a
3:15:20
save and create the fetch content history function so this is the
3:15:27
function and what we are doing here is to um call this function which we are
3:15:32
here to create in the actions file get generated content history and set it to
3:15:38
the history state so let's create that function so back to the actions we are
3:15:44
going to create that get generated content history we
3:15:49
paste that here so what this function is doing is to get the user ID and we have a limit with default number of
3:15:56
10 so over here we get the history we select the ID content prompt content
3:16:03
type and created ad from the generated content table we check wherever the
3:16:08
generated content do user ID equ calls the user ID because we want to list all
3:16:14
the history of the logged in user and not any user at all so we list them in descending order so the recent one are
3:16:21
going to come first we have the limit which by default is 10 unless we add an
3:16:27
argument to list more and we return the history give it a
3:16:32
save back to the generat page we import that
3:16:40
function get generated content history so we are going to have these
3:16:45
two checks here over here we are going to have these two
3:16:51
checks and what we are checking for is the first check is to check if the
3:16:58
content is loaded if not we are going to display this loading message and this is
3:17:03
going to check if the user has not signed in we display this D here that will ask them to sign in or sign up so
3:17:11
let's call this signin button from click off so sign in button from click
3:17:18
nextjs give it a save
3:17:24
and move to this
3:17:30
section so this is going to be the section to display the generated content
3:17:35
and um when the user clicks on the history back here when the user click on the history you display the history
3:17:42
items here so this da is going to take care of that
3:17:49
um we check for selected
3:17:55
content and we display the history or we display the actual content generated so
3:18:03
we have a lot of things you have to take care of we have the selected history item let's take care of that that is
3:18:09
going to be a state we going to create that state over
3:18:15
here let's collapse some of these function to
3:18:20
have more
3:18:29
room selected um history item and we are going to create a
3:18:35
function that is going to help us copy to clipboard so let's first create this
3:18:41
icon here from LD react copy icon create this function and import react markdown
3:18:48
so most of the times the content generated by the AI is a markdown so we have to convert them to a normal
3:18:56
test and this package is going to help us convert them into an atml element
3:19:02
that can be displayed beautifully at the front end so let's create the copy to
3:19:07
cboard function while we install the react markdown so to install the react
3:19:14
markdown we have y add react markdown and let's create the copy to
3:19:20
cboard
3:19:28
function so I'll paste that function here so we are using the clipboard API
3:19:33
to write to the clayboard using the Navigator clayboard do WR test so I'll
3:19:40
save that move back to this side here so let's import the react mark down
3:19:49
somewhere over
3:19:55
here and import the react markdown so I think it's time to test
3:20:01
everything out if we will be able to generate a Content using the Gemini AI
3:20:07
so back to the dashboard we have available Point 150 so
3:20:13
we are getting um the point from the database and we have the History Section here
3:20:21
let's try and generate a Twitter trade so a thread on how to make
3:20:28
money and click on generate
3:20:36
content and we have the content generated awesome so it is being saved
3:20:43
in the history as well we can check the database check the generated content refresh it
3:20:51
and we have the Twitter trade content here beautiful so 5 point was deducted
3:20:59
from my points so I have 145 now and we can see that also
3:21:05
here we can also generate a link in post so something like a post on how to make
3:21:12
money click on generate
3:21:18
and it generates for us a content to post on LinkedIn so we can do same for the
3:21:24
Instagram caption you upload an image and generate a
3:21:33
caption for me click on generate and we have a
3:21:41
caption so this is the image I uploaded this one here
3:21:47
and this is the caption for the image so more content can be added you can add a
3:21:53
Tik Tok script you can add the YouTube script and any other content type that you would wish to add so things are
3:21:59
looking great here we have the history section and the points are also being reducted as we generate um the
3:22:07
content so we can get more points when we click on get more points
3:22:13
it takes us to the pricing page so the final thing is to host this
hosting
3:22:18
on netlify I'll search for
3:22:24
netlify this is the dashboard for netlify if you don't have an account with netlify create one before you can
3:22:31
start deploying a website so I'll click on add new website import from existing project so before you deploy your
3:22:38
project you have to host the code in one of these platforms either GitHub gab bit
3:22:44
braet or Azure Des Ops so my code is on GitHub I'll click on
3:22:53
GitHub authorize and search for the name of the project so I'll search for tread
3:23:00
craft click on this give it a site name so I write
3:23:09
threadcraft AI you want to deploy it from the main
3:23:14
branch leave everything untouched so let's deploy the website and import the
3:23:20
environment variables instead of typing them manually so I will click on deploy threadcraft
3:23:26
AI let's get rid of this first and deploy it on the deploy page we are
3:23:32
going to add the environment [Music] variable so site
3:23:38
configuration scroll to um environment variables add environment variable
3:23:45
import from a m file so I'll move back to my code to the m.
3:23:54
local copy everything here paste it inside this environment file and import
3:24:01
environment
3:24:07
variables so we have to change the next public URL next public base URL to the
3:24:16
one we set when deploying the website so it's supposed to be threadcraft
3:24:21
AI this one over here so I'll click on this link copy
3:24:29
it and paste it over here to be our base
3:24:36
URL save the
3:24:43
variable so once we are done updating the next public URL we have to move back
3:24:48
to click hooks web hooks so configure web Hooks and edit the base
3:24:57
URL for the web hook so the endpoint is supposed to be changed you have to edit
3:25:03
it to the deployed website so this one
3:25:10
here give it a save we are also going to do same on stripe
3:25:16
on the stripe dashboard um stripe
3:25:23
dashboard under the web hook section we are going to edit this
3:25:38
endpoint we are going to edit this
3:25:45
endpoint beautiful update
3:25:52
Endo so the reason why we are updating all these endpoints is because remember
3:25:58
the base URL all the web hooks are supposed to be a URL exposed to the internet and since we have deployed the
3:26:05
website we have to update it accordingly