export type CategoryItem = { title: string; text: string };

export type Category = {
  slug: string;
  name: string;
  href: string;
  image: string;
  imageAlt: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroText: string;
  introHeading: string;
  intro: string[];
  rangeHeading: string;
  range: CategoryItem[];
  bulkHeading: string;
  bulk: string[];
  whyHeading: string;
  why: CategoryItem[];
};

const whyShared = (area: string): CategoryItem[] => [
  {
    title: "Trade-Focused Supply",
    text: `We supply ${area} to businesses, not the general public.`,
  },
  {
    title: "Bulk Quantities",
    text: "Orders are arranged in trade quantities to suit your business.",
  },
  {
    title: "Clear Communication",
    text: "Availability, quantities and delivery arrangements are agreed with you directly.",
  },
  {
    title: "UK Based",
    text: "We operate from Stoke-On-Trent and serve trade customers.",
  },
];

export const categories: Category[] = [
  {
    slug: "drinks",
    name: "Wholesale Drinks",
    href: "/services/drinks",
    image: "/images/drinks.svg",
    imageAlt: "Illustration of bottles and cans representing wholesale drinks",
    summary:
      "Bulk soft drinks and beverages for shops, caterers and other trade customers.",
    metaTitle: "Wholesale Drinks Supplier UK | AM TRADE SUPPLIES LTD",
    metaDescription:
      "Wholesale drinks for UK trade customers from AM TRADE SUPPLIES LTD in Stoke-On-Trent. Ask about bulk beverage supply for your business.",
    heroText:
      "Bulk beverage supply for shops, caterers and other UK trade customers.",
    introHeading: "Wholesale Drinks for Trade Customers",
    intro: [
      "AM TRADE SUPPLIES LTD supplies drinks in trade quantities to businesses across the UK.",
      "Whether you run a shop, café or catering operation, we can discuss the drinks your business needs.",
    ],
    rangeHeading: "Drinks Categories",
    range: [
      {
        title: "Soft Drinks",
        text: "Fizzy and still soft drinks for retail and catering use.",
      },
      {
        title: "Bottled Water",
        text: "Still and sparkling water in multipack and bulk formats.",
      },
      {
        title: "Juices and Squashes",
        text: "Juice drinks and cordials for resale or service.",
      },
      {
        title: "Energy and Sports Drinks",
        text: "Functional drinks for convenience and retail customers.",
      },
    ],
    bulkHeading: "Bulk Drinks Supply",
    bulk: [
      "We can discuss case and pallet quantities to suit your storage and sales.",
      "Availability changes, so please ask us what is currently available.",
    ],
    whyHeading: "Why Choose AM TRADE SUPPLIES LTD",
    why: whyShared("drinks"),
  },
  {
    slug: "cooking-oils",
    name: "Wholesale Cooking Oils",
    href: "/services/cooking-oils",
    image: "/images/cooking-oils.svg",
    imageAlt: "Illustration of cooking oil bottles representing wholesale cooking oils",
    summary:
      "Cooking oils in trade quantities for restaurants, takeaways and food businesses.",
    metaTitle: "Wholesale Cooking Oils Supplier UK | AM TRADE SUPPLIES LTD",
    metaDescription:
      "Wholesale cooking oils for UK restaurants, takeaways and caterers from AM TRADE SUPPLIES LTD in Stoke-On-Trent. Enquire about bulk supply.",
    heroText:
      "Cooking oils in trade quantities for kitchens and food businesses.",
    introHeading: "Wholesale Cooking Oils for Food Businesses",
    intro: [
      "Kitchens rely on a steady supply of cooking oil.",
      "AM TRADE SUPPLIES LTD can discuss bulk cooking oil supply for restaurants, takeaways and caterers.",
    ],
    rangeHeading: "Cooking Oil Categories",
    range: [
      {
        title: "Vegetable Oil",
        text: "General-purpose oil for everyday cooking and frying.",
      },
      {
        title: "Sunflower Oil",
        text: "A popular choice for frying and general kitchen use.",
      },
      {
        title: "Rapeseed Oil",
        text: "A versatile oil for cooking and baking.",
      },
      {
        title: "Olive Oil",
        text: "For dressing, cooking and finishing dishes.",
      },
    ],
    bulkHeading: "Bulk Cooking Oil Supply",
    bulk: [
      "We can talk through container sizes and quantities that suit your kitchen.",
      "Please ask us which oils and pack sizes are currently available.",
    ],
    whyHeading: "Why Choose AM TRADE SUPPLIES LTD",
    why: whyShared("cooking oils"),
  },
  {
    slug: "flour",
    name: "Wholesale Flour",
    href: "/services/flour",
    image: "/images/flour.svg",
    imageAlt: "Illustration of flour sacks representing wholesale flour",
    summary:
      "Flour in bulk sacks for bakeries, caterers and food producers.",
    metaTitle: "Wholesale Flour Supplier UK | AM TRADE SUPPLIES LTD",
    metaDescription:
      "Wholesale flour for UK bakeries, caterers and food producers from AM TRADE SUPPLIES LTD in Stoke-On-Trent. Ask about bulk flour supply.",
    heroText: "Bulk flour supply for bakeries, caterers and food producers.",
    introHeading: "Wholesale Flour for Bakers and Caterers",
    intro: [
      "Flour is a core ingredient for bakeries and kitchens of every size.",
      "AM TRADE SUPPLIES LTD can discuss bulk flour supply for your business.",
    ],
    rangeHeading: "Flour Categories",
    range: [
      {
        title: "Plain Flour",
        text: "An all-purpose flour for baking and cooking.",
      },
      {
        title: "Self-Raising Flour",
        text: "For cakes, scones and other baked goods.",
      },
      {
        title: "Bread Flour",
        text: "A strong flour suited to bread and dough.",
      },
      {
        title: "Wholemeal Flour",
        text: "For wholemeal breads and baking.",
      },
    ],
    bulkHeading: "Bulk Flour Supply",
    bulk: [
      "We can discuss sack sizes and quantities to suit your production.",
      "Please ask us which types and sack sizes are currently available.",
    ],
    whyHeading: "Why Choose AM TRADE SUPPLIES LTD",
    why: whyShared("flour"),
  },
  {
    slug: "confectionery",
    name: "Wholesale Confectionery",
    href: "/services/confectionery",
    image: "/images/confectionery.svg",
    imageAlt: "Illustration of sweets and a lollipop representing wholesale confectionery",
    summary:
      "Chocolates, sweets, gum and more in bulk for shops and trade customers.",
    metaTitle: "Wholesale Confectionery Supplier UK | AM TRADE SUPPLIES LTD",
    metaDescription:
      "Wholesale confectionery for UK trade customers from AM TRADE SUPPLIES LTD in Stoke-On-Trent. Chocolates, sweets, chewing gum, toffees and lollipops in bulk.",
    heroText:
      "Chocolates, sweets, chewing gum and more in trade quantities for UK businesses.",
    introHeading: "Wholesale Confectionery for Trade Customers",
    intro: [
      "Confectionery is a steady seller for shops, kiosks and convenience stores.",
      "AM TRADE SUPPLIES LTD can discuss bulk confectionery supply for your business.",
    ],
    rangeHeading: "Confectionery Categories",
    range: [
      {
        title: "Wholesale Chocolates",
        text: "Chocolate bars, countlines and boxed chocolates for resale.",
      },
      {
        title: "Wholesale Sweets and Candies",
        text: "Pick-and-mix style sweets, gummies and boiled sweets in bulk.",
      },
      {
        title: "Wholesale Chewing Gum",
        text: "Chewing gum and mints for counter and checkout sales.",
      },
      {
        title: "Wholesale Toffees and Lollipops",
        text: "Toffees, fudge and lollipops in trade packs.",
      },
    ],
    bulkHeading: "Bulk Confectionery Supply",
    bulk: [
      "We can discuss case and carton quantities to suit your shop or business.",
      "Availability changes, so please ask us what is currently available.",
    ],
    whyHeading: "Why Choose AM TRADE SUPPLIES LTD",
    why: whyShared("confectionery"),
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
