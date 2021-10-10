import { registerPlugin } from '@capacitor/core';

import type { mixdemoPlugin } from './definitions';

const mixdemo = registerPlugin<mixdemoPlugin>('mixdemo', {
  web: () => import('./web').then(m => new m.mixdemoWeb()),
});

export * from './definitions';
export { mixdemo };
