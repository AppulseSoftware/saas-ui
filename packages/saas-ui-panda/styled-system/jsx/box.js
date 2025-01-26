import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.js';
import { getBoxStyle } from '../patterns/box.js';
import { styled } from './factory.js';

export const Box = /* @__PURE__ */ forwardRef(function Box(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBoxStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })