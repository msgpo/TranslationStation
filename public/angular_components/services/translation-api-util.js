var capitalize = function(string) {
	return string[0].toUpperCase() + string.slice(1);
}

angular.module('translationStation.translation-api-util', [])
	.service('translationAPIUtil', function($http) {
		this.resetTranslatedText = function($scope) {
			$scope.translatedText = "";
		};

		this.translate = function(apiName, fromLanguage, toLanguage, text, $scope) {
			
			if(!fromLanguage && !toLanguage) {
				$scope.translatedText = 'To begin translation, choose a pair of languages.';
			} else if(fromLanguage && toLanguage) {
				var queryString = '/api/' + apiName + '/translate/?from=' + fromLanguage +
				'&to=' + toLanguage + '&text=' + text;

				$http.get(queryString)
					.success(function(data, status, headers, config) {
						$scope.translatedText = data;
					})
					.error(function(data, status, headers, config) {
						$scope.translatedText = 'A server error occurred when fetching ' + 
						'translation results from ' + capitalize(apiName) + '.';
					});
			} else {
				$scope.translatedText = capitalize(apiName) + 
					' translation is unavailable for the chosen languages.';
			}
		};
	});
