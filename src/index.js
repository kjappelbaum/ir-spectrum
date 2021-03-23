import { JSGraph as OriginalJSGraph } from 'common-spectrum';

import { getAnnotations } from './jsgraph/getAnnotations';

export { Analysis, AnalysesManager, toJcamp } from 'common-spectrum';

export { fromJcamp } from './from/fromJcamp';

export const JSGraph = { ...OriginalJSGraph, getAnnotations };
