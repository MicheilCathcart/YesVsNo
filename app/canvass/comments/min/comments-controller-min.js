!function(){var e=angular.module("yvn.canvass");e.controller("comments",["$scope","comments",function(e,m){e.title="Do electric sheep dream?",e.comments=comments.comments,e.addComment=function(){e.userComment&&""!==e.userComment&&(e.comments.push({userName:e.userName,userComment:e.userComment,userPoints:0,commentPoints:0,userVote:e.userVote}),e.userName="",e.userComment="",e.userVote="")},e.commentUp=function(e){e.commentPoints+=1},e.commentDown=function(e){e.commentPoints-=1}}])}();