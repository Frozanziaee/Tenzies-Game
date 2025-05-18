export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#8fbc94" : "#b7d5d4"
    }

    const pipPositions = {
        1: [[1, 1]],
        2: [[0, 0], [2, 2]],
        3: [[0, 0], [1, 1], [2, 2]],
        4: [[0, 0], [0, 2], [2, 0], [2, 2]],
        5: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],
        6: [[0, 0], [1, 0], [2, 0], [0, 2], [1, 2], [2, 2]]
    }

    const pips = pipPositions[props.value].map((pos, index) => (
        <span
            key={index}
            className="pip"
            style={{
                gridRow: pos[0] + 1,
                gridColumn: pos[1] + 1
            }}
        />
    ))

    return (
        <button
            className="dice-btn"
            style={styles}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
        >
            <div className="pip-grid">
                {pips}
            </div>
        </button>
    )
}
