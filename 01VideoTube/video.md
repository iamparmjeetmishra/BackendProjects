01:35 How to Build Logic
02:31 Now Onwards Controllers Building and Logic, Logic, Logic, Logic
03:24 New File in src/Controllers - user.controller.js [Don't confuse with js and jsx]
03:50 Helper File in src/utils - Async Handler [Higher Order function]
04:19 Imported Async Handler from src/async folder
04:30 Create a 'registerUser' Method [ mostUseful- Repeated code ]
05:19 Async code with Express give us 4 things - Write that in comment

[1) err, 2) Req, 3) Res, 4) Next [for invoking next action or route "it is middleware"], 4)  ]

06:10 User Controller is finished Here 
06:30 Next Step is creating route -- src/routes
06:40 New Route file "user.routes.js" in src/routes
07:00 Import Router from express
07:31 Finish Basic Router Syntax 
07:56 Forget to export "user.controller" so again edited user.controller file to export
08:20 Where we should import user.controller and user.route.
08:50 Importing user routes to 'app.js' file
09:00 Not necessary to import routes at top
09:52 But usage is going to be different for user.routes
10:06 Good Practice to declare Routes
10:44 we use middleware instead of app.get | because now the route function is in different file
11:18 How userRouter of user.routes is going to work 
12:19 Now the confusion is whether we have to go to the '/user' or '/register'
13:40 Now the Good Standard Practice about declaring 'Api'
14:45 Now the explanation how route is going to work or the flow
[Flow => url(http:localhost:8000/api/v1/users/register)] -> activate the userRouter -> userRouter File will process the request -> Now the registerUser method will call -> registerUser definition called from user.controller.js ]

15:35 Appreciating the users How the corrected some minors bugs in the code
16:00 how we are going to run backend - package.json -> nodemon
16:32 Throws an error

17:30 Mistake of import related in user.routes.js
19:25 There is an issue in asyncHandler.js in utils folder
22:02 now How to test these code - Thunder Client VS code Extension
22:42 Other option is Postman 
23:50 Open PostMan collections
24:55 Url - http:localhost:8000/api/v1/users/register in new tab of collection
25:09 Common Mistake after entering url is pressing send button. 
25:32 Error: Post and Get Error 
26:00 Please follow the previous video of HTTP methods at Chai aur code https://youtu.be/qgZiUvV41TI?si=aTSe-rPS4d6K1htb
26:51 Postman also share timing
28:30 Code Push and Lesson finalize 