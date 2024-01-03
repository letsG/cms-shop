---
title: 'test-embed-good'
status: 'draft'
author:
  name: ''
  picture: 'https://avatars.githubusercontent.com/u/42511280?v=4'
slug: 'test-embed-good'
description: ''
coverImage: ''
tags: ''
publishedAt: '2024-01-03T23:09:35.259Z'
---

&lt;div id='product-component-1704321967034'&gt;&lt;/div&gt; &lt;script type="text/javascript"&gt; /*&lt;!\[CDATA\[*/ (function () { var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'; if (window.ShopifyBuy) { if (window.ShopifyBuy.UI) { ShopifyBuyInit(); } else { loadScript(); } } else { loadScript(); } function loadScript() { var script = document.createElement('script'); script.async = true; script.src = scriptURL; (document.getElementsByTagName('head')\[0\] || document.getElementsByTagName('body')\[0\]).appendChild(script); script.onload = ShopifyBuyInit; } function ShopifyBuyInit() { var client = ShopifyBuy.buildClient({ domain: '1c6b13-5.myshopify.com', storefrontAccessToken: '4ef8e6e208b1386e40538d0dd643c8ab', }); ShopifyBuy.UI.onReady(client).then(function (ui) { ui.createComponent('product', { id: '8341798551807', node: document.getElementById('product-component-1704321967034'), moneyFormat: '%24%7B%7Bamount%7D%7D', options: { "product": { "styles": { "product": { "@media (min-width: 601px)": { "max-width": "calc(25% - 20px)", "margin-left": "20px", "margin-bottom": "50px" } } }, "buttonDestination": "checkout", "text": { "button": "Buy now" } }, "productSet": { "styles": { "products": { "@media (min-width: 601px)": { "margin-left": "-20px" } } } }, "modalProduct": { "contents": { "img": false, "imgWithCarousel": true, "button": false, "buttonWithQuantity": true }, "styles": { "product": { "@media (min-width: 601px)": { "max-width": "100%", "margin-left": "0px", "margin-bottom": "0px" } } }, "text": { "button": "Add to cart" } }, "option": {}, "cart": { "text": { "total": "Subtotal", "button": "Checkout" } }, "toggle": {} }, }); }); } })(); /*\]\]&gt;*/ &lt;/script&gt;