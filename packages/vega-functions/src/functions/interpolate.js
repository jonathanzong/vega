import {
  interpolateCatmullRom as d3InterpolateCatmullRom,
  interpolateFromCurve,
} from 'd3-interpolate-curve';
import {curveLinear} from 'd3-shape';

export function interpolateCatmullRom(array, fraction) {
  if (array.length === 1) return array[0];
  return d3InterpolateCatmullRom(array)(fraction);
}

export function interpolateLinear(array, fraction) {
  if (array.length === 1) return array[0];
  return interpolateFromCurve(array, curveLinear)(fraction);
}
