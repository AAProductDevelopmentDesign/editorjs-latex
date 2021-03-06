"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
    EditorJS LaTeX
    Created By: MD Gaziur Rahman Noor
    Adds LaTex block support to EditorJS
*/
var EJLaTeX = /*#__PURE__*/function () {
  function EJLaTeX(_ref) {
    var data = _ref.data;

    _classCallCheck(this, EJLaTeX);

    //Get the saved data if exists
    this.data = data.math;
  }

  _createClass(EJLaTeX, [{
    key: "render",
    value: function render() {
      //Create all the DOM nodes
      var wrapper = document.createElement('div');
      var preview = document.createElement('p');
      var label = document.createElement('p');
      var input = document.createElement('input');

      if ((typeof katex === "undefined" ? "undefined" : _typeof(katex)) === undefined) {
        throw "KaTeX is required for this module. Otherwise, it will not function properly";
      }

      label.classList.add('math-label');
      wrapper.classList.add('math-input-wrapper');
      preview.classList.add('math-preview');
      input.classList.add('math-input');
      label.innerText = 'Equation'; //Load the data if exists

      input.value = this.data ? this.data : ''; //Set the placeholder text for LaTeX expression input

      input.setAttribute("placeholder", "Enter LaTeX here"); //Will render LaTeX if there is any in saved data

      katex.render(input.value, preview, {
        throwOnError: false
      });
      input.addEventListener('keyup', function (e) {
        //Prevent default actions
        e.preventDefault(); //Render LaTeX expression

        katex.render(input.value, preview, {
          throwOnError: false
        });
      }); // wrapper.appendChild(preview);
      // wrapper.appendChild(label);
      // wrapper.appendChild(input);

      wrapper.appendChild(input);
      wrapper.appendChild(label);
      wrapper.appendChild(preview);
      return wrapper;
    }
  }, {
    key: "save",
    value: function save(blockContent) {
      return {
        math: blockContent.childNodes[0].value
      };
    }
  }], [{
    key: "toolbox",
    get: function get() {
      return {
        title: "Math",
        icon: "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\"><path d=\"M187,252.2l-11.7,79.4l-0.1,0.6c-0.7,6.8-6,14.1-12.9,14.1c-7.1,0-12.8-5.8-12.8-12.8h-25.7c0,21.2,17.3,38.5,38.5,38.5c21.6,0,36.5-18.7,38.4-36.9l10.1-68.4C202.9,261.9,195,257,187,252.2z\"/><path d=\"M230,135.4c1.1-7.2,6-14.8,13-14.8c7.1,0,12.8,5.8,12.8,12.8h25.7c0-21.2-17.3-38.5-38.5-38.5c-21.6,0-35.6,18.4-38.4,36.6l-8.2,55.8h-39.4v25.7h35.6l-9.5,64.5c8.6,3.3,16.1,8.9,23.9,13.9l11.6-78.4h38.6v-25.7h-34.8L230,135.4z\"/><polygon points=\"388.2,208.5 347.7,208.5 325.8,237.6 311.2,208.5 274.4,208.5 303.7,267 257,329.1 297.5,329.1 319.9,299.2 334.9,329.1 371.7,329.1 342,269.8 \"/></svg>"
      };
    }
  }]);

  return EJLaTeX;
}();

module.exports = EJLaTeX;