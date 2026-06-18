function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  useCallback = _React.useCallback,
  useMemo = _React.useMemo;

/* ═══ CONSTANTS ═══ */
var DISCIPLINES = ["Silambam", "Karate", "Nunchaku", "Self Defence"];
var DISC_ICON = {
  Silambam: "🥢",
  Karate: "🥋",
  Nunchaku: "⛓️",
  "Self Defence": "🛡️"
};
var BELT = {
  Silambam: ["Beginner", "Yellow", "Orange", "Green", "Blue", "Brown", "Black"],
  Karate: ["White Belt", "Yellow Belt", "Orange Belt", "Green Belt", "Blue Belt", "Brown Belt", "Black Belt"],
  Nunchaku: ["Beginner", "Intermediate", "Advanced", "Expert", "Master"],
  "Self Defence": ["Level 1", "Level 2", "Level 3", "Instructor"]
};
var DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var BADGES = ["🥇", "🥈", "🥉", "🏆", "⭐", "🔥", "🛡️", "⚡", "🎖️", "👊"];
var ADMIN_PIN = "vmlegend";
var CLOUD_NAME = "dm5xlw4j3";
var UPLOAD_PRESET = "x7wehhi5";
var C = {
  bg: "#0c0c0c",
  card: "#161616",
  card2: "#202020",
  red: "#cc2222",
  redD: "#8f1515",
  redG: "#cc222228",
  white: "#f2f2f2",
  muted: "#666",
  border: "#2c2c2c",
  green: "#1f8c4a",
  blue: "#1a5fb4",
  gold: "#b8860b"
};
var uid = function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
};
var todayStr = function todayStr() {
  return new Date().toISOString().slice(0, 10);
};
var fmtDate = function fmtDate(d) {
  try {
    var x = new Date(d);
    return "".concat(x.getDate(), " ").concat(MONTHS[x.getMonth()], " ").concat(x.getFullYear());
  } catch (_unused) {
    return d || "";
  }
};

/* ═══ FIRESTORE HELPERS ═══ */
var fsAdd = function fsAdd(col, data) {
  return db.collection(col).add(_objectSpread(_objectSpread({}, data), {}, {
    createdAt: Date.now()
  }));
};
var fsUpdate = function fsUpdate(col, id, data) {
  return db.collection(col).doc(id).update(data);
};
var fsDelete = function fsDelete(col, id) {
  return db.collection(col).doc(id).delete();
};
function useCol(col) {
  var orderField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "createdAt";
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  useEffect(function () {
    var q = orderField ? db.collection(col).orderBy(orderField, "desc") : db.collection(col);
    var unsub = q.onSnapshot(function (snap) {
      setData(snap.docs.map(function (d) {
        return _objectSpread({
          id: d.id
        }, d.data());
      }));
      setLoading(false);
    }, function () {
      return setLoading(false);
    });
    return unsub;
  }, [col]);
  return [data, loading];
}

/* ═══ AUTO-HIDE NAV HOOK ═══ */
function useAutoHideNav() {
  var _useState5 = useState(true),
    _useState6 = _slicedToArray(_useState5, 2),
    show = _useState6[0],
    setShow = _useState6[1];
  var last = useRef(0);
  var ref = useRef(null);
  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var onScroll = function onScroll() {
      var cur = el.scrollTop;
      if (cur > last.current && cur > 60) setShow(false);else setShow(true);
      last.current = cur;
    };
    el.addEventListener('scroll', onScroll, {
      passive: true
    });
    return function () {
      return el.removeEventListener('scroll', onScroll);
    };
  }, []);
  return [show, ref];
}

/* ═══ UI ATOMS ═══ */
function VMLogo(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 52 : _ref$size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 260 260",
    fill: "none",
    style: {
      filter: "drop-shadow(0 0 6px #cc222288)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "130,8 248,55 248,175 130,252 12,175 12,55",
    fill: "#111",
    stroke: "#cc2222",
    strokeWidth: "7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "28,68 82,178 130,100 178,178 232,68",
    stroke: "#111",
    strokeWidth: "22",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "28,68 82,178 130,100 178,178 232,68",
    stroke: "#cc2222",
    strokeWidth: "13",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "28,68 82,178 130,100 178,178 232,68",
    stroke: "#f2f2f2",
    strokeWidth: "4.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "82,26 130,72 178,26",
    stroke: "#111",
    strokeWidth: "18",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "82,26 130,72 178,26",
    stroke: "#cc2222",
    strokeWidth: "11",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "82,26 130,72 178,26",
    stroke: "#f2f2f2",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }));
}
function Av(_ref2) {
  var _ref2$name = _ref2.name,
    name = _ref2$name === void 0 ? "?" : _ref2$name,
    photo = _ref2.photo,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 44 : _ref2$size;
  var pal = ["#cc2222", "#b01c1c", "#8f1515", "#6e0e0e"];
  var col = pal[((name || "?").charCodeAt(0) || 0) % pal.length];
  var ini = (name || "?").split(" ").map(function (w) {
    return w[0];
  }).join("").toUpperCase().slice(0, 2);
  if (photo) return /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid ".concat(col),
      flexShrink: 0
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: "radial-gradient(circle at 33% 33%,".concat(col, "99,").concat(col, "33)"),
      border: "2px solid ".concat(col),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size * .32,
      fontWeight: 900,
      color: "#fff",
      flexShrink: 0
    }
  }, ini);
}
function Pill(_ref3) {
  var label = _ref3.label,
    _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? C.red : _ref3$color,
    _ref3$small = _ref3.small,
    small = _ref3$small === void 0 ? false : _ref3$small;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: color + "22",
      color: color,
      border: "1px solid ".concat(color, "44"),
      padding: small ? "2px 8px" : "3px 11px",
      borderRadius: 20,
      fontSize: small ? 10 : 11,
      fontWeight: 700,
      whiteSpace: "nowrap",
      display: "inline-block"
    }
  }, label);
}
function Card(_ref4) {
  var children = _ref4.children,
    _ref4$style = _ref4.style,
    style = _ref4$style === void 0 ? {} : _ref4$style,
    onClick = _ref4.onClick;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: _objectSpread({
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      overflow: "hidden"
    }, style)
  }, children);
}
function SecHead(_ref5) {
  var title = _ref5.title;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 900,
      letterSpacing: .8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 3,
      background: "linear-gradient(90deg,".concat(C.red, ",transparent)"),
      borderRadius: 2,
      marginTop: 4
    }
  }));
}
function Btn(_ref6) {
  var children = _ref6.children,
    onClick = _ref6.onClick,
    _ref6$color = _ref6.color,
    color = _ref6$color === void 0 ? C.red : _ref6$color,
    _ref6$outline = _ref6.outline,
    outline = _ref6$outline === void 0 ? false : _ref6$outline,
    _ref6$full = _ref6.full,
    full = _ref6$full === void 0 ? false : _ref6$full,
    _ref6$sm = _ref6.sm,
    sm = _ref6$sm === void 0 ? false : _ref6$sm,
    _ref6$disabled = _ref6.disabled,
    disabled = _ref6$disabled === void 0 ? false : _ref6$disabled,
    _ref6$style = _ref6.style,
    style = _ref6$style === void 0 ? {} : _ref6$style;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: _objectSpread({
      width: full ? "100%" : "auto",
      background: outline ? "transparent" : "linear-gradient(135deg,".concat(color, ",").concat(color, "bb)"),
      color: outline ? color : "#fff",
      border: "1.5px solid ".concat(color),
      borderRadius: 11,
      padding: sm ? "7px 14px" : "11px 18px",
      fontWeight: 800,
      fontSize: sm ? 12 : 14,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      boxShadow: outline ? "none" : "0 2px 12px ".concat(color, "33")
    }, style)
  }, children);
}
function Lbl(_ref7) {
  var children = _ref7.children;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      color: C.muted,
      display: "block",
      marginBottom: 5,
      letterSpacing: 1.5,
      textTransform: "uppercase"
    }
  }, children);
}
function FInput(_ref8) {
  var label = _ref8.label,
    _ref8$type = _ref8.type,
    type = _ref8$type === void 0 ? "text" : _ref8$type,
    value = _ref8.value,
    onChange = _ref8.onChange,
    placeholder = _ref8.placeholder,
    rows = _ref8.rows,
    children = _ref8.children;
  var s = {
    background: C.card2,
    color: C.white,
    border: "1.5px solid ".concat(C.border),
    borderRadius: 11,
    padding: "10px 13px",
    width: "100%",
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, label && /*#__PURE__*/React.createElement(Lbl, null, label), type === "select" ? /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: s
  }, children) : type === "textarea" ? /*#__PURE__*/React.createElement("textarea", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows || 3,
    style: _objectSpread(_objectSpread({}, s), {}, {
      resize: "none"
    })
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: s
  }));
}
function Toast(_ref9) {
  var msg = _ref9.msg,
    type = _ref9.type,
    onDone = _ref9.onDone;
  useEffect(function () {
    var t = setTimeout(onDone, 3000);
    return function () {
      return clearTimeout(t);
    };
  }, []);
  var bg = {
    success: C.green,
    error: C.redD,
    info: C.blue
  }[type] || C.green;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 68,
      left: "50%",
      transform: "translateX(-50%)",
      background: bg,
      color: "#fff",
      padding: "11px 22px",
      borderRadius: 13,
      fontWeight: 800,
      fontSize: 13,
      zIndex: 9999,
      boxShadow: "0 6px 28px #000a",
      maxWidth: 310,
      textAlign: "center",
      animation: "fadeUp .3s ease",
      whiteSpace: "nowrap"
    }
  }, msg);
}
function Loader(_ref0) {
  var _ref0$msg = _ref0.msg,
    msg = _ref0$msg === void 0 ? "Loading…" : _ref0$msg;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 0",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "spinner"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13
    }
  }, msg));
}
var BST = {
  background: "transparent",
  color: C.muted,
  fontSize: 13,
  fontWeight: 700,
  border: "1px solid ".concat(C.border),
  borderRadius: 8,
  padding: "6px 14px",
  marginBottom: 10
};

/* ═══════════════════════════════════════
   ROOT APP
═══════════════════════════════════════ */
function App() {
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    role = _useState8[0],
    setRole = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    pinVal = _useState0[0],
    setPinVal = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    pinErr = _useState10[0],
    setPinErr = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showPin = _useState12[0],
    setShowPin = _useState12[1];
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    toast = _useState14[0],
    setToast = _useState14[1];
  var toast2 = function toast2(msg) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
    return setToast({
      msg: msg,
      type: type
    });
  };
  if (!role) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: 24,
      background: "radial-gradient(ellipse at top,#200404,".concat(C.bg, " 60%)")
    }
  }, /*#__PURE__*/React.createElement(VMLogo, {
    size: 90
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 900,
      letterSpacing: 3,
      color: C.red,
      lineHeight: 1.1
    }
  }, "VM SILAMBAM"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 900,
      letterSpacing: 3,
      color: C.red,
      marginTop: 2
    }
  }, "& KARATE CLUB"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#888",
      letterSpacing: 2,
      marginTop: 6
    }
  }, "Developed by PERIXA Technologies")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 2,
      background: C.red,
      borderRadius: 2,
      margin: "18px 0 26px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.muted,
      fontWeight: 800,
      letterSpacing: 2,
      textAlign: "center",
      marginBottom: 18
    }
  }, "SELECT YOUR ROLE"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setRole("parent");
    },
    style: {
      width: "100%",
      background: C.card,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 14,
      padding: "15px",
      marginBottom: 12,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 14,
      color: C.white,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34
    }
  }, "\uD83D\uDC6A"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 16
    }
  }, "Parent / Student"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12,
      marginTop: 2
    }
  }, "View schedules, attendance & achievements"))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowPin(function (v) {
        return !v;
      });
    },
    style: {
      width: "100%",
      background: C.card,
      border: "1.5px solid ".concat(C.red, "55"),
      borderRadius: 14,
      padding: "15px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 14,
      color: C.white,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34
    }
  }, "\uD83D\uDD10"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 16,
      color: C.red
    }
  }, "Admin"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12,
      marginTop: 2
    }
  }, "Full club management access"))), showPin && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      padding: 16,
      marginTop: 12
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement(Lbl, null, "ENTER ADMIN PIN"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pinVal,
    onChange: function onChange(e) {
      setPinVal(e.target.value);
      setPinErr(false);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") {
        pinVal === ADMIN_PIN ? (setRole("admin"), setShowPin(false), setPinVal("")) : setPinErr(true);
      }
    },
    placeholder: "Enter PIN",
    maxLength: 12,
    style: {
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(pinErr ? C.red : C.border),
      borderRadius: 11,
      padding: "11px 14px",
      width: "100%",
      fontSize: 16,
      outline: "none",
      letterSpacing: 6,
      textAlign: "center",
      marginBottom: pinErr ? 6 : 10
    }
  }), pinErr && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.red,
      fontSize: 12,
      fontWeight: 700,
      marginBottom: 8,
      textAlign: "center"
    }
  }, "\u274C Wrong PIN \u2014 try again"), /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: function onClick() {
      pinVal === ADMIN_PIN ? (setRole("admin"), setShowPin(false), setPinVal("")) : setPinErr(true);
    }
  }, "\uD83D\uDD13 Unlock Admin"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      textAlign: "center",
      color: C.muted,
      fontSize: 11,
      lineHeight: 1.9
    }
  }, "\uD83D\uDCF2 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.white
    }
  }, "Install this app:"), /*#__PURE__*/React.createElement("br", null), "Android: tap \u22EE \u2192 \"Add to Home Screen\"", /*#__PURE__*/React.createElement("br", null), "iPhone: tap \u2B06\uFE0F Share \u2192 \"Add to Home Screen\"", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.white
    }
  }, "Contact: 9597330629 / 7904478682")), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast.msg,
    type: toast.type,
    onDone: function onDone() {
      return setToast(null);
    }
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, role === "admin" ? /*#__PURE__*/React.createElement(AdminApp, {
    showToast: toast2,
    logout: function logout() {
      return setRole(null);
    }
  }) : /*#__PURE__*/React.createElement(ParentApp, {
    showToast: toast2,
    logout: function logout() {
      return setRole(null);
    }
  }), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast.msg,
    type: toast.type,
    onDone: function onDone() {
      return setToast(null);
    }
  }));
}

/* ═══════════════════════════════════════
   ADMIN APP
═══════════════════════════════════════ */
function AdminApp(_ref1) {
  var showToast = _ref1.showToast,
    logout = _ref1.logout;
  var _useState15 = useState("dash"),
    _useState16 = _slicedToArray(_useState15, 2),
    tab = _useState16[0],
    setTab = _useState16[1];
  var _useAutoHideNav = useAutoHideNav(),
    _useAutoHideNav2 = _slicedToArray(_useAutoHideNav, 2),
    showNav = _useAutoHideNav2[0],
    navRef = _useAutoHideNav2[1];
  var _useCol = useCol("students"),
    _useCol2 = _slicedToArray(_useCol, 2),
    students = _useCol2[0],
    stuLoad = _useCol2[1];
  var _useCol3 = useCol("batches", "name"),
    _useCol4 = _slicedToArray(_useCol3, 2),
    batches = _useCol4[0],
    batLoad = _useCol4[1];
  var _useCol5 = useCol("schedules", "createdAt"),
    _useCol6 = _slicedToArray(_useCol5, 2),
    schedules = _useCol6[0],
    schLoad = _useCol6[1];
  var _useCol7 = useCol("gallery"),
    _useCol8 = _slicedToArray(_useCol7, 2),
    gallery = _useCol8[0],
    galLoad = _useCol8[1];
  var _useCol9 = useCol("attendance", "date"),
    _useCol0 = _slicedToArray(_useCol9, 2),
    attendance = _useCol0[0],
    attLoad = _useCol0[1];
  var _useCol1 = useCol("fees"),
    _useCol10 = _slicedToArray(_useCol1, 2),
    fees = _useCol10[0],
    feeLoad = _useCol10[1];
  var loading = stuLoad || batLoad || schLoad || galLoad || attLoad || feeLoad;
  var TABS = [{
    id: "dash",
    icon: "🏠",
    label: "Home"
  }, {
    id: "stu",
    icon: "👥",
    label: "Students"
  }, {
    id: "sched",
    icon: "📅",
    label: "Schedule"
  }, {
    id: "gallery",
    icon: "📸",
    label: "Gallery"
  }, {
    id: "fin",
    icon: "💰",
    label: "Finance"
  }];
  var pass = {
    students: students,
    batches: batches,
    schedules: schedules,
    gallery: gallery,
    attendance: attendance,
    fees: fees,
    showToast: showToast
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#1e0404,#0c0c0c)",
      padding: "10px 14px",
      borderBottom: "1px solid #2a0606",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(VMLogo, {
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 900,
      letterSpacing: 2
    }
  }, "VM SILAMBAM"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.red,
      fontWeight: 800,
      letterSpacing: 3
    }
  }, "& KARATE CLUB \u2014 ADMIN")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: C.green,
      display: "inline-block",
      boxShadow: "0 0 6px ".concat(C.green)
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: logout,
    style: {
      background: "transparent",
      color: C.muted,
      fontSize: 11,
      fontWeight: 700,
      border: "1px solid ".concat(C.border),
      borderRadius: 8,
      padding: "5px 10px"
    }
  }, "Exit"))), /*#__PURE__*/React.createElement("div", {
    ref: navRef,
    style: {
      flex: 1,
      overflowY: "auto",
      overscrollBehavior: "contain",
      paddingBottom: 80
    }
  }, loading ? /*#__PURE__*/React.createElement(Loader, {
    msg: "Connecting to Firebase\u2026"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, tab === "dash" && /*#__PURE__*/React.createElement(ADash, _objectSpread(_objectSpread({}, pass), {}, {
    setTab: setTab
  })), tab === "stu" && /*#__PURE__*/React.createElement(AStu, pass), tab === "sched" && /*#__PURE__*/React.createElement(ASched, pass), tab === "gallery" && /*#__PURE__*/React.createElement(AGallery, pass), tab === "fin" && /*#__PURE__*/React.createElement(AFin, pass))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: showNav ? 0 : -70,
      left: 0,
      right: 0,
      background: "#0e0e0ef5",
      borderTop: "1px solid #1e0404",
      padding: "6px 0 calc(10px + env(safe-area-inset-bottom))",
      display: "flex",
      justifyContent: "space-around",
      zIndex: 1000,
      transition: "bottom 0.3s ease"
    }
  }, TABS.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: function onClick() {
        return setTab(t.id);
      },
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        background: "transparent",
        padding: "4px 8px",
        color: tab === t.id ? C.red : C.muted
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20
      }
    }, t.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 800,
        letterSpacing: .4
      }
    }, t.label));
  })));
}

/* ── Admin Dashboard ── */
function ADash(_ref10) {
  var students = _ref10.students,
    batches = _ref10.batches,
    schedules = _ref10.schedules,
    attendance = _ref10.attendance,
    fees = _ref10.fees,
    setTab = _ref10.setTab;
  var today = todayStr();
  var presentToday = attendance.filter(function (a) {
    return a.date === today && a.present;
  }).length;
  var pendingFees = fees.filter(function (f) {
    return !f.paid;
  }).length;
  /* upcoming events (schedules with eventDate) */
  var upcoming = useMemo(function () {
    return schedules.filter(function (s) {
      return s.eventDate && s.eventDate >= today;
    }).sort(function (a, b) {
      return a.eventDate.localeCompare(b.eventDate);
    }).slice(0, 3);
  }, [schedules, today]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px"
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement(SecHead, {
    title: "DASHBOARD"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 16
    }
  }, [{
    icon: "👥",
    val: students.length,
    label: "STUDENTS",
    col: C.red,
    t: "stu"
  }, {
    icon: "🏷️",
    val: batches.length,
    label: "BATCHES",
    col: C.blue,
    t: "sched"
  }, {
    icon: "✅",
    val: presentToday,
    label: "PRESENT TODAY",
    col: C.green,
    t: "stu"
  }, {
    icon: "💸",
    val: pendingFees,
    label: "FEES PENDING",
    col: C.gold,
    t: "fin"
  }].map(function (s) {
    return /*#__PURE__*/React.createElement(Card, {
      key: s.label,
      onClick: function onClick() {
        return setTab(s.t);
      },
      style: {
        padding: "14px 12px",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22
      }
    }, s.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 900,
        color: s.col,
        lineHeight: 1,
        marginTop: 4
      }
    }, s.val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: C.muted,
        fontWeight: 700,
        letterSpacing: .6,
        marginTop: 2
      }
    }, s.label));
  })), /*#__PURE__*/React.createElement(SecHead, {
    title: "QUICK ACTIONS"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 16
    }
  }, [{
    icon: "➕",
    label: "Register Student",
    t: "stu"
  }, {
    icon: "📅",
    label: "Add Session",
    t: "sched"
  }, {
    icon: "📸",
    label: "Upload Media",
    t: "gallery"
  }, {
    icon: "💰",
    label: "Manage Fees",
    t: "fin"
  }].map(function (q) {
    return /*#__PURE__*/React.createElement(Card, {
      key: q.label,
      onClick: function onClick() {
        return setTab(q.t);
      },
      style: {
        padding: "14px 10px",
        cursor: "pointer",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        marginBottom: 6
      }
    }, q.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 800
      }
    }, q.label));
  })), upcoming.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SecHead, {
    title: "UPCOMING EVENTS"
  }), upcoming.map(function (s) {
    return /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      style: {
        padding: "11px 13px",
        marginBottom: 8,
        borderLeft: "3px solid ".concat(C.gold)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#b8860b22",
        color: C.gold,
        borderRadius: 8,
        padding: "5px 8px",
        fontSize: 11,
        fontWeight: 800,
        minWidth: 64,
        textAlign: "center"
      }
    }, "\uD83D\uDCC6", /*#__PURE__*/React.createElement("br", null), fmtDate(s.eventDate)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14
      }
    }, s.eventTitle || s.discipline), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 12,
        marginTop: 1
      }
    }, s.batchName || "General", " \xB7 ", s.time))));
  })), /*#__PURE__*/React.createElement(SecHead, {
    title: "RECENT SESSIONS"
  }), schedules.filter(function (s) {
    return !s.eventDate;
  }).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      textAlign: "center",
      padding: "20px 0",
      fontSize: 13
    }
  }, "No sessions yet") : schedules.filter(function (s) {
    return !s.eventDate;
  }).slice(0, 5).map(function (s) {
    var _s$studentIds;
    return /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      style: {
        padding: "11px 13px",
        marginBottom: 8,
        borderLeft: "3px solid ".concat(C.red)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.redG,
        color: C.red,
        borderRadius: 8,
        padding: "5px 8px",
        fontSize: 11,
        fontWeight: 800,
        minWidth: 64,
        textAlign: "center"
      }
    }, s.time), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14
      }
    }, DISC_ICON[s.discipline] || "🥋", " ", s.discipline), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 12,
        marginTop: 1
      }
    }, s.batchName || "General", " \xB7 ", s.coach)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: C.blue,
        fontWeight: 700
      }
    }, "\uD83D\uDC65", ((_s$studentIds = s.studentIds) === null || _s$studentIds === void 0 ? void 0 : _s$studentIds.length) || 0)));
  }));
}

/* ── Admin Students ── */
function AStu(_ref11) {
  var students = _ref11.students,
    batches = _ref11.batches,
    attendance = _ref11.attendance,
    showToast = _ref11.showToast;
  var _useState17 = useState("list"),
    _useState18 = _slicedToArray(_useState17, 2),
    view = _useState18[0],
    setView = _useState18[1];
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    selId = _useState20[0],
    setSelId = _useState20[1];
  var _useState21 = useState(todayStr()),
    _useState22 = _slicedToArray(_useState21, 2),
    attDate = _useState22[0],
    setAttDate = _useState22[1];
  var _useState23 = useState("all"),
    _useState24 = _slicedToArray(_useState23, 2),
    attBatch = _useState24[0],
    setAttBatch = _useState24[1];
  var _useState25 = useState(""),
    _useState26 = _slicedToArray(_useState25, 2),
    search = _useState26[0],
    setSearch = _useState26[1];
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    showBatch = _useState28[0],
    setShowBatch = _useState28[1];
  var _useState29 = useState(""),
    _useState30 = _slicedToArray(_useState29, 2),
    batchName = _useState30[0],
    setBatchName = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    uploading = _useState32[0],
    setUploading = _useState32[1];
  var photoRef = useRef();
  var blankF = {
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    disciplines: [],
    belts: {},
    batchId: "",
    joinDate: todayStr(),
    notes: "",
    photoPreview: null,
    photoFile: null
  };
  var _useState33 = useState(blankF),
    _useState34 = _slicedToArray(_useState33, 2),
    form = _useState34[0],
    setForm = _useState34[1];
  var toggleDisc = function toggleDisc(d) {
    return setForm(function (p) {
      var has = p.disciplines.includes(d);
      var disciplines = has ? p.disciplines.filter(function (x) {
        return x !== d;
      }) : [].concat(_toConsumableArray(p.disciplines), [d]);
      var belts = _objectSpread({}, p.belts);
      if (has) delete belts[d];else belts[d] = BELT[d][0];
      return _objectSpread(_objectSpread({}, p), {}, {
        disciplines: disciplines,
        belts: belts
      });
    });
  };
  var uploadPhoto = /*#__PURE__*/function () {
    var _uploadPhoto = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(file) {
      var fd, res, d;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            fd = new FormData();
            fd.append("file", file);
            fd.append("upload_preset", UPLOAD_PRESET);
            _context.n = 1;
            return fetch("https://api.cloudinary.com/v1_1/".concat(CLOUD_NAME, "/image/upload"), {
              method: "POST",
              body: fd
            });
          case 1:
            res = _context.v;
            _context.n = 2;
            return res.json();
          case 2:
            d = _context.v;
            if (!d.secure_url) {
              _context.n = 3;
              break;
            }
            return _context.a(2, d.secure_url);
          case 3:
            throw new Error("Upload failed");
          case 4:
            return _context.a(2);
        }
      }, _callee);
    }));
    function uploadPhoto(_x) {
      return _uploadPhoto.apply(this, arguments);
    }
    return uploadPhoto;
  }();
  var handlePhotoSelect = function handlePhotoSelect(e) {
    var f = e.target.files[0];
    if (!f) return;
    if (f.size > 10 * 1024 * 1024) {
      showToast("Max 10MB", "error");
      return;
    }
    var r = new FileReader();
    r.onload = function (ev) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          photoPreview: ev.target.result,
          photoFile: f
        });
      });
    };
    r.readAsDataURL(f);
  };
  var handlePhotoUpdate = /*#__PURE__*/function () {
    var _handlePhotoUpdate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e, studentId) {
      var f, url, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            f = e.target.files[0];
            if (f) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            if (!(f.size > 10 * 1024 * 1024)) {
              _context2.n = 2;
              break;
            }
            showToast("Max 10MB", "error");
            return _context2.a(2);
          case 2:
            setUploading(true);
            showToast("Uploading photo…", "info");
            _context2.p = 3;
            _context2.n = 4;
            return uploadPhoto(f);
          case 4:
            url = _context2.v;
            _context2.n = 5;
            return fsUpdate("students", studentId, {
              photo: url
            });
          case 5:
            showToast("Photo updated 📸");
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t = _context2.v;
            showToast("Upload failed", "error");
          case 7:
            setUploading(false);
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 6]]);
    }));
    function handlePhotoUpdate(_x2, _x3) {
      return _handlePhotoUpdate.apply(this, arguments);
    }
    return handlePhotoUpdate;
  }();
  var register = /*#__PURE__*/function () {
    var _register = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var photo, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (form.name.trim()) {
              _context3.n = 1;
              break;
            }
            showToast("Name is required", "error");
            return _context3.a(2);
          case 1:
            if (form.age) {
              _context3.n = 2;
              break;
            }
            showToast("Age is required", "error");
            return _context3.a(2);
          case 2:
            if (form.disciplines.length) {
              _context3.n = 3;
              break;
            }
            showToast("Select at least one discipline", "error");
            return _context3.a(2);
          case 3:
            setUploading(true);
            _context3.p = 4;
            photo = null;
            if (!form.photoFile) {
              _context3.n = 6;
              break;
            }
            showToast("Uploading photo…", "info");
            _context3.n = 5;
            return uploadPhoto(form.photoFile);
          case 5:
            photo = _context3.v;
          case 6:
            _context3.n = 7;
            return fsAdd("students", {
              name: form.name.trim(),
              age: parseInt(form.age),
              phone: form.phone,
              email: form.email,
              address: form.address,
              disciplines: form.disciplines,
              belts: form.belts,
              batchId: form.batchId,
              joinDate: form.joinDate,
              notes: form.notes,
              photo: photo,
              achievements: []
            });
          case 7:
            setForm(blankF);
            setView("list");
            showToast("".concat(form.name, " registered! \uD83E\uDD4B"));
            _context3.n = 9;
            break;
          case 8:
            _context3.p = 8;
            _t2 = _context3.v;
            showToast("Error saving student", "error");
            console.error(_t2);
          case 9:
            setUploading(false);
          case 10:
            return _context3.a(2);
        }
      }, _callee3, null, [[4, 8]]);
    }));
    function register() {
      return _register.apply(this, arguments);
    }
    return register;
  }();
  var getAtt = function getAtt(sid, date) {
    return attendance.find(function (a) {
      return a.studentId === sid && a.date === date;
    });
  };
  var toggleAtt = /*#__PURE__*/function () {
    var _toggleAtt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(sid, date) {
      var ex;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            ex = getAtt(sid, date);
            if (!ex) {
              _context4.n = 2;
              break;
            }
            _context4.n = 1;
            return fsUpdate("attendance", ex.id, {
              present: !ex.present
            });
          case 1:
            _context4.n = 3;
            break;
          case 2:
            _context4.n = 3;
            return fsAdd("attendance", {
              studentId: sid,
              date: date,
              present: true
            });
          case 3:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    function toggleAtt(_x4, _x5) {
      return _toggleAtt.apply(this, arguments);
    }
    return toggleAtt;
  }();

  /* batch-filtered students for attendance */
  var attStudents = useMemo(function () {
    if (attBatch === "all") return students;
    return students.filter(function (s) {
      return s.batchId === attBatch;
    });
  }, [students, attBatch]);
  var filtered = useMemo(function () {
    return students.filter(function (s) {
      return (s.name || "").toLowerCase().includes(search.toLowerCase());
    });
  }, [students, search]);

  /* ── ADD FORM ── */
  if (view === "add") return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px",
      paddingBottom: 10
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView("list");
    },
    style: BST
  }, "\u2190 Back"), /*#__PURE__*/React.createElement(SecHead, {
    title: "REGISTER STUDENT"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement(Av, {
    name: form.name || "?",
    photo: form.photoPreview,
    size: 80
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return photoRef.current.click();
    },
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 26,
      height: 26,
      borderRadius: "50%",
      background: C.red,
      color: "#fff",
      fontSize: 12,
      border: "2px solid ".concat(C.bg),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0
    }
  }, "\uD83D\uDCF7")), /*#__PURE__*/React.createElement("input", {
    ref: photoRef,
    type: "file",
    accept: "image/*",
    style: {
      display: "none"
    },
    onChange: handlePhotoSelect
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 11,
      marginTop: 6
    }
  }, "Tap \uD83D\uDCF7 to add profile photo")), /*#__PURE__*/React.createElement(FInput, {
    label: "Full Name *",
    value: form.name,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          name: e.target.value
        });
      });
    },
    placeholder: "Student full name"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(FInput, {
    label: "Age *",
    type: "number",
    value: form.age,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          age: e.target.value
        });
      });
    },
    placeholder: "Age"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Join Date",
    type: "date",
    value: form.joinDate,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          joinDate: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement(FInput, {
    label: "Phone Number",
    type: "tel",
    value: form.phone,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          phone: e.target.value
        });
      });
    },
    placeholder: "Mobile number"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Email",
    type: "email",
    value: form.email,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          email: e.target.value
        });
      });
    },
    placeholder: "Email address"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Address",
    type: "textarea",
    rows: 2,
    value: form.address,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          address: e.target.value
        });
      });
    },
    placeholder: "Home address"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "DISCIPLINES * (select multiple)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, DISCIPLINES.map(function (d) {
    var on = form.disciplines.includes(d);
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: function onClick() {
        return toggleDisc(d);
      },
      style: {
        padding: "10px 8px",
        borderRadius: 12,
        fontWeight: 800,
        fontSize: 13,
        background: on ? C.red : C.card2,
        color: on ? "#fff" : C.muted,
        border: "1px solid ".concat(on ? C.red : C.border),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }
    }, DISC_ICON[d], " ", d);
  }))), form.disciplines.map(function (d) {
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Lbl, null, DISC_ICON[d], " ", d, " \u2014 BELT / LEVEL"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, BELT[d].map(function (b) {
      return /*#__PURE__*/React.createElement("button", {
        key: b,
        onClick: function onClick() {
          return setForm(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, {
              belts: _objectSpread(_objectSpread({}, p.belts), {}, _defineProperty({}, d, b))
            });
          });
        },
        style: {
          padding: "5px 11px",
          borderRadius: 20,
          fontSize: 12,
          fontWeight: 800,
          background: form.belts[d] === b ? C.red : C.card2,
          color: form.belts[d] === b ? "#fff" : C.muted,
          border: "1px solid ".concat(form.belts[d] === b ? C.red : C.border)
        }
      }, b);
    })));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "ASSIGN TO BATCH"), /*#__PURE__*/React.createElement("select", {
    value: form.batchId,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          batchId: e.target.value
        });
      });
    },
    style: {
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 11,
      padding: "10px 13px",
      width: "100%",
      fontSize: 14,
      outline: "none"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 No batch yet \u2014"), batches.map(function (b) {
    return /*#__PURE__*/React.createElement("option", {
      key: b.id,
      value: b.id
    }, b.name);
  }))), /*#__PURE__*/React.createElement(FInput, {
    label: "Notes",
    type: "textarea",
    rows: 2,
    value: form.notes,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          notes: e.target.value
        });
      });
    },
    placeholder: "Coach observations\u2026"
  }), /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: register,
    disabled: uploading,
    style: {
      animation: "pulse 2s infinite"
    }
  }, uploading ? "⟳ Saving…" : "⚔️ REGISTER WARRIOR"));

  /* ── ATTENDANCE — delegate to proper component (no hooks-in-conditional) ── */
  if (view === "att") return /*#__PURE__*/React.createElement(AttView, {
    students: students,
    batches: batches,
    attendance: attendance,
    attDate: attDate,
    setAttDate: setAttDate,
    attBatch: attBatch,
    setAttBatch: setAttBatch,
    attStudents: attStudents,
    getAtt: getAtt,
    toggleAtt: toggleAtt,
    onBack: function onBack() {
      return setView("list");
    },
    showToast: showToast
  });
  /* ── STUDENT DETAIL ── */
  if (view === "det" && selId) {
    var s = students.find(function (x) {
      return x.id === selId;
    });
    if (!s) return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20,
        color: C.muted
      }
    }, "Student not found.", /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setView("list");
      },
      style: BST
    }, "\u2190 Back"));
    return /*#__PURE__*/React.createElement(StuDetail, {
      s: s,
      batches: batches,
      attendance: attendance,
      showToast: showToast,
      onBack: function onBack() {
        return setView("list");
      },
      onDelete: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return fsDelete("students", s.id);
            case 1:
              setView("list");
              showToast("Student removed", "info");
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      })),
      onPhotoChange: handlePhotoUpdate,
      uploading: uploading
    });
  }

  /* ── LIST ── */
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px"
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: function onClick() {
      return setView("add");
    },
    sm: true
  }, "\u2795 Register"), /*#__PURE__*/React.createElement(Btn, {
    onClick: function onClick() {
      return setView("att");
    },
    color: C.green,
    sm: true
  }, "\u2705 Attendance"), /*#__PURE__*/React.createElement(Btn, {
    onClick: function onClick() {
      return setShowBatch(true);
    },
    color: C.blue,
    sm: true
  }, "\uD83C\uDFF7\uFE0F Batches")), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D Search students\u2026",
    style: {
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 11,
      padding: "10px 13px",
      width: "100%",
      fontSize: 14,
      outline: "none",
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement(SecHead, {
    title: "STUDENTS (".concat(students.length, ")")
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 0",
      color: C.muted
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 42,
      marginBottom: 10
    }
  }, "\uD83D\uDC65"), students.length === 0 ? "No students yet — tap Register" : "No results"), filtered.map(function (s) {
    var _s$achievements;
    var batch = batches.find(function (b) {
      return b.id === s.batchId;
    });
    return /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      onClick: function onClick() {
        setSelId(s.id);
        setView("det");
      },
      style: {
        padding: "12px",
        marginBottom: 9,
        cursor: "pointer",
        borderLeft: "3px solid ".concat(C.red)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 11,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Av, {
      name: s.name,
      photo: s.photo,
      size: 46
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 900,
        fontSize: 15
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 12,
        marginTop: 2
      }
    }, "Age ", s.age, " \xB7 ", (s.disciplines || []).map(function (d) {
      return DISC_ICON[d];
    }).join(" ")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5,
        display: "flex",
        gap: 5,
        flexWrap: "wrap"
      }
    }, (s.disciplines || []).map(function (d) {
      var _s$belts;
      return /*#__PURE__*/React.createElement(Pill, {
        key: d,
        label: ((_s$belts = s.belts) === null || _s$belts === void 0 ? void 0 : _s$belts[d]) || "",
        small: true
      });
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: C.gold,
        fontWeight: 800
      }
    }, "\uD83C\uDFC6 ", ((_s$achievements = s.achievements) === null || _s$achievements === void 0 ? void 0 : _s$achievements.length) || 0), batch && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: C.blue,
        fontWeight: 700,
        marginTop: 3
      }
    }, batch.name))));
  }), showBatch && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setShowBatch(false);
    },
    style: {
      position: "fixed",
      inset: 0,
      background: "#000c",
      zIndex: 900,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: C.card,
      borderRadius: "20px 20px 0 0",
      padding: 20,
      width: "100%",
      maxWidth: 430,
      maxHeight: "70vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 17,
      letterSpacing: 1,
      marginBottom: 14
    }
  }, "MANAGE BATCHES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: batchName,
    onChange: function onChange(e) {
      return setBatchName(e.target.value);
    },
    placeholder: "New batch name\u2026",
    style: {
      flex: 1,
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 10,
      padding: "9px 12px",
      fontSize: 14,
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (batchName.trim()) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            _context6.n = 2;
            return fsAdd("batches", {
              name: batchName.trim()
            });
          case 2:
            setBatchName("");
            showToast("Batch created");
          case 3:
            return _context6.a(2);
        }
      }, _callee6);
    })),
    sm: true
  }, "Add")), batches.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      textAlign: "center",
      padding: "10px 0",
      fontSize: 13
    }
  }, "No batches yet"), batches.map(function (b) {
    return /*#__PURE__*/React.createElement("div", {
      key: b.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 0",
        borderBottom: "1px solid ".concat(C.border)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontWeight: 700
      }
    }, "\uD83C\uDFF7\uFE0F ", b.name), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return fsDelete("batches", b.id);
            case 1:
              showToast("Batch removed", "info");
            case 2:
              return _context7.a(2);
          }
        }, _callee7);
      })),
      style: {
        background: "transparent",
        color: "#b01c1c",
        fontSize: 16
      }
    }, "\uD83D\uDDD1"));
  }), /*#__PURE__*/React.createElement(Btn, {
    full: true,
    color: C.blue,
    onClick: function onClick() {
      return setShowBatch(false);
    },
    style: {
      marginTop: 14
    }
  }, "Close"))));
}

/* ── Student Detail ── */
function StuDetail(_ref15) {
  var _s$achievements2;
  var s = _ref15.s,
    batches = _ref15.batches,
    attendance = _ref15.attendance,
    showToast = _ref15.showToast,
    onBack = _ref15.onBack,
    onDelete = _ref15.onDelete,
    onPhotoChange = _ref15.onPhotoChange,
    uploading = _ref15.uploading;
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    edit = _useState36[0],
    setEdit = _useState36[1];
  var _useState37 = useState({
      name: s.name,
      age: s.age,
      phone: s.phone || "",
      email: s.email || "",
      address: s.address || "",
      notes: s.notes || "",
      disciplines: s.disciplines || [],
      belts: s.belts || {},
      batchId: s.batchId || ""
    }),
    _useState38 = _slicedToArray(_useState37, 2),
    form = _useState38[0],
    setForm = _useState38[1];
  var pRef = useRef();
  var batch = batches.find(function (b) {
    return b.id === s.batchId;
  });
  var sAtt = attendance.filter(function (a) {
    return a.studentId === s.id;
  }).sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });
  var pct = sAtt.length ? Math.round(sAtt.filter(function (a) {
    return a.present;
  }).length / sAtt.length * 100) : 0;
  var toggleDisc = function toggleDisc(d) {
    return setForm(function (p) {
      var has = p.disciplines.includes(d);
      var disciplines = has ? p.disciplines.filter(function (x) {
        return x !== d;
      }) : [].concat(_toConsumableArray(p.disciplines), [d]);
      var belts = _objectSpread({}, p.belts);
      if (has) delete belts[d];else belts[d] = BELT[d][0];
      return _objectSpread(_objectSpread({}, p), {}, {
        disciplines: disciplines,
        belts: belts
      });
    });
  };
  if (edit) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      paddingBottom: 10
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEdit(false);
    },
    style: BST
  }, "\u2190 Cancel"), /*#__PURE__*/React.createElement(SecHead, {
    title: "EDIT STUDENT"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Name",
    value: form.name,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          name: e.target.value
        });
      });
    },
    placeholder: "Full name"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Age",
    type: "number",
    value: form.age,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          age: e.target.value
        });
      });
    },
    placeholder: "Age"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Phone",
    value: form.phone,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          phone: e.target.value
        });
      });
    },
    placeholder: "Phone"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Email",
    value: form.email,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          email: e.target.value
        });
      });
    },
    placeholder: "Email"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Address",
    type: "textarea",
    rows: 2,
    value: form.address,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          address: e.target.value
        });
      });
    },
    placeholder: "Address"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Notes",
    type: "textarea",
    rows: 2,
    value: form.notes,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          notes: e.target.value
        });
      });
    },
    placeholder: "Notes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "DISCIPLINES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, DISCIPLINES.map(function (d) {
    var on = form.disciplines.includes(d);
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: function onClick() {
        return toggleDisc(d);
      },
      style: {
        padding: "10px 8px",
        borderRadius: 12,
        fontWeight: 800,
        fontSize: 13,
        background: on ? C.red : C.card2,
        color: on ? "#fff" : C.muted,
        border: "1px solid ".concat(on ? C.red : C.border),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }
    }, DISC_ICON[d], " ", d);
  }))), form.disciplines.map(function (d) {
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Lbl, null, DISC_ICON[d], " ", d, " \u2014 BELT GRADE"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, BELT[d].map(function (b) {
      return /*#__PURE__*/React.createElement("button", {
        key: b,
        onClick: function onClick() {
          return setForm(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, {
              belts: _objectSpread(_objectSpread({}, p.belts), {}, _defineProperty({}, d, b))
            });
          });
        },
        style: {
          padding: "5px 11px",
          borderRadius: 20,
          fontSize: 12,
          fontWeight: 800,
          background: form.belts[d] === b ? C.red : C.card2,
          color: form.belts[d] === b ? "#fff" : C.muted,
          border: "1px solid ".concat(form.belts[d] === b ? C.red : C.border)
        }
      }, b);
    })));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "BATCH"), /*#__PURE__*/React.createElement("select", {
    value: form.batchId,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          batchId: e.target.value
        });
      });
    },
    style: {
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 11,
      padding: "10px 13px",
      width: "100%",
      fontSize: 14,
      outline: "none"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 No batch \u2014"), batches.map(function (b) {
    return /*#__PURE__*/React.createElement("option", {
      key: b.id,
      value: b.id
    }, b.name);
  }))), /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var _t3;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            _context8.n = 1;
            return fsUpdate("students", s.id, {
              name: form.name,
              age: Number(form.age),
              phone: form.phone,
              email: form.email,
              address: form.address,
              notes: form.notes,
              disciplines: form.disciplines,
              belts: form.belts,
              batchId: form.batchId
            });
          case 1:
            showToast("Student updated ✅");
            setEdit(false);
            _context8.n = 3;
            break;
          case 2:
            _context8.p = 2;
            _t3 = _context8.v;
            console.error(_t3);
            showToast("Update failed ❌", "error");
          case 3:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 2]]);
    }))
  }, "\uD83D\uDCBE Save Changes"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 10
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#1e0404,#0c0c0c)",
      padding: "14px 14px 20px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: BST
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Av, {
    name: s.name,
    photo: s.photo,
    size: 72
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return pRef.current.click();
    },
    disabled: uploading,
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: C.red,
      color: "#fff",
      fontSize: 11,
      border: "2px solid ".concat(C.bg),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0
    }
  }, uploading ? "⟳" : "📷"), /*#__PURE__*/React.createElement("input", {
    ref: pRef,
    type: "file",
    accept: "image/*",
    style: {
      display: "none"
    },
    onChange: function onChange(e) {
      return onPhotoChange(e, s.id);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 900,
      lineHeight: 1
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      marginTop: 3
    }
  }, "Age ", s.age, " \xB7 Joined ", fmtDate(s.joinDate)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: "flex",
      gap: 5,
      flexWrap: "wrap"
    }
  }, (s.disciplines || []).map(function (d) {
    var _s$belts2;
    return /*#__PURE__*/React.createElement(Pill, {
      key: d,
      label: "".concat(DISC_ICON[d], " ").concat(((_s$belts2 = s.belts) === null || _s$belts2 === void 0 ? void 0 : _s$belts2[d]) || ""),
      small: true
    });
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 8,
      marginTop: 14
    }
  }, [{
    icon: "📊",
    val: "".concat(pct, "%"),
    label: "ATTENDANCE",
    col: C.green
  }, {
    icon: "🏆",
    val: ((_s$achievements2 = s.achievements) === null || _s$achievements2 === void 0 ? void 0 : _s$achievements2.length) || 0,
    label: "AWARDS",
    col: C.gold
  }, {
    icon: "🏷️",
    val: (batch === null || batch === void 0 ? void 0 : batch.name) || "None",
    label: "BATCH",
    col: C.blue
  }].map(function (st) {
    return /*#__PURE__*/React.createElement(Card, {
      key: st.label,
      style: {
        padding: "10px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18
      }
    }, st.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: String(st.val).length > 6 ? 12 : 18,
        fontWeight: 900,
        color: st.col,
        lineHeight: 1,
        marginTop: 2
      }
    }, st.val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: C.muted,
        fontWeight: 700,
        letterSpacing: .4,
        marginTop: 2
      }
    }, st.label));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 13,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.muted,
      fontWeight: 800,
      letterSpacing: 1.5,
      marginBottom: 8
    }
  }, "CONTACT INFO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginBottom: 4
    }
  }, "\uD83D\uDCF1 ", s.phone || "—"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginBottom: 4
    }
  }, "\u2709\uFE0F ", s.email || "—"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, "\uD83C\uDFE0 ", s.address || "—"), s.notes && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted,
      fontStyle: "italic",
      borderTop: "1px solid ".concat(C.border),
      paddingTop: 8,
      marginTop: 8
    }
  }, "\"", s.notes, "\"")), /*#__PURE__*/React.createElement(SecHead, {
    title: "ATTENDANCE HISTORY (".concat(sAtt.length, ")")
  }), sAtt.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card2,
      borderRadius: 11,
      padding: "10px 13px",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: C.green,
      fontSize: 16
    }
  }, pct, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 12,
      marginLeft: 8
    }
  }, sAtt.filter(function (a) {
    return a.present;
  }).length, " present / ", sAtt.length, " days")), sAtt.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      textAlign: "center",
      padding: "10px 0"
    }
  }, "No attendance records"), sAtt.slice(0, 50).map(function (a) {
    return /*#__PURE__*/React.createElement(Card, {
      key: a.id,
      style: {
        padding: "8px 12px",
        marginBottom: 5,
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        color: a.present ? C.green : C.red
      }
    }, a.present ? "✅" : "❌"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontWeight: 700,
        fontSize: 13
      }
    }, fmtDate(a.date)), /*#__PURE__*/React.createElement(Pill, {
      label: a.present ? "Present" : "Absent",
      color: a.present ? C.green : C.red,
      small: true
    }));
  }), /*#__PURE__*/React.createElement(SecHead, {
    title: "ACHIEVEMENTS",
    style: {
      marginTop: 14
    }
  }), /*#__PURE__*/React.createElement(AchForm, {
    studentId: s.id,
    showToast: showToast,
    achievements: s.achievements || []
  }), (!s.achievements || s.achievements.length === 0) && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      textAlign: "center",
      padding: "10px 0"
    }
  }, "No achievements yet"), (s.achievements || []).map(function (a, i) {
    return /*#__PURE__*/React.createElement(Card, {
      key: i,
      style: {
        padding: "11px 13px",
        marginBottom: 8,
        borderLeft: "3px solid ".concat(C.red),
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26
      }
    }, a.badge), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14
      }
    }, a.title), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 11,
        marginTop: 1
      }
    }, fmtDate(a.date)), a.desc && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        marginTop: 4
      }
    }, a.desc)));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEdit(true);
    },
    style: {
      width: "100%",
      background: "#031a0a",
      color: C.green,
      borderRadius: 12,
      padding: 11,
      fontWeight: 800,
      fontSize: 13,
      border: "1px solid ".concat(C.green, "44"),
      marginBottom: 8,
      marginTop: 8
    }
  }, "\u270F\uFE0F Edit Student"), /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: {
      width: "100%",
      background: "#1a0303",
      color: "#b01c1c",
      borderRadius: 12,
      padding: 11,
      fontWeight: 800,
      fontSize: 13,
      border: "1px solid #b01c1c44"
    }
  }, "\uD83D\uDDD1 Remove Student")));
}
function AchForm(_ref17) {
  var studentId = _ref17.studentId,
    showToast = _ref17.showToast,
    achievements = _ref17.achievements;
  var _useState39 = useState(false),
    _useState40 = _slicedToArray(_useState39, 2),
    open = _useState40[0],
    setOpen = _useState40[1];
  var _useState41 = useState({
      title: "",
      date: todayStr(),
      badge: "🥇",
      desc: ""
    }),
    _useState42 = _slicedToArray(_useState41, 2),
    f = _useState42[0],
    setF = _useState42[1];
  var save = /*#__PURE__*/function () {
    var _save = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var _t4;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            if (f.title) {
              _context9.n = 1;
              break;
            }
            showToast("Title required", "error");
            return _context9.a(2);
          case 1:
            _context9.p = 1;
            _context9.n = 2;
            return fsUpdate("students", studentId, {
              achievements: [].concat(_toConsumableArray(achievements), [_objectSpread(_objectSpread({}, f), {}, {
                id: uid()
              })])
            });
          case 2:
            setF({
              title: "",
              date: todayStr(),
              badge: "🥇",
              desc: ""
            });
            setOpen(false);
            showToast("Achievement added 🏆");
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t4 = _context9.v;
            showToast("Error saving", "error");
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[1, 3]]);
    }));
    function save() {
      return _save.apply(this, arguments);
    }
    return save;
  }();
  if (!open) return /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(true);
    },
    style: {
      width: "100%",
      background: "#1a0606",
      color: C.red,
      borderRadius: 12,
      padding: "10px",
      fontWeight: 800,
      fontSize: 13,
      border: "1.5px dashed ".concat(C.red, "44"),
      marginBottom: 10
    }
  }, "+ Add Achievement");
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 14,
      marginBottom: 10,
      border: "1px solid ".concat(C.red, "33")
    }
  }, /*#__PURE__*/React.createElement(FInput, {
    label: "Title *",
    value: f.title,
    onChange: function onChange(e) {
      return setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          title: e.target.value
        });
      });
    },
    placeholder: "Award / achievement title"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Date",
    type: "date",
    value: f.date,
    onChange: function onChange(e) {
      return setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          date: e.target.value
        });
      });
    }
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Description",
    type: "textarea",
    rows: 2,
    value: f.desc,
    onChange: function onChange(e) {
      return setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          desc: e.target.value
        });
      });
    },
    placeholder: "Details\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 12
    }
  }, BADGES.map(function (b) {
    return /*#__PURE__*/React.createElement("button", {
      key: b,
      onClick: function onClick() {
        return setF(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            badge: b
          });
        });
      },
      style: {
        fontSize: 20,
        background: f.badge === b ? C.red + "44" : "transparent",
        border: "2px solid ".concat(f.badge === b ? C.red : "transparent"),
        borderRadius: 8,
        width: 38,
        height: 38,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, b);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: save,
    sm: true
  }, "Save"), /*#__PURE__*/React.createElement(Btn, {
    onClick: function onClick() {
      return setOpen(false);
    },
    outline: true,
    color: C.muted,
    sm: true
  }, "Cancel")));
}

/* ── Admin Schedule (with events + date) ── */
function ASched(_ref18) {
  var schedules = _ref18.schedules,
    students = _ref18.students,
    batches = _ref18.batches,
    showToast = _ref18.showToast;
  var _useState43 = useState("session"),
    _useState44 = _slicedToArray(_useState43, 2),
    schedType = _useState44[0],
    setSchedType = _useState44[1]; // "session" | "event"
  var blankSession = {
    day: "Monday",
    time: "",
    discipline: "Silambam",
    coach: "",
    batchId: "",
    batchName: "",
    studentIds: [],
    notes: ""
  };
  var blankEvent = {
    eventDate: "",
    eventTitle: "",
    time: "",
    discipline: "Silambam",
    coach: "",
    batchId: "",
    batchName: "",
    studentIds: [],
    notes: ""
  };
  var _useState45 = useState(blankSession),
    _useState46 = _slicedToArray(_useState45, 2),
    form = _useState46[0],
    setForm = _useState46[1];
  var _useState47 = useState(false),
    _useState48 = _slicedToArray(_useState47, 2),
    show = _useState48[0],
    setShow = _useState48[1];
  var _useState49 = useState(null),
    _useState50 = _slicedToArray(_useState49, 2),
    expand = _useState50[0],
    setExpand = _useState50[1];
  var today = todayStr();
  var add = /*#__PURE__*/function () {
    var _add = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      var _batches$find;
      var bn, _t5;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            if (!(!form.time || schedType === "session" && !form.coach || schedType === "event" && !form.eventTitle)) {
              _context0.n = 1;
              break;
            }
            showToast(schedType === "event" ? "Event title and time required" : "Time and Coach required", "error");
            return _context0.a(2);
          case 1:
            bn = ((_batches$find = batches.find(function (b) {
              return b.id === form.batchId;
            })) === null || _batches$find === void 0 ? void 0 : _batches$find.name) || "General";
            _context0.p = 2;
            _context0.n = 3;
            return fsAdd("schedules", _objectSpread(_objectSpread({}, form), {}, {
              batchName: bn,
              type: schedType
            }));
          case 3:
            setForm(schedType === "session" ? blankSession : blankEvent);
            setShow(false);
            showToast(schedType === "event" ? "Event added 📆" : "Session added 📅");
            _context0.n = 5;
            break;
          case 4:
            _context0.p = 4;
            _t5 = _context0.v;
            showToast("Error saving", "error");
          case 5:
            return _context0.a(2);
        }
      }, _callee0, null, [[2, 4]]);
    }));
    function add() {
      return _add.apply(this, arguments);
    }
    return add;
  }();
  var del = /*#__PURE__*/function () {
    var _del = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(id) {
      var _t6;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            _context1.p = 0;
            _context1.n = 1;
            return fsDelete("schedules", id);
          case 1:
            showToast("Removed", "info");
            _context1.n = 3;
            break;
          case 2:
            _context1.p = 2;
            _t6 = _context1.v;
            showToast("Error", "error");
          case 3:
            return _context1.a(2);
        }
      }, _callee1, null, [[0, 2]]);
    }));
    function del(_x6) {
      return _del.apply(this, arguments);
    }
    return del;
  }();
  var sessions = useMemo(function () {
    return schedules.filter(function (s) {
      return s.type !== "event" || !s.type;
    });
  }, [schedules]);
  var events = useMemo(function () {
    return schedules.filter(function (s) {
      return s.type === "event" && s.eventDate;
    }).sort(function (a, b) {
      return a.eventDate.localeCompare(b.eventDate);
    });
  }, [schedules]);
  var byDay = useMemo(function () {
    return DAYS.reduce(function (acc, d) {
      var s = sessions.filter(function (x) {
        return x.day === d;
      });
      if (s.length) acc[d] = s;
      return acc;
    }, {});
  }, [sessions]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px"
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SecHead, {
    title: "SCHEDULE & EVENTS"
  }), /*#__PURE__*/React.createElement(Btn, {
    onClick: function onClick() {
      return setShow(function (v) {
        return !v;
      });
    },
    outline: show,
    color: show ? C.muted : C.red,
    sm: true
  }, show ? "✕ Cancel" : "+ Add")), show && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 14,
      marginBottom: 14,
      border: "1px solid ".concat(C.red, "33")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setSchedType("session");
      setForm(blankSession);
    },
    style: {
      flex: 1,
      padding: "8px",
      borderRadius: 10,
      fontWeight: 800,
      fontSize: 13,
      background: schedType === "session" ? C.red : C.card2,
      color: schedType === "session" ? "#fff" : C.muted,
      border: "1px solid ".concat(schedType === "session" ? C.red : C.border)
    }
  }, "\uD83D\uDCC5 Weekly Session"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setSchedType("event");
      setForm(blankEvent);
    },
    style: {
      flex: 1,
      padding: "8px",
      borderRadius: 10,
      fontWeight: 800,
      fontSize: 13,
      background: schedType === "event" ? C.gold : C.card2,
      color: schedType === "event" ? "#000" : C.muted,
      border: "1px solid ".concat(schedType === "event" ? C.gold : C.border)
    }
  }, "\uD83D\uDCC6 Upcoming Event")), schedType === "session" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "DAY"), /*#__PURE__*/React.createElement("select", {
    value: form.day,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          day: e.target.value
        });
      });
    },
    style: {
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 11,
      padding: "10px 13px",
      width: "100%",
      fontSize: 14,
      outline: "none"
    }
  }, DAYS.map(function (d) {
    return /*#__PURE__*/React.createElement("option", {
      key: d
    }, d);
  }))), /*#__PURE__*/React.createElement(FInput, {
    label: "Time *",
    value: form.time,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          time: e.target.value
        });
      });
    },
    placeholder: "e.g. 6:00 AM"
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(FInput, {
    label: "Event Date *",
    type: "date",
    value: form.eventDate || "",
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          eventDate: e.target.value
        });
      });
    }
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Time *",
    value: form.time,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          time: e.target.value
        });
      });
    },
    placeholder: "e.g. 10:00 AM"
  })), /*#__PURE__*/React.createElement(FInput, {
    label: "Event Title *",
    value: form.eventTitle || "",
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          eventTitle: e.target.value
        });
      });
    },
    placeholder: "e.g. State Championship"
  })), /*#__PURE__*/React.createElement(Lbl, null, "DISCIPLINE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 12
    }
  }, [].concat(DISCIPLINES, ["All Disciplines"]).map(function (d) {
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: function onClick() {
        return setForm(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            discipline: d
          });
        });
      },
      style: {
        padding: "5px 10px",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 800,
        background: form.discipline === d ? C.red : C.card2,
        color: form.discipline === d ? "#fff" : C.muted,
        border: "1px solid ".concat(form.discipline === d ? C.red : C.border)
      }
    }, DISC_ICON[d] || "🥋", " ", d);
  })), /*#__PURE__*/React.createElement(FInput, {
    label: schedType === "session" ? "Coach *" : "Coach / Contact",
    value: form.coach,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          coach: e.target.value
        });
      });
    },
    placeholder: "Master / coach name"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "BATCH"), /*#__PURE__*/React.createElement("select", {
    value: form.batchId,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          batchId: e.target.value
        });
      });
    },
    style: {
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 11,
      padding: "10px 13px",
      width: "100%",
      fontSize: 14,
      outline: "none"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 General / No batch \u2014"), batches.map(function (b) {
    return /*#__PURE__*/React.createElement("option", {
      key: b.id,
      value: b.id
    }, b.name);
  }))), /*#__PURE__*/React.createElement(Lbl, null, "TAG STUDENTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 150,
      overflowY: "auto",
      border: "1px solid ".concat(C.border),
      borderRadius: 11,
      padding: 8,
      background: C.card2,
      marginBottom: 12
    }
  }, students.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12,
      padding: "8px 0"
    }
  }, "No students yet"), students.map(function (s) {
    var _batches$find2;
    var tagged = form.studentIds.includes(s.id);
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: function onClick() {
        return setForm(function (p) {
          var has = p.studentIds.includes(s.id);
          return _objectSpread(_objectSpread({}, p), {}, {
            studentIds: has ? p.studentIds.filter(function (x) {
              return x !== s.id;
            }) : [].concat(_toConsumableArray(p.studentIds), [s.id])
          });
        });
      },
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "7px 8px",
        borderRadius: 9,
        marginBottom: 4,
        background: tagged ? C.red + "22" : "transparent",
        border: "1px solid ".concat(tagged ? C.red : C.border)
      }
    }, /*#__PURE__*/React.createElement(Av, {
      name: s.name,
      photo: s.photo,
      size: 28
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 13,
        color: C.white
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.muted
      }
    }, ((_batches$find2 = batches.find(function (b) {
      return b.id === s.batchId;
    })) === null || _batches$find2 === void 0 ? void 0 : _batches$find2.name) || "")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: tagged ? C.red : C.muted
      }
    }, tagged ? "✓" : "○"));
  })), /*#__PURE__*/React.createElement(FInput, {
    label: "Notes (optional)",
    type: "textarea",
    rows: 2,
    value: form.notes,
    onChange: function onChange(e) {
      return setForm(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          notes: e.target.value
        });
      });
    },
    placeholder: "Additional notes\u2026"
  }), /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: add
  }, schedType === "event" ? "📆 Add Event" : "✚ Add Session")), events.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.gold,
      fontWeight: 800,
      letterSpacing: 3,
      marginBottom: 8
    }
  }, "\uD83D\uDCC6 UPCOMING EVENTS"), events.map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.id
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: "11px 13px",
        marginBottom: 4,
        borderLeft: "3px solid ".concat(C.gold),
        cursor: "pointer",
        background: s.eventDate < today ? "#1a1a10" : "#161616"
      },
      onClick: function onClick() {
        return setExpand(expand === s.id ? null : s.id);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#b8860b22",
        color: C.gold,
        borderRadius: 8,
        padding: "5px 8px",
        fontSize: 10,
        fontWeight: 800,
        minWidth: 70,
        textAlign: "center"
      }
    }, fmtDate(s.eventDate), /*#__PURE__*/React.createElement("br", null), s.time), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14
      }
    }, s.eventTitle), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 12,
        marginTop: 1
      }
    }, DISC_ICON[s.discipline] || "🥋", " ", s.discipline, " \xB7 ", s.batchName || "General")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        alignItems: "center",
        flexShrink: 0
      }
    }, s.eventDate < today && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: C.muted
      }
    }, "Past"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        del(s.id);
      },
      style: {
        background: "#1a0303",
        color: "#b01c1c",
        width: 30,
        height: 30,
        borderRadius: 8,
        fontSize: 14,
        border: "1px solid #b01c1c44",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, "\uD83D\uDDD1")))), expand === s.id && /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.card2,
        borderRadius: "0 0 12px 12px",
        padding: "10px 13px",
        marginBottom: 6,
        border: "1px solid ".concat(C.border),
        borderTop: "none"
      }
    }, s.notes && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: C.muted,
        fontStyle: "italic",
        marginBottom: 8
      }
    }, "\uD83D\uDCDD ", s.notes), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: C.muted,
        fontWeight: 800,
        letterSpacing: 1.2,
        marginBottom: 8
      }
    }, "STUDENTS IN EVENT"), !s.studentIds || s.studentIds.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 12
      }
    }, "No students tagged") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6
      }
    }, s.studentIds.map(function (sid) {
      var st = students.find(function (x) {
        return x.id === sid;
      });
      return st ? /*#__PURE__*/React.createElement("div", {
        key: sid,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 5,
          background: C.card,
          borderRadius: 20,
          padding: "3px 10px 3px 5px",
          border: "1px solid ".concat(C.border)
        }
      }, /*#__PURE__*/React.createElement(Av, {
        name: st.name,
        photo: st.photo,
        size: 20
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 700
        }
      }, st.name)) : null;
    }))));
  })), Object.keys(byDay).length === 0 && events.length === 0 && !show && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 0",
      color: C.muted
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 42,
      marginBottom: 10
    }
  }, "\uD83D\uDCC5"), "No sessions or events yet"), Object.keys(byDay).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.red,
      fontWeight: 800,
      letterSpacing: 3,
      marginBottom: 8,
      marginTop: events.length > 0 ? 14 : 0
    }
  }, "\u2694\uFE0F WEEKLY SESSIONS"), Object.entries(byDay).map(function (_ref19) {
    var _ref20 = _slicedToArray(_ref19, 2),
      day = _ref20[0],
      sess = _ref20[1];
    return /*#__PURE__*/React.createElement("div", {
      key: day,
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.red,
        fontWeight: 800,
        letterSpacing: 3,
        marginBottom: 8
      }
    }, day.toUpperCase()), sess.map(function (s) {
      var _s$studentIds2;
      return /*#__PURE__*/React.createElement("div", {
        key: s.id
      }, /*#__PURE__*/React.createElement(Card, {
        style: {
          padding: "11px 13px",
          marginBottom: 4,
          borderLeft: "3px solid ".concat(C.red),
          cursor: "pointer"
        },
        onClick: function onClick() {
          return setExpand(expand === s.id ? null : s.id);
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          background: C.redG,
          color: C.red,
          borderRadius: 8,
          padding: "5px 8px",
          fontSize: 11,
          fontWeight: 800,
          minWidth: 64,
          textAlign: "center"
        }
      }, s.time), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 800,
          fontSize: 14
        }
      }, DISC_ICON[s.discipline] || "🥋", " ", s.discipline), /*#__PURE__*/React.createElement("div", {
        style: {
          color: C.muted,
          fontSize: 12,
          marginTop: 1
        }
      }, s.batchName || "General", " \xB7 ", s.coach)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 6,
          alignItems: "center",
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: C.blue,
          fontWeight: 700
        }
      }, "\uD83D\uDC65", ((_s$studentIds2 = s.studentIds) === null || _s$studentIds2 === void 0 ? void 0 : _s$studentIds2.length) || 0), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick(e) {
          e.stopPropagation();
          del(s.id);
        },
        style: {
          background: "#1a0303",
          color: "#b01c1c",
          width: 30,
          height: 30,
          borderRadius: 8,
          fontSize: 14,
          border: "1px solid #b01c1c44",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }, "\uD83D\uDDD1")))), expand === s.id && /*#__PURE__*/React.createElement("div", {
        style: {
          background: C.card2,
          borderRadius: "0 0 12px 12px",
          padding: "10px 13px",
          marginBottom: 6,
          border: "1px solid ".concat(C.border),
          borderTop: "none"
        }
      }, s.notes && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: C.muted,
          fontStyle: "italic",
          marginBottom: 8
        }
      }, "\uD83D\uDCDD ", s.notes), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10,
          color: C.muted,
          fontWeight: 800,
          letterSpacing: 1.2,
          marginBottom: 8
        }
      }, "STUDENTS IN SESSION"), !s.studentIds || s.studentIds.length === 0 ? /*#__PURE__*/React.createElement("div", {
        style: {
          color: C.muted,
          fontSize: 12
        }
      }, "No students tagged") : /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: 6
        }
      }, s.studentIds.map(function (sid) {
        var st = students.find(function (x) {
          return x.id === sid;
        });
        return st ? /*#__PURE__*/React.createElement("div", {
          key: sid,
          style: {
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: C.card,
            borderRadius: 20,
            padding: "3px 10px 3px 5px",
            border: "1px solid ".concat(C.border)
          }
        }, /*#__PURE__*/React.createElement(Av, {
          name: st.name,
          photo: st.photo,
          size: 20
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700
          }
        }, st.name)) : null;
      }))));
    }));
  }));
}

/* ── Admin Gallery (images + videos) ── */
function AGallery(_ref21) {
  var gallery = _ref21.gallery,
    students = _ref21.students,
    showToast = _ref21.showToast;
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    show = _useState52[0],
    setShow = _useState52[1];
  var _useState53 = useState("image"),
    _useState54 = _slicedToArray(_useState53, 2),
    mediaType = _useState54[0],
    setMediaType = _useState54[1]; // "image" | "video"
  var _useState55 = useState({
      studentId: "",
      caption: "",
      date: todayStr(),
      src: null,
      thumb: null,
      isVideo: false,
      uploading: false
    }),
    _useState56 = _slicedToArray(_useState55, 2),
    f = _useState56[0],
    setF = _useState56[1];
  var _useState57 = useState(null),
    _useState58 = _slicedToArray(_useState57, 2),
    lb = _useState58[0],
    setLb = _useState58[1];
  var _useState59 = useState("all"),
    _useState60 = _slicedToArray(_useState59, 2),
    filterType = _useState60[0],
    setFilterType = _useState60[1]; // "all" | "image" | "video"
  var fileRef = useRef();
  var onFile = /*#__PURE__*/function () {
    var _onFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(e) {
      var file, isVid, maxSize, fd, endpoint, res, d, thumb, _t7;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            file = e.target.files[0];
            if (file) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2);
          case 1:
            isVid = file.type.startsWith("video/");
            maxSize = isVid ? 100 * 1024 * 1024 : 20 * 1024 * 1024; // 100MB video, 20MB image
            if (!(file.size > maxSize)) {
              _context10.n = 2;
              break;
            }
            showToast("Max ".concat(isVid ? "100MB for video" : "20MB for image"), "error");
            return _context10.a(2);
          case 2:
            setF(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, {
                uploading: true
              });
            });
            showToast("Uploading…", "info");
            fd = new FormData();
            fd.append("file", file);
            fd.append("upload_preset", UPLOAD_PRESET);
            endpoint = isVid ? "https://api.cloudinary.com/v1_1/".concat(CLOUD_NAME, "/video/upload") : "https://api.cloudinary.com/v1_1/".concat(CLOUD_NAME, "/image/upload");
            _context10.p = 3;
            _context10.n = 4;
            return fetch(endpoint, {
              method: "POST",
              body: fd
            });
          case 4:
            res = _context10.v;
            _context10.n = 5;
            return res.json();
          case 5:
            d = _context10.v;
            if (d.secure_url) {
              thumb = isVid ? d.secure_url.replace("/upload/", "/upload/so_0,w_400,f_jpg/").replace(/\.\w+$/, ".jpg") : null;
              setF(function (p) {
                return _objectSpread(_objectSpread({}, p), {}, {
                  src: d.secure_url,
                  thumb: thumb,
                  isVideo: isVid,
                  uploading: false
                });
              });
              showToast(isVid ? "Video ready ✓" : "Image ready ✓");
            } else {
              setF(function (p) {
                return _objectSpread(_objectSpread({}, p), {}, {
                  uploading: false
                });
              });
              showToast("Upload failed", "error");
            }
            _context10.n = 7;
            break;
          case 6:
            _context10.p = 6;
            _t7 = _context10.v;
            setF(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, {
                uploading: false
              });
            });
            showToast("Upload error", "error");
          case 7:
            return _context10.a(2);
        }
      }, _callee10, null, [[3, 6]]);
    }));
    function onFile(_x7) {
      return _onFile.apply(this, arguments);
    }
    return onFile;
  }();
  var upload = /*#__PURE__*/function () {
    var _upload = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var stu, _t8;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (f.src) {
              _context11.n = 1;
              break;
            }
            showToast("Select a file first", "error");
            return _context11.a(2);
          case 1:
            stu = students.find(function (s) {
              return s.id === f.studentId;
            });
            _context11.p = 2;
            _context11.n = 3;
            return fsAdd("gallery", {
              studentId: f.studentId,
              studentName: (stu === null || stu === void 0 ? void 0 : stu.name) || "Club",
              caption: f.caption || "Photo",
              date: f.date,
              src: f.src,
              thumb: f.thumb,
              isVideo: f.isVideo || false
            });
          case 3:
            setF({
              studentId: "",
              caption: "",
              date: todayStr(),
              src: null,
              thumb: null,
              isVideo: false,
              uploading: false
            });
            setShow(false);
            showToast("".concat(f.isVideo ? "Video" : "Photo", " added \uD83D\uDCF8"));
            _context11.n = 5;
            break;
          case 4:
            _context11.p = 4;
            _t8 = _context11.v;
            showToast("Error saving", "error");
          case 5:
            return _context11.a(2);
        }
      }, _callee11, null, [[2, 4]]);
    }));
    function upload() {
      return _upload.apply(this, arguments);
    }
    return upload;
  }();
  var deleteMedia = /*#__PURE__*/function () {
    var _deleteMedia = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(id) {
      var _t9;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            _context12.p = 0;
            _context12.n = 1;
            return fsDelete("gallery", id);
          case 1:
            setLb(null);
            showToast("Deleted", "info");
            _context12.n = 3;
            break;
          case 2:
            _context12.p = 2;
            _t9 = _context12.v;
            showToast("Error", "error");
          case 3:
            return _context12.a(2);
        }
      }, _callee12, null, [[0, 2]]);
    }));
    function deleteMedia(_x8) {
      return _deleteMedia.apply(this, arguments);
    }
    return deleteMedia;
  }();
  var visible = useMemo(function () {
    return gallery.filter(function (g) {
      return filterType === "all" || (filterType === "video" ? g.isVideo : !g.isVideo);
    });
  }, [gallery, filterType]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px"
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(SecHead, {
    title: "GALLERY (".concat(gallery.length, ")")
  }), /*#__PURE__*/React.createElement(Btn, {
    onClick: function onClick() {
      return setShow(function (v) {
        return !v;
      });
    },
    outline: show,
    color: show ? C.muted : C.red,
    sm: true
  }, show ? "✕ Cancel" : "+ Upload")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 14,
      background: C.card2,
      borderRadius: 11,
      padding: 3
    }
  }, [{
    id: "all",
    label: "All (".concat(gallery.length, ")")
  }, {
    id: "image",
    label: "\uD83D\uDCF8 Photos"
  }, {
    id: "video",
    label: "\uD83C\uDFA5 Videos"
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: function onClick() {
        return setFilterType(t.id);
      },
      style: {
        flex: 1,
        padding: "7px 4px",
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 800,
        background: filterType === t.id ? C.red : "transparent",
        color: filterType === t.id ? "#fff" : C.muted,
        border: "none"
      }
    }, t.label);
  })), show && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 14,
      marginBottom: 14,
      border: "1px solid ".concat(C.red, "33")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setMediaType("image");
      setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          src: null,
          isVideo: false
        });
      });
    },
    style: {
      flex: 1,
      padding: "8px",
      borderRadius: 10,
      fontWeight: 800,
      fontSize: 13,
      background: mediaType === "image" ? C.red : C.card2,
      color: mediaType === "image" ? "#fff" : C.muted,
      border: "1px solid ".concat(mediaType === "image" ? C.red : C.border)
    }
  }, "\uD83D\uDCF8 Image"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setMediaType("video");
      setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          src: null,
          isVideo: true
        });
      });
    },
    style: {
      flex: 1,
      padding: "8px",
      borderRadius: 10,
      fontWeight: 800,
      fontSize: 13,
      background: mediaType === "video" ? C.blue : C.card2,
      color: mediaType === "video" ? "#fff" : C.muted,
      border: "1px solid ".concat(mediaType === "video" ? C.blue : C.border)
    }
  }, "\uD83C\uDFA5 Video")), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return !f.uploading && fileRef.current.click();
    },
    style: {
      background: C.card2,
      border: "2px dashed ".concat(f.src ? C.red : C.border),
      borderRadius: 13,
      height: 150,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: f.uploading ? "wait" : "pointer",
      overflow: "hidden",
      marginBottom: 12,
      position: "relative"
    }
  }, f.uploading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "spinner"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12,
      marginTop: 8
    }
  }, "Uploading\u2026 (large files may take time)")) : f.src && !f.isVideo ? /*#__PURE__*/React.createElement("img", {
    src: f.src,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
      inset: 0
    }
  }) : f.src && f.isVideo ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40
    }
  }, "\uD83C\uDFA5"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.green,
      fontSize: 12,
      fontWeight: 700,
      marginTop: 6
    }
  }, "Video ready \u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 10,
      marginTop: 4
    }
  }, "Tap to change")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 38
    }
  }, mediaType === "video" ? "🎥" : "📸"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12,
      fontWeight: 700,
      marginTop: 6
    }
  }, "Tap to select ", mediaType), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#444",
      fontSize: 10,
      marginTop: 3
    }
  }, "Max ", mediaType === "video" ? "100MB" : "20MB"))), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: mediaType === "video" ? "video/*" : "image/*",
    style: {
      display: "none"
    },
    onChange: onFile
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "TAG STUDENT (optional)"), /*#__PURE__*/React.createElement("select", {
    value: f.studentId,
    onChange: function onChange(e) {
      return setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          studentId: e.target.value
        });
      });
    },
    style: {
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 11,
      padding: "10px 13px",
      width: "100%",
      fontSize: 14,
      outline: "none"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 Club / General \u2014"), students.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.name);
  }))), /*#__PURE__*/React.createElement(FInput, {
    label: "Caption",
    value: f.caption,
    onChange: function onChange(e) {
      return setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          caption: e.target.value
        });
      });
    },
    placeholder: "Event / occasion"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Date",
    type: "date",
    value: f.date,
    onChange: function onChange(e) {
      return setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          date: e.target.value
        });
      });
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: upload,
    disabled: f.uploading || !f.src
  }, f.isVideo ? "🎥 Add Video" : "📸 Add Photo")), visible.length === 0 && !show && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "50px 0",
      color: C.muted
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 50,
      marginBottom: 12
    }
  }, "\uD83D\uDCF8"), "No ", filterType === "all" ? "media" : filterType + "s", " yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 5
    }
  }, visible.map(function (g) {
    return /*#__PURE__*/React.createElement("div", {
      key: g.id,
      onClick: function onClick() {
        return setLb(g);
      },
      style: {
        aspectRatio: "1",
        borderRadius: 10,
        overflow: "hidden",
        border: "1.5px solid ".concat(C.border),
        cursor: "pointer",
        position: "relative",
        background: C.card2
      }
    }, g.isVideo ? /*#__PURE__*/React.createElement(React.Fragment, null, g.thumb ? /*#__PURE__*/React.createElement("img", {
      src: g.thumb,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30
      }
    }, "\uD83C\uDFA5"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        background: "rgba(0,0,0,.6)",
        borderRadius: "50%",
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14
      }
    }, "\u25B6")) : /*#__PURE__*/React.createElement("img", {
      src: g.src,
      alt: g.caption,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "linear-gradient(transparent,#000c)",
        padding: "14px 4px 4px",
        fontSize: 9,
        color: "#fff",
        fontWeight: 700,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        textAlign: "center"
      }
    }, g.caption));
  })), lb && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setLb(null);
    },
    style: {
      position: "fixed",
      inset: 0,
      background: "#000f",
      zIndex: 9000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: C.card,
      borderRadius: 18,
      overflow: "hidden",
      maxWidth: 420,
      width: "100%"
    }
  }, lb.isVideo ? /*#__PURE__*/React.createElement("video", {
    src: lb.src,
    controls: true,
    autoPlay: true,
    style: {
      width: "100%",
      maxHeight: 340,
      display: "block",
      background: "#000"
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: lb.src,
    style: {
      width: "100%",
      maxHeight: 340,
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "13px 15px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15
    }
  }, lb.caption, lb.isVideo && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: C.blue,
      marginLeft: 8
    }
  }, "\uD83C\uDFA5 Video")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12,
      marginTop: 3
    }
  }, lb.studentName, " \xB7 ", fmtDate(lb.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return deleteMedia(lb.id);
    },
    style: {
      flex: 1,
      background: "#1a0303",
      color: "#b01c1c",
      borderRadius: 11,
      padding: 10,
      fontWeight: 800,
      fontSize: 13,
      border: "1px solid #b01c1c44"
    }
  }, "\uD83D\uDDD1 Delete"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setLb(null);
    },
    style: {
      flex: 1,
      background: C.card2,
      color: C.muted,
      borderRadius: 11,
      padding: 10,
      fontWeight: 800,
      fontSize: 13,
      border: "1px solid ".concat(C.border)
    }
  }, "\u2715 Close"))))));
}

/* ── Admin Finance — month-wise grouped, with edit ── */
function AFin(_ref22) {
  var fees = _ref22.fees,
    students = _ref22.students,
    showToast = _ref22.showToast;
  var _useState61 = useState("list"),
    _useState62 = _slicedToArray(_useState61, 2),
    view = _useState62[0],
    setView = _useState62[1]; /* list | add */
  var _useState63 = useState({
      studentId: "",
      amount: "",
      month: MONTHS[new Date().getMonth()],
      year: String(new Date().getFullYear()),
      note: ""
    }),
    _useState64 = _slicedToArray(_useState63, 2),
    f = _useState64[0],
    setF = _useState64[1];
  var _useState65 = useState(null),
    _useState66 = _slicedToArray(_useState65, 2),
    editId = _useState66[0],
    setEditId = _useState66[1];
  var _useState67 = useState(null),
    _useState68 = _slicedToArray(_useState67, 2),
    editF = _useState68[0],
    setEditF = _useState68[1];
  var _useState69 = useState("all"),
    _useState70 = _slicedToArray(_useState69, 2),
    filter = _useState70[0],
    setFilter = _useState70[1]; /* all | paid | pending */
  var _useState71 = useState(null),
    _useState72 = _slicedToArray(_useState71, 2),
    expandMonth = _useState72[0],
    setExpandMonth = _useState72[1]; /* "Jan 2025" */

  var add = /*#__PURE__*/function () {
    var _add2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      var _t0;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (!(!f.studentId || !f.amount)) {
              _context13.n = 1;
              break;
            }
            showToast("Student and Amount required", "error");
            return _context13.a(2);
          case 1:
            _context13.p = 1;
            _context13.n = 2;
            return fsAdd("fees", {
              studentId: f.studentId,
              amount: parseFloat(f.amount),
              month: f.month,
              year: f.year,
              note: f.note || "",
              paid: false,
              paidDate: ""
            });
          case 2:
            setF(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, {
                amount: "",
                studentId: "",
                note: ""
              });
            });
            setView("list");
            showToast("Fee record added 💰");
            _context13.n = 4;
            break;
          case 3:
            _context13.p = 3;
            _t0 = _context13.v;
            showToast("Error saving", "error");
          case 4:
            return _context13.a(2);
        }
      }, _callee13, null, [[1, 3]]);
    }));
    function add() {
      return _add2.apply(this, arguments);
    }
    return add;
  }();
  var togglePaid = /*#__PURE__*/function () {
    var _togglePaid = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(fe) {
      var _t1;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            _context14.p = 0;
            _context14.n = 1;
            return fsUpdate("fees", fe.id, {
              paid: !fe.paid,
              paidDate: !fe.paid ? todayStr() : ""
            });
          case 1:
            _context14.n = 3;
            break;
          case 2:
            _context14.p = 2;
            _t1 = _context14.v;
            showToast("Error updating", "error");
          case 3:
            return _context14.a(2);
        }
      }, _callee14, null, [[0, 2]]);
    }));
    function togglePaid(_x9) {
      return _togglePaid.apply(this, arguments);
    }
    return togglePaid;
  }();
  var saveEdit = /*#__PURE__*/function () {
    var _saveEdit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
      var _t10;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            if (editF.amount) {
              _context15.n = 1;
              break;
            }
            showToast("Amount required", "error");
            return _context15.a(2);
          case 1:
            _context15.p = 1;
            _context15.n = 2;
            return fsUpdate("fees", editId, {
              amount: parseFloat(editF.amount),
              month: editF.month,
              year: editF.year,
              note: editF.note || ""
            });
          case 2:
            setEditId(null);
            setEditF(null);
            showToast("Fee record updated ✅");
            _context15.n = 4;
            break;
          case 3:
            _context15.p = 3;
            _t10 = _context15.v;
            showToast("Update failed", "error");
          case 4:
            return _context15.a(2);
        }
      }, _callee15, null, [[1, 3]]);
    }));
    function saveEdit() {
      return _saveEdit.apply(this, arguments);
    }
    return saveEdit;
  }();
  var collected = fees.filter(function (f) {
    return f.paid;
  }).reduce(function (s, x) {
    return s + (x.amount || 0);
  }, 0);
  var pending = fees.filter(function (f) {
    return !f.paid;
  }).reduce(function (s, x) {
    return s + (x.amount || 0);
  }, 0);

  /* Build month-wise groups, sorted newest first.
     monthKey = "Jan 2025", value = array of fee records for that month */
  var MONTH_ORDER = useMemo(function () {
    var keys = _toConsumableArray(new Set(fees.map(function (fe) {
      return "".concat(fe.month, " ").concat(fe.year);
    })));
    return keys.sort(function (a, b) {
      var _a$split = a.split(" "),
        _a$split2 = _slicedToArray(_a$split, 2),
        mA = _a$split2[0],
        yA = _a$split2[1];
      var _b$split = b.split(" "),
        _b$split2 = _slicedToArray(_b$split, 2),
        mB = _b$split2[0],
        yB = _b$split2[1];
      if (yB !== yA) return parseInt(yB) - parseInt(yA);
      return MONTHS.indexOf(mB) - MONTHS.indexOf(mA);
    });
  }, [fees]);
  var feesByMonth = useMemo(function () {
    var m = {};
    MONTH_ORDER.forEach(function (k) {
      m[k] = fees.filter(function (fe) {
        return "".concat(fe.month, " ").concat(fe.year) === k && (filter === "all" || (filter === "paid" ? fe.paid : !fe.paid));
      });
    });
    return m;
  }, [fees, MONTH_ORDER, filter]);

  /* edit modal */
  if (editId && editF) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px"
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setEditId(null);
      setEditF(null);
    },
    style: BST
  }, "\u2190 Cancel"), /*#__PURE__*/React.createElement(SecHead, {
    title: "EDIT FEE RECORD"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Amount (\u20B9) *",
    type: "number",
    value: editF.amount,
    onChange: function onChange(e) {
      return setEditF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          amount: e.target.value
        });
      });
    },
    placeholder: "Amount"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "MONTH"), /*#__PURE__*/React.createElement("select", {
    value: editF.month,
    onChange: function onChange(e) {
      return setEditF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          month: e.target.value
        });
      });
    },
    style: {
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 11,
      padding: "10px 13px",
      width: "100%",
      fontSize: 14,
      outline: "none"
    }
  }, MONTHS.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m
    }, m);
  }))), /*#__PURE__*/React.createElement(FInput, {
    label: "Year",
    type: "number",
    value: editF.year,
    onChange: function onChange(e) {
      return setEditF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          year: e.target.value
        });
      });
    },
    placeholder: "2025"
  })), /*#__PURE__*/React.createElement(FInput, {
    label: "Note (optional)",
    value: editF.note || "",
    onChange: function onChange(e) {
      return setEditF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          note: e.target.value
        });
      });
    },
    placeholder: "e.g. Partial payment"
  }), /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: saveEdit
  }, "\uD83D\uDCBE Save Changes"));
  if (view === "add") return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px"
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView("list");
    },
    style: BST
  }, "\u2190 Back"), /*#__PURE__*/React.createElement(SecHead, {
    title: "ADD FEE RECORD"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "STUDENT *"), /*#__PURE__*/React.createElement("select", {
    value: f.studentId,
    onChange: function onChange(e) {
      return setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          studentId: e.target.value
        });
      });
    },
    style: {
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 11,
      padding: "10px 13px",
      width: "100%",
      fontSize: 14,
      outline: "none"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select student\u2026"), students.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.name);
  }))), /*#__PURE__*/React.createElement(FInput, {
    label: "Amount (\u20B9) *",
    type: "number",
    value: f.amount,
    onChange: function onChange(e) {
      return setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          amount: e.target.value
        });
      });
    },
    placeholder: "e.g. 500"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "MONTH"), /*#__PURE__*/React.createElement("select", {
    value: f.month,
    onChange: function onChange(e) {
      return setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          month: e.target.value
        });
      });
    },
    style: {
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 11,
      padding: "10px 13px",
      width: "100%",
      fontSize: 14,
      outline: "none"
    }
  }, MONTHS.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m
    }, m);
  }))), /*#__PURE__*/React.createElement(FInput, {
    label: "Year",
    type: "number",
    value: f.year,
    onChange: function onChange(e) {
      return setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          year: e.target.value
        });
      });
    },
    placeholder: "2025"
  })), /*#__PURE__*/React.createElement(FInput, {
    label: "Note (optional)",
    value: f.note,
    onChange: function onChange(e) {
      return setF(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          note: e.target.value
        });
      });
    },
    placeholder: "e.g. First month"
  }), /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: add
  }, "\uD83D\uDCB0 Add Fee Record"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px"
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8,
      marginBottom: 14
    }
  }, [{
    label: "TOTAL",
    val: "\u20B9".concat(fees.reduce(function (s, x) {
      return s + (x.amount || 0);
    }, 0)),
    col: C.white
  }, {
    label: "COLLECTED",
    val: "\u20B9".concat(collected),
    col: C.green
  }, {
    label: "PENDING",
    val: "\u20B9".concat(pending),
    col: C.red
  }].map(function (s) {
    return /*#__PURE__*/React.createElement(Card, {
      key: s.label,
      style: {
        padding: "10px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 900,
        color: s.col
      }
    }, s.val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: C.muted,
        fontWeight: 700,
        letterSpacing: .4,
        marginTop: 3
      }
    }, s.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 14,
      background: C.card2,
      borderRadius: 11,
      padding: 3
    }
  }, ["all", "paid", "pending"].map(function (flt) {
    return /*#__PURE__*/React.createElement("button", {
      key: flt,
      onClick: function onClick() {
        return setFilter(flt);
      },
      style: {
        flex: 1,
        padding: "7px 0",
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 800,
        background: filter === flt ? C.red : "transparent",
        color: filter === flt ? "#fff" : C.muted,
        border: "none",
        textTransform: "capitalize"
      }
    }, flt);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 900,
      color: C.muted,
      letterSpacing: .5
    }
  }, "MONTH-WISE RECORDS"), /*#__PURE__*/React.createElement(Btn, {
    onClick: function onClick() {
      return setView("add");
    },
    sm: true
  }, "+ Add")), MONTH_ORDER.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "30px 0",
      color: C.muted
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      marginBottom: 8
    }
  }, "\uD83D\uDCB0"), "No fee records yet"), MONTH_ORDER.map(function (mk) {
    var recs = feesByMonth[mk] || [];
    if (recs.length === 0 && filter !== "all") return null; /* hide empty months when filtered */
    var allFeesFull = fees.filter(function (fe) {
      return "".concat(fe.month, " ").concat(fe.year) === mk;
    });
    var mCollected = allFeesFull.filter(function (fe) {
      return fe.paid;
    }).reduce(function (s, x) {
      return s + (x.amount || 0);
    }, 0);
    var mPending = allFeesFull.filter(function (fe) {
      return !fe.paid;
    }).reduce(function (s, x) {
      return s + (x.amount || 0);
    }, 0);
    var mTotal = allFeesFull.length;
    var mPaid = allFeesFull.filter(function (fe) {
      return fe.paid;
    }).length;
    var isOpen = expandMonth === mk;
    return /*#__PURE__*/React.createElement("div", {
      key: mk,
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setExpandMonth(isOpen ? null : mk);
      },
      style: {
        width: "100%",
        background: isOpen ? "".concat(C.blue, "18") : C.card,
        border: "1px solid ".concat(isOpen ? C.blue : C.border),
        borderRadius: isOpen ? "12px 12px 0 0" : 12,
        padding: "12px 14px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 12,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 900,
        fontSize: 15,
        color: C.white
      }
    }, mk), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: C.green,
        fontWeight: 700
      }
    }, "\u2713 \u20B9", mCollected), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: C.red,
        fontWeight: 700
      }
    }, "\u2717 \u20B9", mPending), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: C.muted
      }
    }, mPaid, "/", mTotal, " paid"))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 50,
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 900,
        color: mPaid === mTotal && mTotal > 0 ? C.green : C.muted
      }
    }, mTotal > 0 ? Math.round(mPaid / mTotal * 100) : 0, "%"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 50,
        height: 4,
        background: "#222",
        borderRadius: 2,
        marginTop: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(mTotal > 0 ? Math.round(mPaid / mTotal * 100) : 0, "%"),
        height: "100%",
        background: mPaid === mTotal && mTotal > 0 ? C.green : C.gold,
        borderRadius: 2
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 14,
        flexShrink: 0
      }
    }, isOpen ? "▲" : "▼")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.card2,
        border: "1px solid ".concat(C.blue),
        borderTop: "none",
        borderRadius: "0 0 12px 12px",
        padding: "10px 12px"
      }
    }, recs.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        textAlign: "center",
        padding: "10px 0",
        fontSize: 12
      }
    }, "No ", filter, " records for this month"), recs.map(function (fe) {
      var stu = students.find(function (s) {
        return s.id === fe.studentId;
      });
      return /*#__PURE__*/React.createElement("div", {
        key: fe.id,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "9px 0",
          borderBottom: "1px solid ".concat(C.border)
        }
      }, /*#__PURE__*/React.createElement(Av, {
        name: (stu === null || stu === void 0 ? void 0 : stu.name) || "?",
        photo: stu === null || stu === void 0 ? void 0 : stu.photo,
        size: 36
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 800,
          fontSize: 13
        }
      }, (stu === null || stu === void 0 ? void 0 : stu.name) || "Unknown"), fe.note && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: C.blue
        }
      }, "\uD83D\uDCDD ", fe.note), fe.paid && fe.paidDate && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10,
          color: C.green
        }
      }, "Paid ", fmtDate(fe.paidDate))), /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: "right",
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 15,
          fontWeight: 900,
          color: fe.paid ? C.green : C.red
        }
      }, "\u20B9", fe.amount), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 4,
          marginTop: 4,
          justifyContent: "flex-end"
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          setEditId(fe.id);
          setEditF({
            amount: fe.amount,
            month: fe.month,
            year: fe.year,
            note: fe.note || ""
          });
        },
        style: {
          padding: "3px 8px",
          borderRadius: 7,
          fontSize: 11,
          fontWeight: 800,
          background: "#031a0a",
          color: C.green,
          border: "1px solid ".concat(C.green, "44")
        }
      }, "\u270F\uFE0F"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return togglePaid(fe);
        },
        style: {
          padding: "3px 8px",
          borderRadius: 7,
          fontSize: 11,
          fontWeight: 800,
          background: fe.paid ? "#0d2e1a" : "#1a0404",
          color: fe.paid ? C.green : C.red,
          border: "1px solid ".concat(fe.paid ? C.green : C.red, "44")
        }
      }, fe.paid ? "✓" : "Pay"))));
    })));
  }));
}

/* ═══════════════════════════════════════
   PARENT APP
═══════════════════════════════════════ */
function ParentApp(_ref23) {
  var showToast = _ref23.showToast,
    logout = _ref23.logout;
  var _useState73 = useState("home"),
    _useState74 = _slicedToArray(_useState73, 2),
    tab = _useState74[0],
    setTab = _useState74[1];
  var _useState75 = useState(null),
    _useState76 = _slicedToArray(_useState75, 2),
    selStu = _useState76[0],
    setSelStu = _useState76[1];
  var _useState77 = useState(null),
    _useState78 = _slicedToArray(_useState77, 2),
    lb = _useState78[0],
    setLb = _useState78[1];
  var _useAutoHideNav3 = useAutoHideNav(),
    _useAutoHideNav4 = _slicedToArray(_useAutoHideNav3, 2),
    showNav = _useAutoHideNav4[0],
    navRef = _useAutoHideNav4[1];
  var _useCol11 = useCol("students"),
    _useCol12 = _slicedToArray(_useCol11, 2),
    students = _useCol12[0],
    stuLoad = _useCol12[1];
  var _useCol13 = useCol("batches", "name"),
    _useCol14 = _slicedToArray(_useCol13, 1),
    batches = _useCol14[0];
  var _useCol15 = useCol("schedules", "createdAt"),
    _useCol16 = _slicedToArray(_useCol15, 2),
    schedules = _useCol16[0],
    schLoad = _useCol16[1];
  var _useCol17 = useCol("gallery"),
    _useCol18 = _slicedToArray(_useCol17, 2),
    gallery = _useCol18[0],
    galLoad = _useCol18[1];
  var _useCol19 = useCol("attendance", "date"),
    _useCol20 = _slicedToArray(_useCol19, 2),
    attendance = _useCol20[0],
    attLoad = _useCol20[1];
  var _useCol21 = useCol("fees"),
    _useCol22 = _slicedToArray(_useCol21, 2),
    fees = _useCol22[0],
    feeLoad = _useCol22[1];
  var loading = stuLoad || schLoad || galLoad || attLoad || feeLoad;
  var TABS = [{
    id: "home",
    icon: "🏠",
    label: "Home"
  }, {
    id: "sched",
    icon: "📅",
    label: "Schedule"
  }, {
    id: "stu",
    icon: "👥",
    label: "Students"
  }, {
    id: "gallery",
    icon: "📸",
    label: "Gallery"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#1e0404,#0c0c0c)",
      padding: "10px 14px",
      borderBottom: "1px solid #2a0606",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(VMLogo, {
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 900,
      letterSpacing: 2
    }
  }, "VM SILAMBAM"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.red,
      fontWeight: 800,
      letterSpacing: 3
    }
  }, "& KARATE CLUB")), /*#__PURE__*/React.createElement("button", {
    onClick: logout,
    style: {
      background: "transparent",
      color: C.muted,
      fontSize: 11,
      fontWeight: 700,
      border: "1px solid ".concat(C.border),
      borderRadius: 8,
      padding: "5px 10px"
    }
  }, "Exit")), /*#__PURE__*/React.createElement("div", {
    ref: navRef,
    style: {
      flex: 1,
      overflowY: "auto",
      overscrollBehavior: "contain",
      paddingBottom: 80
    }
  }, loading ? /*#__PURE__*/React.createElement(Loader, null) : /*#__PURE__*/React.createElement(React.Fragment, null, tab === "home" && /*#__PURE__*/React.createElement(PHome, {
    students: students,
    schedules: schedules,
    attendance: attendance,
    fees: fees,
    setTab: setTab
  }), tab === "sched" && /*#__PURE__*/React.createElement(PSched, {
    schedules: schedules,
    students: students
  }), tab === "stu" && !selStu && /*#__PURE__*/React.createElement(PStuList, {
    students: students,
    batches: batches,
    attendance: attendance,
    fees: fees,
    onSel: function onSel(s) {
      return setSelStu(s);
    }
  }), tab === "stu" && selStu && /*#__PURE__*/React.createElement(PStuDet, {
    student: students.find(function (x) {
      return x.id === selStu.id;
    }) || selStu,
    batches: batches,
    attendance: attendance,
    fees: fees,
    onBack: function onBack() {
      return setSelStu(null);
    }
  }), tab === "gallery" && /*#__PURE__*/React.createElement(PGallery, {
    gallery: gallery,
    lb: lb,
    setLb: setLb
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: showNav ? 0 : -70,
      left: 0,
      right: 0,
      background: "#0e0e0ef5",
      borderTop: "1px solid #1e0404",
      padding: "6px 0 calc(10px + env(safe-area-inset-bottom))",
      display: "flex",
      justifyContent: "space-around",
      zIndex: 1000,
      transition: "bottom 0.3s ease"
    }
  }, TABS.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: function onClick() {
        setTab(t.id);
        setSelStu(null);
      },
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        background: "transparent",
        padding: "4px 8px",
        color: tab === t.id ? C.red : C.muted
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20
      }
    }, t.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 800,
        letterSpacing: .4
      }
    }, t.label));
  })));
}
function PHome(_ref24) {
  var students = _ref24.students,
    schedules = _ref24.schedules,
    attendance = _ref24.attendance,
    fees = _ref24.fees,
    setTab = _ref24.setTab;
  var today = todayStr();
  var presentToday = attendance.filter(function (a) {
    return a.date === today && a.present;
  }).length;
  var pendingFees = fees.filter(function (f) {
    return !f.paid;
  }).length;
  var upcoming = useMemo(function () {
    return schedules.filter(function (s) {
      return s.type === "event" && s.eventDate && s.eventDate >= today;
    }).sort(function (a, b) {
      return a.eventDate.localeCompare(b.eventDate);
    }).slice(0, 2);
  }, [schedules, today]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px"
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement(SecHead, {
    title: "WELCOME"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 16
    }
  }, [{
    icon: "👥",
    val: students.length,
    label: "STUDENTS",
    col: C.red,
    t: "stu"
  }, {
    icon: "📅",
    val: schedules.filter(function (s) {
      return s.type !== "event" || !s.type;
    }).length,
    label: "SESSIONS",
    col: C.blue,
    t: "sched"
  }, {
    icon: "✅",
    val: presentToday,
    label: "PRESENT TODAY",
    col: C.green,
    t: "stu"
  }, {
    icon: "💸",
    val: pendingFees,
    label: "FEES DUE",
    col: C.gold,
    t: "stu"
  }].map(function (s) {
    return /*#__PURE__*/React.createElement(Card, {
      key: s.label,
      onClick: function onClick() {
        return setTab(s.t);
      },
      style: {
        padding: "14px 12px",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22
      }
    }, s.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 900,
        color: s.col,
        lineHeight: 1,
        marginTop: 4
      }
    }, s.val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: C.muted,
        fontWeight: 700,
        letterSpacing: .6,
        marginTop: 2
      }
    }, s.label));
  })), upcoming.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SecHead, {
    title: "UPCOMING EVENTS"
  }), upcoming.map(function (s) {
    return /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      style: {
        padding: "11px 13px",
        marginBottom: 8,
        borderLeft: "3px solid ".concat(C.gold)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#b8860b22",
        color: C.gold,
        borderRadius: 8,
        padding: "5px 8px",
        fontSize: 10,
        fontWeight: 800,
        minWidth: 70,
        textAlign: "center"
      }
    }, fmtDate(s.eventDate), /*#__PURE__*/React.createElement("br", null), s.time), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14
      }
    }, s.eventTitle), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 12,
        marginTop: 1
      }
    }, s.batchName || "General"))));
  })), /*#__PURE__*/React.createElement(SecHead, {
    title: "TODAY'S SESSIONS"
  }), schedules.filter(function (s) {
    return s.type !== "event" || !s.type;
  }).slice(0, 4).map(function (s) {
    return /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      style: {
        padding: "11px 13px",
        marginBottom: 8,
        borderLeft: "3px solid ".concat(C.red)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.redG,
        color: C.red,
        borderRadius: 8,
        padding: "5px 8px",
        fontSize: 11,
        fontWeight: 800,
        minWidth: 64,
        textAlign: "center"
      }
    }, s.time), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14
      }
    }, DISC_ICON[s.discipline] || "🥋", " ", s.discipline), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 12,
        marginTop: 1
      }
    }, s.batchName || "General", " \xB7 ", s.coach))));
  }), schedules.filter(function (s) {
    return s.type !== "event" || !s.type;
  }).length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      textAlign: "center",
      padding: "18px 0",
      fontSize: 13
    }
  }, "No sessions scheduled"));
}
function PSched(_ref25) {
  var schedules = _ref25.schedules,
    students = _ref25.students;
  var _useState79 = useState(null),
    _useState80 = _slicedToArray(_useState79, 2),
    exp = _useState80[0],
    setExp = _useState80[1];
  var today = todayStr();
  var sessions = useMemo(function () {
    return schedules.filter(function (s) {
      return s.type !== "event" || !s.type;
    });
  }, [schedules]);
  var events = useMemo(function () {
    return schedules.filter(function (s) {
      return s.type === "event" && s.eventDate;
    }).sort(function (a, b) {
      return a.eventDate.localeCompare(b.eventDate);
    });
  }, [schedules]);
  var byDay = useMemo(function () {
    return DAYS.reduce(function (acc, d) {
      var s = sessions.filter(function (x) {
        return x.day === d;
      });
      if (s.length) acc[d] = s;
      return acc;
    }, {});
  }, [sessions]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px"
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement(SecHead, {
    title: "SCHEDULE & EVENTS"
  }), events.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.gold,
      fontWeight: 800,
      letterSpacing: 3,
      marginBottom: 8
    }
  }, "\uD83D\uDCC6 UPCOMING EVENTS"), events.map(function (s) {
    var _s$studentIds3;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: "11px 13px",
        marginBottom: 4,
        borderLeft: "3px solid ".concat(s.eventDate < today ? "#444" : C.gold),
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setExp(exp === s.id ? null : s.id);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#b8860b22",
        color: s.eventDate < today ? "#666" : C.gold,
        borderRadius: 8,
        padding: "5px 8px",
        fontSize: 10,
        fontWeight: 800,
        minWidth: 70,
        textAlign: "center"
      }
    }, fmtDate(s.eventDate), /*#__PURE__*/React.createElement("br", null), s.time), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: s.eventDate < today ? C.muted : C.white
      }
    }, s.eventTitle), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 12,
        marginTop: 1
      }
    }, DISC_ICON[s.discipline] || "🥋", " ", s.discipline, " \xB7 ", s.batchName || "General")), s.eventDate < today && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: C.muted,
        flexShrink: 0
      }
    }, "Past"))), exp === s.id && /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.card2,
        borderRadius: "0 0 12px 12px",
        padding: "10px 13px",
        marginBottom: 6,
        border: "1px solid ".concat(C.border),
        borderTop: "none"
      }
    }, s.notes && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: C.muted,
        fontStyle: "italic",
        marginBottom: 8
      }
    }, "\uD83D\uDCDD ", s.notes), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: C.muted,
        fontWeight: 800,
        letterSpacing: 1.2,
        marginBottom: 8
      }
    }, "PARTICIPATING STUDENTS"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6
      }
    }, (_s$studentIds3 = s.studentIds) === null || _s$studentIds3 === void 0 ? void 0 : _s$studentIds3.map(function (sid) {
      var st = students.find(function (x) {
        return x.id === sid;
      });
      return st ? /*#__PURE__*/React.createElement(Pill, {
        key: sid,
        label: st.name,
        small: true
      }) : null;
    }), (!s.studentIds || !s.studentIds.length) && /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 12
      }
    }, "None tagged"))));
  })), Object.keys(byDay).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.red,
      fontWeight: 800,
      letterSpacing: 3,
      marginBottom: 8,
      marginTop: events.length > 0 ? 16 : 0
    }
  }, "\u2694\uFE0F WEEKLY SESSIONS"), Object.keys(byDay).length === 0 && events.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 0",
      color: C.muted
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 42,
      marginBottom: 10
    }
  }, "\uD83D\uDCC5"), "No sessions yet"), Object.entries(byDay).map(function (_ref26) {
    var _ref27 = _slicedToArray(_ref26, 2),
      day = _ref27[0],
      sess = _ref27[1];
    return /*#__PURE__*/React.createElement("div", {
      key: day,
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.red,
        fontWeight: 800,
        letterSpacing: 3,
        marginBottom: 8
      }
    }, day.toUpperCase()), sess.map(function (s) {
      var _s$studentIds4, _s$studentIds5;
      return /*#__PURE__*/React.createElement("div", {
        key: s.id
      }, /*#__PURE__*/React.createElement(Card, {
        style: {
          padding: "11px 13px",
          marginBottom: 4,
          borderLeft: "3px solid ".concat(C.red),
          cursor: "pointer"
        },
        onClick: function onClick() {
          return setExp(exp === s.id ? null : s.id);
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          background: C.redG,
          color: C.red,
          borderRadius: 8,
          padding: "5px 8px",
          fontSize: 11,
          fontWeight: 800,
          minWidth: 64,
          textAlign: "center"
        }
      }, s.time), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 800,
          fontSize: 14
        }
      }, DISC_ICON[s.discipline] || "🥋", " ", s.discipline), /*#__PURE__*/React.createElement("div", {
        style: {
          color: C.muted,
          fontSize: 12,
          marginTop: 1
        }
      }, s.batchName || "General", " \xB7 ", s.coach)), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: C.blue,
          fontWeight: 700
        }
      }, "\uD83D\uDC65", ((_s$studentIds4 = s.studentIds) === null || _s$studentIds4 === void 0 ? void 0 : _s$studentIds4.length) || 0))), exp === s.id && /*#__PURE__*/React.createElement("div", {
        style: {
          background: C.card2,
          borderRadius: "0 0 12px 12px",
          padding: "10px 13px",
          marginBottom: 6,
          border: "1px solid ".concat(C.border),
          borderTop: "none"
        }
      }, s.notes && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: C.muted,
          fontStyle: "italic",
          marginBottom: 8
        }
      }, "\uD83D\uDCDD ", s.notes), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10,
          color: C.muted,
          fontWeight: 800,
          letterSpacing: 1.2,
          marginBottom: 8
        }
      }, "STUDENTS IN SESSION"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: 6
        }
      }, (_s$studentIds5 = s.studentIds) === null || _s$studentIds5 === void 0 ? void 0 : _s$studentIds5.map(function (sid) {
        var st = students.find(function (x) {
          return x.id === sid;
        });
        return st ? /*#__PURE__*/React.createElement(Pill, {
          key: sid,
          label: st.name,
          small: true
        }) : null;
      }), (!s.studentIds || !s.studentIds.length) && /*#__PURE__*/React.createElement("div", {
        style: {
          color: C.muted,
          fontSize: 12
        }
      }, "None tagged"))));
    }));
  }));
}
function PStuList(_ref28) {
  var students = _ref28.students,
    batches = _ref28.batches,
    attendance = _ref28.attendance,
    fees = _ref28.fees,
    onSel = _ref28.onSel;
  var _useState81 = useState(""),
    _useState82 = _slicedToArray(_useState81, 2),
    search = _useState82[0],
    setSearch = _useState82[1];
  var filtered = useMemo(function () {
    return students.filter(function (s) {
      return (s.name || "").toLowerCase().includes(search.toLowerCase());
    });
  }, [students, search]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px"
    },
    className: "fa"
  }, /*#__PURE__*/React.createElement(SecHead, {
    title: "STUDENTS (".concat(students.length, ")")
  }), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D Search name\u2026",
    style: {
      background: C.card2,
      color: C.white,
      border: "1.5px solid ".concat(C.border),
      borderRadius: 11,
      padding: "10px 13px",
      width: "100%",
      fontSize: 14,
      outline: "none",
      marginBottom: 12
    }
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      textAlign: "center",
      padding: "30px 0"
    }
  }, "No students found"), filtered.map(function (s) {
    var sAtt = attendance.filter(function (a) {
      return a.studentId === s.id;
    });
    var pct = sAtt.length ? Math.round(sAtt.filter(function (a) {
      return a.present;
    }).length / sAtt.length * 100) : 0;
    var pend = fees.filter(function (f) {
      return f.studentId === s.id && !f.paid;
    }).length;
    var batch = batches.find(function (b) {
      return b.id === s.batchId;
    });
    return /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      onClick: function onClick() {
        return onSel(s);
      },
      style: {
        padding: "12px",
        marginBottom: 9,
        cursor: "pointer",
        borderLeft: "3px solid ".concat(C.red)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 11,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Av, {
      name: s.name,
      photo: s.photo,
      size: 46
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 900,
        fontSize: 15
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 12,
        marginTop: 2
      }
    }, "Age ", s.age, " \xB7 ", (s.disciplines || []).map(function (d) {
      return DISC_ICON[d];
    }).join(" ")), batch && /*#__PURE__*/React.createElement(Pill, {
      label: batch.name,
      color: C.blue,
      small: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: C.green,
        fontWeight: 800
      }
    }, "\uD83D\uDCCA ", pct, "%"), pend > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.red,
        fontWeight: 700,
        marginTop: 3
      }
    }, "\uD83D\uDCB8 ", pend, " due"))));
  }));
}

/* Parent Student Detail — all history visible, no edit options */
function PStuDet(_ref29) {
  var s = _ref29.student,
    batches = _ref29.batches,
    attendance = _ref29.attendance,
    fees = _ref29.fees,
    onBack = _ref29.onBack;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      color: C.muted,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 900,
      marginBottom: 10
    }
  }, "Student details are unavailable"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginBottom: 18
    }
  }, "The app build is missing the student detail view. Please use the list view or refresh the page."), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      padding: "10px 18px",
      borderRadius: 12,
      background: C.red,
      color: "#fff",
      border: "none",
      fontWeight: 800,
      cursor: "pointer"
    }
  }, "\u2190 Back to students")));
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));