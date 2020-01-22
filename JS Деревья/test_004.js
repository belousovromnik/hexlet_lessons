const tree = {
  name: '/',
  type: 'directory',
  meta: {},
  children: [
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
    },
    { name: 'hOsts', type: 'file', meta: {} }
  ]
};

const filter = (fn, tree) => {
  if (!fn(tree)) {
    return null;
  }
  const { name, children, ...other } = tree;
  //   console.log(name);
  if (!children) {
    return tree;
  }
  const newChildren = children.map(child => filter(fn, child)).filter(v => v);
  console.log('name', name);
  console.log('other', other);
  console.log('newChildren', newChildren);
  return { name, ...other, children: newChildren };
};

const result = filter(n => n.type === 'directory', tree);
vv = JSON.stringify(result);
console.log(vv);
