'use strict';

angular.module('myApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl'
    });
}])

.controller('WelcomeCtrl', ['$scope', '$firebase','$location', 'CommonProp', '$http', function($scope, $firebase, $location ,CommonProp, $http) {
    $scope.username = CommonProp.getUser();


   // $scope.username = CommonProp.getUser();

    if(!$scope.username){
        $location.path('/home');
    }

    var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com/Articles/");


    var sync = $firebase(firebaseObj.startAt($scope.username).endAt($scope.username));

    $scope.articles = sync.$asArray();
	console.log(sync);

    $scope.logout = function(){
    CommonProp.logoutUser();
};
    $(function(){
        var front = $('.Front'),
            others = ['Left2', 'Left', 'Right', 'Right2'];

        $('.Carousel').on('click', '.Items', function() {
            var $this = $(this);

            $.each(others, function(i, cl) {
                if ($this.hasClass(cl)) {
                    front.removeClass('Front').addClass(cl);
                    front = $this;
                    front.addClass('Front').removeClass(cl);
                }
            });
        });
    });

    $scope.users = []; //declare an empty array
    $http.get('/mockJson/mock.json').success(function(response){
        $scope.users = response;  //ajax request to fetch data into $scope.data
    });

        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchListings = '';     // set the default search/filter term

        // create the list
        $scope.raves = [

            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 4, Location 4, This Friday', promoter: 'Promoter 4' }
        ];

            $(document).ready(function () {
        var maxMobileSize = 768; // this value should match the media query
        var mobileAccordionTableSelector = ".table.mobile-accordion";


        // Resize and Reorientation code borrowed and modified from this StackOverflow answer:
        //		http://stackoverflow.com/a/6603537
        var previousOrientation = window.orientation;

        var checkOrientation = function() {
            if(window.orientation !== previousOrientation){
                previousOrientation = window.orientation;
                checkScreenSize();
            }
        };

        var checkScreenSize = function() {
            var width = $(window).width();

            if (width < maxMobileSize) {
                handleMobile();
            } else {
                handleDesktop();
            }
        }

        window.addEventListener("resize", checkScreenSize, false);
        window.addEventListener("orientationchange", checkOrientation, false);

        // Android doesn't always fire orientationChange on 180 degree turns
        setInterval(checkOrientation, 2000);


        function handleMobile() {
            slideUpAllInactive();
        }

        function handleDesktop() {
            showRows();
            addRowHighlighting();
        }

        function showRows() {
            $(mobileAccordionTableSelector + " .tr").each(function () {
                $(this).removeAttr("style");
            });
        }

        function addRowHighlighting() {
            var rows = $(".table .tbody .tr");
                
            /* Add a highlighting class on even rows */
            for (var i = 0; i < rows.length; i++) {
                if (i % 2 == 1) {
                    $(rows[i]).addClass("alternate-highlight");
                }
            }
        }

        function slideUpAllInactive() {
            $(".table .rh").not(".active").each(function() {
                $(this).next().slideUp();
            });
        }

        function handleMobileAccordionTableClick(rowHeader) {
            var table = $(rowHeader).parents(".table");

            $(table).find(".rh").each(function () {
                $(this).removeClass("active");
            });

            slideUpAllInactive();

            var nextRow = $(rowHeader).next();
            if (!nextRow.is(":visible")) {
                $(rowHeader).addClass("active");
                nextRow.slideDown();
            }
        }

        $(mobileAccordionTableSelector + " .rh").click(function () {
            handleMobileAccordionTableClick(this);
        });

        // Need to run this on first load
        checkScreenSize();
    });
    
    $(".AboutButton").click(function() {
        $('html,body').animate({
            scrollTop: $(".about-us-container").offset().top}, 'slow');
    });
    
}]);


