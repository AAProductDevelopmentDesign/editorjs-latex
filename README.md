# EditorJS-LaTeX
[![](https://data.jsdelivr.com/v1/package/gh/mdgaziur/EditorJS-LaTeX/badge)](https://www.jsdelivr.com/package/gh/mdgaziur/EditorJS-LaTeX)


### LaTeX block support for EditorJS
### Created By: MD Gaziur Rahman Noor

![Screenshot of EditorJS-LaTeX](./screenshot.png)

## Setting Up
Add the following code inside the ```<head>``` tag.


```html
<script src="https://cdn.jsdelivr.net/gh/mdgaziur/EditorJS-LaTeX@1.0.1/editorjs-latex.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mdgaziur/EditorJS-LaTeX@1.0.1/editorjs-latex.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.css"></script>
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


## Conclusion
If there is any problem or bugs, create an issue in this repository. I'll try my best to help you.
