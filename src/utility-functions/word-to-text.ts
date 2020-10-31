import { cellToText } from './cell-to-text'

export function wordToText(word: string): string {
    let previous: string
    let wordText = ""
    word.split("").forEach((cell, index) => {
        let nextCell = word[index + 1]
        wordText += cellToText(cell, previous, nextCell)
        previous = cell
    })
    return wordText
}