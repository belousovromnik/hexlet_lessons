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

// В коде используются два разных map. Один самописный, другой на массиве.
const map = (f, tree) => {
  // Извлекаем детей из узла.
  //   const { children, ...other } = tree;
  // Применяем к узлу переданную функцию
  // и извлекаем имя изменённого узла.
  const { ...newTree } = f(tree);
  console.log('newTree ***************************************************');
  console.log(newTree);
  // Если узел не содержит детей
  // возвращаем его с изменённым именем.
  if (!tree.children) {
    return newTree;
  }
  // Возвращаем узел с именем и детьми,
  // для каждого из которых вызывается
  // наша функция map
  return { ...newTree, children: tree.children.map(c => map(f, c)) };
};

// const tree = ['A', [['B', [['E'], ['F']]], ['C'], ['D', [['G'], ['J']]]]];

// Вызываем map и передаём в неё функцию,
// которая приводит имя узла к нижнему регистру.
const mappedTree = map(n => ({ ...n, name: n.name.toUpperCase() }), tree);

vv = JSON.stringify(mappedTree);
console.log(vv);
