import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import Vector from './Vector';

export default class Line extends Vector {
  static meta = {
    initial: {
      fill: "#e3e3e3",
      path: [],
      stroke: "gray",
      strokeWidth: 1,
      moveX:0,
      moveY:0,
      
      
    },
    
    icon: <Icon icon={'polygon'} size={30} />,
    
  };

  

  render() {
    let {object} = this.props;
    let fill = "transparent";
    return (
      <path style={this.getStyle(object)}
         {...this.getObjectAttributes()}
         
         d={`M ${object.x} ${object.y} Q ${object.x} ${object.y}, ${object.x+100} ${object.y}`}
        
         fill={fill} />
    );
  }
}
