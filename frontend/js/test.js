(function ()
{
	var app = angular.module('schedule', []);

	app.controller('ScheduleController', function ()
	{
		var
			randomBool;

		// Input of general informaiton by the schedule creator.
		planData.title = "TEST SCHEDULE";
		planData.place = "Wolfgang's Stakehouse";
		planData.time = "19:00 - 22:00";
		planData.dates.push ( "2015/01/01", "2015/01/02", "2015/01/03" );

		// Input of user available information by each user.
		for ( var i = 1; i < 4; i++ )
		{
			var
				userData =
				{
					userName : "",
					canAttend : []
				};

			userData.userName = "User0" + i;

			for ( var j = 0; j < planData.dates.length; j++)
			{
				randomBool = Math.random() >= 0.5;
				userData.canAttend.push(randomBool);
			}

			// Add one user data to the list of users.
			userList.push(userData);
		}

		// Assign data.
		this.plan = planData;
		this.users = userList;
	});

})();


var
	planData =
	{
		title : "",
		place : "",
		time : "",
		dates :	[]
	},

/*
	userData =
	{
		userName : "",
		canAttend : []
	},
*/

	userList = []
	;


/*
			{
				planDate : "2015/01/01",
				userAvailable :
				[
					{ userName : "user01", canAttend : true },
					{ userName : "user02", canAttend : false },
					{ userName : "user03", canAttend : false }
				]
			},
			{
				planDate : "2015/01/02",
				userAvailable :
				[
					{ userName : "user01", canAttend : true },
					{ userName : "user02", canAttend : true },
					{ userName : "user03", canAttend : false }
				]
			},
			{
				planDate : "2015/01/03",
				userAvailable :
				[
					{ userName : "user01", canAttend : true },
					{ userName : "user02", canAttend : true },
					{ userName : "user03", canAttend : true }
				]
			},
 */