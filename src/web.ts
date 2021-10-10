import {WebPlugin} from '@capacitor/core';

import type {mixdemoPlugin} from './definitions';

export class mixdemoWeb extends WebPlugin implements mixdemoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async unlock(options: { snInfo: string, sdkKey: string }): Promise<any> {
    console.log(options);
  }
}
