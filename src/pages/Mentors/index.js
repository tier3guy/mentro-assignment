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
    return (
        <div className="page-mentors-details-container">
            <h1>{data.ratings}</h1>
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

const MentorsImageContainer = ({data}) => {
    return (
        <div className="page-mentors-image-container-wrapper">
            <div className="page-mentors-image-container">
                {/* <div class='circle-container'>
                    <a href='#' className='center'>
                        <ImageContainer
                            src={data.image}
                            size='100px'
                        />
                    </a>
                    <a href='#' className='deg0'>
                        <ImageContainer
                            src={data.image}
                            size='100px'
                        />
                    </a>
                    <a href='#' className='deg45'>
                        <ImageContainer
                            src={data.image}
                            size='100px'
                        />
                    </a>
                    <a href='#' className='deg135'>
                        <ImageContainer
                            src={data.image}
                            size='100px'
                        />
                    </a>
                    <a href='#' className='deg180'>
                        <ImageContainer
                            src={data.image}
                            size='100px'
                        />
                    </a>
                    <a href='#' className='deg225'>
                        <ImageContainer
                            src={data.image}
                            size='100px'
                        />
                    </a>
                    <a href='#' className='deg315'>
                        <ImageContainer
                            src={data.image}
                            size='100px'
                        />
                    </a>
                </div> */}
            </div>
            <div className="page-mentors-image-container-main-image">
                <ImageContainer
                    src={data.image}
                    alt={data.name}
                />
                <div className='page-mentors-image-container-button-container'>
                    <IconButton
                        icon="fas fa-arrow-up"
                        onclick={() => {}}
                    />

                    <SecondaryButton
                        label={data.name}
                    />

                    <IconButton
                        icon="fas fa-arrow-down"
                        onclick={() => {}}
                    />
                </div>
            </div>

        </div>
    );
}

const Mentors = () => {
    return (
        <div className="page-mentors">
            <MentorsDetailsContainer data={MentorsData[0]}/>
            <MentorsImageContainer data={MentorsData[0]}/>
        </div>
    )
}

export default Mentors;