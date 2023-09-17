function treeToList(tree, result) {
  for (let i = 0; i < tree.length; i++) {
    result.push(tree[i])
    if (tree[i].children) {
      treeToList(tree[i].children, result)
      delete tree[i].children
    }
  }
}
const result = []


const listTree = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      {
        id: 2,
        name: '部门1-1',
        pid: 1,
        children: [
          {
            id: 4,
            name: '部门1-1-1',
            pid: 2,
            children: []
          }
        ]
      },
      {
        id: 3,
        name: '部门1-2',
        pid: 1,
        children: [
          {
            id: 5,
            name: '部门1-2-1',
            pid: 3,
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '部门2',
    pid: 0,
    children: [
      {
        id: 7,
        name: '部门2-1',
        pid: 6,
        children: []
      }
    ]
  },
  {
    id: 8,
    name: '部门3',
    pid: 0,
    children: []
  }
]

treeToList(listTree, result)
console.log(result)
/* [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门1-1', pid: 1 },
  { id: 4, name: '部门1-1-1', pid: 2 },
  { id: 3, name: '部门1-2', pid: 1 },
  { id: 5, name: '部门1-2-1', pid: 3 },
  { id: 6, name: '部门2', pid: 0 },
  { id: 7, name: '部门2-1', pid: 6 },
  { id: 8, name: '部门3', pid: 0 }
] */