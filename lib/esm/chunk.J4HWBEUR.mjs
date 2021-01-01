// src/helpers/cleanChildNodes.ts
var cleanChildNodes = (node) => node.childNodes.forEach((el) => el.remove());

// src/helpers/createElement.ts
var createElement = (text, elementTag) => {
  const element = document.createElement(elementTag);
  element.textContent = text;
  return element;
};

// src/helpers/hasSingleTextNode.ts
var hasSingleTextNode = (el) => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3;

// src/helpers/getElements.ts
var getElements = (parentElement) => {
  if (hasSingleTextNode(parentElement)) {
    const text = parentElement.textContent;
    const childNode = createElement(parentElement.textContent, "p");
    parentElement.textContent = "";
    parentElement.appendChild(childNode);
    return [{currentNode: childNode, text}];
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
  const text = currentNode.innerHTML.replaceAll("&amp;", "&");
  for (let index = text.length - 1; index >= 0; index--) {
    const letter = text[index];
    letter === ">" && (index = text.lastIndexOf("<", index));
    currentNode.innerHTML = text.slice(0, index);
    await typingInterval(options.interval);
  }
};

// src/helpers/writeEffect.ts
var hideCursorOnAnimationEnd = (element) => element.classList.replace("typing", "finished-typing");
var writeEffect = async ({currentNode, text}, options) => {
  currentNode.classList.add("typing");
  for (let index = 0; index <= text.length; index++) {
    const char = text[index];
    char === "<" && (index = text.indexOf(">", index));
    currentNode.innerHTML = text.slice(0, index);
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
var onAnimationEnd = (element, callback) => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const elementAttributeChanged = mutation.type === "attributes";
      const elementFinishedTyping = !mutation.target.classList.contains("typing");
      if (elementAttributeChanged && elementFinishedTyping)
        callback();
    });
  });
  observer.observe(element, {
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

export {
  cleanChildNodes,
  createElement,
  hasSingleTextNode,
  onAnimationEnd,
  rng,
  sleep,
  unwriteEffect,
  getLongestTextElement,
  getElements,
  typingInterval,
  writeEffect,
  getRandomElement
};
