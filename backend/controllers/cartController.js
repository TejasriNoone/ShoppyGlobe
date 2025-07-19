const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add to cart
exports.addToCart = async (req, res, next) => {
  const { productId, quantity } = req.body;

  const parsedQty = parseInt(quantity);
  if (isNaN(parsedQty) || parsedQty <= 0) {
    return res.status(400).json({ message: "Invalid quantity" });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) cart = new Cart({ userId: req.user.id, items: [] });

    const itemIndex = cart.items.findIndex(item => item.productId.equals(productId));

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += parsedQty;
    } else {
      cart.items.push({ productId, quantity: parsedQty });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error("Add to cart error:", err);
    next(err);
  }
};

// Update cart item
exports.updateCartItem = async (req, res, next) => {
  const { quantity } = req.body;
  const parsedQty = parseInt(quantity);
  if (isNaN(parsedQty) || parsedQty <= 0) {
    return res.status(400).json({ message: "Invalid quantity" });
  }

  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find(item => item.productId.equals(req.params.productId));
    if (!item) return res.status(404).json({ message: "Product not in cart" });

    item.quantity = parsedQty;
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error("Update cart error:", err);
    next(err);
  }
};

// Delete cart item
exports.deleteCartItem = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(item => !item.productId.equals(req.params.productId));
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error("Delete cart item error:", err);
    next(err);
  }
};
