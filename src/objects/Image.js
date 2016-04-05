import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import Vector from './Vector';

export default class Image extends Vector {
  static meta = {
    icon: <Icon icon={'image'} size={30} />,
    initial: {
      width: 100,
      height: 100
    }
  };

  // imageSrc(){
  //   return {__html: "xlink:href='https://placeholdit.imgix.net/~text?txtsize=10&txt=100x100&w=100&h=100'"}
  // }

  render() {
    let {object, index} = this.props;
    return (
      <image style={this.getStyle()}
         xlinkHref={'https://placeholdit.imgix.net/~text?txtsize=10&txt=100x100&w=100&h=100'}
         {...this.getObjectAttributes()}
         width={object.width}
         height={object.height} />
    );
  }
}