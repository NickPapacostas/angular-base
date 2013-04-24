var demoApp = angular.module('demoApp', []);

demoApp.config(function($routeProvider) {
  $routeProvider
    .when('/view1',
    {
      controller: 'SimpleController',
      templateUrl:'view1'
    }
    )
    .when('/view2',
    {
      controller: 'SimpleController',
      templateUrl: "view2"
    }
    )
    .otherwise({redirectTo: '/view1'});
});

//***Directives
demoApp.directive("enter", function(){
  return function(scope, element){
    element.bind("mouseenter", function(){
      console.log("mouse entered!");
    });
  }
});

demoApp.directive("leave", function(){
  return function(scope, element){
    element.bind("mouseleave", function(){
      console.log("mouse left!");
    });
  };
});


//***Factories
demoApp.factory('simpleFactory', function(){
  var people = [
    {name:'Sal Salvatore', city: 'nyc'},
    {name: 'ron1n', city: 'LA'},
    {name:'King Calamari', city: 'Tampa'}
  ];

  var factory = {};
  factory.getPeople = function(){
    return people;
  };

  factory.postCustomer = function(person){
    return $scope.addPerson(person)
  };

  return factory;
});

//***Controllers
var controllers = {};

controllers.SimpleController = function( $scope, simpleFactory) {
  $scope.people =[
  ];
  init();
  function init(){
    $scope.people = simpleFactory.getPeople();
  }

  $scope.addPerson = function () {
    $scope.people.push({name: $scope.newPerson.name, city: $scope.newPerson.city});
  };
};

demoApp.controller(controllers);