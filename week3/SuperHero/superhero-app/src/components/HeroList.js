import React from 'react';
import data from './data.json'
import SuperHero from "./SuperHero"

class HeroList extends React.Component {
    constructor() {
        super()
        this.state = {
            heros: data
        }
    }

    render () {
        
        const heroList = this.state.heros.map(item => <SuperHero 
            name={data.name}
            show={data.show}
            key={item.id} item={item} handleClick={() => { return (alert(item.catchPhrase))}}/>)

        return (
            <div>
            {heroList}
            </div>
        )
    }
}

export default HeroList