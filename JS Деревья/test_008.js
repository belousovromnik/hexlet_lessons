const tree = {
  name: '/',
  type: 'directory',
  meta: {},
  children: [
    { name: 'hOsts', type: 'file', meta: {} },
    {
      name: 'apache',
      type: 'directory',
      meta: {},
      children: []
    },
    {
      name: 'eTc',
      type: 'directory',
      meta: {},
      children: [
        {
          name: 'NgiNx',
          type: 'directory',
          meta: {},
          children: []
        },
        {
          name: 'CONSUL',
          type: 'directory',
          meta: {},
          children: [{ name: 'CONfig.json', type: 'file', meta: {} }]
        }
      ]
    }
  ]
};

const findEmptyDirsDepth = (root, depth = 4) => {
  const iter = (n, currentDepth, acc) => {
    if (n.type === 'file' || currentDepth > depth) {
      return acc;
    }

    if (n.children.length === 0) {
      return [...acc, n.name];
    }
    return n.children.reduce(
      (cAcc, nn) => iter(nn, currentDepth + 1, cAcc),
      acc
    );
  };

  return iter(root, 0, []);
};

const dirs = findEmptyDirsDepth(tree, 2);
console.log(dirs); // => ['apache']
