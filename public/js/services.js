/**
*  Module
*
* Description
*/
angular.module('fiware').
	factory('fiwareFactory', ['$http','$q', function($http,$q){
		return {
			getValues: function() {
				var def = $q.defer();
				setInterval(function () {
					$http({
						url: 'http://localhost:3000/sensor',
						method: 'GET',
						headers: {
							'fiware-service': 'smartGondor',
							'fiware-servicepath': '/gardens',
							'Accept': 'application/json'
						}
					})
					.success(function(data){
						var objeto = JSON.parse(data);
						var valueTemperature = objeto.contextElement.attributes[1].value[0].value;
						valueTemperature= parseInt(valueTemperature)
						def.resolve(valueTemperature);
					})
					.error(function(error){
						def.reject(error);
					});
				}, 3000);
				return def.promise;
			}
		}
	}
]);
