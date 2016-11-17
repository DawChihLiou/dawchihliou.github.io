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
    // loader
    var dimension    = 150;
    var offset       = 12;
    var strokewidth  = 3;
    var edgeLength   = 100;
    // var strokeColor  = '#333';
    var strokeColor  = '#f1c40f';
    var speed        = 4;
    var opacity      = 0;
    var toggleSpeed  = 0.05;
    var fadeInSpeed  = 50;
    var compensation = strokewidth / 2;
    var radius       = edgeLength / 2;
    var start        = ( dimension - edgeLength ) / 2;
    var corner       = dimension - offset;
    var logoParams   = { width: dimension, height: dimension + offset * 2 };
    var diff         = 0;
    var side         = 0;

    var logo         = document.getElementById('loader');
    var two          = new Two(logoParams).appendTo(logo);
    var arc1         = two.makeArcSegment(start, start + radius, radius, radius, 0, Math.PI);
    var arc2         = two.makeArcSegment(dimension - start, start + radius, radius, radius, Math.PI, 0);
    var line         = two.makeLine(start + compensation, start, start + compensation, start + edgeLength / 2);
    var group        = two.makeGroup(arc1, arc2, line);
    var bordCur;
    var bordPre;

    // loader control
    $scope.loaded = false;

    // define parallax scroll speed
    $scope.background = parallaxHelper.createAnimator(-0.3);

    // default selected project index
    $scope.selected = -1;

    // loader
    two.bind('update', function (frameCount) {
      // logo fade in
      if (frameCount <= fadeInSpeed) {
      	group.opacity = (1 / fadeInSpeed) * frameCount;
      }

      // remove old border instances
      group.remove(bordCur, bordPre);
      two.remove(bordCur, bordPre);
      bordCur = null;
      bordPre = null;

      // reset iteration & switch side
      if (diff > dimension - offset || diff < offset) {
      	diff = offset;
      	side++;
      }

      // reset to 1st side when 4th completes
      if (side > 3) {
      	side = 0;
      }

      // set upper & lower bond of text opacity
      if (opacity > 1) {
      	opacity = 1;
      } else if (opacity < 0) {
      	opacity = 0;
      }

      // redraw borders on wanted sides in eatch frame
      switch(side) {
      	case 0:
      		// top & left edge
      		bordCur = two.makeLine(offset, offset, diff, offset);
      		bordPre = two.makeLine(offset + compensation, dimension - diff, offset + compensation, offset);
      		break;
      	case 1:
      		// right & top edge
      		bordCur = two.makeLine(corner - compensation, offset, corner - compensation, diff);
      		bordPre = two.makeLine(diff, offset, corner, offset);
      		opacity += toggleSpeed;
      		break;
      	case 2:
      		// bottom & right edge
      		bordCur = two.makeLine(corner, corner, dimension - diff, corner);
      		bordPre = two.makeLine(corner - compensation, diff, corner - compensation, corner);
      		opacity -= toggleSpeed;
      		break;
      	case 3:
      		// left & bottom edge
      		bordCur = two.makeLine(offset + compensation, corner, offset + compensation, dimension - diff);
      		bordPre = two.makeLine(dimension - diff, corner, offset, corner);
      		break;
      }

      // add borders to group & set group styles
      group.add(bordCur, bordPre);
      group.linewidth = strokewidth;
      group.stroke = strokeColor;

      // udpate next edge length difference
      diff += speed;
    }).play();

    // show spinner for a period of time based on screen size
    if ($window.innerWidth > 2000) {
        // 12.5 secs
        $timeout(function() {$scope.loaded = true;}, 3000);
    } else if ($window.innerWidth > 1600 && $window.innerWidth <= 2000) {
        // 11 secs
        $timeout(function() {$scope.loaded = true;}, 3000);
    } else if ($window.innerWidth > 768 && $window.innerWidth <= 1600) {
        // 9.5 secs
        $timeout(function() {$scope.loaded = true;}, 3000);
    } else {
        // 8 secs
        $timeout(function() {$scope.loaded = true;}, 3000);
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
        $rootScope.codepen = data.codepen;
        $rootScope.github = data.github;
        $rootScope.twitter = data.twitter;
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
