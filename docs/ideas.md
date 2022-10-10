Team Name: Sigma

The application name: Winner Takes All

The first section titled Team Overview including the names of each team member and their GitHub usernames.

Team Overview: 
	Group members/ github usernames: {Walid Hamade : 7medeh , Huayang Yu : [Insert GitHub username], Zhengrui Yang : msodz}


Innovative Idea: 

	
	*1v1 Badminton Ranked Matchmaking 
		A platform that matches Badminton players against each other in 1v1 instances. This idea exists but what makes our idea cool is that it has a ranking system for competitive matches. At the end of a game, the users both input the results of the match. We would have in place an algorithm that then modifies the respective skill levels of each user that is reflective of the agreed upon match results. In application, the “skill” level attribute for each player can be used as a filtering for other people who want more skilled or less skilled players to play against. Would need to be based on the honor system. All we can do is identify if at least one person is lying but we still don’t know how to disincentivize lying or incentivize telling the truth. Apart from that, if the results inputed from each user match then results are saved because an agreement has been made.


Important Components: 

		We will have an algorithm that considers these features that determine rank level. The algorithm is run at the end of a game event and it takes as input:

		-Score: (tuple of two integers)
		-player 1 rank (double)
		-player 2 rank (double)

		returns an object with key values being the usernames of those involved in the game event and their respective rank score additions as values. The losing side will receive a negative score addition if the mode is competitive. 

This way we take into account the difference of score when determining points to add to the respective players current rank. We have a database of all our users and their respective ranks. We sort them in descending order from highest rank.


When it comes to determining if someone is lying on their scores, these are the ideas we have to implement:

1. If there is a difference between both score inputs, then we know at least one person has input wrong score information.
2. If there is a slight difference (we can go in depth about what slight means later) we can take the average of the two scores that will be outputted when adding to ranks.
3. We ask users if they are sure before inputting the score if the score they put is different than the other user’s score input. This way we add a second layer to the decision to decrease the chances of an incorrect score potentially.
4. Users potentially face being labeled as “Bad Sports” with repeated incorrect score uploads if playing a competitive game.
5. We rely on the honor system.


Users and their information are stored on a database. Any email accounts are accepted and will need to be activated via confirmation email. 

------
