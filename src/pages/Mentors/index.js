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

            <div className='clipped-container'>
                <div className="page-mentors-image-container">
                    <div className='circle-container-icon'>
                        {
                            data.map((item, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className='circle-container-icon-imgBx'
                                        style={{
                                            transform: `rotate(calc(180deg/${data.length} * ${index}))`,
                                            transformOrigin: '350px'
                                        }}
                                    >
                                        <ImageContainer
                                            src={item.image}
                                            alt={item.name}
                                            size="100px"
                                            style={{
                                                transform: `rotate(calc(-180deg/${data.length} * ${index}))`,
                                            }}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="page-mentors-image-container-main-image">
                <ImageContainer
                    src={data[currentIndex].image}
                    alt={data[currentIndex].name}
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
                        label={data[currentIndex].name}
                        style={{
                            margin: '50px'
                        }}
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
                data={MentorsData} 
                setCurrentIndex={setCurrentIndex}
                currentIndex={currentIndex}
            />
        </div>
    )
}

export default Mentors;