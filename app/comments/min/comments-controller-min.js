!function(){var e=angular.module("yvn.controllers",[]);e.controller("comments",["$scope",function(e){e.title="Do electric sheep dream?",e.comments=[{userName:"Jim Jones",userComment:"I think this is absolutely true",userPoints:1245,commentPoints:10,userVote:"Yes"},{userName:"David Masbourough",userComment:"I do not think this is very true, it could be anything!",userPoints:865,commentPoints:13,userVote:"No"},{userName:"Julie Grey",userComment:"Perhaps, I am a little undecided",userPoints:555,commentPoints:8,userVote:"Undecided"}],e.addComment=function(){e.userComment&&""!==e.userComment&&(e.comments.push({userName:e.userName,userComment:e.userComment,userPoints:0,commentPoints:0,userVote:e.userVote}),e.userName="",e.userComment="",e.userVote="")},e.commentUp=function(e){e.commentPoints+=1},e.commentDown=function(e){e.commentPoints-=1}}])}();