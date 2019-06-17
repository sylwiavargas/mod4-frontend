import React from 'react';

const Dark = ({dark, changeSetting}) => {

  return !dark ?
    <button id="dark" onClick={changeSetting}> dark mode </button>
    : <button id="dark" onClick={changeSetting}> light mode </button>
}

const SizeUp = ({sizeUp, changeSetting}) => {

  return !sizeUp ?
    <button id="sizeUp" onClick={changeSetting}> sizeUp </button>
    : <button id="sizeUp" onClick={changeSetting}> Size Down </button>
}

const FontReadable = ({fontReadable, changeSetting}) => {

  return !fontReadable ?
    <button id="fontReadable" onClick={changeSetting}> Readable font </button>
    : <button id="fontReadable" onClick={changeSetting}> Fun font </button>
}

export {Dark, SizeUp, FontReadable};
