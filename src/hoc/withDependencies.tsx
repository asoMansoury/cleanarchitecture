//Use this HOC for injecting requried services into Components and pages.

import { container } from "../dependencies";
import { DependencyInjector, ResolveDependencies } from "../Types";
import { ComponentProps } from "react";

/**
 * 
 * @param { [key: string]: symbol } dependencies - The application's services which our Component needs to be injected
 * @param {React.ElementType} Component - The Component page which should be passed into HOC and then this HOC will inject the required service
 * @returns {ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>} - Wrapping passed component with props and services which the Component need.
 * @example
 * export default  WithDependency({
    todoService:dependencies.TodoService,
  },TodoContainer);
 */

export const WithDependency: DependencyInjector = (
  dependencies,
  Component
) => {
  const resolvedDependencies: ResolveDependencies = {};

  Object.keys(dependencies).forEach((prop) => {
    const dependencyKey = Object.getOwnPropertyDescriptor(dependencies, prop);

    if (dependencyKey?.value) {
      Object.defineProperty(resolvedDependencies, prop, {
        value: container.get(dependencyKey.value),
        enumerable: true,
      });
    } else {
      throw new Error(`Dependency ${prop} not found`);
    }
  });

  return (props: ComponentProps<typeof Component>) => (
    <Component {...props} {...resolvedDependencies} />
  );
};