import Navigo from "navigo";
import { renderMasterPage } from "./page/master";
import { renderAddProduct } from "./page/massteraddproduct";
import { renderMainPage } from "./page/main";
import { renderDetailPage } from "./page/productDetail";
import { renderMasterProductDetailPage } from "./page/masterproductdetail";
import { renderOrderHisory, renderMyAccount } from "./page/mypage";

import { renderSoldProduct } from "./page/mastersoldlist";

export const router = new Navigo("/");
const app = document.querySelector("#app");

router.on("/", function () {
  renderMainPage();
});

router.on("/search/:query", function (params) {
  console.log(params.query);
});

router.on("/product/detail/:productId", function (params) {
  renderDetailPage(params);
});

router.on("/product/cart", function () {
  console.log("cart");
});

router.on("/product/checkout", function () {
  console.log("checkout");
});

router.on("/mypage/orderHistory", function (params) {
  renderOrderHisory(params);
});

router.on("/mypage/account", function (params) {
  renderMyAccount(params);
});

router.on("/login", function () {
  console.log("login");
});

router.on("/master", function () {
  renderMasterPage();
});

router.on("/master/product/detail/:id", function (match) {
  renderMasterProductDetailPage(match.data.id);
});

router.on("/master/product/add", function () {
  renderAddProduct();
});

router.on("/master/sold", function () {
  renderSoldProduct();
});

router.resolve();
