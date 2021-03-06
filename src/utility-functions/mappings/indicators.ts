// indicators.ts has the braille symbols for indicating which mode of braille is
// being used

import { binaryToBraille as b2b } from '../cell-to-braille'

// Modes
export const shapeMode = b2b["1246"]
export const arrowMode = b2b["1256"]
export const numericAndGradeOneMode = b2b["3456"]
export const horizontalLineMode = b2b["5"] + b2b["25"]
export const gradeOneMode = b2b["56"]

// Text aspect indicators
export const subscriptIndicator = b2b["26"]
export const superscriptIndicator = b2b["35"]
export const scriptSymbolIndicator = b2b["4"] + b2b["23"]
export const boldSymbolIndicator = b2b["45"] + b2b["23"]
export const ligatureIndicator = b2b["45"] + b2b["235"]
export const underlineSymbolIndicator = b2b["456"] + b2b["23"]
export const italicSymbolIndicator = b2b["46"] + b2b["23"]
export const capitalWordIndicator = b2b["6"] + b2b["6"]

// Other indicators
export const cursorIndicator = b2b["123456"]
export const generalFractionOpenIndicator = b2b["12356"]
export const generalFractionCloseIndicator = b2b["23456"]
export const brailleGroupingOpeningIndicator = b2b["4"] + b2b["46"] + b2b["126"]
export const brailleGroupingClosingIndicator = b2b["4"] + b2b["46"] + b2b["345"]
export const nonUEBWordIndicator = b2b["45"] + b2b["12345"]
export const lineIndicator = b2b["456"]
export const lineContinuationIndicator = b2b["5"]
export const dotLocatorForUse = b2b["5"] + b2b["5"] + b2b["123456"]
export const dotLocatorForMention = b2b["46"] + b2b["123456"]



