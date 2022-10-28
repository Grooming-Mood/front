import HAPPY from "../assets/image/splash/happy-icon.png";
import ANGRY from "../assets/image/splash/angry-icon.png";
import SAD from "../assets/image/splash/normal-icon.png";
import NORMAL from "../assets/image/splash/sad-icon.png";


export default function convertImage(feeling) {

    switch (feeling) {
        case 'HAPPY':
            return <img src={ HAPPY } alt="happy"/>;

        case 'ANGRY':
            return <img src={ ANGRY } alt="angry"/>;

        case 'NORMAL':
            return <img src={ NORMAL } alt="normal"/>;

        case 'SAD':
            return <img src={ SAD } alt="sad"/>;

        default:
            return;
    }
}

