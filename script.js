var app = angular.module('toDo', []);

app.controller('toDoCtrl', function($scope){

  $scope.list = [];

$scope.addToDo = function(listItem) {
  $scope.list.push({
    info: listItem.info
  });
    $scope.listItem = null;
};

$scope.removeToDo = function(listItem) {
  var index = $scope.list.indexOf(listItem);
  $scope.list.splice(index, 1);
  console.log($scope.list);
  };
});
