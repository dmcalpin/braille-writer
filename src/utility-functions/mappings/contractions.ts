// contractions.ts holds all mappings of braille contractions. These
// are defined as: a braille sign which represents a word or a group of letters

import { binaryToBraille as b2b } from '../cell-to-braille'

// Alphabetic wordsigns - any one of the wordsigns in which a letter represents
// a word
export const alphabeticWordsigns: { [key: string]: string } = {
    [b2b["1"]]: 'a',
    [b2b["12"]]: 'but',
    [b2b["14"]]: 'can',
    [b2b["145"]]: 'do',
    [b2b["15"]]: 'every',
    [b2b["124"]]: 'from',
    [b2b["1245"]]: 'go',
    [b2b["125"]]: 'have',
    [b2b["245"]]: 'just',
    [b2b["13"]]: 'knowledge',
    [b2b["123"]]: 'like',
    [b2b["134"]]: 'more',
    [b2b["1345"]]: 'not',
    [b2b["1234"]]: 'people',
    [b2b["12345"]]: 'quite',
    [b2b["1235"]]: 'rather',
    [b2b["234"]]: 'so',
    [b2b["2345"]]: 'that',
    [b2b["136"]]: 'us',
    [b2b["1236"]]: 'very',
    [b2b["2456"]]: 'will',
    [b2b["1346"]]: 'it',
    [b2b["13456"]]: 'you',
    [b2b["1356"]]: 'as'
}

// Strong wordsigns - any one of the wordsigns which contain dots in both the
// top and bottom rows, and in both the left and right columns a word
export const strongWordsigns: { [key: string]: string } = {
    [b2b["16"]]: 'child',
    [b2b["146"]]: 'shall',
    [b2b["1456"]]: 'this',
    [b2b["156"]]: 'which',
    [b2b["1256"]]: 'out',
    [b2b["34"]]: 'still',
}

// Strong contractions - contractions which contain dots in both the top and
// bottom rows, and in both the left and right columns
// Note: may be used as groupsigns and as wordsigns.
export const strongContractions: { [key: string]: string } = {
    [b2b["12346"]]: 'and',
    [b2b["123456"]]: 'for',
    [b2b["12356"]]: 'of',
    [b2b["2346"]]: 'the',
    [b2b["23456"]]: 'with',
}

// Strong group signs - letter groupings which contain dots in both the top and
// bottom rows, and in both the left and right columns
export const strongGroupsigns: { [key: string]: string } = {
    [b2b["16"]]: 'ch',
    [b2b["146"]]: 'sh',
    [b2b["1456"]]: 'th',
    [b2b["156"]]: 'wh',
    [b2b["1256"]]: 'ou',
    [b2b["34"]]: 'st',
    [b2b["126"]]: 'gh',
    [b2b["1246"]]: 'ed',
    [b2b["12456"]]: 'er',
    [b2b["246"]]: 'ow',
    [b2b["345"]]: 'ar',
    [b2b["346"]]: 'ing',
}

// Lower Wordsigns - word symbols not using dots 1 or 4
export const lowerWordsigns: { [key: string]: string } = {
    [b2b["23"]]: 'be',
    [b2b["26"]]: 'enough',
    [b2b["2356"]]: 'were',
    [b2b["236"]]: 'his',
    [b2b["35"]]: 'in',
    [b2b["356"]]: 'was',
}

// Lower Groupsigns - letter groupings not using dots 1 or 4
export const lowerGroupsigns: { [key: string]: string } = {
    [b2b["2"]]: 'ea',
    [b2b["23"]]: 'bb', // same as be
    [b2b["25"]]: 'cc', // same as con
    [b2b["235"]]: 'ff',
    [b2b["2356"]]: 'gg',
    [b2b["23"]]: 'be', // same as bb
    [b2b["25"]]: 'con', // same as cc
    [b2b["256"]]: 'dis',
    [b2b["26"]]: 'en',
    [b2b["35"]]: 'in',
}

// Initial-letter contractions (dots 4 & 5) - contractions which have a prefix
// of a four-five cell. Initial is indicative of the first letter of the word.
// Note: may be used as groupsigns and as wordsign.
export const initialLetterContractionFourFive: { [key: string]: string } = {
    [b2b["136"]]: 'upon',
    [b2b["2456"]]: 'word',
    [b2b["2346"]]: 'these',
    [b2b["1456"]]: 'those',
    [b2b["156"]]: 'whose',
}

// Initial-letter contractions (dots 4 & 5 & 6) - contractions which have a
// prefix of a four-five-six cell. Initial is indicative of the first letter of
// the word.
// Note: may be used as groupsigns and as wordsign.
export const initialLetterContractionFourFiveSix: { [key: string]: string } = {
    [b2b["14"]]: 'cannot',
    [b2b["125"]]: 'had',
    [b2b["134"]]: 'many',
    [b2b["234"]]: 'spirit',
    [b2b["2456"]]: 'world',
    [b2b["2346"]]: 'their',
}

// Initial-letter contractions (dot 5) - contractions which have a prefix of a
// four-five cell. Initial is indicative of the first letter of the word.
// Note: may be used as groupsigns and as wordsign.
export const initialLetterContractionFive: { [key: string]: string } = {
    [b2b["145"]]: 'day',
    [b2b["15"]]: 'ever',
    [b2b["124"]]: 'father',
    [b2b["125"]]: 'here',
    [b2b["13"]]: 'know',
    [b2b["123"]]: 'lord',
    [b2b["134"]]: 'mother',
    [b2b["1345"]]: 'name',
    [b2b["135"]]: 'one',
    [b2b["1234"]]: 'part',
    [b2b["12345"]]: 'question',
    [b2b["1235"]]: 'right',
    [b2b["234"]]: 'some',
    [b2b["2345"]]: 'time',
    [b2b["136"]]: 'under',
    [b2b["2456"]]: 'work',
    [b2b["13456"]]: 'young',
    [b2b["2346"]]: 'there',
    [b2b["16"]]: 'character',
    [b2b["1456"]]: 'through',
    [b2b["156"]]: 'where',
    [b2b["1256"]]: 'ought',
}

// Final-letter groupsigns (dots 4 & 6) - groupsigns which have a prefix of a
// four-six cell. Final is indicative of the last letter of the word.
export const finalLetterGroupsignsFourSix: { [key: string]: string } = {
    [b2b["145"]]: 'ound',
    [b2b["14"]]: 'ance',
    [b2b["1345"]]: 'sion',
    [b2b["234"]]: 'less',
    [b2b["2345"]]: 'ount',
}

// Final-letter groupsigns (dots 5 & 6) - groupsigns which have a prefix of a
// five-six cell. Final is indicative of the last letter of the word.
export const finalLetterGroupsignsFiveSix: { [key: string]: string } = {
    [b2b["15"]]: 'ence',
    [b2b["1245"]]: 'ong',
    [b2b["123"]]: 'ful',
    [b2b["1345"]]: 'tion',
    [b2b["234"]]: 'ness',
    [b2b["2345"]]: 'ment',
    [b2b["13456"]]: 'ity',
}

// TODO: shortforms!!!