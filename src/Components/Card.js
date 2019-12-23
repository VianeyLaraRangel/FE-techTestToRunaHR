import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const CardToUniqueSpell = ({ spell, type, effect }) => {
    console.log(spell);
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{spell}</CardTitle>
                    <CardSubtitle>{type}</CardSubtitle>
                    <CardText>{effect}</CardText>
                    <Button>Seleccionar</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardToUniqueSpell;