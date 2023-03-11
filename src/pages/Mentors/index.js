// Internal Dependencies
import { useState } from 'react';

// Styles
import './styles.css';

// Components
import {
    PrimaryButton,
    Ratings,
    ImageContainer,
    SecondaryButton,
    IconButton
} from '../../components';

// Data
import MentorsData from '../../data/mentors';


export function getPosition (referenceIndex, currentIndex, diameter) {
    
    const IMAGE_SPACING = 45;
    const diff = referenceIndex - currentIndex;
    const radius = diameter / 2;

    const angleToBeAdded = IMAGE_SPACING * diff;

    const horizontal = Math.cos(angleToBeAdded * Math.PI / 180) * radius;
    const vertical = Math.sin(angleToBeAdded * Math.PI / 180) * radius * -1;

    return {
        horizontal,
        vertical
    }
}


const MentorsDetailsContainer = ({data}) => {

    const wholeRatings = Math.floor(data.ratings);
    const halfRatings = Math.trunc((data.ratings - wholeRatings) * 10);

    return (
        <div className="page-mentors-details-container">

            <h1>{wholeRatings}.{halfRatings}</h1>
            <Ratings rating={data.ratings}/>

            <h2>{data.name}</h2>
            <h3>{data.position}</h3>

            <p>{data.description}</p>

            <PrimaryButton
                label="Book a session"
            />

        </div>
    )
}

const MentorsImageContainer = ({data, setCurrentIndex, currentIndex}) => {

    return (
        <div className="page-mentors-image-container-wrapper">
            <div className="page-mentors-image-container">
                <div className='circle-container'>
                    {
                        MentorsData.map((mentor, index) => {

                            const position = getPosition(currentIndex, index, 30);

                            console.log(position);

                            return (
                                <div 
                                    className='circle'
                                    style={{
                                        marginTop: `-${position.vertical}em`,
                                        marginLeft: `-${position.horizontal}em`
                                    }}
                                >
                                    <ImageContainer
                                        src={mentor.image}
                                        alt={mentor.name}
                                        onclick={() => setCurrentIndex(index)}
                                        size="8em"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="page-mentors-image-container-main-image">
                <ImageContainer
                    src={data.image}
                    alt={data.name}
                />
                <div className='page-mentors-image-container-button-container'>
                    <IconButton
                        icon="fas fa-arrow-up"
                        onclick={() => {
                            if (currentIndex === 0) {
                                setCurrentIndex(MentorsData.length - 1);
                            } else {
                                setCurrentIndex(currentIndex - 1);
                            }
                        }}
                    />

                    <SecondaryButton
                        label={data.name}
                    />

                    <IconButton
                        icon="fas fa-arrow-down"
                        onclick={() => {
                            if (currentIndex === MentorsData.length - 1) {
                                setCurrentIndex(0);
                            } else {
                                setCurrentIndex(currentIndex + 1);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

const Mentors = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="page-mentors">
            <MentorsDetailsContainer data={MentorsData[currentIndex]}/>
            <MentorsImageContainer 
                data={MentorsData[currentIndex]} 
                setCurrentIndex={setCurrentIndex}
                currentIndex={currentIndex}
            />
        </div>
    )
}

export default Mentors;