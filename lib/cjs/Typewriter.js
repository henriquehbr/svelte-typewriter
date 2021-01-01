var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  __markAsModule(target);
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true}), module2);
};

// src/helpers/index.ts
var require_helpers = __commonJS((exports2) => {
  __export(exports2, {
    cleanChildNodes: () => cleanChildNodes,
    createElement: () => createElement,
    getElements: () => getElements,
    getLongestTextElement: () => getLongestTextElement,
    getRandomElement: () => getRandomElement,
    hasSingleTextNode: () => hasSingleTextNode,
    onAnimationEnd: () => onAnimationEnd,
    rng: () => rng,
    sleep: () => sleep,
    typingInterval: () => typingInterval,
    unwriteEffect: () => unwriteEffect,
    writeEffect: () => writeEffect
  });
});

// src/modes/loopTypewriter.ts
var require_loopTypewriter = __commonJS((exports2) => {
  __export(exports2, {
    mode: () => mode
  });
  var helpers2 = __toModule(require_helpers());
  var loopTypewriter = async ({currentNode, text: text2}, options) => {
    await helpers2.writeEffect({currentNode, text: text2}, options);
    const textWithUnescapedAmpersands = text2.replaceAll("&", "&amp;");
    const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands;
    fullyWritten && await helpers2.unwriteEffect(currentNode, options);
  };
  var mode = async (elements, options) => {
    while (true) {
      if (options.loop) {
        for (const element2 of elements)
          await loopTypewriter(element2, options);
      } else if (options.loopRandom) {
        const element2 = helpers2.getRandomElement(elements);
        await loopTypewriter(element2, options);
      }
    }
  };
});

// src/modes/typewriter.ts
var require_typewriter = __commonJS((exports2) => {
  __export(exports2, {
    mode: () => mode
  });
  var helpers2 = __toModule(require_helpers());
  var cleanChildText = (elements) => elements.forEach((element2) => element2.currentNode.textContent = "");
  var mode = async (elements, options) => {
    if (options.cascade) {
      cleanChildText(elements);
    } else {
      const {getLongestTextElement: getLongestTextElement2} = await Promise.resolve().then(() => __toModule(require_helpers()));
      const lastElementToFinish = getLongestTextElement2(elements);
      helpers2.onAnimationEnd(lastElementToFinish, () => options.dispatch("done"));
    }
    for (const element2 of elements)
      options.cascade ? await helpers2.writeEffect(element2, options) : helpers2.writeEffect(element2, options);
    options.cascade && options.dispatch("done");
  };
});

// src/Typewriter.esbuild-svelte-fake-css
var require_ = __commonJS((exports2, module2) => {
  module2.exports = {};
});

// src/Typewriter.svelte
__export(exports, {
  default: () => Typewriter_default
});

// node_modules/svelte/internal/index.mjs
function noop() {
}
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === void 0) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}
var is_client = typeof window !== "undefined";
var tasks = new Set();
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function empty() {
  return text("");
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? "important" : "");
}
function toggle_class(element2, name, toggle) {
  element2.classList[toggle ? "add" : "remove"](name);
}
function custom_event(type, detail) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, false, false, detail);
  return e;
}
var active_docs = new Set();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
var flushing = false;
var seen_callbacks = new Set();
function flush() {
  if (flushing)
    return;
  flushing = true;
  do {
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
var outroing = new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
function mount_component(component, target, anchor) {
  const {fragment, on_mount, on_destroy, after_update} = component.$$;
  fragment && fragment.m(target, anchor);
  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);
    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      run_all(new_on_destroy);
    }
    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const prop_values = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    callbacks: blank_object(),
    dirty,
    skip_bound: false
  };
  let ready = false;
  $$.ctx = instance2 ? instance2(component, prop_values, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }
    connectedCallback() {
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr2, _oldValue, newValue) {
      this[attr2] = newValue;
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};

// src/helpers/cleanChildNodes.ts
var cleanChildNodes = (node) => node.childNodes.forEach((el) => el.remove());

// src/helpers/createElement.ts
var createElement = (text2, elementTag) => {
  const element2 = document.createElement(elementTag);
  element2.textContent = text2;
  return element2;
};

// src/helpers/hasSingleTextNode.ts
var hasSingleTextNode = (el) => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3;

// src/helpers/getElements.ts
var getElements = (parentElement) => {
  if (hasSingleTextNode(parentElement)) {
    const text2 = parentElement.textContent;
    const childNode = createElement(parentElement.textContent, "p");
    parentElement.textContent = "";
    parentElement.appendChild(childNode);
    return [{currentNode: childNode, text: text2}];
  } else {
    const childElements = [...parentElement.children];
    return childElements.map((currentNode) => {
      const textWithFilteredAmpersand = currentNode.innerHTML.replaceAll("&amp;", "&");
      return {
        currentNode,
        text: textWithFilteredAmpersand
      };
    });
  }
};

// src/helpers/rng.ts
var rng = (min, max) => Math.floor(Math.random() * (max - min) + min);

// src/helpers/sleep.ts
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// src/helpers/typingInterval.ts
var typingInterval = async (interval) => sleep(Array.isArray(interval) ? interval[rng(0, interval.length)] : interval);

// src/helpers/unwriteEffect.ts
var unwriteEffect = async (currentNode, options) => {
  options.dispatch("done");
  await typingInterval(typeof options.loop === "number" ? options.loop : 1500);
  const text2 = currentNode.innerHTML.replaceAll("&amp;", "&");
  for (let index = text2.length - 1; index >= 0; index--) {
    const letter = text2[index];
    letter === ">" && (index = text2.lastIndexOf("<", index));
    currentNode.innerHTML = text2.slice(0, index);
    await typingInterval(options.interval);
  }
};

// src/helpers/writeEffect.ts
var hideCursorOnAnimationEnd = (element2) => element2.classList.replace("typing", "finished-typing");
var writeEffect = async ({currentNode, text: text2}, options) => {
  currentNode.classList.add("typing");
  for (let index = 0; index <= text2.length; index++) {
    const char = text2[index];
    char === "<" && (index = text2.indexOf(">", index));
    currentNode.innerHTML = text2.slice(0, index);
    await typingInterval(options.interval);
  }
  hideCursorOnAnimationEnd(currentNode);
};

// src/helpers/getLongestTextElement.ts
var descendingSortFunction = (firstElement, secondElement) => secondElement.text.length - firstElement.text.length;
var getLongestTextElement = (elements) => {
  const descendingTextLengthOrder = elements.sort(descendingSortFunction);
  const longestTextElement = descendingTextLengthOrder[0].currentNode;
  return longestTextElement;
};

// src/helpers/onAnimationEnd.ts
var onAnimationEnd = (element2, callback) => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const elementAttributeChanged = mutation.type === "attributes";
      const elementFinishedTyping = !mutation.target.classList.contains("typing");
      if (elementAttributeChanged && elementFinishedTyping)
        callback();
    });
  });
  observer.observe(element2, {
    attributes: true,
    childList: true,
    subtree: true
  });
};

// src/helpers/getRandomElement.ts
var alreadyChoosenTexts = [];
var getRandomElement = (elements) => {
  while (true) {
    const randomIndex = rng(0, elements.length);
    const isTextDifferentFromPrevious = typeof alreadyChoosenTexts === "number" && randomIndex !== alreadyChoosenTexts;
    const isTextFirstTime = Array.isArray(alreadyChoosenTexts) && !alreadyChoosenTexts.includes(randomIndex);
    if (isTextFirstTime || isTextDifferentFromPrevious) {
      isTextDifferentFromPrevious && (alreadyChoosenTexts = []);
      alreadyChoosenTexts.push(randomIndex);
      const randomText = elements[randomIndex];
      return randomText;
    }
    const restartRandomizationCycle = alreadyChoosenTexts.length === elements.length;
    restartRandomizationCycle && (alreadyChoosenTexts = alreadyChoosenTexts.pop());
  }
};

// src/modes/index.ts
var helpers = __toModule(require_helpers());
var typewriter = async (node, options) => {
  const {mode} = options.loop || options.loopRandom ? await Promise.resolve().then(() => __toModule(require_loopTypewriter())) : await Promise.resolve().then(() => __toModule(require_typewriter()));
  const elements = helpers.getElements(node);
  if (options.delay > 0) {
    const {sleep: sleep3} = await Promise.resolve().then(() => __toModule(require_helpers()));
    await sleep3(options.delay);
    node.classList.remove("delay");
  }
  mode(elements, options);
};

// src/Typewriter.svelte
function create_key_block(ctx) {
  let div;
  let typewriter_action;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[9].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[8], null);
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr(div, "class", "typewriter-container svelte-oiwkiz");
      set_style(div, "--cursor-color", typeof ctx[0] === "string" ? ctx[0] : "black");
      toggle_class(div, "cursor", ctx[0]);
      toggle_class(div, "delay", ctx[2].delay > 0);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
      if (!mounted) {
        dispose = action_destroyer(typewriter_action = typewriter.call(null, div, ctx[2]));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty & 256) {
          update_slot(default_slot, default_slot_template, ctx2, ctx2[8], dirty, null, null);
        }
      }
      if (!current || dirty & 1) {
        set_style(div, "--cursor-color", typeof ctx2[0] === "string" ? ctx2[0] : "black");
      }
      if (typewriter_action && is_function(typewriter_action.update) && dirty & 4)
        typewriter_action.update.call(null, ctx2[2]);
      if (dirty & 1) {
        toggle_class(div, "cursor", ctx2[0]);
      }
      if (dirty & 4) {
        toggle_class(div, "delay", ctx2[2].delay > 0);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let previous_key = ctx[1];
  let key_block_anchor;
  let current;
  let key_block = create_key_block(ctx);
  return {
    c() {
      key_block.c();
      key_block_anchor = empty();
    },
    m(target, anchor) {
      key_block.m(target, anchor);
      insert(target, key_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 2 && safe_not_equal(previous_key, previous_key = ctx2[1])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o(local) {
      transition_out(key_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(key_block_anchor);
      key_block.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let {$$slots: slots = {}, $$scope} = $$props;
  let {interval = 30} = $$props;
  let {cascade = false} = $$props;
  let {loop = false} = $$props;
  let {loopRandom = false} = $$props;
  let {cursor = true} = $$props;
  let {delay = 0} = $$props;
  let isMounted = false;
  let reinit = {};
  const dispatch = createEventDispatcher();
  beforeUpdate(() => isMounted && $$invalidate(1, reinit = {}));
  onMount(() => isMounted = true);
  $$self.$$set = ($$props2) => {
    if ("interval" in $$props2)
      $$invalidate(3, interval = $$props2.interval);
    if ("cascade" in $$props2)
      $$invalidate(4, cascade = $$props2.cascade);
    if ("loop" in $$props2)
      $$invalidate(5, loop = $$props2.loop);
    if ("loopRandom" in $$props2)
      $$invalidate(6, loopRandom = $$props2.loopRandom);
    if ("cursor" in $$props2)
      $$invalidate(0, cursor = $$props2.cursor);
    if ("delay" in $$props2)
      $$invalidate(7, delay = $$props2.delay);
    if ("$$scope" in $$props2)
      $$invalidate(8, $$scope = $$props2.$$scope);
  };
  let options;
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 249) {
      $:
        $$invalidate(2, options = {
          interval,
          cascade,
          loop,
          loopRandom,
          cursor,
          delay,
          dispatch
        });
    }
  };
  return [
    cursor,
    reinit,
    options,
    interval,
    cascade,
    loop,
    loopRandom,
    delay,
    $$scope,
    slots
  ];
}
var Typewriter = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      interval: 3,
      cascade: 4,
      loop: 5,
      loopRandom: 6,
      cursor: 0,
      delay: 7
    });
  }
};
var Typewriter_default = Typewriter;
require_();
