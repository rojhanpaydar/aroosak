/*<![CDATA[*/
window.addEventListener("load", function () {
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "lilaroosak.myshopify.com",
      storefrontAccessToken: "4476e2cc99e17d6064f281593c2a854c",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("collection", {
        id: "262026821792",
        node: document.getElementById("collection-component-1615915517589"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(50% - 40px)",
                  "margin-left": "40px",
                  "margin-bottom": "50px",
                  width: "calc(50% - 40px)",
                },
                img: {
                  height: "calc(100% - 15px)",
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                },
                imgWrapper: {
                  "padding-top": "calc(75% + 15px)",
                  position: "relative",
                  height: "0",
                },
              },
              title: {
                "font-family": "Open Sans, sans-serif",
                color: "#252525",
              },
              button: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px",
                ":hover": {
                  "background-color": "#3f3f3f",
                },
                "background-color": "#252525",
                ":focus": {
                  "background-color": "#3f3f3f",
                },
                "border-radius": "40px",
              },
              quantityInput: {
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px",
              },
              price: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                color: "#252525",
              },
              compareAt: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                color: "#252525",
              },
              unitPrice: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                color: "#252525",
              },
            },
            buttonDestination: "modal",
            contents: {
              options: false,
            },
            text: {
              button: "View product",
            },
            googleFonts: ["Open Sans"],
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-40px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px",
                ":hover": {
                  "background-color": "#3f3f3f",
                },
                "background-color": "#252525",
                ":focus": {
                  "background-color": "#3f3f3f",
                },
                "border-radius": "40px",
              },
              quantityInput: {
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px",
              },
              title: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                "font-size": "26px",
                color: "#252525",
              },
              price: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                "font-size": "18px",
                color: "#252525",
              },
              compareAt: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                "font-size": "15.299999999999999px",
                color: "#252525",
              },
              unitPrice: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                "font-size": "15.299999999999999px",
                color: "#252525",
              },
              description: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                color: "#252525",
              },
            },
            googleFonts: ["Open Sans"],
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px",
                ":hover": {
                  "background-color": "#3f3f3f",
                },
                "background-color": "#252525",
                ":focus": {
                  "background-color": "#3f3f3f",
                },
                "border-radius": "40px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            googleFonts: ["Open Sans"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Open Sans, sans-serif",
                "font-weight": "bold",
                "background-color": "#252525",
                ":hover": {
                  "background-color": "#3f3f3f",
                },
                ":focus": {
                  "background-color": "#3f3f3f",
                },
              },
              count: {
                "font-size": "17px",
              },
            },
            googleFonts: ["Open Sans"],
          },
        },
      });
    });
  }
})();
});

/*]]>*/

// POPUP currently turned off

// setTimeout(function () {
//   Swal.fire({
//     title: "Pssst! 👀 ",
//     text: "Buy any three prints to qualify for FREE SHIPPING!",
//   });
// }, 3000);
