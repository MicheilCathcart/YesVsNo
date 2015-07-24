(function() {

    var module = angular.module('yvn.canvass');

    module.factory('getCanvass', [
	    
	    function() {
		    var ob = {
						_id: 1,
						category: 'Philosophical',
						title: "Do Electric Sheep Dream",
						options: ['Yes','No'],
						date: '2012-04-23T18:25:43.511Z',
						votes: [ 
						            {
										user: "Jim Jones",
										age: 27,
										location: '127.2234562, 127.123456',
										gender: 'male',
										income: '10,000 - 20,000',
										ideology: 'socialist',
										religion: 'agnostic',
										vote: "Yes",
										date: '2012-04-23T18:25:43.511Z'
						            }, 
						            {
							            user: "Jeff Barber",
										age: 22,
										location: '127.2234562, 127.123456',
										gender: 'male',
										income: '10,000 - 20,000',
										ideology: 'socialist',
										religion: 'athiest',
										vote: "Yes",
										date: '2012-04-23T18:25:43.511Z'
						            }, 
						            {
							            user: "Tammy Cuskelly",
										age: 11,
										location: '127.2234562, 127.123456',
										gender: 'female',
										income: '12,000 - 30,000',
										ideology: 'communist',
										religion: 'buddist',
										vote: "Yes",
										date: '2012-04-23T18:25:43.511Z'
						            },
						            {
							            user: "Bridgette Random",
										age: 63,
										location: '127.2234562, 127.123456',
										gender: 'female',
										income: '10,000 - 20,000',
										ideology: 'liberal',
										religion: 'christian',
										vote: "No",
										date: '2012-04-23T18:25:43.511Z'
									}
					            ],
					    comments: [
									{
										_id: 235346,
										user: "Jim Jones",
										vote: "Yes",
										comment: "That is so true I cannot believe it!",
										date: '2012-04-23T18:25:43.511Z',
										level: 0,
										sources: [ 34567845, 7564576 ],
										comments: [ 
										{
											_id: 7643562,
											user: "Tammy Bob",
											vote: "No",
											comment: "I can centrainery believe this shit!",
											date: '2012-04-23T18:25:43.511Z',
											level: 0,
											sources: [ 34567845, 7564576 ],
											comments: [ 
											{
												_id: 96746572,
												user: "John Jones",
												vote: "No",
												comment: "Another very believable comment I think!",
												date: '2012-04-23T18:25:43.511Z',
												level: 0,
												sources: [ 34567845, 7564576 ],
												comments: [
													{
													_id: 96746572,
													user: "Another User",
													vote: "No",
													comment: "Oh Cool another embedded comment!",
													date: '2012-04-23T18:25:43.511Z',
													level: 0,
													sources: [ 34567845, 7564576 ]
													}
												]
											}
											]
										},
										{
											_id: 5678735,
											user: "Different User",
											vote: "No",
											comment: "Another Comment!",
											date: '2012-04-23T18:25:43.511Z',
											level: 0,
											sources: [ 34567845, 7564576 ]
										}
										]
									},
									{
										_id: 235346,
										user: "Tony Roberts",
										vote: "Yes",
										comment: "That is so true I cannot believe it!",
										date: '2012-04-23T18:25:43.511Z',
										level: 0,
										sources: [ 34567845, 7564576 ],
										comments: [ 
										{
											_id: 7643562,
											user: "Tammy Bob",
											vote: "No",
											comment: "Totally different again for awesome",
											date: '2012-04-23T18:25:43.511Z',
											level: 0,
											sources: [ 34567845, 7564576 ],
											comments: [ ]
										},
										{
											_id: 5678735,
											user: "Bob Sullivan",
											vote: "No",
											comment: "Oh wow this comment is rad!",
											date: '2012-04-23T18:25:43.511Z',
											level: 0,
											sources: [ 34567845, 7564576 ]
										}
										]
									}
										
									],
						sources: [
									{
										_id: 5678735,
										link: "http://www.source.com",
										level: 0,
										user: "Tammy Bob",
										vote: "No"
									},
									{
										_id: 5678735,
										link: "http://www.source.com",
										level: 0,
										user: "John Jones",
										vote: "No"
									}
						]
					};
		    return ob;
	    }
    ]);
    
})();