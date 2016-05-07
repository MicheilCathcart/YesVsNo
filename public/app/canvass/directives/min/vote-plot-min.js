!function(){var t=angular.module("yvn.canvass");t.directive("votePlot",["$log",function(t){function e(e,o){e.votes.sort(function(t,e){return new Date(t.date)-new Date(e.date)}),e.firstVote=moment(e.votes[0].date).hour(0).minute(0).second(0),e.lastVote=moment(e.votes[e.votes.length-1].date).hour(24).minute(0).second(0),e.days=[];var n=moment(e.votes[0].date).hour(0).minute(0).second(0);for(e.days.push(moment(n).toDate());n.isBefore(e.lastVote);)e.days.push(moment(n).add(1,"days").toDate()),n.add(1,"days");var s=0;e.highestPosition=0,e.lowestPosition=0;var a;_(e.votes).forEach(function(t){"Yes"==t.vote&&(s++,e.highestPosition++),"No"==t.vote&&(s--,e.lowestPosition++),t.votePosition=s,a=Math.max(e.lowestPosition,e.highestPosition)}).value(),t.info("High"),t.info(e.lowestPosition),t.info("Low"),t.info(e.highestPosition),e.scaleX=d3.time.scale(),e.scaleX.domain([e.firstVote,e.lastVote]),e.scaleX.range([0,100]),e.scaleY=d3.scale.linear(),e.scaleY.domain([-a,a]),e.scaleY.range([110,-110])}function o(t,e,o,n){t.returnDate=function(t){return new Date(t)},t.returnDayOfMonth=function(t){return 1==moment(t).date()?!0:!1},t.findPercentage=function(t,e){return t/(t+e)}}return{restrict:"E",scope:{votes:"="},templateUrl:"app/canvass/directives/vote-plot.html",link:o,controller:e}}])}();