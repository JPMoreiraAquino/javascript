const words = ['João', 'Pedro', 'Moreira', 'Aquino', 'TheBigName']

const bigName = words.reduce((acc, item) => {
    if(item.length > acc.length) {
      return acc;
    }
    return item;
})
console.log(bigName)
