import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
    }
    const handleInput = (e) => {
        setPlayerName(e.target.value);
    }
    let editablePlayerName = <span className="player-name"> {playerName} </span>;
    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} required onChange={handleInput} />;
    }

    return <li className={isActive ? 'active' : ''}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>;
}

export default Player;