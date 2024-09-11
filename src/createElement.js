// *** Create element by JSX, React, and Vanila JS without React: ***
import React from 'react';

export const elementJSX = <h1 title='foo'>Hello JSX</h1>;

export const elementReact = React.createElement(
  "h1",
  { title: "foo" },
  "Hello VJS"
);

export const el = {
  type: "h1",
  props: {
    title: "foo",
    children:"Hello React!"
  }
}

const elementJS = document.createElement(el.type);      
elementJS["title"] = el.props.title;

const text = document.createTextNode("");
text["nodeValue"] = el.props.children;

elementJS.appendChild(text);

export default elementJS;