import {
  interpolateBasis as d3InterpolateBasis,
  interpolateBasisClosed as d3InterpolateBasisClosed
} from 'd3-interpolate';

export function interpolateBasis(array, fraction) {
  return d3InterpolateBasis(array)(fraction);
}

export function interpolateBasisClosed(array, fraction) {
  return d3InterpolateBasisClosed(array)(fraction);
}