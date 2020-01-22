const reduce = (f, tree, acc) => {
    const [, children] = tree;
    const newAcc = f(acc, tree);
  
    if (!children) {
      return newAcc;
    }
    return children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
  };
  
  const tree = ['A', [
    ['B', [['E'], ['F']]],
    ['C'],
    ['D', [['G'], ['J']]],
  ]];
  
  vv = reduce((acc) => acc + 1, tree, 0);
  console.log(vv);
