// 哈希表
// 对于需要被创建的文件名 name，如果文件系统中不存在名为 name 的文件夹，那么直接创建即可，否则我们需要从 k=1 开始，尝试使用添加后缀 k 的新文件名创建新文件夹。
// 使用哈希表 index 记录已创建的文件夹的下一后缀序号，遍历 names 数组，记当前遍历的文件名为 name：
  // 如果 name 不在哈希表中，那么说明文件系统不存在名为 name 的文件夹，我们直接创建该文件夹，并且记录对应文件夹的下一后缀序号为 1。
  // 如果 name 在哈希表中，那么说明文件系统已经存在名为 name 的文件夹，我们在哈希表找到 name 的下一后缀序号 k，逐一尝试直到添加后缀 k 的新文件名不存在于哈希表中，然后创建该文件夹。需要注意的是，创建该文件夹后，有两个文件名的下一后缀序号需要修改，首先文件名 name 的下一后缀序号为 k+1，其次，文件名 name 添加后缀 k 的新文件名的下一后缀序号为 1。

function getFolderNames(names: string[]): string[] {
  const index = new Map, n = names.length
  let res = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
      let name = names[i]
      if (!index.has(name)) {
          res[i] = name
          index.set(name, 1)
      } else {
          let k = index.get(name)
          while (index.has(addSuffix(name, k))) k++
          res[i] = addSuffix(name, k)
          index.set(name, k + 1)
          index.set(addSuffix(name, k), 1)
      }
  }
  return res
};
function addSuffix(name: string, k: number): string {
  return `${name}(${k})`
}