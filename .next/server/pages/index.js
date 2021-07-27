(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./ABI.js":
/*!****************!*\
  !*** ./ABI.js ***!
  \****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ABI": function() { return /* binding */ ABI; }
/* harmony export */ });
const ABI = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "approved",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
  }],
  "name": "ApprovalForAll",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "getApproved",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }],
  "name": "isApprovedForAll",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [],
  "name": "name",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "ownerOf",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }, {
    "internalType": "bytes",
    "name": "_data",
    "type": "bytes"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }, {
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
  }],
  "name": "setApprovalForAll",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "bytes4",
    "name": "interfaceId",
    "type": "bytes4"
  }],
  "name": "supportsInterface",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "tokenURI",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "string",
    "name": "tokenURI",
    "type": "string"
  }],
  "name": "createItem",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "getLastId",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ABI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ABI */ "./ABI.js");

var _jsxFileName = "C:\\Users\\sakac\\Desktop\\NFT\\pages\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const web3 = new (web3__WEBPACK_IMPORTED_MODULE_1___default())((web3__WEBPACK_IMPORTED_MODULE_1___default().givenProvider));
const contractAddress = "0x910F689CA44aCc49AB55def22Db563112e447eda";
class Index extends (react__WEBPACK_IMPORTED_MODULE_2___default().PureComponent) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      lastId: 0,
      collectibles: null
    });

    _defineProperty(this, "createCollectible", async () => {
      const accounts = await window.ethereum.enable();
      const account = accounts[0];
      const NFTContract = new web3.eth.Contract(_ABI__WEBPACK_IMPORTED_MODULE_4__.ABI, contractAddress, {
        from: account
      });
      NFTContract.methods.getLastId().call().then(async lastId => {
        const nextId = Number(lastId) + 1;
        this.collectible.set("id", nextId);
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/add-nft", this.collectible);
        console.log(data);
        NFTContract.methods.createItem(account, data).send().then(response => {
          console.log(response); //pozivam opet da bi se dodao novi token

          this.getCollectibles();
        });
      });
    });

    _defineProperty(this, "getCollectibles", async () => {
      const accounts = await window.ethereum.enable();
      const account = accounts[0];
      const NFTContract = new web3.eth.Contract(_ABI__WEBPACK_IMPORTED_MODULE_4__.ABI, contractAddress, {
        from: account
      });
      let collectibles = [];
      const lastId = await NFTContract.methods.getLastId().call();

      for (let i = 1, j = 0; i <= lastId; i++) {
        const ownerOf = await NFTContract.methods.ownerOf(i).call();

        if (account.toLowerCase() === ownerOf.toLowerCase()) {
          let url = await NFTContract.methods.tokenURI(i).call();
          console.log(url);
          collectibles[j] = (await axios__WEBPACK_IMPORTED_MODULE_3___default().get(url)).data;
          j++;
        }
      }

      this.setState({
        collectibles
      });
    });

    _defineProperty(this, "handleChange", e => {
      this.collectible.set("image", e.target.files[0]);
    });
  }

  componentDidMount() {
    this.collectible = new FormData();
    this.getCollectibles();
  }

  render() {
    let {
      collectibles
    } = this.state;
    console.log(collectibles);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "title",
        children: "Napravi svoj kolekcionarski token"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "image",
        children: "Postavi sliku svog kolekcionarskog tokena"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        onChange: this.handleChange,
        name: "image",
        type: "file"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: this.createCollectible,
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Your NFT's: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "collectibles",
        children: collectibles && collectibles.map(collectible => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "collectible",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: collectible.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["id: ", collectible.id]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, this)]
        }, collectible.id, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, this);
  }

}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ORlQvLi9BQkkuanMiLCJ3ZWJwYWNrOi8vTkZULy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTkZUL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9ORlQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL05GVC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL05GVC9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJBQkkiLCJ3ZWIzIiwiV2ViMyIsImNvbnRyYWN0QWRkcmVzcyIsIkluZGV4IiwiUmVhY3QiLCJsYXN0SWQiLCJjb2xsZWN0aWJsZXMiLCJhY2NvdW50cyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwiYWNjb3VudCIsIk5GVENvbnRyYWN0IiwiZXRoIiwiQ29udHJhY3QiLCJmcm9tIiwibWV0aG9kcyIsImdldExhc3RJZCIsImNhbGwiLCJ0aGVuIiwibmV4dElkIiwiTnVtYmVyIiwiY29sbGVjdGlibGUiLCJzZXQiLCJkYXRhIiwiYXhpb3MiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlSXRlbSIsInNlbmQiLCJyZXNwb25zZSIsImdldENvbGxlY3RpYmxlcyIsImkiLCJqIiwib3duZXJPZiIsInRvTG93ZXJDYXNlIiwidXJsIiwidG9rZW5VUkkiLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbXBvbmVudERpZE1vdW50IiwiRm9ybURhdGEiLCJyZW5kZXIiLCJzdGF0ZSIsImhhbmRsZUNoYW5nZSIsImNyZWF0ZUNvbGxlY3RpYmxlIiwibWFwIiwiaW1hZ2UiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxHQUFHLEdBQUcsQ0FDZjtBQUNFLFlBQVUsRUFEWjtBQUVFLHFCQUFtQixZQUZyQjtBQUdFLFVBQVE7QUFIVixDQURlLEVBTWY7QUFDRSxlQUFhLEtBRGY7QUFFRSxZQUFVLENBQ1I7QUFDRSxl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QTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBcUJBOztBQXJFcUQsQzs7Ozs7Ozs7Ozs7QUNSdkQsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUJJID0gW1xyXG4gICAge1xyXG4gICAgICBcImlucHV0c1wiOiBbXSxcclxuICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXHJcbiAgICAgIFwidHlwZVwiOiBcImNvbnN0cnVjdG9yXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiYW5vbnltb3VzXCI6IGZhbHNlLFxyXG4gICAgICBcImlucHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbmRleGVkXCI6IHRydWUsXHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcIm93bmVyXCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW5kZXhlZFwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJhcHByb3ZlZFwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImluZGV4ZWRcIjogdHJ1ZSxcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwidG9rZW5JZFwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm5hbWVcIjogXCJBcHByb3ZhbFwiLFxyXG4gICAgICBcInR5cGVcIjogXCJldmVudFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImFub255bW91c1wiOiBmYWxzZSxcclxuICAgICAgXCJpbnB1dHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW5kZXhlZFwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJvd25lclwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImluZGV4ZWRcIjogdHJ1ZSxcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwib3BlcmF0b3JcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbmRleGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJhcHByb3ZlZFwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm5hbWVcIjogXCJBcHByb3ZhbEZvckFsbFwiLFxyXG4gICAgICBcInR5cGVcIjogXCJldmVudFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImFub255bW91c1wiOiBmYWxzZSxcclxuICAgICAgXCJpbnB1dHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW5kZXhlZFwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tXCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW5kZXhlZFwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJ0b1wiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImluZGV4ZWRcIjogdHJ1ZSxcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwidG9rZW5JZFwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm5hbWVcIjogXCJUcmFuc2ZlclwiLFxyXG4gICAgICBcInR5cGVcIjogXCJldmVudFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlucHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJ0b1wiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuSWRcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJuYW1lXCI6IFwiYXBwcm92ZVwiLFxyXG4gICAgICBcIm91dHB1dHNcIjogW10sXHJcbiAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG4gICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlucHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJvd25lclwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm5hbWVcIjogXCJiYWxhbmNlT2ZcIixcclxuICAgICAgXCJvdXRwdXRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuICAgICAgXCJjb25zdGFudFwiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlucHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJ0b2tlbklkXCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwibmFtZVwiOiBcImdldEFwcHJvdmVkXCIsXHJcbiAgICAgIFwib3V0cHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXHJcbiAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcbiAgICAgIFwiY29uc3RhbnRcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpbnB1dHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwib3duZXJcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJvcGVyYXRvclwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm5hbWVcIjogXCJpc0FwcHJvdmVkRm9yQWxsXCIsXHJcbiAgICAgIFwib3V0cHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXHJcbiAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcbiAgICAgIFwiY29uc3RhbnRcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpbnB1dHNcIjogW10sXHJcbiAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcclxuICAgICAgXCJvdXRwdXRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXHJcbiAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcbiAgICAgIFwiY29uc3RhbnRcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpbnB1dHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwidG9rZW5JZFwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm5hbWVcIjogXCJvd25lck9mXCIsXHJcbiAgICAgIFwib3V0cHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXHJcbiAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcbiAgICAgIFwiY29uc3RhbnRcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpbnB1dHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZnJvbVwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcInRvXCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwidG9rZW5JZFwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm5hbWVcIjogXCJzYWZlVHJhbnNmZXJGcm9tXCIsXHJcbiAgICAgIFwib3V0cHV0c1wiOiBbXSxcclxuICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXHJcbiAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaW5wdXRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcImZyb21cIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJ0b1wiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuSWRcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJieXRlc1wiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiX2RhdGFcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImJ5dGVzXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwibmFtZVwiOiBcInNhZmVUcmFuc2ZlckZyb21cIixcclxuICAgICAgXCJvdXRwdXRzXCI6IFtdLFxyXG4gICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcclxuICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpbnB1dHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwib3BlcmF0b3JcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJhcHByb3ZlZFwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm5hbWVcIjogXCJzZXRBcHByb3ZhbEZvckFsbFwiLFxyXG4gICAgICBcIm91dHB1dHNcIjogW10sXHJcbiAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG4gICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlucHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJieXRlczRcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcImludGVyZmFjZUlkXCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJieXRlczRcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJuYW1lXCI6IFwic3VwcG9ydHNJbnRlcmZhY2VcIixcclxuICAgICAgXCJvdXRwdXRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImJvb2xcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuICAgICAgXCJjb25zdGFudFwiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlucHV0c1wiOiBbXSxcclxuICAgICAgXCJuYW1lXCI6IFwic3ltYm9sXCIsXHJcbiAgICAgIFwib3V0cHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJzdHJpbmdcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG4gICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiLFxyXG4gICAgICBcImNvbnN0YW50XCI6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaW5wdXRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuSWRcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJuYW1lXCI6IFwidG9rZW5VUklcIixcclxuICAgICAgXCJvdXRwdXRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXHJcbiAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcbiAgICAgIFwiY29uc3RhbnRcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpbnB1dHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZnJvbVwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcInRvXCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwidG9rZW5JZFwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm5hbWVcIjogXCJ0cmFuc2ZlckZyb21cIixcclxuICAgICAgXCJvdXRwdXRzXCI6IFtdLFxyXG4gICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcclxuICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpbnB1dHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwib3duZXJcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJzdHJpbmdcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuVVJJXCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJuYW1lXCI6IFwiY3JlYXRlSXRlbVwiLFxyXG4gICAgICBcIm91dHB1dHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG4gICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlucHV0c1wiOiBbXSxcclxuICAgICAgXCJuYW1lXCI6IFwiZ2V0TGFzdElkXCIsXHJcbiAgICAgIFwib3V0cHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXHJcbiAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcbiAgICAgIFwiY29uc3RhbnRcIjogdHJ1ZVxyXG4gICAgfVxyXG4gIF0iLCJpbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtBQkl9IGZyb20gJy4uL0FCSSc7XHJcblxyXG5jb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyKTtcclxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDkxMEY2ODlDQTQ0YUNjNDlBQjU1ZGVmMjJEYjU2MzExMmU0NDdlZGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcblx0c3RhdGUgPSB7XHJcblx0XHRsYXN0SWQ6IDAsXHJcblx0XHRjb2xsZWN0aWJsZXM6IG51bGxcclxuXHR9XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLmNvbGxlY3RpYmxlID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHR0aGlzLmdldENvbGxlY3RpYmxlcygpO1xyXG5cdH1cclxuXHRjcmVhdGVDb2xsZWN0aWJsZSA9IGFzeW5jKCkgPT4ge1xyXG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcblx0XHRjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XHJcblx0XHRjb25zdCBORlRDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIGNvbnRyYWN0QWRkcmVzcywge2Zyb206IGFjY291bnR9KTtcclxuXHRcdE5GVENvbnRyYWN0Lm1ldGhvZHMuZ2V0TGFzdElkKCkuY2FsbCgpLnRoZW4oYXN5bmMgbGFzdElkID0+IHtcclxuXHRcdFx0Y29uc3QgbmV4dElkID0gTnVtYmVyKGxhc3RJZCkgKzE7XHJcblx0XHRcdHRoaXMuY29sbGVjdGlibGUuc2V0KFwiaWRcIiwgbmV4dElkKTtcclxuIFx0XHRcdGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2FkZC1uZnRcIiwgdGhpcy5jb2xsZWN0aWJsZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEpOyBcclxuXHRcdFx0TkZUQ29udHJhY3QubWV0aG9kcy5jcmVhdGVJdGVtKGFjY291bnQsIGRhdGEpLnNlbmQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdFx0XHQvL3Bveml2YW0gb3BldCBkYSBiaSBzZSBkb2RhbyBub3ZpIHRva2VuXHJcblx0XHRcdFx0dGhpcy5nZXRDb2xsZWN0aWJsZXMoKTtcclxuXHRcdFx0fSk7ICBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXRDb2xsZWN0aWJsZXMgPSBhc3luYygpID0+IHtcclxuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xyXG5cdFx0Y29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xyXG5cdFx0Y29uc3QgTkZUQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBjb250cmFjdEFkZHJlc3MsIHtmcm9tOiBhY2NvdW50fSk7XHJcblx0XHRsZXQgY29sbGVjdGlibGVzID0gW107XHJcblx0XHRjb25zdCBsYXN0SWQgPSBhd2FpdCBORlRDb250cmFjdC5tZXRob2RzLmdldExhc3RJZCgpLmNhbGwoKTtcclxuIFx0XHRmb3IobGV0IGkgPSAxLCBqPTA7IGkgPD0gbGFzdElkOyBpKyspIHtcclxuXHRcdFx0Y29uc3Qgb3duZXJPZiA9IGF3YWl0IE5GVENvbnRyYWN0Lm1ldGhvZHMub3duZXJPZihpKS5jYWxsKCk7XHJcblx0XHRcdGlmKGFjY291bnQudG9Mb3dlckNhc2UoKSA9PT0gb3duZXJPZi50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdFx0bGV0IHVybCA9IGF3YWl0IE5GVENvbnRyYWN0Lm1ldGhvZHMudG9rZW5VUkkoaSkuY2FsbCgpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHVybCk7XHJcblx0XHRcdFx0Y29sbGVjdGlibGVzW2pdID0gKGF3YWl0IGF4aW9zLmdldCh1cmwpKS5kYXRhO1xyXG5cdFx0XHRcdGorKztcclxuXHRcdFx0fVxyXG5cdFx0fSBcclxuXHRcdHRoaXMuc2V0U3RhdGUoe2NvbGxlY3RpYmxlc30pO1xyXG5cdH1cclxuXHRoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0dGhpcy5jb2xsZWN0aWJsZS5zZXQoXCJpbWFnZVwiLCBlLnRhcmdldC5maWxlc1swXSk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCB7Y29sbGVjdGlibGVzfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zb2xlLmxvZyhjb2xsZWN0aWJsZXMpO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdE5hcHJhdmkgc3ZvaiBrb2xla2Npb25hcnNraSB0b2tlblxyXG5cdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPlxyXG5cdFx0XHRcdFx0UG9zdGF2aSBzbGlrdSBzdm9nIGtvbGVrY2lvbmFyc2tvZyB0b2tlbmFcclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJpbWFnZVwiIHR5cGU9XCJmaWxlXCIvPlxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVDb2xsZWN0aWJsZX0+Q3JlYXRlPC9idXR0b24+XHJcblx0XHRcdFx0PGgyPllvdXIgTkZUJ3M6IDwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aWJsZXNcIj5cclxuXHRcdFx0XHR7Y29sbGVjdGlibGVzJiYgY29sbGVjdGlibGVzLm1hcChjb2xsZWN0aWJsZSA9PiBcclxuXHRcdFx0XHRcdDxkaXYga2V5PXtjb2xsZWN0aWJsZS5pZH0gY2xhc3NOYW1lPVwiY29sbGVjdGlibGVcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e2NvbGxlY3RpYmxlLmltYWdlfS8+XHJcblx0XHRcdFx0XHRcdDxwPmlkOiB7Y29sbGVjdGlibGUuaWR9PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=