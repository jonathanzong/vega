import {
  interpolateCatmullRom as d3InterpolateCatmullRom,
} from 'd3-interpolate-curve';

export function interpolateCatmullRom(array, fraction) {
  if (array.length === 1) return array[0];
  return d3InterpolateCatmullRom(array)(fraction);
}
