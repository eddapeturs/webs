"use strict";

angular
    .module('app', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "HomeController as vm",
                templateUrl: "main/home.html",
            })
            // .when("/details/:param", {
            //     controller: "SellersDtlController as vm",
            //     templateUrl: "components/seller-details/sellerDtl.html"
            // });

        //$translateProvider.use('is');
    })
    
    // .config(function($translateProvider){
    //     $translateProvider.useStaticFilesLoader({
    //         prefix: 'lang_',
    //         suffix: '.json'
    //     });
    //     $translateProvider.use('en');
    // }
);