// math.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

export {INTERSECTION} from './constants';

export {AxisAlignedBoundingBox} from './lib/bounding-volumes/axis-aligned-bounding-box';
export {BoundingSphere} from './lib/bounding-volumes/bounding-sphere';
export {OrientedBoundingBox} from './lib/bounding-volumes/oriented-bounding-box';
export {CullingVolume} from './lib/culling-volume';
export {Plane} from './lib/plane';
export {Ray} from './lib/ray';

export {PerspectiveOffCenterFrustum as _PerspectiveOffCenterFrustum} from './lib/perspective-off-center-frustum';
export {PerspectiveFrustum as _PerspectiveFrustum} from './lib/perspective-frustum';

export {makeBoundingSphereFromPoints} from './lib/algorithms/bounding-sphere-from-points';
export {
  makeAxisAlignedBoundingBoxFromPoints,
  makeOrientedBoundingBoxFromPoints
} from './lib/algorithms/bounding-box-from-points';
export {computeEigenDecomposition} from './lib/algorithms/compute-eigen-decomposition';
