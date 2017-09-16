angular
  .module("myApp")
  .factory("quizFactory", quizFactory);


  function quizFactory(){
      var objTemp = {
            flagHide: false,
            changeState: changeState
      };
      function changeState(state) {
            objTemp.flagHide = state;
      };
      return objTemp;
  };
