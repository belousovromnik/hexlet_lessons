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

const calculateFilesCount = tree =>
  reduce((acc, node) => (node.type === 'file' ? acc + 1 : acc), tree, 0);

const result = tree.children
  .filter(n => n.type === 'directory')
  .map(n => [n.name, calculateFilesCount(n)]);

console.log(result);
