const tree = {
  name: '/',
  type: 'directory',
  meta: {},
  children: [
    { name: 'hosts.txt', type: 'file', meta: { size: 800 } },
    { name: 'Draft.doc', type: 'file', meta: { size: 370 } },
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
          children: [
            { name: 'data', type: 'file', meta: { size: 1200 } },
            { name: 'raft', type: 'file', meta: { size: 8200 } },
            { name: 'resolve', type: 'file', meta: { size: 80 } }
          ]
        },
        { name: 'resolve', type: 'file', meta: { size: 1000 } },
        {
          name: 'CONSUL',
          type: 'directory',
          meta: {},
          children: [
            { name: 'cOnfig.json', type: 'file', meta: { size: 1000 } }
          ]
        }
      ]
    }
  ]
};

const reduce = tree => {
  const iter = (n, treeAcc, iterAcc) => {
    if (n.type === 'file') {
      return iterAcc + n.meta.size;
    }

    if (n.children.length === 0) {
      return treeAcc;
    }
    return n.children.reduce(
      (iterAcc, nn) => iter(nn, treeAcc, iterAcc),
      iterAcc
    );
  };

  return iter(tree, 0, 0);
};

const calculateFilesSize = tree => reduce(tree);

// const calculateFilesSize = tree =>
// tree.children.reduce((acc, node) => node.type === 'file' ? acc + node.meta.size : acc, 0);

const inputDir = tree.children
  .filter(n => n.type === 'directory')
  .map(n => [n.name, calculateFilesSize(n)]);
// console.log(inputDir);

// const inputDir = tree.children
//   .filter(n => n.type === 'directory')
//   .map(n => [n.name, calculateFilesSize(n)]);

const inputFiles = tree.children
  .filter(n => n.type === 'file')
  .map(n => [n.name, n.meta.size]);

const itog = [...inputDir, ...inputFiles].sort((a, b) => b[1] - a[1]);
console.log(itog);
