import React from 'react';
import slugify from 'slugify';
import USCurrencyFormat from './USCurrencyFormat'


export default function FeatureItem (props) {
    return (
        <div key={props.itemHash} className="feature__item">
              <input
                type="radio"
                id={props.itemHash}
                className="feature__option"
                name={slugify(props.feature)}
                onChange={e => props.onItemChange(props.feature, props.item)}
                checked={props.checked}
              />
              <label htmlFor={props.itemHash} className="feature__label">
                {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
              </label>
            </div>
    )

}
FeatureItem.defaultProps = {
    onItemChange: () => {},
    itemHash: '',
	item: {},
	feature: '',
	checked: false
}

