const ImageContainer = ({src, alt, style, size}) => {
  return (
    <div
        style={{
            width: size || '200px',
            height: size || '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...style
        }}
    >
        <img 
            src={require(`../../assets/${src}`)} 
            alt={alt || 'Some_Image'} 
            style={{
                width: '100%', 
                height: '100%',
                objectFit: 'cover'
            }}
        />
    </div>
  )
}

export default ImageContainer;