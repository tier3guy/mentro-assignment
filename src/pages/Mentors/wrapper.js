const Wrapper = ({ children }) => {
    return (
        <div className='page-mentor-wrapper'>
            <div className='page-mentor-circle' />
            <div className='page-mentor-contents-wrapper'>
                {children}
            </div>
        </div>
    )
}

export default Wrapper;