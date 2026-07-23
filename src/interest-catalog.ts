// Interest-capture catalog — Jahshii
export const SITE_SLUG = 'jahshii-official';
export const ARTIST_NAME = 'Jahshii';

export type PriceTier = { key: string; label: string };

export type Product = {
  id: string;
  name: string;
  variants: string[];
  priceTiers: PriceTier[];
};

const MERCH_TIERS: PriceTier[] = [
  { key: 't1', label: '$20 – $40' },
  { key: 't2', label: '$40 – $60' },
  { key: 't3', label: '$60+' },
  { key: 'any', label: "Price doesn't matter" },
];

// eBike pricing grounded in Caribbean market entry-level eBike import/shipping
const EBIKE_TIERS: PriceTier[] = [
  { key: 't1', label: '$800 – $1,500 USD' },
  { key: 't2', label: '$1,500 – $2,500 USD' },
  { key: 't3', label: '$2,500+ USD' },
  { key: 'any', label: "Price doesn't matter" },
];

export const MERCH_PRODUCTS: Product[] = [
  { id: 'jahshii-dad-hat', name: 'Music Dad Hat', variants: ['One size'], priceTiers: MERCH_TIERS },
  { id: 'jahshii-racerback', name: '1st Nation Racerback Tank', variants: ['S', 'M', 'L', 'XL'], priceTiers: MERCH_TIERS },
];

export const EBIKE_PRODUCTS: Product[] = [
  { id: 'jahshii-ebike-roots', name: '1st eNation Roots', variants: ['Midnight + Ochre'], priceTiers: EBIKE_TIERS },
  { id: 'jahshii-ebike-earth', name: '1st eNation Earth', variants: ['Forest + Linen'], priceTiers: EBIKE_TIERS },
  { id: 'jahshii-ebike-ember', name: '1st eNation Ember', variants: ['Ember + Black'], priceTiers: EBIKE_TIERS },
];

export const ALL_PRODUCTS: Product[] = [...MERCH_PRODUCTS, ...EBIKE_PRODUCTS];

export function getProduct(id: string): Product | undefined {
  return ALL_PRODUCTS.find(p => p.id === id);
}
