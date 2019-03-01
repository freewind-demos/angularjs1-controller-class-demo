import angular from 'angular';

class Controller {
  static get $inject() {
    return ['$scope']
  }

  constructor($scope) {
    this.$scope = $scope;
  }

  $onInit() {
    this.$scope.name = "angularjs"
  }
}

const app = angular.module('app', []);
app.controller('helloController', Controller);
