
// toJS is the new component

import React from 'react';
import { Iterable } from 'immutable';

// receive a react component and export a react component
export const toJS = SourceComponent => sourceComponentProps => {
  const KEY = 0;
  const VALUE = 1;
  const propsJS = Object.entries(sourceComponentProps).reduce((newProps, sourceComponentProp) => {
    newProps[sourceComponentProp[KEY]] = Iterable.isIterable(sourceComponentProp[VALUE]) ?
    sourceComponentProp[VALUE].toJS() :
    sourceComponentProp[VALUE]
    return newProps;
  }, {});

  return <SourceComponent {...propsJS} />
}