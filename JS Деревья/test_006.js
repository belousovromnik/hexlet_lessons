const tree = {
  name: '/',
  type: 'directory',
  meta: {},
  children: [
    { name: 'hOsts', type: 'file', meta: {} },
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

const reduce = (f, tree, acc) => {
  const { children } = tree;
  const newAcc = f(acc, tree);

  if (!children) {
    return newAcc;
  }
  return children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
};

vv = reduce((acc, n) => acc + 1, tree, 0); // 6
console.log(vv);
