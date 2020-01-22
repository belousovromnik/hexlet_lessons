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

const downcaseFileNames = tree => {
  const { name, type, children, ...other } = tree;
  if (type === 'file') {
    return { name: name.toLowerCase(), type, ...other };
  }
  return { name, type, ...other, children: children.map(downcaseFileNames) };
};

vv = downcaseFileNames(tree);
console.log(vv);
