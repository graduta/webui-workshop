import {Observable, QueryRouter, Loader, sessionService, WebSocketClient} from '/js/src/index.js';
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

    this.loader = new Loader(this);
    this.loader.bubbleTo(this);

    this.home = new Home(this);
    this.home.bubbleTo(this);

    this.about = new About(this);
    this.about.bubbleTo(this);

    // Setup WS connection
    this.ws = new WebSocketClient();
    this.ws.addListener('command', this.handleWSCommand.bind(this));
    this.random = '';
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

  /**
   * Delegates sub-model actions depending on incoming command from server
   * @param {WebSocketMessage} message
   */
  handleWSCommand(message) {
    if (message.command === 'random') {
      console.log(message);
      this.random = message.payload;
      this.notify();
      return;
    }
  }
}
