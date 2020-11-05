const router = require("express").Router();
const cartController = require("../controllers/CartController");

router.post("/", cartController.addItemToCart);
router.get("/", cartController.getCart);
router.delete("/empty-cart", cartController.emptyCart);

module.exports = router;
