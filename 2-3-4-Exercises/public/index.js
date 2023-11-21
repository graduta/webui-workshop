import sessionService from '/js/src/sessionService.js';
import {mount} from '/js/src/index.js';
import view from './view.js';
import Model from './Model.js';

sessionService.loadAndHideParameters();
window.sessionService = sessionService;

// Start application
const model = new Model();
const debug = true; // shows when redraw is done
mount(document.body, view, model, debug);

// Expose model to interact with it the browser's console
window.model = model;