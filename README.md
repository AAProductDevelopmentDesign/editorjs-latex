# editorjs-latex

Example: https://mdgaziur.github.io/EditorJS-LaTeX/example

This is a forked repository. Thanks to @mdgaziur for the original work.

---

## LaTeX block support for EditorJS
Created By: MD Gaziur Rahman Noor

---

## Setting Up
Add the following code inside the ```<head>``` tag.


```html
<script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@2.19.0/dist/editor.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mdgaziur/EditorJS-LaTeX@latest/dist/editorjs-latex.bundle-min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mdgaziur/EditorJS-LaTeX@latest/dist/editorjs-latex.bundle.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.css"></link>
```
To use with nodejs simply run ```npm i editorjs-latex```.


To add this library to EditorJS, simply add the follwing code:

```javascript
tools: {
        Math: {
        class: EJLaTeX,
        shortcut: 'CMD+SHIFT+M'
    }, ...
}
```


## Getting data
The output data of this plugin will look like bellow:

```json
{
    "type" : "Math",
    "data" : {
        "math" : "\\frac{a \\pm b}{(a+b)^2}"
    }
}
```

The "math" item contains the expression. You can use KaTeX to render that in your document.