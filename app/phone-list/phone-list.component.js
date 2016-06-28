'use strict';

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone','$scope',
      function PhoneListController(Phone,$scope) {
        this.phones = Phone.query();
        $scope.name=this.phones.name;
        this.orderProp = 'age';
        $scope.phones = this.phones;


        $scope.$watch('phones',function(){
          console.log($scope.phones);
        },true);
      }
    ]
  });
