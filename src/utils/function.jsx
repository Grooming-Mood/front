import HAPPY from "../assets/image/splash/happy-icon.png";
import ANGRY from "../assets/image/splash/angry-icon.png";
import SAD from "../assets/image/splash/normal-icon.png";
import NORMAL from "../assets/image/splash/sad-icon.png";
import styled from 'styled-components';

import HAPPYICON from "../assets/image/icon/yellow-icon.jpeg";
import ANGRYICON from "../assets/image/icon/black-icon.jpeg";
import SADICON from "../assets/image/icon/blue-icon.jpeg";
import NORMALICON from "../assets/image/icon/purple-icon.jpeg";


const IMG = styled.img`
  width: 25%;
`;

function convertImage(feeling) {

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

const ICON = styled.img`
  width: 10%;
`;
function convertIcon(feeling) {

    switch (feeling) {
        case 'HAPPY':
            return <ICON src={ HAPPYICON } alt="happy-icon"/>;

        case 'ANGRY':
            return <ICON src={ ANGRYICON } alt="angry-icon"/>;

        case 'NORMAL':
            return <ICON src={ NORMALICON } alt="normal-icon"/>;

        case 'SAD':
            return <ICON src={ SADICON } alt="sad-icon"/>;

        default:
            return;
    }
}

export { convertImage, convertIcon };