app.controller('RegCtrl', function($scope, $location, authFactory){
    console.log('RegCtrl');
    $scope.register = () => {
        authFactory
        .register($scope.email, $scope.password)
        .then(()=> $location.url('/'))
    }
})
