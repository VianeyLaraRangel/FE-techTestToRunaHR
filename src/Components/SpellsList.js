import React from 'react';
import Card from './Card'; 

const SpellsList = (props) => {
    console.log(props);
    return (
        <div>
            {props && props.spells.map(spell =>
                <Card 
                key={spell._id}
                spell={spell.spell} 
                type={spell.type}
                effect={spell.effect}
                />)
            }
        </div>
    );
};

export default SpellsList;