import { Board } from "./Board";

export class Player {
    isPlaying: boolean
    board: Board
    constructor(board: Board) {
        this.board = board
        this.isPlaying = false
    }
}