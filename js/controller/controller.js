angular
    .module("myApp")
    .controller("myController", myController);


    myController.$inject = ['quizFactory', 'dataService'];
    function myController(quizFactory, dataService ) {
        // Khai báo vm
        var vm = this;
        vm.demo = "demo";

        vm.temp = {};
        // lưu biến tạm đối tượng trong modal
        vm.searchText = "";

        vm.flagHide = false;

        vm.myFunction1 = function(index){
            vm.temp = index;
        };

        vm.quizFactory = quizFactory;
        // factory Quiz

        vm.myStart = function(){
          // vm.quizFactory.flagHide = true;
          vm.quizFactory.changeState(true);
          // sử dụng 1 method trong object Factory trả về
        }
        vm.turtlesData = dataService.turtlesData;

    };
