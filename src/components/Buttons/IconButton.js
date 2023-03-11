const IconButton = ({icon, onclick, style, iconStyle}) => {
    return (
        <button 
            onClick={onclick ? onclick : () => {}}
            style={{
                
                width: '50px',
                height: '50px',
                borderRadius: '50%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: 'var(--primary)',
                color: 'var(--white)',
                fontSize: '1.2rem',

                // boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
                ...style
            }}
        >
            <i className={icon} style={iconStyle} />
        </button>
    )
}

export default IconButton;