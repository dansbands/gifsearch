/**
 *
 * Asynchronously loads the component for Favorites
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
