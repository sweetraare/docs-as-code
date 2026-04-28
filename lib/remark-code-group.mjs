const supportedLanguages = ['javascript', 'typescript', 'haskell']

export function remarkCodeGroup() {
  // this returns a function to add <CodeGroup /> component
  return (tree) => {
    for (let i = 0; i < tree.children.length; i++) {
      const element = tree.children[i]

      if (element.type === 'code') {
        const group = []

        if (supportedLanguages.includes(element.lang)) {
          group.push(element)
        } else {
          group.push(null)
        }

        let nextIndex = i + 1

        while (
          tree.children[nextIndex] &&
          tree.children[nextIndex].type === 'code'
        ) {
          if (supportedLanguages.includes(tree.children[nextIndex].lang)) {
            group.push(tree.children[nextIndex])
          } else {
            group.push(null)
          }
          nextIndex++
        }

        if (group.length > 1) {
          const wrapper = {
            type: 'mdxJsxFlowElement',
            name: 'CodeGroup',
            attributes: [],
            children: group.filter((a) => a !== null),
          }
          tree.children.splice(i, group.length, wrapper)
        }
      } else if (element.type === 'code') {
        tree.children.splice(i, 1)
      }
    }
  }
}
