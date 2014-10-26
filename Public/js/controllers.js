(function () {
	angular.module('sportEvents.controllers', [])


	.controller('SedesTodoController', ['$scope', 'sedeService', function($scope, sedeService){
		sedeService.all().then( function (result){
 			$scope.sedes = result.data;
		});
	}])

.controller('TabsController', function(){
	this.tab = 1

	this.selectTab = function (tab){
		this.tab = tab;
	};
})

.controller('CommentsController', function (){
	this.comments = [];
		this.comment = {};
		this.show = false;

	this.anonymousChanged = function () {
		if (this.comment.anonymous){
			this.comment.email = "";
			}
	};

	this.addComment = function (){
		this.comment.date = Date.now();
		this.comments.push(this.comment);
		this.comment = {};
		};
})

})();