import React from 'react';
import FeatureList from './FeatureList';


export default function CustomizeForm (props) {
    
    return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureList 
                featureList={props.featureList}
                selected={props.selected}
                onItemChange={props.onItemChange}
            />
            </form>
    )
}

CustomizeForm.defaultProps = {
    featureList: {},
    selected: {},
    onItemChange: () => {}
}
