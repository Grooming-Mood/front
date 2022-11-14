import HAPPY from "../assets/image/splash/happy-icon.png";
import ANGRY from "../assets/image/splash/angry-icon.png";
import NORMAL from "../assets/image/splash/normal-icon.png";
import SAD from "../assets/image/splash/sad-icon.png";
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
  width: 40%;
`;
function convertIcon(feeling, onClick) {

    switch (feeling) {
        case 'HAPPY':
            return  <button>
                <ICON src={ HAPPYICON } alt="happy-icon" onClick={ onClick }/>
            </button>;

        case 'ANGRY':
            return  <button>
                <ICON src={ ANGRYICON } alt="angry-icon" onClick={ onClick }/>
            </button>;

        case 'NORMAL':
            return  <button>
                <ICON src={ NORMALICON } alt="normal-icon" onClick={ onClick }/>
            </button>;

        case 'SAD':
            return  <button>
                <ICON src={ SADICON } alt="sad-icon" onClick={ onClick }/>
            </button>;

        default:
            return;
    }
}

function setHappyAmount(lists) {
    let amount = 0;
    for(let i = 0; i < lists.length; i++) {
        if(lists[i].feeling == 'HAPPY'){
            amount = lists[i].amount;
        }
    }
    return !amount ? 0 : amount;
}

function setNormalAmount(lists) {
    let amount = 0;
    for(let i = 0; i < lists.length; i++) {
        if(lists[i].feeling == 'NORMAL'){
            amount = lists[i].amount;
        }
    }
    return !amount ? 0 : amount;
}

function setSadAmount(lists) {
    let amount = 0;
    for(let i = 0; i < lists.length; i++) {
        if(lists[i].feeling == 'SAD'){
            amount = lists[i].amount;
        }
    }
    return !amount ? 0 : amount;
}

function setAngryAmount(lists) {
    let amount = 0;
    for(let i = 0; i < lists.length; i++) {
        if(lists[i].feeling == 'ANGRY'){
            amount = lists[i].amount;
        }
    }
    return !amount ? 0 : amount;
}

export {
    convertImage,
    convertIcon,
    setHappyAmount,
    setNormalAmount,
    setSadAmount,
    setAngryAmount,
};