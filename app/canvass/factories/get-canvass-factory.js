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
										vote: "No",
										date: '2012-04-22T12:00:00+10:00'
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
										date: '2012-04-23T09:00:00+10:00'
						            }, 
						            {
							            user: "Tammy Cuskelly",
										age: 11,
										location: '127.2234562, 127.123456',
										gender: 'female',
										income: '12,000 - 30,000',
										ideology: 'communist',
										religion: 'buddist',
										vote: "No",
										date: '2012-04-24T00:00:00+10:00'
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
										date: '2012-04-25T23:00:00+10:00'
									},
									{
										user: "Jim Jones",
										age: 27,
										location: '127.2234562, 127.123456',
										gender: 'male',
										income: '10,000 - 20,000',
										ideology: 'socialist',
										religion: 'agnostic',
										vote: "No",
										date: '2012-04-26T22:00:00+10:00'
						            }, 
						            {
							            user: "Jeff Barber",
										age: 22,
										location: '127.2234562, 127.123456',
										gender: 'male',
										income: '10,000 - 20,000',
										ideology: 'socialist',
										religion: 'athiest',
										vote: "No",
										date: '2012-04-27T21:00:00+10:00'
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
										date: '2012-04-28T13:00:00+10:00'
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
										date: '2012-04-29T01:00:00+10:00'
									},
																		{
										user: "Jim Jones",
										age: 27,
										location: '127.2234562, 127.123456',
										gender: 'male',
										income: '10,000 - 20,000',
										ideology: 'communist',
										religion: 'agnostic',
										vote: "Yes",
										date: '2012-04-26T15:00:00+10:00'
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
										date: '2012-04-27T17:00:00+10:00'
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
										date: '2012-05-01T13:00:00+10:00'
						            },
						            {
							            user: "Bridgette Random",
										age: 63,
										location: '127.2234562, 127.123456',
										gender: 'female',
										income: '10,000 - 20,000',
										ideology: 'liberal',
										religion: 'christian',
										vote: "Yes",
										date: '2012-05-01T01:00:00+10:00'
									}

					            ],
					    comments: [
									{
										_id: 235346,
										user: "Jim Jones",
										vote: "Yes",
										comment: "Peer-reviewed paper published 1in the journal ü Human Reproduction.",
										date: '2012-04-23T18:25:43.511+10:00',
										level: 0,
										tier: 1,
										sources: [ 34567845, 7564576 ],
										comments: [ 
										{
											_id: 7643562,
											user: "Tammy Bob",
											vote: "No",
											comment: "I promise I’m not trying to be a smartass, but trying to understand English language: does the comma in the title change the meaning? Because for me it does, but I’m not sure if that is my German-speaking brain at work or not. Because for me, “...born from frozen ovary, collected during...” reads as if it was the first time a child was ever born form a frozen ovary, and the rest ist just additional detail. Whereas without the comma, it would mean that it was the first time from 2 ovary removed in early puberty, not the first time altogether (as the article states in the last paragraph). <br> Does English work that way?",
											date: '2012-04-23T18:25:43.511Z',
											level: 0,
											tier: 2,
											sources: [ 34567845, 7564576 ],
											comments: [ 
											{
												_id: 96746572,
												user: "John Jones",
												vote: "No",
												comment: "Yes, English works exactly that way and the comma does change the meaning. “reads as if it was the first time a child was ever born form a frozen ovary” OP’s title does read that way, but according to the article that’s not the case. The title should say “World’s first baby born from frozen ovary collected during the mother’s childhood”.",
												date: '2012-04-23T18:25:43.511+10:00',
												level: 0,
												tier: 3,
												sources: [ 34567845, 7564576 ],
												comments: [
													{
													_id: 96746572,
													user: "Another User",
													vote: "No",
													comment: "that was what I was trying to ask, thanks for the answer!",
													date: '2012-04-23T18:25:43.511+10:00',
													level: 0,
													tier: 4,
													sources: [ 34567845, 7564576 ],
														comments: [
															{
															_id: 96746572,
															user: "Another User",
															vote: "No",
															comment: "That's great thanks!",
															date: '2012-04-23T18:25:43.511+10:00',
															level: 0,
															tier: 5,
															sources: [ 34567845, 7564576 ]
															}
													]
													}
												]
											}
											]
										},
										{
											_id: 5678735,
											user: "Different User",
											vote: "No",
											comment: "Level up! <br> English +1 Gratz!",
											date: '2012-04-23T18:25:43.511+10:00',
											level: 0,
											tier: 2,
											sources: [ 34567845, 7564576 ]
										}
										]
									},
									{
										_id: 235346,
										user: "Tony Roberts",
										vote: "Yes",
										comment: "Absolutely! You’re welcome.",
										date: '2012-04-23T18:25:43.511+10:00',
										level: 0,
										tier: 1,
										sources: [ 34567845, 7564576 ],
										comments: [ 
										{
											_id: 7643562,
											user: "Tammy Bob",
											vote: "No",
											comment: "Just wondering, how would this look in German? And would it be as simple as just removing the comma to change the meaning of the sentence, or would you have to change some of the words too?",
											date: '2012-04-23T18:25:43.511+10:00',
											level: 0,
											tier: 2,
											sources: [ 34567845, 7564576 ],
											comments: [ ]
										},
										{
											_id: 5678735,
											user: "Bob Sullivan",
											vote: "No",
											comment: "He should have just rewritten it.",
											date: '2012-04-23T18:25:43.511+10:00',
											level: 0,
											tier: 2,
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