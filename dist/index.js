var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Zwilling: () => Zwilling
});
module.exports = __toCommonJS(src_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function Zwilling({
  classNameJoiner = (classNames) => classNames.join(" ")
} = {}) {
  const buildClassString = ({ args, props }) => {
    const [firstArg, ...otherArgs] = args;
    if (!firstArg)
      return "";
    if (typeof firstArg === "function") {
      return classNameJoiner(firstArg(props));
    }
    if (!otherArgs.length)
      return classNameJoiner(firstArg);
    const templateStringArray = firstArg;
    const templateExpressions = otherArgs;
    let classString = "";
    for (let index = 0; index < templateStringArray.length; index++) {
      const string = templateStringArray[index];
      classString += string;
      const expression = templateExpressions[index];
      if (expression) {
        const expressionResult = typeof expression === "function" ? expression(props) : expression;
        classString += classNameJoiner(expressionResult);
      }
    }
    return classString;
  };
  const buildTemplateFunc = ({ BaseComp }) => {
    const templateFunc = (...args) => {
      const Component = ({ className, children, ...props }) => {
        const classString = buildClassString({
          args,
          props
        });
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseComp, { className: classNameJoiner([classString, className]), children });
      };
      return Component;
    };
    return templateFunc;
  };
  const zw = new Proxy(() => ``, {
    // zw.div`text-black`
    get(_target, prop, _receiver) {
      if (typeof prop === "symbol")
        throw new Error("Symbol is not supported");
      const BaseComp = prop;
      return buildTemplateFunc({
        BaseComp
      });
    },
    apply(_target, _thisArg, args) {
      const firstArg = args[0];
      const isArray = Array.isArray(firstArg);
      if (isArray) {
        const classString = buildClassString({
          args
        });
        return classString;
      } else {
        const BaseComp = firstArg;
        return buildTemplateFunc({
          BaseComp
        });
      }
    }
  });
  return zw;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Zwilling
});
