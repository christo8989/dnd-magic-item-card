const items = [
  {
    title: 'Gauntlet of Thunderblasting',
    description: `While wearing this circlet, you can use an action to cast the Scorching Ray spell with it. When you make the spell's attacks, you do so with an **Attack bonus of +5**. The circlet can't be used this way again until the next dawn.`,
    type: 'Uncommon',
    value: '100',
  },
  {
    title: 'Shield',
    description: `While holding this shield, add +2 to your AC.`,
    type: 'Common',
    value: '0.1',
  },
];

items.map((item, index) => {
  item.id = index.toString();
  item.cartType = item.cartType || 'default';
  item.needsAttunement = typeof item.needsAttunement === 'boolean' ? items.needsAttunement : false;
  item.imagePreviewUrl = item.imagePreviewUrl || '';
  return item;
})

export { items }