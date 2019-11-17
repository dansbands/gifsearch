/**
 *
 * Asynchronously loads the component for GifCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
