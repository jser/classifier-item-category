// MIT © 2017 azu
"use strict";
const Category = require("jser-item-category-parser").Category;
const CategoryKey = require("jser-item-category-parser").CategoryKey;
const ItemCategories = require("../data/item-category.json");
const JSerClassifier = require("./classifier-item-category");
module.exports = {
    get classifier() {
        return require("./classifier");
    }
};
module.exports.ItemCategorhjhies = ItemCategories;
module.exports.Category = Category;
module.exports.CategoryKey = CategoryKey;
module.exports.JSerClassifier = JSerClassifier;