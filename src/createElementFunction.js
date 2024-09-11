// *** Create element function by React, and Vanila JS without React: ***
import React from 'react';


export const elementFuncJSX = (
    <div id="foo">
        <a>element jsx</a>
        <hr />
    </div>
)

// ********************************************************************

export const elementFuncReact = 
    React.createElement(
        "div",
        { id: "foo"},
        React.createElement("a", 'null', "element react"),
        React.createElement("hr")
    )

// ********************************************************************

function createElementFuncJS(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children
                .filter(child => child != null && child !== false) 
                .map(child =>
                    typeof child === "object" ? child : createTextElement(child)
                )
        }
    };
}


function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,  
            children: []
        }
    };
}

export function renderJS(element, container) {
    const dom =
      element.type == "TEXT_ELEMENT"
        ? document.createTextNode(element.props.nodeValue || "")
        : document.createElement(element.type);

    const isChildren = key => key !== "children";

    if (element.props) {
        Object.keys(element.props)
            .filter(isChildren)
            .forEach(name => {
                dom[name] = element.props[name];
            });

        const childrenArray = Array.isArray(element.props.children)
            ? element.props.children
            : [element.props.children];

        childrenArray.forEach(child => {
            if (child) {
                renderJS(child, dom)
            }
        });
    }

    container.appendChild(dom)
}

export const Didact = {                               
    createElementFuncJS,
    renderJS,
}

export const elementFuncJS = Didact.createElementFuncJS(
    "div", 
    { style: "background: salmon" },
    Didact.createElementFuncJS(
        "h1", 
        {}, 
        "Hello element function"
    ),
    Didact.createElementFuncJS(
        "h2", 
        { style: "text-decoration: underline; text-align: center" }, 
        "from Didact"
    ),
    "I am just a text :)"
);
