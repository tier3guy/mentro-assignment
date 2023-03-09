const StarComponent = ({size, color, visible}) => {

    const SIZE = size ? size : 35;
    const VISIBLE = visible ? (visible * SIZE) : SIZE;

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: `${VISIBLE + 3}px`,
                height: `${SIZE}px`,
                overflow: 'hidden',
            }}
        >
            <i 
                className="fa-solid fa-star"
                style={{
                    color: color ? color : 'var(--primary)',
                    fontSize: `${SIZE}px`
                }}
            />
        </div>
    )
}

export default StarComponent;