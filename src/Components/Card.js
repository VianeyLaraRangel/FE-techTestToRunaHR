import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardImg, CardImgOverlay } from 'reactstrap';

// import { spellImg, curseImg, charmImg, enchantment } from '../Assets/'
import spellImg from '../Assets/spellImg.png';
import charmImg from '../Assets/charmImg.png';
import curserImg from '../Assets/curseImg.png';
import enchantmentImg from '../Assets/enchantmentImg.png';


// const spellImage = {
//     spell: "../Assets/spellImg.png",
//     curse: "",
//     charm: "",
//     enchantment: ""

// }

const CardToUniqueSpell = ({ spell, type, effect }) => {
    console.log(spell);
    return (
        <div>
            <Card>
                <CardImgOverlay>
                    <CardImg width="20%" src={spellImg} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{spell}</CardTitle>
                        <CardSubtitle>{type}</CardSubtitle>
                        <CardText>{effect}</CardText>
                        <Button>Seleccionar</Button>
                    </CardBody>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default CardToUniqueSpell;