import {Observable, QueryRouter, Loader, sessionService, WebSocketClient} from '/js/src/index.js';
import {Home} from './home/Home.js'
import {About} from './about/About.js'

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
    this.session.personid = parseInt(this.session.personid, 10);

    this.loader = new Loader(this);
    this.loader.bubbleTo(this);

    // Setup router
    this.router = new QueryRouter();
    this.router.observe(this.handleLocationChange.bind(this));
    this.router.bubbleTo(this);

    this.handleLocationChange(); // Init first page

    this.home = new Home(this, this.session.username)
    this.home.bubbleTo(this);

    this.about = new About(this);
    this.about.bubbleTo(this);

    this.ws = new WebSocketClient();
    this.ws.addListener('authed', () => {
      console.log('ready, lets send a message');
      this.ws.sendMessage({command: 'custom-client-event-name', payload: 123});
    });
    this.ws.addListener('command', (message) => {
      this.number = message.payload.num
      this.notify();
    });
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
