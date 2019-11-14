/**
 *
 * Asynchronously loads the component for GifGrid
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
