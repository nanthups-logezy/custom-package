import { openBlock as r, createElementBlock as c, createElementVNode as a, toDisplayString as s } from "vue";
const d = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, p = {
  name: "HelloWorld",
  props: {
    name: {
      type: String,
      default: "World"
    }
  }
};
function _(e, t, o, n, l, m) {
  return r(), c("div", null, [
    a("h1", null, "Hello, " + s(o.name) + "!", 1)
  ]);
}
const i = /* @__PURE__ */ d(p, [["render", _], ["__scopeId", "data-v-ec5b80ba"]]), u = {
  install(e) {
    e.component("HelloWorld", i);
  }
};
export {
  i as HelloWorld,
  u as default
};
