export var PageNames;
(function (PageNames) {
    PageNames["AccountPage"] = "Account";
    PageNames["BagPage"] = "Bag";
    PageNames["CollectionPage"] = "Collection";
    PageNames["ProductPage"] = "Product";
    PageNames["HomePage"] = "Home";
    PageNames["PlanPage"] = "Plan";
    PageNames["ReservationPage"] = "Reservation";
    PageNames["ReservationConfirmationPage"] = "ReservationConfirmation";
})(PageNames || (PageNames = {}));
export var EntityTypes;
(function (EntityTypes) {
    EntityTypes["Brand"] = "Brand";
    EntityTypes["Product"] = "Product";
    EntityTypes["Reservation"] = "Reservation";
    EntityTypes["Tag"] = "Tag";
})(EntityTypes || (EntityTypes = {}));
export var ActionTypes;
(function (ActionTypes) {
    /**
     * User actions
     */
    ActionTypes["Tap"] = "Tap";
    ActionTypes["Swipe"] = "Swipe";
    ActionTypes["Session"] = "Session";
    /**
     * Events / results
     */
    ActionTypes["Fail"] = "Fail";
    ActionTypes["Success"] = "Success";
})(ActionTypes || (ActionTypes = {}));
/**
 * Action event discriptors / names
 */
export var ActionNames;
(function (ActionNames) {
    // CreateAccount
    // Web view
    ActionNames["ShareButtonTapped"] = "Share button tapped";
    ActionNames["RateUsTapped"] = "Rate us tapped";
    ActionNames["FollowUsTapped"] = "Follow us tapped";
    // Home page
    ActionNames["BrowseButtonTapped"] = "Browse Button Tapped";
    ActionNames["ViewAllBrandsTapped"] = "View All Brands Tapped";
    ActionNames["ViewAllCategoriesTapped"] = "View All Categories Tapped";
    // Browse page
    ActionNames["FiltersButtonTapped"] = "Filters Button Tapped";
    ActionNames["FilterTapped"] = "Filter Tapped";
    ActionNames["FiltersCleared"] = "Filters Cleared";
    ActionNames["FilterModalCanceled"] = "Filters Modal Canceled";
    ActionNames["FiltersApplied"] = "Filters Applied";
    ActionNames["CategoryTapped"] = "Category Tapped";
    ActionNames["BrowsePagePaginated"] = "Browse Page Paginated";
    // Bag
    ActionNames["SavedItemRemoved"] = "Saved Item Removed";
    ActionNames["BagItemRemoved"] = "Bag Item Removed";
    ActionNames["BagSavedItemRemoved"] = "Bag Saved Item Removed";
    ActionNames["BagItemSaved"] = "Bag Item Saved";
    ActionNames["BagTabTapped"] = "Bag Tab Tapped";
    ActionNames["SavedTabTapped"] = "Saved Tab Tapped";
    ActionNames["FAQButtonTapped"] = "FAQ Button Tapped";
    ActionNames["ReserveButtonTapped"] = "Reserve Button Tapped";
    ActionNames["ReservationHistoryTabTapped"] = "Reservation History Tab Tapped";
    ActionNames["SavedItemAddedToBag"] = "Saved Item Added To Bag";
    ActionNames["NotifyMeTapped"] = "Notify Me Tapped";
    // Brand view
    ActionNames["ReadMoreTapped"] = "Read More Tapped";
    // Tags rail
    ActionNames["ViewAllProductsByTagsTapped"] = "View All Products By Tags Tapped";
    // Brands view
    ActionNames["AlphabetTapped"] = "Alphabet Tapped";
    // Reservation
    ActionNames["PlaceOrderTapped"] = "Place Order Tapped";
    ActionNames["CloseOrderConfirmationTapped"] = "Close Order Confirmation Tapped";
    // Reservation Confirmation
    ActionNames["ReservationConfirmationDoneButtonTapped"] = "Reservation Confirmation Done Button Tapped";
    // Reservation Feedback
    ActionNames["ReservationFeedbackRatingButtonTapped"] = "Reservation Feedback Rating Button Tapped";
    ActionNames["ReservationFeedbackHeaderTapped"] = "Reservation Feedback Header Tapped";
    ActionNames["ReservationFeedbackHeaderProgressBarTapped"] = "Reservation Feedback Header Progress Bar Tapped";
    ActionNames["ReservationFeedbackOptionButtonTapped"] = "Reservation Feedback Option Button Tapped";
    ActionNames["ReservationFeedbackContinueLaterButtonTapped"] = "Reservation Feedback Continue Later Button Tapped";
    // Reservation Feedback Confirmation
    ActionNames["ReservationFeedbackConfirmationSkipButtonTapped"] = "Reservation Feedback Confirmation Skip Button Tapped";
    ActionNames["ReservationFeedbackConfirmationSubmitButtonTapped"] = "Reservation Feedback Confirmation Submit Button Tapped";
    // Reservation Feedback Finish
    ActionNames["ReservationFeedbackFinishButtonTapped"] = "Reservation Feedback Finish Button Tapped";
    // Account
    ActionNames["MembershipInfoTapped"] = "Membership Info Tapped";
    ActionNames["PersonalPreferencesTapped"] = "Personal Preferences Tapped";
    ActionNames["PaymentAndShippingTapped"] = "Payment And Shipping Tapped";
    ActionNames["SubmitAnItemTapped"] = "Submit An Item Tapped";
    ActionNames["FAQTapped"] = "FAQ Tapped";
    ActionNames["NotificationToggleTapped"] = "Notification Toggle Tapped";
    ActionNames["SupportTapped"] = "Support Tapped";
    ActionNames["PrivacyPolicyTapped"] = "Privacy Policy Tapped";
    ActionNames["TermsOfServiceTapped"] = "Terms of Service Tapped";
    ActionNames["LogOutTapped"] = "Log Out Tapped";
    // Membership Info
    // FIXME: Add this
    ActionNames["ContactUsTapped"] = "Contact Us Tapped";
    // Personal Preferences
    // FIXME: Add this
    ActionNames["EditButtonTapped"] = "Edit Button Tapped";
    ActionNames["EditDoneButtonTapped"] = "Edit Done Button Tapped";
    // Payment And Shipping
    // FIXME: Add this
    ActionNames["PaymentAndShippingEditSaveTapped"] = "Payment And Shipping Edit Save Tapped";
    ActionNames["PaymentAndShippingEditCancelTapped"] = "Payment And Shipping Edit Cancel Tapped";
    ActionNames["PaymentAndShippingEditBillingInfoTapped"] = "Payment And Shipping Edit Billing Info Tapped";
    // Submit an item
    ActionNames["FinishButtonTapped"] = "Finish Button Tapped";
    ActionNames["NextButtonTapped"] = "Next Button Tapped";
    ActionNames["SubmitButtonTapped"] = "Submit Button Tapped";
    // Reservation Flow Steps
    // FIXME: Adds these to the backend
    // ReservationInitiated = "Reservation Initiated",
    // ReservationCompleted = "Reservation Completed",
    // ReservationConfirmed = "Reservation Confirmed",
    // Product page action names
    ActionNames["ProductSaved"] = "Product Saved";
    ActionNames["SaveProductButtonTapped"] = "Save Product Button Tapped";
    ActionNames["ProductWanted"] = "Product Wanted";
    ActionNames["SizeButtonTapped"] = "Size Button Tapped";
    ActionNames["ProductAddedToBag"] = "Product Added To Bag";
    ActionNames["ProductVariantSelected"] = "Product Variant Selected";
    ActionNames["SaveProductModalCancelTapped"] = "Save Product Modal Cancel Tapped";
    ActionNames["SaveProductModalSaveTapped"] = "Save Product Modal Save Tapped";
    // Size Picker
    ActionNames["SizePickerCancelTapped"] = "Size Picker Cancel Tapped";
    ActionNames["SizeSelected"] = "Size Selected";
    // Shared action names
    ActionNames["ProductTapped"] = "Product Tapped";
    ActionNames["BrandTapped"] = "Brand Tapped";
    ActionNames["CarouselSwiped"] = "Carousel Swiped";
    ActionNames["TopsTabTapped"] = "Tops Tab Tapped";
    ActionNames["BottomsTabTapped"] = "Bottoms Tab Tapped";
    // Signup Action names
    ActionNames["CreateAnAccountTapped"] = "Create An Account Tapped";
    ActionNames["CreateMyAccountTapped"] = "Create My Account Tapped";
    ActionNames["EnterPhoneNumberNextTapped"] = "Enter Phone Number Next Tapped";
    ActionNames["EnterPhoneNumberVerificationCodeNextTapped"] = "Enter Phone Number Verification Code Next Tapped";
    ActionNames["GetMeasurementsFinishTapped"] = "Get Measurements Finish Tapped";
    ActionNames["ChoosePlanTapped"] = "Choose Plan Tapped";
    ActionNames["LearnMoreTapped"] = "Learn More Tapped";
    ActionNames["SignupCompleted"] = "Signup Completed";
    ActionNames["PlanTapped"] = "Plan Tapped";
    // Promo Code
    ActionNames["ApplyPromoCodeEntrypointTapped"] = "Apply Promo Code Entrypoint Tapped";
    ActionNames["ApplyPromoCodeTapped"] = "Promo Code Apply Button Tapped";
    ActionNames["Tier0PlanTabTapped"] = "Tier 0 Plan Tab Tapped";
    ActionNames["Tier1PlanTabTapped"] = "Tier 1 Plan Tab Tapped";
    ActionNames["ApplePayTapped"] = "Apple Pay Tapped";
    ActionNames["AddCreditCardTapped"] = "Add Credit Card Tapped";
    // Reservation Sharing
    ActionNames["ShareToIGButtonTapped"] = "Share To IG Button Tapped";
    ActionNames["DownloadReservationShareImageTapped"] = "Download Reservation Share Image Tapped";
    ActionNames["AvailableFilterToggled"] = "Available Filter Toggled";
})(ActionNames || (ActionNames = {}));
/**
 * The component from which the action originates
 */
export var ContextModules;
(function (ContextModules) {
})(ContextModules || (ContextModules = {}));
