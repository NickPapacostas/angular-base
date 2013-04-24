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
demoApp.directive("leave", function(){
  return function(scope, element, attrs){
    element.bind("mouseleave", function(){
      element.removeClass(attrs.leave)
    });
  }
});

demoApp.directive("enter", function(){
  return function(scope, element, attrs){
    element.bind("mouseenter", function(){
      element.addClass("btn")
      scope.$apply(attrs.enter);
    });
  }
});

// demoApp.directive("leave", function(){
//   return {
//     //C for class, A for attribute( e.g. <div leave> , E is for element (e.g. <leave></leave>) )
//     //doesn't work right now dunno if its the attribute syntax and haml or typo
//     restrict: "C",
//     link: function(){
//       element.bind("mouseleave", function(){
//         console.log("mouse left!");
//       });
//     }
//   };
// });


//***Factories
demoApp.factory('simpleFactory', function(){
  var people = [
    {name:'Sal Salvatore', city: 'nyc'},
    {name: 'ron1n', city: 'LA'},
    {name:'King Calamari', city: 'Tampa'}
    {name: 'gentlewomyn1', city: 'femville'}
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
  $scope.people =[];
  init();
  function init(){
    $scope.people = simpleFactory.getPeople();
  }

  $scope.addPerson = function () {
    $scope.people.push({name: $scope.newPerson.name, city: $scope.newPerson.city});
  };

  $scope.loadMore = function () {
    console.log("more inc");
  };


};

demoApp.controller(controllers);