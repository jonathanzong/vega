import {
  interpolateCatmullRom as d3InterpolateCatmullRom,
  interpolateFromCurve,
} from 'd3-interpolate-curve';
import {curveLinear} from 'd3-shape';
import { memoize } from 'lodash';

export function interpolateCatmullRom(array, fraction) {
  if (array.length === 1) return array[0];
  return memoInterpolateCatmullRom(array)(fraction);
}

export function interpolateLinear(array, fraction) {
  if (array.length === 1) return array[0];
  return memoInterpolateLinear(array)(fraction);
}

const arrayResolver = (array) => {
  return JSON.stringify(array);
}

const memoInterpolateLinear = memoize((array) => {
  return interpolateFromCurve(array, curveLinear);
}, arrayResolver);

const memoInterpolateCatmullRom = memoize((array) => {
  return d3InterpolateCatmullRom(array);
}, arrayResolver);
