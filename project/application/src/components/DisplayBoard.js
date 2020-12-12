import React from 'react'

export const DisplayBoard = ({numberOfUsers, getAllUsers}) => {

    return(
        <div className="display-board">
            <h3>Connections:</h3>
            <div className="number">
            {numberOfUsers}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllUsers()}>Show All</button>
            </div>
        </div>
    )
}
