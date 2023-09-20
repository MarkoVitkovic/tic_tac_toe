/* eslint-disable no-unused-vars */
import { useState } from "react"

const generateBoard = (size) => {
    const newBoard = []
    for (let i = 0; i < size; i++) {
        newBoard.push([...Array(size)])
    }
    return newBoard
}

const rowToColumns = (board) => {
    const newBoard = []
    let col = 0
    while (col < board.length) {
        const newRow = []
        for (let row = 0; row < board.length; row++) {
            newRow.push(board[row][col])
        }
        col++
        newBoard.push(newRow)
    }
    return newBoard
}

const diagnolToRow = (board) => {
    const newBoard = [[], []]
    let increment = 0
    let decrement = board.length - 1
    while(increment < board.length) {
        newBoard[0].push(board[increment][increment])
        newBoard[1].push(board[increment][decrement])
        increment ++
        decrement --
    }
    return newBoard
}

const checkHorizontal = (board) => {
    for (let row of board) {
        const rowSet = new Set(row)
        console.log(rowSet);
        if (rowSet.size == 1 && !rowSet.has(undefined)) {
            return true
        }
    }
}

const checkForWin = (board) => {
    if (checkHorizontal(board)) {
        return true
    }
    if (checkHorizontal(rowToColumns(board))) {
        return true
    }
    if (checkHorizontal(diagnolToRow(board))) {
        return true
    }
}

const TicTacToe = () => {

    const [board, setBoard] = useState(generateBoard(3))
    const [currPlayer, setCurrPlayer] = useState('x')

    const handleClick = (row, coll) => {
        board[row][coll] = currPlayer
        setBoard([...board])
        if (checkForWin(board)) {
            console.log(currPlayer + "wins")
            setBoard(generateBoard(3))
            setCurrPlayer('x')
        } else {
            setCurrPlayer(currPlayer === 'x' ? 'y' : 'x')
        }
        setCurrPlayer(currPlayer === 'x' ? 'y' : 'x')
    }

    return (
        <div>
            {
                board.map((row, r) => (
                    <div key={r} style={{ display: 'flex' }}>
                        {
                            row.map((cell, c) => (
                                <div key={c} onClick={() => handleClick(r, c)} style={{ border: '1px solid red', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {cell}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default TicTacToe