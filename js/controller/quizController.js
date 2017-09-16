angular
    .module("myApp")
    .controller("quizController", quizController);


    quizController.$inject = ['quizFactory', 'dataService'];
    function quizController(quizFactory, dataService){
        vm = this;
        vm.quizFactory = quizFactory;
        vm.dataService = dataService;
        vm.checkAnswer = checkAnswer;
        vm.setActiveQuestion = setActiveQuestion;

        vm.index = 0; // activeQuestion

        var countSum = 0; //numQuetionAnswer


        function setActiveQuestion(){
            var breakOut = false;
            var quizLength = dataService.quizQuestions.length - 1;

            while(!breakOut){
              vm.index = vm.index < quizLength ? ++vm.index : 0;
              // set index || nếu index
              if(dataService.quizQuestions[vm.index].selected === null){
                breakOut = true;
              }
            };
        };
        function checkAnswer(){
            var quizLength = dataService.quizQuestions.length;
            // alert("Length Question : "+ quizLength);
            // Lấy số lượng câu hỏi
            if(dataService.quizQuestions[vm.index].selected !== null){
                countSum++;
                if(countSum >= quizQuestions){
                  // khi mà số lượng trả lời lớn hơn hoặc bằng sl câu hỏi thì ==>
                }

            }
            vm.setActiveQuestion();
        };
    };
