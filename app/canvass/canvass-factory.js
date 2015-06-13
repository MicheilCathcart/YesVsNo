(function() {

    var module = angular.module('yvn.home');

    module.factory('canvass', [
	    
	    function() {
		    var ob = {
			    canvass: [ 
	            {
					title: "Do Electric Sheep Dream",
					votes: 6432,
					ups: 20,
					downs:5
	            }, 
	            {
		            title: "Does a rolling stone gather moss?",
					votes: 432,
					ups: 25,
					downs:5
	
	            }, 
	            {
		            title: "If a tree falls any nobody sees it, does it really fall?",
					votes: 2211,
					ups: 30,
					downs:5	            
				},
	            {
		            title: "Can you feel the love tonight",
					votes: 21,
					ups: 40,
					downs:45	            
				}
            ]
		    };
		    return ob;
	    }
    ]);
    
})();