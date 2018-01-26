angular.module("Creators").controller("CreatorsController", function($scope, marvelCreators, $uibModal, $document){

	$scope.titulo = "Creators";
	$scope.abrirModal = abrirModal;
    $scope.item;
	$scope.creators = [];

	marvelCreators.listar().then(function (returnJson) {
		$scope.retorno = returnJson;
		$scope.creators = returnJson[6].results;
	});



	function abrirModal(creator, size, parentSelector) {
        $scope.item = creator;
        var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            bindToController: true,
            scope: $scope,
            templateUrl: 'modalCreators',
            controller: function ($scope, $uibModalInstance) {

                $scope.cancel = function () {
                    $uibModalInstance.close();
                }

                $scope.fecharModal = function () {
                    $scope.cancel();
                }

            },
            controllerAs: '$scope',
            backdrop: 'static',
            size: size,
            appendTo: parentElem,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });
    }
});


































































