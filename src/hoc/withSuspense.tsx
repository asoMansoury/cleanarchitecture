// Use this higher-order component (HOC) to enable lazy loading in your project.

import React, { ComponentType, Suspense } from "react";

type ImportMethodType = () => Promise<{ default: ComponentType<any> }>;

/**
 * Higher-order component (HOC) for enabling lazy loading.
 * @param {ImportMethodType} importMethod - The function that imports the component.
 * @returns {JSX.Element} The lazy-loaded component wrapped in a Suspense component.
 * @example
 * const SuspenseTodoContainer = withSuspense(() => import("./pages/Todo/index"));
 */
export const withSuspense = (importMethod: ImportMethodType): JSX.Element => {
  const LazyComponent = React.lazy(importMethod);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};