import styled from 'styled-components';

const Levels = {
    green: {
        value: 'Green',
        explanation: 'I am okay with this! (but can always opt out)',
        image: require('./heart.png')
    },
    yellow: {
        value: 'Yellow',
        explanation: 'Please ask first!',
        image: require('./question.png')
    },
    red: {
        value: 'Red',
        explanation: 'This is NOT okay!',
        image: require('./forbidden.png')
    }
};

const Image = styled.img`
    display: inline-block;
`

const Icon = ({level, className, onClick}) => {
    return <Image 
        src={level.image}
        alt={level.value}
        className={className}
        onClick={onClick}
    />
}

export {Levels, Icon};