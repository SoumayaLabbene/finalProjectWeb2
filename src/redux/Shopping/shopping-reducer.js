import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Mat lipstick",
      description:
        "Le Rouge à Lèvres L'Oréal Paris Color Riche Matte est hautement pigmenté. Une texture voluptueuse qui gorge vos lèvres d'hydratation et les préserve du dessèchement pour une couleur mate éclatante toute la journée.",
      price: 40,
      image:
        "https://www.foliecosmetic.com/32010-thickbox_default/l-oréal-color-riche-rouge-à-lèvres-mat-330-cocorico.jpg",
    },
    {
      id: 2,
      title: "Lip oil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 55,
      image:
        "https://i.ebayimg.com/images/g/~b4AAOSwovJeH0Nm/s-l400.jpg",
    },
    {
      id: 3,
      title: "Lipstick set L'oréal",
      description:
        `Cet article contient: 
        1- L'Oréal Paris Fard à Lèvres Infaillible Matte Max 006 Disturbia
        2- L'Oréal Paris Fard à Lèvres Infaillible Matte Max 002 Virgin
        3- L'Oréal Paris Fard à Lèvres Infaillible Matte Max 004 Oops! I Pink It Again
        4- L'Oréal Paris Fard à Lèvres Infaillible Matte Max 007 Say My Name`,
      price: 150,
      image:
        "https://m.media-amazon.com/images/I/41mduKLC8EL._AC_SX355_.jpg",
    },
    {
      id: 4,
      title: "Lipstick set SEPHORA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 90,
      image:
        "https://cdn.shopify.com/s/files/1/1291/4775/products/ipsephora.png?v=1608309445",
    },
    {
      id: 5,
      title: "Mascara Outrageous Extension",
      description:
        "Ce mascara donne un effet extension de cils pour un résultat extrême multi-dimensionnel. C'est le premier mascara Sephora Collection qui apporte un volume extraordinaire avec une longueur démesurée pour un effet extension de cils immédiat !",
      price: 35,
      image:
        "https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw8914188b/images/hi-res/SKU/SKU_5/376117_swatch.jpg?sw=585&sh=585&sm=fit",
    },
    {
      id: 6,
      title: "Mascara Size Up",
      description:
        "Un mascara SEPHORA COLLECTION qui offre un volume extra large immédiat couplé à un effet allongeant et recourbant, pour des cils surdimensionnés dès le premier passage. ",
      price: 45,
      image:
        "https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw09f8a57c/images/hi-res/SKU/SKU_1146/441757_swatch.jpg?sw=585&sh=585&sm=fit",
    },
    {
      id: 7,
      title: "Mascara Lash Paradise",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 50,
      image:
        "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/47/9093/1.jpg?3706",
    },
    {
      id: 8,
      title: "Mascara Sky High",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 40,
      image:
        "https://i1.perfumesclub.com/grande/131587.jpg",
    },
    {
      id: 9,
      title: "Eye palette Flawless",
      description:
        "Avec son large choix de teintes neutres, rouille et brillantes, cette palette est idéale pour le smoky eye. Elle contient 18 fards à paupières mats ou irisés avec des ombres pailletées, pressées et marbrées.",
      price: 50,
      image:
        "https://www.revolutionbeauty.com/dw/image/v2/BCZJ_PRD/on/demandware.static/-/Sites-revbe-master-catalog/default/dwf5308dbf/images/hi-res/1165686_1.jpg",
    },
    {
      id: 10,
      title: "Set of 3 eye palettes",
      description:
        "Ces 3 palettes contiennent chacune 5 nuances sulfureuses et au fini lumineux.",
      price: 90,
      image:
        "https://www.la-parfumerie-discount.fr/2020/palette-yeux-la-petite-palette-l-oreal.jpg",
    },
    {
      id: 11,
      title: "Eye palette Cherry",
      description:
        "This palette contains 16 warm eyeshadow shades in matte and shimmer finishes.",
      price: 55,
      image:
        "https://i.pinimg.com/564x/5f/85/de/5f85de9f1fedc35edb9fb9663bb36b9b.jpg",
    },
    {
      id: 12,
      title: "Vivid Earth eye palette",
      description:
        "Une base yeux et 7 fards à paupières pour créer des looks bohème et moderne aux couleurs intenses et authentiques.",
      price: 40,
      image:
        "https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw6c1da3ed/images/hi-res/SKU/426961.jpg?sw=585&sh=585&sm=fit",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
