const express = require("express");
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const { isLoggedIn, isOwner ,validateListing} = require("../middleware");
const listingController = require("../controller/listings");
const multer  = require('multer');
const {storage} = require("../cloudConfig");
const upload = multer({storage});

router.route("/")
    .get(wrapAsync(listingController.index)) //Index Route
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing) // create route
    );

router.get("/new",isLoggedIn,listingController.randerNewForm);// New Route

router.route("/:id")
    .get(wrapAsync(listingController.showListing)) // show route
    .put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.updateListing)) // Update Route 
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing)); //Delete Route


router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm)); // Edit Route



module.exports = router;