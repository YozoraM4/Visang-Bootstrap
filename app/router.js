import EmberRouter from '@ember/routing/router';
import config from 'visang-bootstrap/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('mm');
  this.route('proposal');
  this.route('privacy-policy');
});
