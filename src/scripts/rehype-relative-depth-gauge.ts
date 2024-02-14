import { visit } from "unist-util-visit";

import type { Plugin } from "unified";
import type { Root, Element } from "hast";

const main: Plugin<void[], Root> = () => {
  return (tree) => {
    const maxDepth = 5;
    const headingTagName = /h[2-6]/;
    let preDepth = 0;

    visit(tree, "element", (node: Element) => {
      if (headingTagName.test(node.tagName)) {
        const curHeading = node.tagName;
        const curDepth = Number(curHeading.slice(1)) - 2;

        const childrens: Element[] = [...Array(maxDepth)].map(
          (element, index) => {
            const radius = (() => {
              if (index === curDepth) {
                return 5;
              } else if (index < curDepth) {
                if (preDepth <= index) {
                  return 4;
                } else {
                  return 2;
                }
              } else {
                if (index <= preDepth) {
                  return 2;
                } else {
                  return 0;
                }
              }
            })();
            const className = curDepth === index ? " current" : "";

            return {
              type: "element",
              tagName: "circle",
              properties: {
                cx: `${6 + 14 * index}`,
                cy: "6",
                r: String(radius),
                class: `gauge-${index}${className}`,
              },
              children: [],
            };
          }
        );

        node.children.unshift({
          type: "element",
          tagName: "svg",
          properties: {
            viewBox: "0 0 68 12",
            xmls: "http://www.w3.org/2000/svg",
            class: "relative-depth-gauge",
          },
          children: [...childrens],
        });

        preDepth = curDepth;
      }
    });
  };
};

export default main;
