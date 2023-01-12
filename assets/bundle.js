/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/Cart.js":
/*!*************************!*\
  !*** ./scripts/Cart.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var _Cartline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cartline */ \"./scripts/Cartline.js\");\n\n\nclass Cart {\n  constructor() {\n    this.cartlines = [];\n    this.numberOfItems = 0;\n    this.totalPrice = 0;\n  }\n\n  getCartlines() {\n    return this.cartlines;\n  }\n  getNumberOfItem() {\n    return this.numberOfItems;\n  }\n  getTotalPrice() {\n    this.totalPrice = this.calcTotalPrice();\n    return this.getTotalPrice;\n  }\n  setCartlines(cartlines) {\n    this.cartlines = cartlines;\n  }\n  setNumberOfItems(numberOfItems) {\n    this.numberOfItems = numberOfItems;\n  }\n\n  calcTotalPrice() {\n    let s = 0;\n    this.cartlines.forEach((cl) => {\n      s += parseInt(cl.getTotalPrice());\n    });\n    return s;\n  }\n\n  isCartlineExist(cartline) {\n    for (let i = 0; i < this.cartlines.length; i++) {\n      const res = this.cartlines[i].getID() == cartline.getID();\n      if (res == true) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  getCartlineByID(id) {\n    return this.cartlines.find(cartLine => cartLine.getID() === id)\n  }\n\n  addCartline(cartline) {\n    if (this.isCartlineExist(cartline)) {\n      const cl = this.getCartlineByID(cartline.getID());\n      cl.setQtt(cl.getQtt() + 1);\n      this.setNumberOfItems(this.getNumberOfItem + 1);\n    } else {\n      this.cartlines.push(\n        new _Cartline__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n          cartline.getImg(),\n          cartline.getTitle(),\n          cartline.getDesc(),\n          cartline.getPricePerOne(),\n          cartline.getID()\n        )\n      );\n      this.setNumberOfItems(this.getNumberOfItem + 1);\n    }\n    this.makeHtmlElement();\n  }\n\n  removeCartline(id) {\n    if (this.getCartlineByID(id) != null) {\n      const cl = this.getCartlineByID(id);\n      let i;\n\n      for (i = 0; i < this.cartlines.length; i++) {\n        if (id == this.cartlines[i].getID()) {\n          break;\n        }\n      }\n      this.cartlines.splice(i, 1);\n      if (this.cartlines.length == 0) {\n        document.querySelector(\".cart-wrapper\").classList.toggle(\"active\");\n        document.querySelector(\".catalog\").classList.toggle(\"active\");\n      }\n    }\n    this.makeHtmlElement();\n  }\n\n  makeHtmlElement() {\n    const cartBox = document.querySelector(\".cart-box\");\n    cartBox.innerHTML = \"\";\n    \n    this.cartlines.forEach((cl) => {\n      cartBox.appendChild(cl.makeHtmlElement());\n    });\n\n    document.querySelector(\".cart-summary .total-price span\").innerText =\n      this.calcTotalPrice();\n  }\n}\n\n\n//# sourceURL=webpack:///./scripts/Cart.js?");

/***/ }),

/***/ "./scripts/Cartline.js":
/*!*****************************!*\
  !*** ./scripts/Cartline.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cartline)\n/* harmony export */ });\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart */ \"./scripts/Cart.js\");\n\n\nclass Cartline { \n    constructor(img, title, desc, pricePerOne, id) {\n        this.img = img\n        this.title = title\n        this.desc = desc\n        this.pricePerOne = pricePerOne\n        this.id = id\n        this.qtt = 1\n    }\n\n    isEqual(other){\n        if (this.id == other.id){\n            return true\n        }else{\n            return false\n        }\n    }\n\n    getImg() {\n        return this.img\n    }\n    getTitle() {\n        return this.title\n    }\n    getDesc() {\n        return this.desc\n    }\n    getPricePerOne() {\n        return this.pricePerOne\n    }\n    getID() {\n        return this.id\n    }\n    getQtt() {\n        return this.qtt\n    }\n    setQtt(qtt){\n        this.qtt = qtt\n    }\n    getTotalPrice() {\n        return this.qtt * this.pricePerOne\n    }\n\n    makeHtmlElement() {\n\n        const cartlineDiv = document.createElement(\"div\");\n        cartlineDiv.classList.add(\"cartline\");\n        cartlineDiv.setAttribute(\"attr-id\", this.id);\n\n        const deleteCartItem = document.createElement(\"div\");\n        deleteCartItem.classList.add(\"delete-cartitem\");\n        const xIcon = document.createElement(\"i\");\n        xIcon.classList.add(\"fa-solid\");\n        xIcon.classList.add(\"fa-xmark\");\n        deleteCartItem.appendChild(xIcon);\n\n        const itemDetailsWrapperDiv = document.createElement(\"div\");\n        itemDetailsWrapperDiv.classList.add(\"item-details-wrapper\");\n\n        const itemImgDiv = document.createElement(\"div\");\n        itemImgDiv.classList.add(\"item-img\");\n        const itemImgElement = document.createElement(\"img\");\n        itemImgElement.setAttribute(\"src\", this.img);\n        itemImgElement.setAttribute(\"alt\", this.title);\n        itemImgDiv.appendChild(itemImgElement);\n\n        const itemText = document.createElement(\"div\");\n        itemText.classList.add(\"item-text\");\n        const itemTitle = document.createElement(\"h4\");\n        itemTitle.innerHTML = `<span class='qtt'>${this.qtt}</span>x ${this.title}`;\n        const itemDesc = document.createElement(\"p\");\n        itemDesc.classList.add(\"desc\");\n        itemDesc.innerText = this.desc;\n        itemText.appendChild(itemTitle) // add title\n        itemText.appendChild(itemDesc) // add desc\n\n        itemDetailsWrapperDiv.appendChild(itemImgDiv)\n        itemDetailsWrapperDiv.appendChild(itemText)\n\n        const totalPrice = document.createElement(\"p\");\n        totalPrice.classList.add(\"total-price\");\n        totalPrice.innerHTML = `<span>${this.getTotalPrice()} </span>₪`;\n\n        cartlineDiv.appendChild(deleteCartItem)\n        cartlineDiv.appendChild(itemDetailsWrapperDiv)\n        cartlineDiv.appendChild(totalPrice)\n\n        return cartlineDiv;\n    }\n\n}\n\n//# sourceURL=webpack:///./scripts/Cartline.js?");

/***/ }),

/***/ "./scripts/Catalog.js":
/*!****************************!*\
  !*** ./scripts/Catalog.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Catalog)\n/* harmony export */ });\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ \"./scripts/Item.js\");\n\n\nclass Catalog {\n    constructor() {\n        this.items = []\n    }\n\n    getItems() {\n        return this.items\n    }\n    setItems(items) {\n        this.items = items\n    }\n    addItem(item) {\n        this.items.push(item);\n        document.querySelector(\".catalog\").appendChild(item.makeHtmlElement())\n    }\n}\n\n//# sourceURL=webpack:///./scripts/Catalog.js?");

/***/ }),

/***/ "./scripts/Item.js":
/*!*************************!*\
  !*** ./scripts/Item.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Item)\n/* harmony export */ });\nclass Item {\n    constructor(img, title, desc, price, id) {\n        this.img = img\n        this.title = title\n        this.desc = desc\n        this.price = price\n        this.id = id\n    }\n    getId() {\n        return this.id\n    }\n    getImg() {\n        return this.img\n    }\n    getTitle() {\n        return this.title\n    }\n    getDesc() {\n        return this.desc\n    }\n    getPrice() {\n        return this.price\n    }\n    setImg(img) {\n        this.img = img\n    }\n    setTitle(title) {\n        this.title = title\n    }\n    setDesc(desc) {\n        this.desc = desc\n    }\n    setPrice(price) {\n        this.price = price\n    }\n\n    makeHtmlElement() {\n        const st = \"'\" +this.img + \"', \" + this.title + \", \" + this.desc + \", \" + this.price + \", \" + this.id\n\n          /* Create Item wrapper div */\n          const itemDiv = document.createElement(\"div\");\n          itemDiv.classList.add(\"item\");\n          itemDiv.setAttribute(\"attr_img\", this.img)\n          itemDiv.setAttribute(\"attr_title\", this.title)\n          itemDiv.setAttribute(\"attr_desc\", this.desc)\n          itemDiv.setAttribute(\"attr_price\", this.price)\n          itemDiv.setAttribute(\"attr_id\", this.id)\n  \n          /* create item__img div */\n          const item_imgDiv = document.createElement(\"div\");\n          item_imgDiv.classList.add(\"item__img\");\n  \n          /* create img tag */\n          const imgElememt = document.createElement(\"img\");\n          imgElememt.setAttribute(\"src\", this.img);\n          imgElememt.setAttribute(\"alt\", \"item img\");\n  \n          /* add img tag to the imgDiv\n              add the imgDiv to the itemDiv */\n          item_imgDiv.appendChild(imgElememt);\n          itemDiv.appendChild(item_imgDiv);\n\n          /* Create item__details */\n          const item__detailsDiv = document.createElement(\"div\");\n          item__detailsDiv.classList.add(\"item-details\");\n\n          const itemTitle = document.createElement(\"p\");\n          itemTitle.classList.add(\"item__title\");\n          itemTitle.innerText = this.title;\n\n          const itemDesc = document.createElement(\"p\");\n          itemDesc.classList.add(\"item__desc\");\n          itemDesc.innerText = this.desc;\n          \n          const itemPrice = document.createElement(\"p\");\n          itemPrice.classList.add(\"item__price\");\n          itemPrice.innerHTML = `<span>Price: </span>${this.price}₪`;\n\n          const addToCartElement = document.createElement(\"div\");\n          addToCartElement.classList.add(\"add-to-cart-wrapper\");\n          const addToCartBtn = document.createElement(\"button\");\n          addToCartBtn.classList.add(\"add-to-cart-btn\")\n          addToCartBtn.innerText = \"Add\"\n\n          addToCartElement.appendChild(addToCartBtn);\n          item__detailsDiv.appendChild(itemTitle)\n          item__detailsDiv.appendChild(itemDesc)\n          item__detailsDiv.appendChild(itemPrice)\n          item__detailsDiv.appendChild(addToCartElement)\n\n          itemDiv.appendChild(item__detailsDiv)\n\n          return itemDiv;\n\n    }\n}\n\n//# sourceURL=webpack:///./scripts/Item.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ \"./scripts/Item.js\");\n/* harmony import */ var _Catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalog */ \"./scripts/Catalog.js\");\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart */ \"./scripts/Cart.js\");\n/* harmony import */ var _Cartline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cartline */ \"./scripts/Cartline.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script */ \"./scripts/script.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./scripts/main.js?");

/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cartline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cartline */ \"./scripts/Cartline.js\");\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart */ \"./scripts/Cart.js\");\n/* harmony import */ var _Catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Catalog */ \"./scripts/Catalog.js\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item */ \"./scripts/Item.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n\n\n\n\n\n\n\nfunction handleCartClick() {\n  document.querySelector(\".cart-wrapper\").classList.toggle(\"active\");\n  document.querySelector(\".catalog\").classList.toggle(\"active\");\n}\n\ndocument.querySelector(\".open-close-cart\").addEventListener(\"click\", () => {\n  handleCartClick()\n});\n\ndocument.querySelector(\"main\").style.height =\n  window.innerHeight - document.querySelector(\"header\").offsetHeight + \"px\";\n\nconst catalog = new _Catalog__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n_data_json__WEBPACK_IMPORTED_MODULE_4__.items.map((item, i) => {\n  const ITEM = new _Item__WEBPACK_IMPORTED_MODULE_3__[\"default\"](item.img, item.title, item.desc, item.price, i);\n  catalog.addItem(ITEM);\n});\n\nlet maxHeightImg = 0;\ndocument\n  .querySelectorAll(\".catalog .item .item__img\")\n  .forEach((itemImgElement) => {\n    if (maxHeightImg < itemImgElement.offsetHeight)\n      maxHeightImg = itemImgElement.offsetHeight;\n  });\n\ndocument.querySelectorAll(\".catalog .item .item__img\").forEach((itemImgElement) => {itemImgElement.style.height = maxHeightImg + \"px\";});\n\n\nconst searchBar = document.querySelector(\".search-bar-wrapper input\");\nsearchBar.addEventListener(\"input\", () => {\n  document.querySelectorAll(\".item\").forEach((itemElement) => {\n    if (\n      itemElement\n        .querySelector(\".item__title\")\n        .innerHTML.toLocaleLowerCase()\n        .includes(searchBar.value.toLocaleLowerCase())\n    )\n      itemElement.classList.remove(\"unvisible\");\n    else {\n      itemElement.classList.add(\"unvisible\");\n    }\n  });\n});\n\nconst cart = new _Cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ncart.makeHtmlElement();\n\nfunction addItemToCart(img, title, desc, price, id) {\n  const newCartline = new _Cartline__WEBPACK_IMPORTED_MODULE_0__[\"default\"](img, title, desc, price, id);\n  cart.addCartline(newCartline);\n}\n\ndocument.querySelectorAll(\".catalog .item\").forEach((item) => {\n  item.querySelector(\".add-to-cart-btn\").addEventListener(\"click\", () => {\n    const newCL = new _Cartline__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      item.getAttribute(\"attr_img\"),\n      item.getAttribute(\"attr_title\"),\n      item.getAttribute(\"attr_desc\"),\n      item.getAttribute(\"attr_price\"),\n      item.getAttribute(\"attr_id\")\n    );\n    cart.addCartline(newCL);\n  });\n});\n\n\nfunction removeCartline() {\n  \n  document\n    .querySelectorAll(\".cart-wrapper .cart-box .cartline\")\n    .forEach((cl) => {\n      cl.querySelector(\".delete-cartitem\").addEventListener(\"click\", () => {  \n        cart.removeCartline(cl.getAttribute(\"attr-id\"));\n      });\n    });\n}\n\nsetInterval(() => {\n    removeCartline();\n}, 100);\n\n//# sourceURL=webpack:///./scripts/script.js?");

/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"items\":[{\"img\":\"https://www.pelephone.co.il/ds/uploadedimages/09_2022/iphone_14_pro_max_space_black.png\",\"title\":\"iPhone 14 Pro Max\",\"desc\":\"ה-iPhone המתקדם ביותר מסדרת ה-Pro מבית Apple בעל מסך Super Retina XDR פעיל תמיד בגודל 6.7 אינץ\\' עם Dynamic Island, מצלמה ראשית חדשה ברזולוציה של 48MP עם חיישן בטכנולוגיית Quad-Pixel, שבב A16 Bionic החדש והמהיר ביותר, סוללה שמחזיקה ליום שלם וקישוריות 5G\",\"price\":5949},{\"img\":\"https://img.ksp.co.il/item/214844/b_9.jpg?v=5\",\"title\":\"Apple MacBook Pro\",\"desc\":\"מחשב Apple MacBook Pro 13 M2 Chip 8-Core CPU, 10-Core GPU, 256GB SSD Storage, 8GB Unified Memory - צבע Space Gray - מקלדת ערבית / אנגלית\",\"price\":5390},{\"img\":\"https://img.ksp.co.il/item/231074/b_1.jpg?v=5\",\"title\":\"Apple iPad Pro\",\"desc\":\"אייפד Apple iPad Pro 2022 12.9\\'\\' 256GB WiFi + Cellular - צבע Space Gray\",\"price\":5499},{\"img\":\"https://hotstore.hotmobile.co.il/media/catalog/product/cache/ed1d7868e96e8a14b52484275e157b17/m/i/midnight.png\",\"title\":\"Apple iPhone 13 128GB\",\"desc\":\"האייפון 13 החזק והעוצמתי מבית Apple, בעל מסך 6.1 אינטש Super Retina XDR OLED, עם חיישן זיהוי פנים, מעבד ראשי A15 Bionic, שתי מצלמות אחוריות 12 מגה פיקסל, מצלמת סלפי 12 מגה פיקסל, בעל תקן IP68 עמיד בפני אבק ומים עם אפשרות טעינה אלחוטית ותמיכה ברשת הדור החמישי 5G ערכה סגורה ומקורית הכוללת כבל טעינה מקורי יש אפשרות לרכישת ראש מטען מקורי\",\"price\":2790},{\"img\":\"https://img.ksp.co.il/item/54618/b_3.jpg?v=5\",\"title\":\"Apple Pencil\",\"desc\":\"עט Apple Pencil (2nd Generation) - דור שני\",\"price\":579},{\"img\":\"https://eadn-wc05-4165754.nxedge.io/cdn/pub/media/catalog/product/cache/0d7e15299f2e9c150ef66e46509ba14b/m/k/mk2a3_magic_keyboard_-_us_english.jpeg.webp\",\"title\":\"Apple Keyboard\",\"desc\":\"מקלדת בלוטות איכותית ומקורית מבית Apple בעיצוב מלא עם לוח מקשי ספרות בצד ימין, אופנתית ודקה במיוחד, מקשים אמינים וסוללת ליתיום נטענת בעלת ביצועים מרשימים ותואמת למגוון המוצרים של Apple\",\"price\":533},{\"img\":\"https://eadn-wc05-4165754.nxedge.io/cdn/pub/media/catalog/product/cache/0d7e15299f2e9c150ef66e46509ba14b/i/m/imac_24-in_blue_4-port_pdp_image_position-1__wwen.jpg.webp\",\"title\":\"Apple 24\\'\\' iMac\",\"desc\":\"\",\"price\":6656},{\"img\":\"https://img.ksp.co.il/item/124284/b_1.jpg?v=5\",\"title\":\"Apple MacBook Air 13 M1\",\"desc\":\"מחשב Apple MacBook Air 13 M1 Chip 8-Core CPU, 7-Core GPU, 256GB SSD Storage, 8GB Unified Memory - צבע Space Gray - מקלדת בעברית / אנגלית - דגם MGN63HB/A / Z124-HB-KIT\",\"price\":3990},{\"img\":\"https://www.bug.co.il/images/site/products/6ab0539e-b8ec-4762-aa69-bfba05e62805.jpg\",\"title\":\"Apple Watch\",\"desc\":\"Series 7 GPS + Cellular 45mm Stainless Steel\",\"price\":1999},{\"img\":\"https://hotstore.hotmobile.co.il/media/catalog/product/cache/a73c0d5d6c75fbb1966fe13af695aeb7/a/p/apple_watch_ultra_cellular_49mm_titanium_yellow_ocean_band_34fr_screen__usen_1.png\",\"title\":\"Apple Watch Ultra\",\"desc\":\"Apple Watch Ultra GPS+Cellular 49mm Titanium Case & Yellow Ocean Band\",\"price\":3495},{\"img\":\"https://target.scene7.com/is/image/Target/GUEST_26b077cc-328b-4e67-9002-058217f812e3?wid=325&hei=325&qlt=80&fmt=pjpeg\",\"title\":\"Temple of Khonshu Statue\",\"desc\":\"Funko POP! Jumbo: Moon Knight - Temple of Khonshu Statue (Target Exclusive)\",\"price\":140},{\"img\":\"https://img.fruugo.com/product/0/59/565054590_max.jpg\",\"title\":\"Moon Knight - Mr. Knight Funko Pop!\",\"desc\":\"Find out what really happens when Mr. Knight takes a vacation when you bring home this officially licensed Marvel Comics Moon Knight - Mr. Knight Funko Pop Vinyl Figure.\",\"price\":74}]}');\n\n//# sourceURL=webpack:///./data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main.js");
/******/ 	
/******/ })()
;