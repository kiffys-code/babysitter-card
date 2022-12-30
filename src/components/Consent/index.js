import styled from 'styled-components';

const LEVELS = {
    green: {
        value: 'Green',
        explanation: 'I am okay with this! (but can always opt out)',
        image: require('./heart.png'),
        color: ''
    },
    yellow: {
        value: 'Yellow',
        explanation: 'Please ask first!',
        image: require('./question.png'),
        color: ''
    },
    red: {
        value: 'Red',
        explanation: 'This is NOT okay!',
        image: require('./forbidden.png'),
        color: ''
    }
};

const Image = styled.img`
    display: inline-block;
`

const ConsentIcon = ({level, className, onClick}) => {
    return <Image 
        src={level.image}
        alt={level.value}
        className={className}
        onClick={onClick}
    />
}

export {LEVELS, ConsentIcon};