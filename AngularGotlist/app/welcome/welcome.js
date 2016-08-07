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
}]);


