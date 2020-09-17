var constructFromPrePost = function(pre, post) {
  if (!pre.length || !post.length) return null
  let rootVal = pre[0]
  let root = new TreeNode(rootVal)
  if (pre.length < 1) return null
  let i = post.findIndex(e => e === pre[1])
  root.left = constructFromPrePost(pre.slice(1, i + 2), post.slice(0, i + 1))
  root.right = constructFromPrePost(pre.slice(i + 2), post.slice(i + 1, post.length - 1))
  return root
}