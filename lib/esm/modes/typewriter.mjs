import {
  onAnimationEnd,
  writeEffect
} from "../chunk.J4HWBEUR.mjs";

// src/modes/typewriter.ts
var cleanChildText = (elements) => elements.forEach((element) => element.currentNode.textContent = "");
var mode = async (elements, options) => {
  if (options.cascade) {
    cleanChildText(elements);
  } else {
    const {getLongestTextElement} = await import("../helpers/index.mjs");
    const lastElementToFinish = getLongestTextElement(elements);
    onAnimationEnd(lastElementToFinish, () => options.dispatch("done"));
  }
  for (const element of elements)
    options.cascade ? await writeEffect(element, options) : writeEffect(element, options);
  options.cascade && options.dispatch("done");
};
export {
  mode
};
