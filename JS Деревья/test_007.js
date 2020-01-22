var path = require('path');

const tree = {
  name: '/',
  type: 'directory',
  meta: {},
  children: [
    { name: 'hosts', type: 'file', meta: {} },
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
          children: [{ name: 'cOnfig.json', type: 'file', meta: {} }]
        }
      ]
    }
  ]
};

const findFilesByName = (root, contextIndex = '') => {
  const iter = (n, currentPath, acc) => {
    currentPath = path.join(currentPath, n.name);
    if (n.type === 'file') {
      if (n.name.toLowerCase().includes(contextIndex.toLowerCase())) {
        return [...acc, currentPath];
      }
      return acc;
    }
    return n.children.reduce((cAcc, nn) => iter(nn, currentPath, cAcc), acc);
  };
  return iter(root, '', []);
};
export default findFilesByName;

const dirs = findFilesByName(tree, 'co');
console.log(dirs); // => ['apache']
