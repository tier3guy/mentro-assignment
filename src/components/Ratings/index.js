import Star from "../Star";

const Ratings = ({rating}) => {

    const wholeRating = Math.floor(rating);
    const decimalRating = rating - wholeRating;

    return (
        <div
            style={{
                width: 'fit-content',
                height: 'fit-content',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '10px',
            }}
        >
            {
                [...Array(wholeRating)].map((e, i) => <Star key={i} />)
            }
            {
                decimalRating > 0 && <Star visible={decimalRating} />
            }
        </div>
    )
}

export default Ratings;