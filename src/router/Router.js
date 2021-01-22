export default function Router(options) {
  this.routes = [];
  this.mode = options.mode ? options.mode : window.history.pushState ? 'history' : 'hash';
  this.root = options.root ? options.root : '/';
  this.add = (path, cb) => {
    this.routes.push({ path, cb });
    return this;
  };

  this.remove = (path) => {
    for (let i = 0; i < this.routes.length; i += 1) {
      if (this.routes[i].path === path) {
        this.routes.slice(i, 1);
        return this;
      }
    }
    return this;
  };

  this.flush = () => {
    this.routes = [];
    return this;
  };

  this.clearSlashes = (path) => (path ? path.toString().replace(/\/$/, '').replace(/^\//, '') : '');

  this.getFragment = () => {
    let fragment = '';
    if (this.mode === 'history') {
      fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
      fragment = fragment.replace(/\?(.*)$/, '');
      fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
    } else {
      const match = window.location.href.match(/#(.*)$/);
      fragment = match ? match[1] : '';
    }
    return this.clearSlashes(fragment);
  };

  this.navigate = (path = '') => {
    if (this.mode === 'history') {
      window.history.pushState(null, null, this.root + this.clearSlashes(path));
    } else {
      window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
    }
    return this;
  };

  this.listen = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.interval, 50);
  };

  this.interval = () => {
    // console.log('this.current ', this.current);
    if (this.current === this.getFragment()) return;
    this.current = this.getFragment();
    // console.log('this.current ', this.current);
    this.routes.some((route) => {
      const match = this.current.match(route.path);
      if (match) {
        match.shift();
        route.cb.apply({}, match);
        return match;
      }
      return false;
    });
  };

  this.listen();
}
