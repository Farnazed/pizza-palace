const { addDataToTable } = require('./models/db');
let sizeData = `('small',12),('medium', 14),('large',16)`;
addDataToTable('pizzaPalace.db', 'sizes', '(size , price)', sizeData);
let basicToppings = `('cheese',0.5, 0.75, 1),('pepperoni',0.5, 0.75, 1),('ham',0.5, 0.75, 1),('pineapple',0.5, 0.75, 1)`;
addDataToTable(
  'pizzaPalace.db',
  'basicToppings',
  '(topping, small, medium, large)',
  basicToppings
);

let deluxeToppings = `('sausage',2, 3, 4),
 ('feta Cheese',2, 3, 4),
 ('tomatoes',2, 3, 4),
 ('olives',2, 3, 4)`;
addDataToTable(
  'pizzaPalace.db',
  'deluxeToppings',
  '(topping, small, medium, large)',
  deluxeToppings
);
