angular.module("Creators").service("marvelCreators", function($q, $http) {

    var baseUrl = 'http://gateway.marvel.com/v1/public/creators';

    return {

        listar: function () {

            var apiKey = '08e7af463103f23c8a819577c6f3a175';
            var privateKey = '446e0b94f925f9bd7f45568538709779b1d86737';
            var publicKey = '08e7af463103f23c8a819577c6f3a175';
            var ts = new Date().getTime();
            var hash = md5(ts + privateKey + publicKey);

            var promessa = $q.defer();
            
            $http.get("http://gateway.marvel.com/v1/public/creators?ts="+ts+"&apikey="+apiKey+"&hash="+hash).then(
                function (result) {
                    var listCreators = [];

                    angular.forEach(result.data, function (creator) {
                        listCreators.push(creator);
                    });

                    promessa.resolve(listCreators);

                    console.log(listCreators);
                }
                );
            return promessa.promise;
        }
    };

});

