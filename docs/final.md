# Team Sigma
## app: sigma-badminton
## Fall 2022 

## Overview:

1v1 Badminton Ranked Matchmaking
A platform that matches same-level Badminton players against each other in 1v1 instances. What makes our idea cool is that it has a ranking system for competitive matches. At the end of a game, the users both input the results of the match. We would have in place an ELO Rating algorithm that then modifies the respective skill levels by adding and subtracting the ranking scores of each user that is reflective of the agreed upon match results. In application, the “skill” level attribute for each player can be used as a filtering for other people who want more skilled or less skilled players to play against. Would need to be based on the honor system. Our program can identify if at least one person is lying. If the result scores entered by two users are not the sam, then their game information will not be saved into the database and they will not get a score change. Apart from that, if the results inputed from each user match then results are saved because an agreement has been made.

Important Components:
We will have an algorithm that considers these features that determine rank level.
The algorithm is run at the end of a game event and it takes as input:
-Score: (tuple of two integers)
-player 1 rank (double)
-player 2 rank (double)

->returns an object with key values being the usernames of those involved in the game event and their respective rank score additions as values.

The losing side will receive a negative score addition if the mode is competitive. This way we take into account the difference of score when determining points to add to the respective players current rank. We have a database of all our users and their respective ranks. We sort them in descending order from highest rank. 

Users and their information are stored on a database. Any email accounts that in the correct format are accepted.


## Team Members:
Huayang Yu: https://github.com/yhyyhy722
Walid Hamade: https://github.com/7medeh
Zhengrui Yang: https://github.com/msodz

# Screenshots
## SignIn Page
[<img src="../screenshots/signin.png">](SignIn)
## SignUp Page
[<img src="../screenshots/signup.png">](SignUp)
## Ranking Page
[<img src="../screenshots/ranking.png">](Ranking)
## Matchmaking Start Page
[<img src="../screenshots/matchmaking-start.png">](Matchmaking Start)
## Matchmaking Doing Page
[<img src="../screenshots/matchmaking-doing.png">](Matchmaking Start)
## Matchmaking Input Page
[<img src="../screenshots/matchmaking-inputting.png">](Matchmaking Input)
## Matchmaking Input Error Page
[<img src="../screenshots/matchmaking-error.png">](Matchmaking Input Error)
## Game History Page
[<img src="../screenshots/game-history.png">](Game History)

## API

### SignUp
user sign up and create a new account
##### request
```javascript
POST /signup
```
##### body
| field    |  type  |    description |
|----------|:------:|---------------:|
| email    | string |     user email |
| name     | string | user full name |
| password | string |  user password |
```json
{
  "email": "jack@gmail.com",
  "name": "jack",
  "password": "123456"
}
```
##### response
###### 200
| field    |  type  |          description |
|----------|:------:|---------------------:|
| id       | string |       user unique id |
| email    | string |           user email |
| name     | string |       user full name |
| avatar   | string |          user avatar |
| level    | string | user badminton level |
| score    | number |   user ranking score |
| createAt |  Date  | user create datetime |
```json
{
  "id": "5bf142459b72e12b2b1b2cd",
  "email": "jack@gmail.com",
  "name": "jack",
  "password": "123456",
  "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-1.svg",
  "level": "elite",
  "score": 999,
  "createAt": "2022-11-20 11:40:43.231"
}
```

### SignIn
user sign in to access system
##### request
```javascript
POST /signin
```
##### body
| field    |  type  |    description |
|----------|:------:|---------------:|
| email    | string |     user email |
| password | string |  user password |
```json
{
  "email": "jack@gmail.com",
  "password": "123456"
}
```
##### response
###### 200
| field    |  type  |          description |
|----------|:------:|---------------------:|
| id       | string |       user unique id |
| email    | string |           user email |
| name     | string |       user full name |
| password | string |        user password |
| avatar   | string |          user avatar |
| level    | string | user badminton level |
| score    | number |   user ranking score |
| createAt |  Date  | user create datetime |
```json
{
  "id": "5bf142459b72e12b2b1b2cd",
  "email": "jack@gmail.com",
  "name": "jack",
  "password": "123456",
  "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-1.svg",
  "level": "elite",
  "score": 999,
  "createAt": "2022-11-20 11:40:43.231"
}
```

### Update User level
Update the users' scores after the user set their initial level at home page
##### request
```javascript
PUT /:email
```
##### parameters
| field |  type  | description |
|-------|:------:|------------:|
| email | string |  user email |
##### body
| field    |  type  |           description |
|----------|:------:|----------------------:|
| level    | string | badminton skill level |
```json
{
  "level": "intermediate"
}
```
##### response
###### 200
| field    |  type  |          description |
|----------|:------:|---------------------:|
| id       | string |       user unique id |
| email    | string |           user email |
| name     | string |       user full name |
| password | string |        user password |
| avatar   | string |          user avatar |
| level    | string | user badminton level |
| score    | number |   user ranking score |
| createAt |  Date  | user create datetime |
```json
{
  "id": "5bf142459b72e12b2b1b2cd",
  "email": "jack@gmail.com",
  "name": "jack",
  "password": "123456",
  "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-1.svg",
  "level": "elite",
  "score": 999,
  "createAt": "2022-11-20 11:40:43.231"
}
```

### Get User
Get user information by userId
##### request
```javascript
GET /user/:id
```
##### parameters
| field |  type  | description |
|-------|:------:|------------:|
| id    | string |     user id |
##### response
###### 200
| field    |  type  |          description |
|----------|:------:|---------------------:|
| id       | string |       user unique id |
| email    | string |           user email |
| name     | string |       user full name |
| password | string |        user password |
| avatar   | string |          user avatar |
| level    | string | user badminton level |
| score    | number |   user ranking score |
| createAt |  Date  | user create datetime |
```json
{
  "id": "5bf142459b72e12b2b1b2cd",
  "email": "jack@gmail.com",
  "name": "jack",
  "password": "123456",
  "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-1.svg",
  "level": "elite",
  "score": 999,
  "createAt": "2022-11-20 11:40:43.231"
}
```

### Start matching
Start matching the opponents. The system will match the opponents with the same level of users
##### request
```javascript
POST /matching
```
##### body
| field |  type  | description |
|-------|:------:|------------:|
| email | string |  user email |
```json
{
  "email": "jack@gmail.com"
}
```
##### response
###### 200
| field         |  type  |                                  description |
|---------------|:------:|---------------------------------------------:|
| id            | string |                       game history unique id |
| user          |  User  |                        home user of the game |
| opponent      |  User  |                    opponent user of the game |
| address       | string |                          address of the game |
| userScore     | number |                              home user score |
| opponentScore | number |                          opponent user score |
| status        | string | status of the game(preparing/inputting/over) |
| gameTime      |  Date  |                       start time of the game |
| createAt      |  Date  |                      create time of the game |
```json
{
  "_id": "637a1ec30cffefbfdc2cb6a6",
  "user": {
    "_id": "637a123b3d43c85cda58cd12",
    "email": "test@gmail.com",
    "name": "test",
    "password": "123456",
    "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-5.svg",
    "level": "advanced",
    "score": 750,
    "createAt": "2022-11-20T11:40:43.231Z"
  },
  "opponent": {
    "_id": "637a12b23d43c85cda58cd13",
    "email": "Jack@gmail.com",
    "name": "Jack",
    "password": "123456",
    "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-5.svg",
    "level": "advanced",
    "score": 601,
    "createAt": "2022-11-20T11:42:42.420Z"
  },
  "address": "The First Badminton Court",
  "userScore": 12,
  "opponentScore": 12,
  "status": "over",
  "gameTime": "2022-11-21T12:34:11.773Z",
  "createAt": "2022-11-20T12:34:11.773Z"
}
```

### Update matching
Update the result(score/status) of the game and user(score)
##### request
```javascript
POST /updateScore
```
##### body
| field         |  type  |         description |
|---------------|:------:|--------------------:|
| gameId        | string |      ID of the game |
| email         | string |     home user email |
| myScore       | number |     home user score |
| opponentScore | number | opponent user score |
| userId        | string | ID of the home user |
```json
{
  "gameId": "637a1ec30cffefbfdc2cb6a6",
  "email": "Jack@gmail.com",
  "myScore": 12,
  "opponentScore": 13,
  "userId": "637a123b3d43c85cda58cd12"
}
```
##### response
###### 200
| field         |  type  |                                  description |
|---------------|:------:|---------------------------------------------:|
| id            | string |                       game history unique id |
| user          |  User  |                        home user of the game |
| opponent      |  User  |                    opponent user of the game |
| address       | string |                          address of the game |
| userScore     | number |                              home user score |
| opponentScore | number |                          opponent user score |
| status        | string | status of the game(preparing/inputting/over) |
| gameTime      |  Date  |                       start time of the game |
| createAt      |  Date  |                      create time of the game |
```json
{
  "_id": "637a1ec30cffefbfdc2cb6a6",
  "user": {
    "_id": "637a123b3d43c85cda58cd12",
    "email": "test@gmail.com",
    "name": "test",
    "password": "123456",
    "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-5.svg",
    "level": "advanced",
    "score": 750,
    "createAt": "2022-11-20T11:40:43.231Z"
  },
  "opponent": {
    "_id": "637a12b23d43c85cda58cd13",
    "email": "Jack@gmail.com",
    "name": "Jack",
    "password": "123456",
    "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-5.svg",
    "level": "advanced",
    "score": 601,
    "createAt": "2022-11-20T11:42:42.420Z"
  },
  "address": "The First Badminton Court",
  "userScore": 12,
  "opponentScore": 12,
  "status": "over",
  "gameTime": "2022-11-21T12:34:11.773Z",
  "createAt": "2022-11-20T12:34:11.773Z"
}
```

### Get ranking list
Get the ranking of all users in the system by their scores
##### request
```javascript
GET /raking
```
##### response
###### 200
| field    |  type   |          description |
|----------|:-------:|---------------------:|
| id       | string  |    ranking unique id |
| email    | string  |           user email |
| name     | string  |       user full name |
| avatar   | string  |          user avatar |
| level    | string  | user badminton level |
| score    | number  |   user ranking score |
| createAt |  Date   | user create datetime |
```json
[
    {
      "id": "5bf142459b72e12b2b1b2cd",
      "email": "jack@gmail.com",
      "name": "jack",
      "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-1.svg",
      "level": "elite",
      "score": 999,
      "createAt": "2022-11-20 11:40:43.231"
    },
    {
      "id": "5bf142459b72e12b2b1b2cd",
      "email": "jack@gmail.com",
      "name": "jack",
      "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-1.svg",
      "level": "elite",
      "score": 999,
      "createAt": "2022-11-20 11:40:43.231"
    }
]
```

### Get game history list
Get the user's game history
##### request
```javascript
GET /gameHistory
```
##### response
###### 200
| field         |  type  |                                  description |
|---------------|:------:|---------------------------------------------:|
| id            | string |                       game history unique id |
| user          |  User  |                        home user of the game |
| opponent      |  User  |                    opponent user of the game |
| address       | string |                          address of the game |
| userScore     | number |                              home user score |
| opponentScore | number |                          opponent user score |
| status        | string | status of the game(preparing/inputting/over) |
| gameTime      |  Date  |                       start time of the game |
| createAt      |  Date  |                      create time of the game |
```json
[
  {
    "_id": "637a1ec30cffefbfdc2cb6a6",
    "user": {
      "_id": "637a123b3d43c85cda58cd12",
      "email": "test@gmail.com",
      "name": "test",
      "password": "123456",
      "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-5.svg",
      "level": "advanced",
      "score": 750,
      "createAt": "2022-11-20T11:40:43.231Z"
    },
    "opponent": {
      "_id": "637a12b23d43c85cda58cd13",
      "email": "Jack@gmail.com",
      "name": "Jack",
      "password": "123456",
      "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-5.svg",
      "level": "advanced",
      "score": 601,
      "createAt": "2022-11-20T11:42:42.420Z"
    },
    "address": "The First Badminton Court",
    "userScore": 12,
    "opponentScore": 12,
    "status": "over",
    "gameTime": "2022-11-21T12:34:11.773Z",
    "createAt": "2022-11-20T12:34:11.773Z"
  },
  {
    "_id": "637ad6bf0d4d1a930441e723",
    "user": {
      "_id": "637a123b3d43c85cda58cd12",
      "email": "test@gmail.com",
      "name": "test",
      "password": "123456",
      "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-5.svg",
      "level": "advanced",
      "score": 750,
      "createAt": "2022-11-20T11:40:43.231Z"
    },
    "opponent": {
      "_id": "637a12b23d43c85cda58cd13",
      "email": "Jack@gmail.com",
      "name": "Jack",
      "password": "123456",
      "avatar": "https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-5.svg",
      "level": "advanced",
      "score": 661,
      "createAt": "2022-11-20T11:42:42.420Z"
    },
    "address": "30 Eastman Ln",
    "userScore": 3,
    "opponentScore": 11,
    "status": "over",
    "gameTime": "2022-11-22T01:39:11.551Z",
    "createAt": "2022-11-21T01:39:11.551Z",
    "firstInputId": "637a123b3d43c85cda58cd12"
  }
]
```

## Database Documentation
Our database is a collection containing two types of documents: Users and Games. They are described below
```javascript
    user document {  
        _id: <ObjectId>,            //ObjectId provided by MongoDB  
        email: String,              //Email of the user  
        name: String,               //Name of the user
        password: String,           //Password of the user  
        avatar: String,             //Avatar url link of the user  
        level: String,              //Badminton skill level of the user (["low", "intermediate", "advanced", "elite"]) 
        score: Number,              //The user's game scores that will increase or decrease after each game over
        createAt: Date,             //Time of user sign up
    } 
```  

```javascript
    game document {  
        _id: <ObjectId>,           //ObjectId provided by MongoDB  
        user: <User>,              //Home player in the game 
        opponent: <User>,          //Away player in the game
        address: String,           //Address of the game  
        userScore: Number,         //Home players' scores after the game over
        opponentScore: Number,     //Away players' scores after the game over
        status: String,            //Status of the current game (["preparing", "inputting", "over"])
        gameTime: Date,            //Start time of the game  
        createAt: Date,            //Create time of the game
		firstInputId: String,      //ID of the first input user
    } 
```

## URL routes:
https://sigma-badminton.herokuapp.com/    the index page of app, you can sign in here if you already have an account.

https://sigma-badminton.herokuapp.com/SignUp.html    if you are a new user, you can use this page to register.

https://sigma-badminton.herokuapp.com/Home.html      Only the users who first time sign in get access to this page. Users need to set their initial level at this page. When they sign in next time, this page will be skipped.

###All users who sign in successfully get access to the following pages:

https://sigma-badminton.herokuapp.com/Ranking.html    Rankings of all users. Users can check others' level and score at this page. The rankings and scores will be updated after every match finish.

https://sigma-badminton.herokuapp.com/Matchmaking.html   start a match with a same-level opponent. After the game over, player needs to upload game result. The system only accepts consistent results.

https://sigma-badminton.herokuapp.com/GameHistory.html   Your game results are saved here. Users can search a game by DateTime, Address, and Adversary.



## Authentication/Authorization:
Users' accounts and password are stored in the database after they sign up. 
If they enter the corresponding email and password, they will sign in successfully. There's no restriction to the existing users. Every users have access to all the webpages and functionality as long as they sign in successfully.


## Division of Labor
### after milestone 3
#### Huayang Yu:
fixes bug at sign in and sign up pages, updates UI at login pages, implements the server especially the parts that need to interactive with database, deployment
#### Walid Hamade: 
updates functionality at ranking and game history pages, implements and updates part of API, adds some details such as using Regexp.
#### Zhengrui Yang:
updates matchmacking page, designs algorithm for updating scores base on ELO algorithm, implements the server including updating users’ score with ELO algorithm

The previous division of labor can be found in the previous milestone.md
In general, Walid came up with this project idea, and then Zhengrui and Huayang designed the preliminary interfaces. For static pages and the corresponding js files, we are responsible for our own pages separately: Walid did ranking and gamehistory, Zhengrui did matchmaking and home, Huyang did index, signin, and signup.
When it comes to the server and the database, we almost worked together on them. We also checked other page's functionality and helped improve them. Some tricky parts, such as the algorithm and the whole procedure how the data enters the system and finally comes out to the database, we discussed them together.



## Conclusion
We learned how to create a whole new application from the beginning through this project. The process is: design static web pages(HTML, css, bootstrap)  ------> front-end implementation(Javascript)  ------>   server(Node, express)   ------>   database(noSQL for this project and how to use them in js files). The back end, especially the interaction between the server and database, is challenging for us. We only learned the very limited basic usage of express and noSQL commands separately in the lectures. But when we actually apply these techniques to a practical project, we found it much more difficult at the beginning. We found it very tricky that when we design the API every time, some information needs to go to the front-end and presents on web pages, and some other function needs to interact with the database. Fortunately, we quickly learned how to solve it through self-learning. Milestone 3 would have gone well and smoothly if these contents had been covered in class. Secondly, to make the system ACID and to address a circumstance that two players have inconsistent game results entering into the system, we use status([“over”, “inputting”, “preparing”]) to control the game phases and design a whole process how the database receive game results. What’s more, we design an algorithm based on the existing ELO algorithm for updating users’ scores. 

