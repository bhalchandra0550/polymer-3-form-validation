import * as css from 'style.css';

const styleElement = document.createElement('dom-module');
styleElement.innerHTML = 
  `<template>
    <style>
     ${css}
    </style>
  </template>`;
styleElement.register('style-element');