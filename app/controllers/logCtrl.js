app.controller('LogCtrl', function($scope, $location, authFactory){
    console.log('LogCtrl');
    console.log("current user :  ", firebase.auth().currentUser );
    $scope.login = () => {
        authFactory
        .login($scope.email, $scope.password)
        .then(()=> $location.url('/'))
    }

})
