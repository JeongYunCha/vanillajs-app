interface ComponentConstructor {
  new (args?: any): Component;
}

export abstract class Component {
  protected children: HTMLElement;
  protected state: any;

  abstract render(): void;

  setState(nextState: any): void {
    this.state = nextState;
    this.render();
  }
}

export function createComponent(cstr: ComponentConstructor, args: any) {
  return new cstr({ ...args });
}
