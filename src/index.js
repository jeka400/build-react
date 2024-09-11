import ReactDOM from 'react-dom';
import React from 'react';
import { elementJSX, elementReact } from './createElement';
import elementJS from "./createElement";
import { elementFuncJSX, elementFuncReact, Didact, elementFuncJS } from './createElementFunction';
import { DidactFibers, elementFibers, renderFibers } from './fibers';

// *** In index.html I've created new containers for easier access ***

const containerJSX = document.getElementById("conJsx");
const containerReact = document.getElementById("conReact");
const containerJS = document.getElementById("conJs");

const containerFuncJSX = document.getElementById("conFuncJsx");
const containerFuncReact = document.getElementById("conFuncReact");
const containerFuncJS = document.getElementById("conFuncJs");

const containerFibers = document.getElementById("conFibers")

// *** Render elements in DOM: ***

ReactDOM.render(elementJSX, containerJSX);                // JSX
ReactDOM.render(elementReact, containerReact);            // React

containerJS.appendChild(elementJS);                       // Vanila JS


ReactDOM.render(elementFuncJSX, containerFuncJSX);        // JSX
ReactDOM.render(elementFuncReact, containerFuncReact);    // React

Didact.renderJS(elementFuncJS, containerFuncJS);            // Vanila JS

DidactFibers.renderFibers(elementFibers, containerFibers);
