
// avoid render
import React from 'react';
import { Iterable } from 'immutable';

export const toJS = WrappedComponent => WrappedComponentProps => {
  const KEY = 0;
  const VALUE = 1;
  const propsJS = Object.entries(WrappedComponentProps).reduce((newProps, WrappedComponentProp) => {
    newProps[WrappedComponentProp[KEY]] = Iterable.isIterable(WrappedComponentProp[VALUE]) ? 
      WrappedComponentProp[VALUE].toJS() :
      WrappedComponentProp[VALUE]
      return newProps;
  }, {});
  return <WrappedComponent {...propsJS} />;
}