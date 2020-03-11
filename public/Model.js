import {Observable, QueryRouter, Loader, sessionService} from '/js/src/index.js';
import Home from './home/Home.js';
import About from './about/About.js';

/**
 * Root of model tree
 * Handle global events: keyboard, websocket and router location change
 */
export default class Model extends Observable {
  /**
   * Load all sub-models and bind event handlers
   */
  constructor() {
    super();

    this.session = sessionService.get();
    this.session.personid = parseInt(this.session.personid, 10); // cast, sessionService has only strings

    // Setup router
    this.router = new QueryRouter();
    this.router.observe(this.handleLocationChange.bind(this));
    this.router.bubbleTo(this);

    this.home = new Home();
    this.home.bubbleTo(this);

    this.about = new About();
    this.about.bubbleTo(this);

    this.handleLocationChange(); // Init first page
  }

  /**
   * Delegates sub-model actions depending on new location of the page
   */
  handleLocationChange() {
    switch (this.router.params.page) {
      case 'home':
        break;
      case 'about':
        break;
      default:
        this.router.go('?page=home');
        break;
    }
  }
}
