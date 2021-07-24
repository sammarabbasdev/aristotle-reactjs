import React, { lazy, Suspense } from 'react';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);
  // import loading here
  return props => (
    <Suspense fallback={fallback ? fallback : <p>Loading...</p>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
