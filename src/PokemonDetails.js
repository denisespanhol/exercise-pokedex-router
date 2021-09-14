import React, { Component } from 'react';
import './pokedex.css';

class PokemonDetails extends Component {
  render() {
    const { name, type, averageWeight, image, summary, foundAt } = this.props.pokemon;
    return (
      <div className="pokedex">
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p><br />
            <p>
              <strong>Description:</strong> {summary}
            </p>
            <div>
              {foundAt.map((map) =>
                <div>
                  <img src={ map.map } alt={ map.location } />
                  <p>{ map.location }</p>
                </div>
              )}
            </div>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
