import { getRandomString } from '../../utils';

angular
  .module('poool-example')
  .component('header', {
    template: `
      <div class="mb-5">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a ng-href="/" class="navbar-brand">Newspaper</a>
          <div class="collapse navbar-collapse">
            <div class="navbar-nav">
              <a ng-href="/" class="nav-item nav-link">Home</a>
              <a ng-href="/article/test" class="nav-item nav-link">Premium article (default itemID)</a>
              <a ng-href="{{ '/article/' + $ctrl.articleID }}" class="nav-item nav-link">Premium article (random itemID)</a>
            </div>
          </div>
        </nav>
      </div>
    `,
    controller: class HeaderCtrl {
      articleID = getRandomString()
    },
  });
