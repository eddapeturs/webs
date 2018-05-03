'use strict';

angular
    .module('app')
    .controller("HomeController", HomeController);

function HomeController($translate, $location){
    var vm = this;

    vm.changeLanguage = function(langKey){
        $translate.use(langKey);
    };

    vm.home = function home(){
        $location.path("/");
    }
};
