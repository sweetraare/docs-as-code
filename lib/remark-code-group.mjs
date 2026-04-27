export function remarkCodeGroup() {
  // this returns a function to add <CodeGroup /> component 
  return (tree) => {
    for (let i = 0; i < tree.children.length; i++) {
      const element = tree.children[i];

      if (element.type === 'code') {
        const group = [element]
        let nextIndex = i + 1;

        while (tree.children[nextIndex] && tree.children[nextIndex].type === 'code') {
          group.push(tree.children[nextIndex]);
          nextIndex++;
        }

        if (group.length > 1) {
          const wrapper = {
            type: 'mdxJsxFlowElement',
            name: 'CodeGroup',
            attributes: [],
            children: group
          }
          tree.children.splice(i, group.length, wrapper);
        }
      }

    }
  }

}
