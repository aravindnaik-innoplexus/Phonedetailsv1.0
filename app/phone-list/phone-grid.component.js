'use strict';

angular.
  module('phoneList').
  component('phoneGrid', {
    templateUrl: 'phone-list/phone-grid.template.html',
    controller: ['Phone','$scope',
      function PhoneListController(Phone,$scope) {
        this.phones = Phone.query();
        $scope.name= this.phones.name;
        this.orderProp = 'age';
        this.orderComp='id';
      }
    ]
  });
