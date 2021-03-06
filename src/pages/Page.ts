interface PageConstructor {
  new ($app: HTMLDivElement): Page;
}

export abstract class Page {
  protected component: any;
  protected headerEl: HTMLHeadElement;
  protected mainEl: HTMLElement;
  protected state: any;

  constructor($app: HTMLDivElement) {
    this.headerEl = document.createElement("header");
    this.mainEl = document.createElement("main");
    $app.appendChild(this.headerEl);
    $app.appendChild(this.mainEl);
  }

  abstract render(): void;

  setState(nextState: any, callback?: Function): void {
    this.state = nextState;
    this.render();
    if (callback) callback();
  }
}

export function createPage(cstr: PageConstructor, $app: HTMLDivElement) {
  return new cstr($app);
}
