// import {WebPlugin} from '@capacitor/core';
//
// import type {mixdemoPlugin} from './definitions';
//
// export class mixdemoWeb extends WebPlugin implements mixdemoPlugin {
//   async echo(options: { value: string }): Promise<{ value: string }> {
//     console.log('ECHO', options);
//     return options;
//   }
//
//   async unlock(options: { snInfo: string, sdkKey: string }): Promise<any> {
//     console.log(options);
//   }
// }


import {registerPlugin, WebPlugin} from '@capacitor/core';

import type {MixdemoPlugin} from './definitions';

export class MixdemoWeb extends WebPlugin implements MixdemoPlugin {
  constructor() {
    super({
      name: 'MixdemoPlugin',
      platforms: ['web']
    });
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async unlock(options: { snInfo: string, sdkKey: string }): Promise<any> {
    console.log(options);
  }
}

const MixPlugin = registerPlugin<MixdemoPlugin>('MixdemoPlugin', {
  web: () => import('./web').then(m => new m.MixdemoWeb()),
});

export * from './definitions';
export { MixPlugin };
