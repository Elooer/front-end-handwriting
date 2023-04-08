function traversalMultipleTree(root) {
  if (!root) {
    return;
  }
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node.value);
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
  }
}