var app = angular.module('TodoApp', []);

app.controller('TodoCtrl', function($scope, $rootScope){
	$scope.title = 'Welcome to your Todo App';
	$rootScope.hello = 'I am everywhere';
})

app.controller('PastaCtrl', function($scope){
	$scope.pasta = 'I love carbs';
	$scope.foods = '';
})