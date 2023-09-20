/* eslint-disable no-unused-vars */
import { useState } from "react"

const generateBoard = (size) => {
    const newBoard = []
    for (let i = 0; i < size; i++) {
        newBoard.push([...Array(size)])
    }
    return newBoard
}

const TicTacToe = () => {

    const [board, setBoard] = useState(generateBoard(3))
    const [currPlayer, setCurrPlayer] = useState('x')

    const handleClick = (row, coll) => {
        board[row][coll] = currPlayer
        setBoard([...board])
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