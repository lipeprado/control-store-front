/**
 * Asynchronously loads the component for NotFoundPage
 */
import Loadable from 'react-loadable';

import React from 'react';

const Loading = () => <span>Loading...</span>;

export default Loadable({
  loader: () => import('./index'),
  loading: Loading
});
