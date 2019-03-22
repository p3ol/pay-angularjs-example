import { getRandomString } from '../utils';

angular
  .module('poool-example')
  .component('home', {
    template: `
      <div class="page home">
        <div class="container">
          <header></header>
          <h1>Home</h1>
          <p>
            This is a normal page, without any paywall, with links to different
            article types
          </p>
          <ul>
            <li><a ng-href="/article/test">Premium article with default itemID</a></li>
            <li><a ng-href="{{ '/article/' + $ctrl.articleID }}">Free post</a></li>
          </ul>
        </div>
      </div>
    `,
    controller: class HomeCtrl {
      articleID = getRandomString()
    },
  });
