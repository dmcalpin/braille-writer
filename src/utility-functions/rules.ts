
import { binaryToBraille as b2b } from './cell-to-braille'

// determines if a letter or sequence of letters "stands alone" - if it is
// preceded and followed by a space, a hyphen or a dash.  The dash may be of
// any length, i.e. the dash or the long dash.  
export function standAlone(p3: string, p2: string, p1: string, n1: string, n2: string, n3: string): boolean {
    if (((p1 == b2b[""]) || // space
        (p1 == b2b["36"]) || // hyphen
        (p2 == b2b["6"] && p1 == b2b["36"]) || // dash
        (p3 == b2b["5"] && p2 == b2b["6"] && p1 == b2b["36"]) || // long dash
        (p3 == b2b[""] && p2 == b2b["5"] && p1 == b2b["126"]))// opening paren preceded by space
        &&
        ((n1 == b2b[""]) || // space
            (n1 == b2b["36"]) || // hyphen
            (n1 == b2b["6"] && n2 == b2b["36"]) || // dash
            (n1 == b2b["5"] && n2 == b2b["6"] && n3 == b2b["36"]) || // long dash
            (n1 == b2b["3"])) // apostraphe
    ) {
        return true
    }

    return false
}