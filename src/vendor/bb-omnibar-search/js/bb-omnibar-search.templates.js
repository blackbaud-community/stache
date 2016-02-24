(function (angular) {
    "use strict";

    angular.module('OmnibarSearch.templates', [])
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put("/assets/vendor/bb-omnibar-search/templates/bb-omnibar-search.hbs", [
            "<div id=\"bb-omnibar-search-results\" ng-if=\"ctrl.enabled\" ng-show=\"ctrl.query\" ng-cloak>",
            "  <p ng-show=\"ctrl.searching\">{{ ctrl.messages.searching }}</p>",
            "  <p ng-show=\"!ctrl.searching && !ctrl.results.length\">{{ ctrl.messages.noResults }}</p>",
            "  <ul class=\"list-unstyled\" ng-show=\"ctrl.results.length\">",
            "    <li ng-repeat=\"result in ctrl.results | orderBy:'-weight' | limitTo: '8'\">",
            "      <a ng-href=\"{{ result.uri }}\"><strong>{{ result.name }}</strong>",
            "      <div class=\"bb-omnibar-search-result-description\" ng-bind-html=\"result.match | limitTo: 60 | highlight:ctrl.query\"></div></a>",
            "    </li>",
            "  </ul>",
            "</div>"].join(''));
        }]);

}(window.angular));