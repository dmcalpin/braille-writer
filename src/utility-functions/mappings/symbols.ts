// symbols.ts holds all mappings of braille symbols. These
// are defined non alpha-numeric, non-punctuation characters

import { binaryToBraille as b2b } from '../cell-to-braille'

// single cell symbols
export const symbolsUnprefixed: { [key: string]: string } = {
    [b2b["25"]]: "∶", // ratio
    [b2b["25"]]: "′", // prime
}

// symbols preceeded by dots two and five
export const symbolsTwoFive: { [key: string]: string } = {
    [b2b["2356"]]: "∷", // portion
}

// symbols preceeded by dots two three five and six
export const symbolsTwoThreeFiveSix: { [key: string]: string } = {
    [b2b["25"]]: "′′", // double prime
}


// symbols preceeded by dots one, two five and six
export const symbolsOneTwoFiveSix: { [key: string]: string } = {
    [b2b["135"]]: "→",
    [b2b["146"]]: "↓",
    [b2b["246"]]: "←",
    [b2b["346"]]: "↑",
}

// symbols preceeded by dots three, four, five and six
export const symbolsThreeFourFiveSix: { [key: string]: string } = {
    [b2b["16"]]: "♮", // natural
    [b2b["126"]]: "♭", // flat
    [b2b["146"]]: "♯", // sharp
}

// symbols preceeded by a four dot
export const symbolsFour: { [key: string]: string } = {
    [b2b["1"]]: "@", // commercial at sign
    [b2b["14"]]: "¢", // cent sign
    [b2b["15"]]: "€", // euro sign
    [b2b["124"]]: "₣", // french franc sign
    [b2b["123"]]: "£", // pound sign
    [b2b["1345"]]: "₦", // naira sign
    [b2b["234"]]: "$", // dollar sign
    [b2b["13456"]]: "₣", // yen sign
    [b2b["12346"]]: "&", // ampersand
    [b2b["126"]]: "<", // less-than
    [b2b["26"]]: "^", // caret
    [b2b["35"]]: "~", // tidle
    [b2b["345"]]: ">", // greater-than
    // TODO: dagger
    // TODO: double dagger
}

// symbols preceeded by dots four and five
export const symbolsFourFive: { [key: string]: string } = {
    [b2b["14"]]: "©", // copyright
    [b2b["245"]]: "°", // degree
    [b2b["1234"]]: "¶", // paragraph sign
    [b2b["1235"]]: "®", // registered sign
    [b2b["234"]]: "§", // section sign
    [b2b["2345"]]: "™", // trademark
    [b2b["1346"]]: "♀", // female sign
    [b2b["13456"]]: "♂", // male sign
}