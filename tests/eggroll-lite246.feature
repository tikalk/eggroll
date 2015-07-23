Feature: eggroll-lite 246

	Scenario: add new user story to github
		Given I am not a developer and product manager
		And Not familiar with Cucumber
		And I Have Signed In to Github
		And I added my github credentials
		When I use eGGroll Editor
		Then user stories are saved in Github with ease!
