var app = angular.module("myApp",[]);
app.controller("mainController",mainController);

function mainController($http,$scope){

var auth =window.btoa ("rizkiadrian"+ ':' +"12345678");
var base_url = "http://localhost:8000";
$scope.mahasiswas = {};

function httpRequest(methodType,subDomain,inputData){
return {
       method : methodType,
       url : base_url+subDomain,
       headers:{

        'Authorization' : 'Basic'+auth,
        'Accept' : 'application/json',
        'content-type' : 'application/json; charset=UTF-8',

       },
       data : inputData

};
}

$scope.saveData = function(){
    $http(httpRequest('post','/api/mahasiswa',$scope.mahasiswa))
    .then(function (response){
        $scope.mahasiswa = response.data;
    },
    function geterror(error){
        console.log(error);
    });
};

$scope.Indexdata = function (){
    $http(httpRequest('get','/api/mahasiswa'))
    .then(function(response){
        $scope.mahasiswas = response.data;
        console.log($scope.mahasiswas);
    },
    function geterror(error){
        console.log(error);
        
    });
};

$scope.show = function (){
    $http(httpRequest('get','/api/mahasiswa/'+$scope.mahasiswa.id))
    .then(function(response){
        $scope.mahasiswa = response.data;
    },function(error){
        console.log(error);
    });
};

$scope.update = function (){
    $http(httpRequest('put','/api/mahasiswa/'+$scope.mahasiswa.id,$scope.mahasiswa))
    .then(function(response){
        $scope.mahasiswa = response.data;
    },
    function(error){
         console.log(error);
    });
};

$scope.delete = function(){
    $http(httpRequest('delete','/api/mahasiswa/'+$scope.mahasiswa.id))
    .then(function(response)
    {
        $scope.mahasiswa = response.data;
    },function(error){
        console.log(error);
    });
};
}