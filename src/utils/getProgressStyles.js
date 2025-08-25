export const getProgressStyles = (percentage) => {
  if (percentage < 40) {
    return {
      trail: { stroke: '#571435' },
      path: { stroke: '#C9225A' },
      text: { fill: '#FFF', fontSize: '2rem', fontWeight: 'bold' },
    };
  }
  if (percentage < 70) {
    return {
      trail: { stroke: '#423D0F' },
      path: { stroke: '#CED130' },
      text: { fill: '#FFF', fontSize: '2rem', fontWeight: 'bold' },
    };
  }
  return {
    trail: { stroke: '#204529' },
    path: { stroke: '#21D07A' },
    text: { fill: '#FFF', fontSize: '2rem', fontWeight: 'bold' },
  };
};


