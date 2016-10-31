angular.module('app', ['ngRoute', 'ngAnimate', 'duParallax'])

.config(function ($routeProvider) {
    // routing -- Keep it expendable
    $routeProvider
        .when('/', {
            controller: 'defaultController',
            templateUrl: 'views/default.html'
        })
        .otherwise({redirectTo: '/'});
})

.controller('defaultController', function ($scope, $http, $window, $timeout, Contents, parallaxHelper) {
    // spinner control
    $scope.loaded = false;  

    // define parallax scroll speed
    $scope.background = parallaxHelper.createAnimator(-0.3);

    // default selected project index
    $scope.selected = -1;

    // show spinner for a period of time based on screen size
    if ($window.innerWidth > 2000) {
        // 12.5 secs
        $timeout(function() {$scope.loaded = true;}, 12500);
    } else if ($window.innerWidth > 1600 && $window.innerWidth <= 2000) {
        // 11 secs
        $timeout(function() {$scope.loaded = true;}, 11000);
    } else if ($window.innerWidth > 768 && $window.innerWidth <= 1600) {
        // 9.5 secs
        $timeout(function() {$scope.loaded = true;}, 9500);
    } else {
        // 8 secs
        $timeout(function() {$scope.loaded = true;}, 8000);
    }

    $scope.flip = function (index) {
        if($scope.selected === -1 && $scope.selected !== index) {
            // none of the projects flipped
            $scope.selected = index; 
        } else if($scope.selected !== -1 && $scope.selected !== index){
            // selected project is not flipped 
            $scope.selected = -1;
            $timeout(function() {$scope.selected = index;}, 400);
        } else {
            // seleted project is flipped
            $scope.selected = -1;
        }
    };

    // submit button event handler
    $scope.sendMsg = function () {
        // inputs validation when <required> attribute fails
        if ($scope.cName === undefined || $scope.cName.trim() === '') {
            alert('Your name please.');
        } else if ($scope.cEmail === undefined || $scope.cEmail.trim() === '') {
            alert('How do I respond to your message?');
        } else if ($scope.cContent === undefined || $scope.cContent.trim() === '') {
            alert('Zero message makes zero sense!');
        } else {
            // xhr call
            var url = 'php/message.php?name=' + $scope.cName + '&comment=' + $scope.cContent + '&email=' + $scope.cEmail;

            $http({ method: 'GET', url: url })
            .success(function (data, status, headers, config) {
                console.log('XHR status: ' + status);
                alert('Thanks for the message!');
            })
            .error(function(data, status, headers) {
                alert('Something\'s wrong.');
                return undefined;
            });
        }
    };
})

.factory('Contents', function ($rootScope, $http, $window) {

    console.log('Screen Width: ' + $window.innerWidth);

    // data.json contains all content data.
    var url = 'data/data.json';

    $http({ method: 'GET', url: url })
    .success(function (data, status, headers, config) {
        // cache display contents
        $rootScope.name = data.name;
        $rootScope.email = data.email;
        $rootScope.scrollText = data.scroll_text;
        $rootScope.submitText = data.submit_text;
        $rootScope.linkedIn = data.linkedIn;
        $rootScope.landingPicture = data.landing_pic;
        $rootScope.portfolioItems = data.works;
        $rootScope.aboutMe = data.aboutMe;
        $rootScope.landingCaption = data.landing_caption;
        $rootScope.scene = data.scene;

        // photo path based on screen size
        if ($window.innerWidth > 2000){
            // path: img/xb/ 
            $rootScope.photoPath = data.photo_path.xb;
        } else if ($window.innerWidth > 1600 && $window.innerWidth <= 2000) {
            // path: img/bg/ 
            $rootScope.photoPath = data.photo_path.bg;
        } else if ($window.innerWidth > 768 && $window.innerWidth <= 1600) {
            // path: img/md/
            $rootScope.photoPath = data.photo_path.md;
        } else {
            // path: img/sm/
            $rootScope.photoPath = data.photo_path.sm;
        }   
    })
    .error(function(data, status, headers) {
        alert('Something\'s wrong when retrieving data.');
        return undefined;
    });
})

.directive("scrolly", function ($animate, $window) {
    
    function offset(elm) { 
        try {return elm.offset();} catch(e) {} 
        var rawDom = elm[0]; 
        var _x = 0; 
        var _y = 0; 
        var body = document.documentElement || document.body; 
        var scrollX = window.pageXOffset || body.scrollLeft; 
        var scrollY = window.pageYOffset || body.scrollTop; 
        _x = rawDom.getBoundingClientRect().left + scrollX; 
        _y = rawDom.getBoundingClientRect().top + scrollY; 
        return { left: _x, top:_y }; 
    }

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                var $el = $('.item');
                for (var i = 0; i < $el.length; i++) {
                    var $e = $($el[i]);

                    // toggle animate with position of element
                    if (window.pageYOffset > offset($e).top*0.86 && window.pageYOffset < offset($e).top*2 ) {
                        // show overlay and color
                        $animate.addClass($e, 'animate');
                    } else {
                        // hide overlay and color
                        $animate.removeClass($e, 'animate');
                    }
                }

                scope.$apply();
            });
        }
    };
});