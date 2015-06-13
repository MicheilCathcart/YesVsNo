(function() {

    var module = angular.module('yvn.comments');

    module.factory('getComments', [
	    
	    function() {
		    var commentsObject = {
			    comments: [ 
	            {
					userName: "Jim Jones",
					userComment: "I think this is absolutely true",
					userPoints: 1245,
					commentPoints: 10,
					userVote: "Yes"
	            }, 
	            {
		            userName: "David Masbourough",
					userComment: "I do not think this is very true, it could be anything!",
					userPoints: 865,
					commentPoints: 13,
					userVote: "No"
	
	            }, 
	            {
		            userName: "Julie Grey",
					userComment: "Perhaps, I am a little undecided",
					userPoints: 555,
					commentPoints: 8,
					userVote: "Undecided"
	            },
	            {
		            userName: "Bob Brown",
					userComment: "Cool Benas",
					userPoints: 33,
					commentPoints: 10,
					userVote: "No"
	            }
            ]
		    };
		    return commentsObject;
	    }
    ]);
    
})();