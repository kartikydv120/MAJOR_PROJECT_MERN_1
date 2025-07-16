const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require('../utils/wrapAsync');
const {validateReview, isLoggedIn ,isReviewAuthor} = require("../middleware");
const reviewController = require("../controller/reviews");

// review add route 
// post review route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview))

//Delete Review route 
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview) );
module.exports = router;