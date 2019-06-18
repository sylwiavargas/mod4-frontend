// here will be accessibility functions
import React, { Component } from 'react';
import {Dark, SizeUp, FontReadable} from '../components/AccButtons.js'


class AccessibilityContainer extends Component {

  render() {
    const {dark, sizeUp, fontReadable, changeSetting} = this.props

    return (
      <div>
        <Dark
          dark={dark}
          changeSetting={changeSetting}
        />
        <SizeUp
          sizeUp={sizeUp}
          changeSetting={changeSetting}
        />
        <FontReadable
          fontReadable={fontReadable}
          changeSetting={changeSetting}
        />
      </div>

    )
  }

}

export default AccessibilityContainer;
