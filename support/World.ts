import { World } from '@cucumber/cucumber';
import { setWorldConstructor } from '@wdio/cucumber-framework';

export class CustomWorld extends World {
  currentUser: string;

  constructor(options) {
    super(options);
    this.currentUser = '';
  }
}

setWorldConstructor(CustomWorld);
