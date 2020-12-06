import React from 'react';
import FeatureItem from './FeatureItem'
import slugify from 'slugify';

export default function FeatureList (props) {
    return Object.keys(props.featureList).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.featureList[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
              <FeatureItem 
                itemHash={itemHash}
                key={itemHash}
                feature={feature}
                item={item}
                checked={item.name === props.selected[feature].name}
                onItemChange={props.onItemChange}
                htmlFor={itemHash}
                selected={props.selected}
                featureList={props.featureList}
              />
          );
        });
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });
      
}

FeatureList.defaultProps = {
    featureList: {},
    selected: {},
    onItemChange: () => {}
}

