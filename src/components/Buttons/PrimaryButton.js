const PrimaryButton = ({label, onclick, style, textStyle}) => {
    return (
        <button 
            onClick={onclick ? onclick : () => {}}
            style={{
                width: '250px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'var(--primary)',
                color: 'var(--white)',
                fontSize: '1.2rem',
                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
                ...style
            }}
        >
            <p style={textStyle}>{label}</p>
        </button>
    )
}

export default PrimaryButton;