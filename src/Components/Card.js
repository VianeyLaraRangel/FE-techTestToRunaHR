import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardImg, CardImgOverlay } from 'reactstrap';

// import { spellImg, curseImg, charmImg, enchantment } from '../Assets/'
import spellImg from '../Assets/spellImg.png';
import charmImg from '../Assets/charmImg.png';
import curseImg from '../Assets/curseImg.png';
import enchantmentImg from '../Assets/enchantmentImg.png';

const CardToUniqueSpell = ({ spell, type, effect }) => {

    const spellImage = (spelltype) => {
        let collection = [
            {
                type: "Charm",
                image: charmImg,
            },
            {
                type: "Enchantment",
                image: enchantmentImg,
            },
            {
                type: "Curse",
                image: curseImg,
            },
            {
                type: "Spell",
                image: spellImg,
            }
        ];

        const result = collection.filter(obj => obj.type === spelltype);
        
        // console.log(result[0].image);

        if (result.length > 0 ) {
            return result[0].image;
        } else {
            return enchantmentImg ;
        }
    }

    return (
        <div>
            <Card>
                <CardImgOverlay>
                    <CardImg width="20%" src={spellImage(type)} alt="Card image cap" />
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