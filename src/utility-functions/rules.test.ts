
import { standAlone } from './rules'
import { binaryToBraille as b2b } from './cell-to-braille'

describe('standalone', () => {
    describe("2.6.1 standalone preceeding and following", () => {
        it('is surrounded by letters', () => {
            expect(standAlone("", "", b2b[""], b2b["1"], "", "")).toBeFalsy()
            expect(standAlone("", "", b2b["1"], b2b[""], "", "")).toBeFalsy()
            expect(standAlone("", "", "", "", "", "")).toBeFalsy()
        })

        it('is preceded and followed by a space, a hyphen or a dash', () => {
            expect(standAlone("", "", b2b[""], b2b[""], "", "")).toBeTruthy() // spaces
            expect(standAlone(b2b["1"], "", b2b[""], b2b[""], "", b2b["1"])).toBeTruthy() // spaces then letters
            expect(standAlone("", "", b2b["36"], b2b["36"], "", "")).toBeTruthy() // hyphens
            expect(standAlone("", b2b["6"], b2b["36"], b2b["36"], b2b["6"], "")).toBeTruthy() // dashes
            expect(standAlone(b2b["5"], b2b["6"], b2b["36"], b2b["36"], b2b["6"], b2b["5"])).toBeTruthy() // long-dashes

            // combinations
            expect(standAlone("", "", b2b["36"], b2b["36"], b2b["6"], b2b["5"])).toBeTruthy()
            expect(standAlone("", "", b2b["36"], b2b[""], "", "")).toBeTruthy()
            expect(standAlone("", "", b2b[""], b2b["36"], b2b["6"], "")).toBeTruthy()
        })
    })

    describe('2.6.2 standalone puncutation invterveening', () => {
        // TODO: we need so many more of these
        it('is preceeded by ', () => {
            expect(standAlone(b2b[""], b2b["5"], b2b["126"], b2b[""], "", "")).toBeTruthy()
        })
        it('is followed by ', () => {
            expect(standAlone(b2b[""], b2b[""], b2b[""], b2b["3"], "", "")).toBeTruthy()
        })
    })
})