import {
  getRandomElement,
  unwriteEffect,
  writeEffect
} from "../chunk.J4HWBEUR.mjs";

// src/modes/loopTypewriter.ts
var loopTypewriter = async ({currentNode, text}, options) => {
  await writeEffect({currentNode, text}, options);
  const textWithUnescapedAmpersands = text.replaceAll("&", "&amp;");
  const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands;
  fullyWritten && await unwriteEffect(currentNode, options);
};
var mode = async (elements, options) => {
  while (true) {
    if (options.loop) {
      for (const element of elements)
        await loopTypewriter(element, options);
    } else if (options.loopRandom) {
      const element = getRandomElement(elements);
      await loopTypewriter(element, options);
    }
  }
};
export {
  mode
};
