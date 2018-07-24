'use strict';
var lio;
const getPath = (el) => {
  // implement this if you care about browser support
  return [];
};

const getAnchor = (ev) => {
  const path = ev.path || ev.composedPath && ev.composedPath() || getPath(ev.target);
  return path.find(target => target.tagName && target.tagName.toLowerCase() === 'a');
};

class Router {
  constructor(options) {
    this.options = options;
    this.routes = [];

    this.outlet = document.querySelector('.router-outlet');

    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', (ev) => {
      const path = location.pathname;
      this.activateRoute(path);
    });

    document.addEventListener('click', (ev) => {
      const a = getAnchor(ev);

      if (!a) {
        return;
      }

      ev.preventDefault();
      const {href} = a;
      history.pushState(null, 'bldox', href);
      this.activateRoute(href);
    });

  }

  activateRoute(url) {
    const {outlet, routes} = this;
    const route = routes.find(route => route.rgx.test(url));

    outlet.innerHTML = '';
    route && route.controller(outlet);
  }

  addRoute(route) {
    this.routes.push(route);
  }
}

window.router = new Router();
