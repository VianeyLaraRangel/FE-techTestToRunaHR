import React from 'react';
import Card from './Card/Card'; 

const SpellsList = (props) => {
    return (
        <section>
            {props && props.spells.map(spell =>
                <Card 
                key={spell._id}
                spell={spell.spell} 
                type={spell.type}
                effect={spell.effect}
                />)
            }
        </section>
    );
};

export default SpellsList;