import HAPPY from "../assets/image/splash/happy-icon.png";
import ANGRY from "../assets/image/splash/angry-icon.png";
import SAD from "../assets/image/splash/normal-icon.png";
import NORMAL from "../assets/image/splash/sad-icon.png";
import styled from 'styled-components';

const IMG = styled.img`
  width: 25%;
`;

export default function convertImage(feeling) {

    switch (feeling) {
        case 'HAPPY':
            return <IMG src={ HAPPY } alt="happy"/>;

        case 'ANGRY':
            return <IMG src={ ANGRY } alt="angry"/>;

        case 'NORMAL':
            return <IMG src={ NORMAL } alt="normal"/>;

        case 'SAD':
            return <IMG src={ SAD } alt="sad"/>;

        default:
            return;
    }
}

