import {
  interpolateCatmullRom as d3InterpolateCatmullRom,
} from 'd3-interpolate-curve';

export function interpolateCatmullRom(array, fraction) {
  return d3InterpolateCatmullRom(array)(fraction);
}
