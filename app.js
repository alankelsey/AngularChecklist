(function () {
'use strict';

angular.module('taskListCheckOff', [])
.controller('ToDoController', ToDoController)
.controller('DoneController', DoneController)
.service('TaskListCheckOffService', TaskListCheckOffService)
//.service('MenuSearchService', MenuSearchService)
//.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")

ToDoController.$inject = ['TaskListCheckOffService'];
  function ToDoController(TaskListCheckOffService) {
    var toBuy = this;

    //populate to buy list
    toBuy.items = TaskListCheckOffService.getitemsToDo();

    //doItems - moves items from to buy list to done list
    toBuy.doItems = function(index, name, quantity){
    TaskListCheckOffService.doItems(index, name, quantity);

    }
  }

DoneController.$inject = ['TaskListCheckOffService'];
  function DoneController(TaskListCheckOffService) {

    var done = this;

    //poplulate done list
    done.items = TaskListCheckOffService.getDoneItems();

  }

//Begin service
function TaskListCheckOffService() {

  var service = this;
   //to store done items
  var itemsDone = [];
   //to store itmes to buy items
  var itemsToDo = [{
                name:"Search Function",
                quantity:""
              },
              {
                name:"Filter Function",
                quantity:""
              },
              {
                name:"Do Email Limits Apply",
                quantity:""
              },
              {
                name:"Is Page Title Correct",
                quantity:""
              },
              {
                name:"Does Hoover Text Display",
                quantity:"8"
              }
            ];

//API request for results
//Begin OLD service
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var num = 2;
  //returns  bought list
  service.getNum = function () {
    return num;
  };

  service.getResults = function (searchTerm){
    var response = $http({
      method: "GET",
      url: ("https://s3-us-west-2.amazonaws.com/vfs-assets/Testing/testResults/result.json")
    }).then(function successCallback(response){
      console.log("found " + searchTerm);
    var items = response.data;

    for(var i = 0, len = items.length; i  < len; i++){
      //console.log(items[i].special_instructions);

      if( (items[i].special_instructions).includes(searchTerm) ){
        console.log(items[i].special_instructions);
      }
    }
      //console.log("response");
    }, function errorCallback(response){
    });
     //console.log(items);
     return response;
     console.log(response);
   };
}

//adds item to to buy list
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };

    itemsDone.push(item);
  };

  //removes item from to buy list
  service.removeItem = function (itemIndex) {

  itemsToDo.splice(itemIndex, 1);
  };

  //returns to buy list
  service.getitemsToDo = function () {
    return itemsToDo;
  };

  //returns  done list
  service.getDoneItems = function () {
    return itemsDone;
  };

//handles done items - removes from to buy and moves to done
  service.doItems = function (index, name, quantity) {
    service.removeItem(index);
    service.addItem(name, quantity);

  };
}

})();
