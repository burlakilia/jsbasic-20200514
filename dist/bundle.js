!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar View = exports.View = function () {\n    function View(el) {\n        _classCallCheck(this, View);\n\n        this.el = el;\n        this.state = false;\n    }\n\n    _createClass(View, [{\n        key: 'render',\n        value: function render() {\n            console.warn('напиши метод render');\n        }\n\n        /**\n         * Включает или выключает показ view\n         */\n\n    }, {\n        key: 'toggle',\n        value: function toggle(state) {\n            this.el.hidden = !state;\n        }\n    }]);\n\n    return View;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy92aWV3LmpzPzkyZDciXSwibmFtZXMiOlsiVmlldyIsImVsIiwic3RhdGUiLCJjb25zb2xlIiwid2FybiIsImhpZGRlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFhQSxJLFdBQUFBLEk7QUFFVCxrQkFBWUMsRUFBWixFQUFnQjtBQUFBOztBQUNaLGFBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0g7Ozs7aUNBRVE7QUFDTEMsb0JBQVFDLElBQVIsQ0FBYSxxQkFBYjtBQUNIOztBQUVEOzs7Ozs7K0JBR09GLEssRUFBTztBQUNWLGlCQUFLRCxFQUFMLENBQVFJLE1BQVIsR0FBaUIsQ0FBQ0gsS0FBbEI7QUFDSCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFZpZXcge1xuXG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ9C90LDQv9C40YjQuCDQvNC10YLQvtC0IHJlbmRlcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0LrQu9GO0YfQsNC10YIg0LjQu9C4INCy0YvQutC70Y7Rh9Cw0LXRgiDQv9C+0LrQsNC3IHZpZXdcbiAgICAgKi9cbiAgICB0b2dnbGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5lbC5oaWRkZW4gPSAhc3RhdGU7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _about = __webpack_require__(2);\n\nvar _projects = __webpack_require__(6);\n\nvar _skills = __webpack_require__(7);\n\nvar _router = __webpack_require__(8);\n\nvar router = new _router.Router();\n\nrouter.register('about', new _about.AboutView(document.querySelector('.js-about-view')), true);\nrouter.register('projects', new _projects.ProjectsView(document.querySelector('.js-projects-view')));\nrouter.register('skills', new _skills.SkillsView(document.querySelector('.js-skills-view')));\n\nrouter.start();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzExMTIiXSwibmFtZXMiOlsicm91dGVyIiwiUm91dGVyIiwicmVnaXN0ZXIiLCJBYm91dFZpZXciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJQcm9qZWN0c1ZpZXciLCJTa2lsbHNWaWV3Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxJQUFJQyxjQUFKLEVBQWY7O0FBRUFELE9BQU9FLFFBQVAsQ0FBZ0IsT0FBaEIsRUFBeUIsSUFBSUMsZ0JBQUosQ0FDckJDLFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBRHFCLENBQXpCLEVBRUcsSUFGSDtBQUdBTCxPQUFPRSxRQUFQLENBQWdCLFVBQWhCLEVBQTRCLElBQUlJLHNCQUFKLENBQ3hCRixTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUR3QixDQUE1QjtBQUdBTCxPQUFPRSxRQUFQLENBQWdCLFFBQWhCLEVBQTBCLElBQUlLLGtCQUFKLENBQ3RCSCxTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQURzQixDQUExQjs7QUFJQUwsT0FBT1EsS0FBUCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJvdXRWaWV3IH0gZnJvbSAnLi92aWV3L2Fib3V0LmpzJztcbmltcG9ydCB7IFByb2plY3RzVmlldyB9IGZyb20gJy4vdmlldy9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBTa2lsbHNWaWV3IH0gZnJvbSAnLi92aWV3L3NraWxscy5qcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci5qcyc7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxucm91dGVyLnJlZ2lzdGVyKCdhYm91dCcsIG5ldyBBYm91dFZpZXcoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWFib3V0LXZpZXcnKVxuKSwgdHJ1ZSk7XG5yb3V0ZXIucmVnaXN0ZXIoJ3Byb2plY3RzJywgbmV3IFByb2plY3RzVmlldyhcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJvamVjdHMtdmlldycpXG4pKTtcbnJvdXRlci5yZWdpc3Rlcignc2tpbGxzJywgbmV3IFNraWxsc1ZpZXcoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNraWxscy12aWV3JylcbikpO1xuXG5yb3V0ZXIuc3RhcnQoKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n")},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\nexports.AboutView = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _view = __webpack_require__(0);\n\nvar _about = __webpack_require__(3);\n\nvar _avatar = __webpack_require__(4);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AboutView = exports.AboutView = function (_View) {\n    _inherits(AboutView, _View);\n\n    function AboutView(el) {\n        _classCallCheck(this, AboutView);\n\n        var _this = _possibleConstructorReturn(this, (AboutView.__proto__ || Object.getPrototypeOf(AboutView)).call(this, el));\n\n        _this.model = new _about.AboutModel();\n        return _this;\n    }\n\n    _createClass(AboutView, [{\n        key: \'render\',\n        value: function render() {\n            var _this2 = this;\n\n            this.model.getAboutData().then(function (data) {\n                _this2.el.innerHTML = \'\\n                      <div class="profile">\\n                        <div class="profile__avatar"/>\\n                      </div> \\n                    \';\n\n                var avatar = new _avatar.AvatarComponent({\n                    el: _this2.el.querySelector(\'.profile__avatar\'),\n                    options: {\n                        avatarUrl: data.avatar\n                    }\n                });\n\n                avatar.render();\n            });\n        }\n    }]);\n\n    return AboutView;\n}(_view.View);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9hYm91dC5qcz8yN2E3Il0sIm5hbWVzIjpbIkFib3V0VmlldyIsImVsIiwibW9kZWwiLCJBYm91dE1vZGVsIiwiZ2V0QWJvdXREYXRhIiwidGhlbiIsImlubmVySFRNTCIsImF2YXRhciIsIkF2YXRhckNvbXBvbmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcHRpb25zIiwiYXZhdGFyVXJsIiwiZGF0YSIsInJlbmRlciIsIlZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVhQSxTLFdBQUFBLFM7OztBQUVULHVCQUFZQyxFQUFaLEVBQWdCO0FBQUE7O0FBQUEsMEhBQ05BLEVBRE07O0FBRVosY0FBS0MsS0FBTCxHQUFhLElBQUlDLGlCQUFKLEVBQWI7QUFGWTtBQUdmOzs7O2lDQUVRO0FBQUE7O0FBQ0wsaUJBQUtELEtBQUwsQ0FBV0UsWUFBWCxHQUNLQyxJQURMLENBQ1UsZ0JBQVE7QUFDVix1QkFBS0osRUFBTCxDQUFRSyxTQUFSOztBQU1BLG9CQUFNQyxTQUFTLElBQUlDLHVCQUFKLENBQW9CO0FBQy9CUCx3QkFBSyxPQUFLQSxFQUFMLENBQVFRLGFBQVIsQ0FBc0Isa0JBQXRCLENBRDBCO0FBRS9CQyw2QkFBUztBQUNMQyxtQ0FBV0MsS0FBS0w7QUFEWDtBQUZzQixpQkFBcEIsQ0FBZjs7QUFPQUEsdUJBQU9NLE1BQVA7QUFDSCxhQWhCTDtBQW1CSDs7OztFQTNCMEJDLFUiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcuanMnO1xuaW1wb3J0IHsgQWJvdXRNb2RlbCB9IGZyb20gJy4uL21vZGVscy9hYm91dC5qcyc7XG5pbXBvcnQgeyBBdmF0YXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnQvYXZhdGFyLmpzJztcblxuZXhwb3J0IGNsYXNzIEFib3V0VmlldyBleHRlbmRzIFZpZXcge1xuXG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgc3VwZXIoZWwpO1xuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IEFib3V0TW9kZWwoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMubW9kZWwuZ2V0QWJvdXREYXRhKClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsZV9fYXZhdGFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgYDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGF2YXRhciA9IG5ldyBBdmF0YXJDb21wb25lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbDogIHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2F2YXRhcicpLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IGRhdGEuYXZhdGFyLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhdmF0YXIucmVuZGVyKCk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n')},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar AboutModel = exports.AboutModel = function () {\n    function AboutModel() {\n        _classCallCheck(this, AboutModel);\n    }\n\n    _createClass(AboutModel, [{\n        key: \'getAboutData\',\n        value: function getAboutData() {\n            return fetch(\'./data/about.json\').then(function (resp) {\n                return resp.json();\n            });\n        }\n    }]);\n\n    return AboutModel;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Fib3V0LmpzP2JiNTgiXSwibmFtZXMiOlsiQWJvdXRNb2RlbCIsImZldGNoIiwidGhlbiIsInJlc3AiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQWFBLFUsV0FBQUEsVTtBQUVULDBCQUFjO0FBQUE7QUFDYjs7Ozt1Q0FFYztBQUNYLG1CQUFPQyxNQUFNLG1CQUFOLEVBQ0ZDLElBREUsQ0FDRztBQUFBLHVCQUFRQyxLQUFLQyxJQUFMLEVBQVI7QUFBQSxhQURILENBQVA7QUFFSCIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFib3V0TW9kZWwge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgZ2V0QWJvdXREYXRhKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goJy4vZGF0YS9hYm91dC5qc29uJylcbiAgICAgICAgICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n')},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\nexports.AvatarComponent = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _component = __webpack_require__(5);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AvatarComponent = exports.AvatarComponent = function (_Component) {\n    _inherits(AvatarComponent, _Component);\n\n    function AvatarComponent() {\n        _classCallCheck(this, AvatarComponent);\n\n        return _possibleConstructorReturn(this, (AvatarComponent.__proto__ || Object.getPrototypeOf(AvatarComponent)).apply(this, arguments));\n    }\n\n    _createClass(AvatarComponent, [{\n        key: \'render\',\n        value: function render() {\n            this.el.innerHTML = \'\\n      <img height="100px" src=\' + this.options.avatarUrl + \'/>\\n    \';\n        }\n    }]);\n\n    return AvatarComponent;\n}(_component.Component);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2F2YXRhci5qcz9mMzkxIl0sIm5hbWVzIjpbIkF2YXRhckNvbXBvbmVudCIsImVsIiwiaW5uZXJIVE1MIiwib3B0aW9ucyIsImF2YXRhclVybCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRWFBLGUsV0FBQUEsZTs7Ozs7Ozs7Ozs7aUNBRUE7QUFDTCxpQkFBS0MsRUFBTCxDQUFRQyxTQUFSLHdDQUN3QixLQUFLQyxPQUFMLENBQWFDLFNBRHJDO0FBR0g7Ozs7RUFOZ0NDLG9CIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBdmF0YXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGBcbiAgICAgIDxpbWcgaGVpZ2h0PVwiMTAwcHhcIiBzcmM9JHt0aGlzLm9wdGlvbnMuYXZhdGFyVXJsfS8+XG4gICAgYDtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n')},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Component = exports.Component = function () {\n    function Component(_ref) {\n        var el = _ref.el,\n            options = _ref.options;\n\n        _classCallCheck(this, Component);\n\n        this.el = el;\n        this.options = options;\n    }\n\n    _createClass(Component, [{\n        key: "toggleMod",\n        value: function toggleMod() {}\n    }, {\n        key: "getElement",\n        value: function getElement(name) {}\n    }]);\n\n    return Component;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2NvbXBvbmVudC5qcz83NWUzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImVsIiwib3B0aW9ucyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBYUEsUyxXQUFBQSxTO0FBRVQsNkJBQTZCO0FBQUEsWUFBZkMsRUFBZSxRQUFmQSxFQUFlO0FBQUEsWUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBOztBQUN6QixhQUFLRCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxhQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDSDs7OztvQ0FFVSxDQUNWOzs7bUNBRVVDLEksRUFBTSxDQUNoQiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGVsLCBvcHRpb25zIH0pIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIHRvZ2dsZU1vZCgpe1xuICAgIH1cblxuICAgIGdldEVsZW1lbnQobmFtZSkge1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n')},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\nexports.ProjectsView = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _view = __webpack_require__(0);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProjectsView = exports.ProjectsView = function (_View) {\n    _inherits(ProjectsView, _View);\n\n    function ProjectsView() {\n        _classCallCheck(this, ProjectsView);\n\n        return _possibleConstructorReturn(this, (ProjectsView.__proto__ || Object.getPrototypeOf(ProjectsView)).apply(this, arguments));\n    }\n\n    _createClass(ProjectsView, [{\n        key: \'render\',\n        value: function render() {\n            this.el.innerHTML = \'projects\';\n        }\n    }]);\n\n    return ProjectsView;\n}(_view.View);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9wcm9qZWN0cy5qcz9jNWYwIl0sIm5hbWVzIjpbIlByb2plY3RzVmlldyIsImVsIiwiaW5uZXJIVE1MIiwiVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRWFBLFksV0FBQUEsWTs7Ozs7Ozs7Ozs7aUNBRUE7QUFDTCxpQkFBS0MsRUFBTCxDQUFRQyxTQUFSLEdBQW9CLFVBQXBCO0FBQ0g7Ozs7RUFKNkJDLFUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcuanMnO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdHNWaWV3IGV4dGVuZHMgVmlldyB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJ3Byb2plY3RzJztcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n')},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\nexports.SkillsView = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _view = __webpack_require__(0);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SkillsView = exports.SkillsView = function (_View) {\n    _inherits(SkillsView, _View);\n\n    function SkillsView() {\n        _classCallCheck(this, SkillsView);\n\n        return _possibleConstructorReturn(this, (SkillsView.__proto__ || Object.getPrototypeOf(SkillsView)).apply(this, arguments));\n    }\n\n    _createClass(SkillsView, [{\n        key: \'render\',\n        value: function render() {\n            this.el.innerHTML = \'skills\';\n        }\n    }]);\n\n    return SkillsView;\n}(_view.View);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9za2lsbHMuanM/NWQyYiJdLCJuYW1lcyI6WyJTa2lsbHNWaWV3IiwiZWwiLCJpbm5lckhUTUwiLCJWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFYUEsVSxXQUFBQSxVOzs7Ozs7Ozs7OztpQ0FFQTtBQUNMLGlCQUFLQyxFQUFMLENBQVFDLFNBQVIsR0FBb0IsUUFBcEI7QUFDSDs7OztFQUoyQkMsVSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vdmlldy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBTa2lsbHNWaWV3IGV4dGVuZHMgVmlldyB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJ3NraWxscyc7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n')},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Router = exports.Router = function () {\n    function Router() {\n        _classCallCheck(this, Router);\n\n        this.routes = {};\n        this.currentRoute = null;\n    }\n\n    _createClass(Router, [{\n        key: 'register',\n        value: function register(name, view) {\n            var isDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n            console.log('register new route', name);\n            this.routes[name] = view;\n\n            if (isDefault) {\n                this.defaultView = view;\n            }\n\n            view.render();\n        }\n    }, {\n        key: 'onRoute',\n        value: function onRoute() {\n            var route = location.hash.replace('#', '');\n\n            var view = this.routes[route];\n\n            if (!view) {\n                view = this.defaultView;\n            }\n\n            if (this.currentRoute) {\n                this.currentRoute.toggle(false);\n            }\n\n            view.toggle(true);\n            this.currentRoute = view;\n        }\n    }, {\n        key: 'start',\n        value: function start() {\n            var _this = this;\n\n            console.log('start router');\n\n            window.addEventListener('hashchange', function () {\n                return _this.onRoute();\n            });\n\n            this.onRoute();\n        }\n    }]);\n\n    return Router;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyLmpzPzQxY2IiXSwibmFtZXMiOlsiUm91dGVyIiwicm91dGVzIiwiY3VycmVudFJvdXRlIiwibmFtZSIsInZpZXciLCJpc0RlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFZpZXciLCJyZW5kZXIiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaGFzaCIsInJlcGxhY2UiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25Sb3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFhQSxNLFdBQUFBLE07QUFFVCxzQkFBYztBQUFBOztBQUNWLGFBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsYUFBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNIOzs7O2lDQUVRQyxJLEVBQU1DLEksRUFBeUI7QUFBQSxnQkFBbkJDLFNBQW1CLHVFQUFQLEtBQU87O0FBQ3BDQyxvQkFBUUMsR0FBUixDQUFZLG9CQUFaLEVBQWtDSixJQUFsQztBQUNBLGlCQUFLRixNQUFMLENBQVlFLElBQVosSUFBb0JDLElBQXBCOztBQUVBLGdCQUFJQyxTQUFKLEVBQWU7QUFDWCxxQkFBS0csV0FBTCxHQUFtQkosSUFBbkI7QUFDSDs7QUFFREEsaUJBQUtLLE1BQUw7QUFDSDs7O2tDQUVTO0FBQ04sZ0JBQU1DLFFBQVFDLFNBQVNDLElBQVQsQ0FBY0MsT0FBZCxDQUFzQixHQUF0QixFQUEyQixFQUEzQixDQUFkOztBQUVBLGdCQUFJVCxPQUFPLEtBQUtILE1BQUwsQ0FBWVMsS0FBWixDQUFYOztBQUVBLGdCQUFJLENBQUNOLElBQUwsRUFBVztBQUNQQSx1QkFBTyxLQUFLSSxXQUFaO0FBQ0g7O0FBRUQsZ0JBQUksS0FBS04sWUFBVCxFQUF1QjtBQUNuQixxQkFBS0EsWUFBTCxDQUFrQlksTUFBbEIsQ0FBeUIsS0FBekI7QUFDSDs7QUFFRFYsaUJBQUtVLE1BQUwsQ0FBWSxJQUFaO0FBQ0EsaUJBQUtaLFlBQUwsR0FBb0JFLElBQXBCO0FBQ0g7OztnQ0FFTztBQUFBOztBQUNKRSxvQkFBUUMsR0FBUixDQUFZLGNBQVo7O0FBRUFRLG1CQUFPQyxnQkFBUCxDQUF3QixZQUF4QixFQUFzQztBQUFBLHVCQUFNLE1BQUtDLE9BQUwsRUFBTjtBQUFBLGFBQXRDOztBQUVBLGlCQUFLQSxPQUFMO0FBQ0giLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm91dGVzID0ge307XG4gICAgICAgIHRoaXMuY3VycmVudFJvdXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZWdpc3RlcihuYW1lLCB2aWV3LCBpc0RlZmF1bHQgPSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVnaXN0ZXIgbmV3IHJvdXRlJywgbmFtZSk7XG4gICAgICAgIHRoaXMucm91dGVzW25hbWVdID0gdmlldztcblxuICAgICAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRWaWV3ID0gdmlldztcbiAgICAgICAgfVxuXG4gICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgb25Sb3V0ZSgpIHtcbiAgICAgICAgY29uc3Qgcm91dGUgPSBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnJvdXRlc1tyb3V0ZV07XG5cbiAgICAgICAgaWYgKCF2aWV3KSB7XG4gICAgICAgICAgICB2aWV3ID0gdGhpcy5kZWZhdWx0VmlldztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Um91dGUudG9nZ2xlKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpZXcudG9nZ2xlKHRydWUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRSb3V0ZSA9IHZpZXc7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCByb3V0ZXInKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHRoaXMub25Sb3V0ZSgpKTtcblxuICAgICAgICB0aGlzLm9uUm91dGUoKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n")}]);