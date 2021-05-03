/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AppRoute {
  AccountStack = "AccountStack",
  BagStack = "BagStack",
  Brand = "Brand",
  Browse = "Browse",
  CurrentRotation = "CurrentRotation",
  Faq = "Faq",
  Home = "Home",
  Modal = "Modal",
  PaymentAndShipping = "PaymentAndShipping",
  PersonalPreferences = "PersonalPreferences",
  Product = "Product",
  ProductRequest = "ProductRequest",
  Reservation = "Reservation",
  Webview = "Webview",
}

export enum BagItemStatus {
  Added = "Added",
  Received = "Received",
  Reserved = "Reserved",
}

export enum BottomSizeType {
  EU = "EU",
  JP = "JP",
  Letter = "Letter",
  US = "US",
  WxL = "WxL",
}

export enum BrandTier {
  Boutique = "Boutique",
  Discovery = "Discovery",
  Local = "Local",
  Niche = "Niche",
  Retro = "Retro",
  Tier0 = "Tier0",
  Tier1 = "Tier1",
  Tier2 = "Tier2",
  Upcoming = "Upcoming",
}

export enum CustomerStatus {
  Active = "Active",
  Authorized = "Authorized",
  Created = "Created",
  Deactivated = "Deactivated",
  Invited = "Invited",
  Paused = "Paused",
  PaymentFailed = "PaymentFailed",
  Suspended = "Suspended",
  Waitlisted = "Waitlisted",
}

export enum EmailId {
  BuyUsedOrderConfirmation = "BuyUsedOrderConfirmation",
  CompleteAccount = "CompleteAccount",
  DayFiveAuthorizationFollowup = "DayFiveAuthorizationFollowup",
  DayFourAuthorizationFollowup = "DayFourAuthorizationFollowup",
  DaySevenAuthorizationFollowup = "DaySevenAuthorizationFollowup",
  DaySixAuthorizationFollowup = "DaySixAuthorizationFollowup",
  DayThreeAuthorizationFollowup = "DayThreeAuthorizationFollowup",
  DayTwoAuthorizationFollowup = "DayTwoAuthorizationFollowup",
  FreeToReserve = "FreeToReserve",
  Paused = "Paused",
  PriorityAccess = "PriorityAccess",
  ReferralConfirmation = "ReferralConfirmation",
  ReservationConfirmation = "ReservationConfirmation",
  ReservationReturnConfirmation = "ReservationReturnConfirmation",
  ResumeConfirmation = "ResumeConfirmation",
  ResumeReminder = "ResumeReminder",
  ReturnReminder = "ReturnReminder",
  ReturnToGoodStanding = "ReturnToGoodStanding",
  Rewaitlisted = "Rewaitlisted",
  SubmittedEmail = "SubmittedEmail",
  TwentyFourHourAuthorizationFollowup = "TwentyFourHourAuthorizationFollowup",
  UnpaidMembership = "UnpaidMembership",
  Waitlisted = "Waitlisted",
  WelcomeToSeasons = "WelcomeToSeasons",
}

export enum FitPicReportStatus {
  Pending = "Pending",
  Reviewed = "Reviewed",
}

export enum FitPicStatus {
  Published = "Published",
  Submitted = "Submitted",
  Unpublished = "Unpublished",
}

export enum InventoryStatus {
  NonReservable = "NonReservable",
  Offloaded = "Offloaded",
  Reservable = "Reservable",
  Reserved = "Reserved",
  Stored = "Stored",
}

export enum LetterSize {
  L = "L",
  M = "M",
  S = "S",
  XL = "XL",
  XS = "XS",
  XXL = "XXL",
  XXS = "XXS",
  XXXL = "XXXL",
}

export enum LocationType {
  Cleaner = "Cleaner",
  Customer = "Customer",
  Office = "Office",
  Warehouse = "Warehouse",
}

export enum NotificationBarID {
  AuthorizedReminder = "AuthorizedReminder",
  PastDueInvoice = "PastDueInvoice",
  TestDismissable = "TestDismissable",
}

export enum NotificationBarIcon {
  Chevron = "Chevron",
  CloseX = "CloseX",
}

export enum OrderLineItemRecordType {
  ExternalProduct = "ExternalProduct",
  Package = "Package",
  PhysicalProduct = "PhysicalProduct",
  ProductVariant = "ProductVariant",
}

export enum OrderStatus {
  Cancelled = "Cancelled",
  Drafted = "Drafted",
  Fulfilled = "Fulfilled",
  Returned = "Returned",
  Submitted = "Submitted",
}

export enum OrderType {
  New = "New",
  Used = "Used",
}

export enum PaymentPlanTier {
  AllAccess = "AllAccess",
  Essential = "Essential",
  Pause = "Pause",
}

export enum PhotographyStatus {
  Done = "Done",
  InProgress = "InProgress",
  ReadyForEditing = "ReadyForEditing",
  ReadyToShoot = "ReadyToShoot",
  Steam = "Steam",
}

export enum PhysicalProductDamageType {
  BarcodeMissing = "BarcodeMissing",
  ButtonMissing = "ButtonMissing",
  Other = "Other",
  Smell = "Smell",
  Stain = "Stain",
  Tear = "Tear",
}

export enum PhysicalProductOffloadMethod {
  Recycled = "Recycled",
  ReturnedToVendor = "ReturnedToVendor",
  SoldToThirdParty = "SoldToThirdParty",
  SoldToUser = "SoldToUser",
  Unknown = "Unknown",
}

export enum PhysicalProductStatus {
  Clean = "Clean",
  Damaged = "Damaged",
  Dirty = "Dirty",
  Lost = "Lost",
  New = "New",
  PermanentlyDamaged = "PermanentlyDamaged",
  Sold = "Sold",
  Used = "Used",
}

export enum ProductArchitecture {
  Fashion = "Fashion",
  Showstopper = "Showstopper",
  Staple = "Staple",
}

export enum ProductFit {
  RunsBig = "RunsBig",
  RunsSmall = "RunsSmall",
  TrueToSize = "TrueToSize",
}

export enum ProductOrderByInput {
  architecture_ASC = "architecture_ASC",
  architecture_DESC = "architecture_DESC",
  buyNewEnabled_ASC = "buyNewEnabled_ASC",
  buyNewEnabled_DESC = "buyNewEnabled_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
  externalURL_ASC = "externalURL_ASC",
  externalURL_DESC = "externalURL_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  photographyStatus_ASC = "photographyStatus_ASC",
  photographyStatus_DESC = "photographyStatus_DESC",
  productFit_ASC = "productFit_ASC",
  productFit_DESC = "productFit_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  retailPrice_ASC = "retailPrice_ASC",
  retailPrice_DESC = "retailPrice_DESC",
  slug_ASC = "slug_ASC",
  slug_DESC = "slug_DESC",
  status_ASC = "status_ASC",
  status_DESC = "status_DESC",
  type_ASC = "type_ASC",
  type_DESC = "type_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export enum ProductStatus {
  Available = "Available",
  NotAvailable = "NotAvailable",
  Offloaded = "Offloaded",
  Stored = "Stored",
}

export enum ProductTierName {
  Luxury = "Luxury",
  Standard = "Standard",
}

export enum ProductType {
  Accessory = "Accessory",
  Bottom = "Bottom",
  Shoe = "Shoe",
  Top = "Top",
}

export enum PushNotificationStatus {
  Blocked = "Blocked",
  Denied = "Denied",
  Granted = "Granted",
}

export enum ReservationPhase {
  BusinessToCustomer = "BusinessToCustomer",
  CustomerToBusiness = "CustomerToBusiness",
}

export enum ReservationStatus {
  Blocked = "Blocked",
  Cancelled = "Cancelled",
  Completed = "Completed",
  Delivered = "Delivered",
  Hold = "Hold",
  Packed = "Packed",
  Picked = "Picked",
  Queued = "Queued",
  Received = "Received",
  Shipped = "Shipped",
  Unknown = "Unknown",
}

export enum SeasonCode {
  AW = "AW",
  FW = "FW",
  HO = "HO",
  PF = "PF",
  PS = "PS",
  SS = "SS",
}

export enum ShippingCode {
  UPSGround = "UPSGround",
  UPSSelect = "UPSSelect",
}

export enum SizeType {
  EU = "EU",
  JP = "JP",
  Letter = "Letter",
  US = "US",
  WxL = "WxL",
}

export enum SmsStatus {
  Accepted = "Accepted",
  Delivered = "Delivered",
  Failed = "Failed",
  PartiallyDelivered = "PartiallyDelivered",
  Queued = "Queued",
  Read = "Read",
  Received = "Received",
  Receiving = "Receiving",
  Scheduled = "Scheduled",
  Sending = "Sending",
  Sent = "Sent",
  Undelivered = "Undelivered",
}

export enum UserPushNotificationInterestType {
  Bag = "Bag",
  Blog = "Blog",
  Brand = "Brand",
  General = "General",
  NewProduct = "NewProduct",
}

export enum UserRole {
  Admin = "Admin",
  Customer = "Customer",
  Marketer = "Marketer",
  Partner = "Partner",
}

export enum UserVerificationMethod {
  Email = "Email",
  None = "None",
  SMS = "SMS",
}

export enum UserVerificationStatus {
  Approved = "Approved",
  Denied = "Denied",
  Pending = "Pending",
}

export enum WarehouseLocationType {
  Bin = "Bin",
  Conveyor = "Conveyor",
  Rail = "Rail",
}

export interface BottomSizeWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  type?: BottomSizeType | null;
  type_not?: BottomSizeType | null;
  type_in?: BottomSizeType[] | null;
  type_not_in?: BottomSizeType[] | null;
  value?: string | null;
  value_not?: string | null;
  value_in?: string[] | null;
  value_not_in?: string[] | null;
  value_lt?: string | null;
  value_lte?: string | null;
  value_gt?: string | null;
  value_gte?: string | null;
  value_contains?: string | null;
  value_not_contains?: string | null;
  value_starts_with?: string | null;
  value_not_starts_with?: string | null;
  value_ends_with?: string | null;
  value_not_ends_with?: string | null;
  waist?: number | null;
  waist_not?: number | null;
  waist_in?: number[] | null;
  waist_not_in?: number[] | null;
  waist_lt?: number | null;
  waist_lte?: number | null;
  waist_gt?: number | null;
  waist_gte?: number | null;
  rise?: number | null;
  rise_not?: number | null;
  rise_in?: number[] | null;
  rise_not_in?: number[] | null;
  rise_lt?: number | null;
  rise_lte?: number | null;
  rise_gt?: number | null;
  rise_gte?: number | null;
  hem?: number | null;
  hem_not?: number | null;
  hem_in?: number[] | null;
  hem_not_in?: number[] | null;
  hem_lt?: number | null;
  hem_lte?: number | null;
  hem_gt?: number | null;
  hem_gte?: number | null;
  inseam?: number | null;
  inseam_not?: number | null;
  inseam_in?: number[] | null;
  inseam_not_in?: number[] | null;
  inseam_lt?: number | null;
  inseam_lte?: number | null;
  inseam_gt?: number | null;
  inseam_gte?: number | null;
  AND?: BottomSizeWhereInput[] | null;
  OR?: BottomSizeWhereInput[] | null;
  NOT?: BottomSizeWhereInput[] | null;
}

export interface BrandWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  slug?: string | null;
  slug_not?: string | null;
  slug_in?: string[] | null;
  slug_not_in?: string[] | null;
  slug_lt?: string | null;
  slug_lte?: string | null;
  slug_gt?: string | null;
  slug_gte?: string | null;
  slug_contains?: string | null;
  slug_not_contains?: string | null;
  slug_starts_with?: string | null;
  slug_not_starts_with?: string | null;
  slug_ends_with?: string | null;
  slug_not_ends_with?: string | null;
  brandCode?: string | null;
  brandCode_not?: string | null;
  brandCode_in?: string[] | null;
  brandCode_not_in?: string[] | null;
  brandCode_lt?: string | null;
  brandCode_lte?: string | null;
  brandCode_gt?: string | null;
  brandCode_gte?: string | null;
  brandCode_contains?: string | null;
  brandCode_not_contains?: string | null;
  brandCode_starts_with?: string | null;
  brandCode_not_starts_with?: string | null;
  brandCode_ends_with?: string | null;
  brandCode_not_ends_with?: string | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  isPrimaryBrand?: boolean | null;
  isPrimaryBrand_not?: boolean | null;
  logoImage?: ImageWhereInput | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  designer?: string | null;
  designer_not?: string | null;
  designer_in?: string[] | null;
  designer_not_in?: string[] | null;
  designer_lt?: string | null;
  designer_lte?: string | null;
  designer_gt?: string | null;
  designer_gte?: string | null;
  designer_contains?: string | null;
  designer_not_contains?: string | null;
  designer_starts_with?: string | null;
  designer_not_starts_with?: string | null;
  designer_ends_with?: string | null;
  designer_not_ends_with?: string | null;
  basedIn?: string | null;
  basedIn_not?: string | null;
  basedIn_in?: string[] | null;
  basedIn_not_in?: string[] | null;
  basedIn_lt?: string | null;
  basedIn_lte?: string | null;
  basedIn_gt?: string | null;
  basedIn_gte?: string | null;
  basedIn_contains?: string | null;
  basedIn_not_contains?: string | null;
  basedIn_starts_with?: string | null;
  basedIn_not_starts_with?: string | null;
  basedIn_ends_with?: string | null;
  basedIn_not_ends_with?: string | null;
  products_every?: ProductWhereInput | null;
  products_some?: ProductWhereInput | null;
  products_none?: ProductWhereInput | null;
  images_every?: ImageWhereInput | null;
  images_some?: ImageWhereInput | null;
  images_none?: ImageWhereInput | null;
  since?: any | null;
  since_not?: any | null;
  since_in?: any[] | null;
  since_not_in?: any[] | null;
  since_lt?: any | null;
  since_lte?: any | null;
  since_gt?: any | null;
  since_gte?: any | null;
  tier?: BrandTier | null;
  tier_not?: BrandTier | null;
  tier_in?: BrandTier[] | null;
  tier_not_in?: BrandTier[] | null;
  published?: boolean | null;
  published_not?: boolean | null;
  featured?: boolean | null;
  featured_not?: boolean | null;
  websiteUrl?: string | null;
  websiteUrl_not?: string | null;
  websiteUrl_in?: string[] | null;
  websiteUrl_not_in?: string[] | null;
  websiteUrl_lt?: string | null;
  websiteUrl_lte?: string | null;
  websiteUrl_gt?: string | null;
  websiteUrl_gte?: string | null;
  websiteUrl_contains?: string | null;
  websiteUrl_not_contains?: string | null;
  websiteUrl_starts_with?: string | null;
  websiteUrl_not_starts_with?: string | null;
  websiteUrl_ends_with?: string | null;
  websiteUrl_not_ends_with?: string | null;
  shopifyShop?: ShopifyShopWhereInput | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: BrandWhereInput[] | null;
  OR?: BrandWhereInput[] | null;
  NOT?: BrandWhereInput[] | null;
}

export interface CategoryWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  slug?: string | null;
  slug_not?: string | null;
  slug_in?: string[] | null;
  slug_not_in?: string[] | null;
  slug_lt?: string | null;
  slug_lte?: string | null;
  slug_gt?: string | null;
  slug_gte?: string | null;
  slug_contains?: string | null;
  slug_not_contains?: string | null;
  slug_starts_with?: string | null;
  slug_not_starts_with?: string | null;
  slug_ends_with?: string | null;
  slug_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  visible?: boolean | null;
  visible_not?: boolean | null;
  products_every?: ProductWhereInput | null;
  products_some?: ProductWhereInput | null;
  products_none?: ProductWhereInput | null;
  children_every?: CategoryWhereInput | null;
  children_some?: CategoryWhereInput | null;
  children_none?: CategoryWhereInput | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: CategoryWhereInput[] | null;
  OR?: CategoryWhereInput[] | null;
  NOT?: CategoryWhereInput[] | null;
}

export interface ColorWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  slug?: string | null;
  slug_not?: string | null;
  slug_in?: string[] | null;
  slug_not_in?: string[] | null;
  slug_lt?: string | null;
  slug_lte?: string | null;
  slug_gt?: string | null;
  slug_gte?: string | null;
  slug_contains?: string | null;
  slug_not_contains?: string | null;
  slug_starts_with?: string | null;
  slug_not_starts_with?: string | null;
  slug_ends_with?: string | null;
  slug_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  colorCode?: string | null;
  colorCode_not?: string | null;
  colorCode_in?: string[] | null;
  colorCode_not_in?: string[] | null;
  colorCode_lt?: string | null;
  colorCode_lte?: string | null;
  colorCode_gt?: string | null;
  colorCode_gte?: string | null;
  colorCode_contains?: string | null;
  colorCode_not_contains?: string | null;
  colorCode_starts_with?: string | null;
  colorCode_not_starts_with?: string | null;
  colorCode_ends_with?: string | null;
  colorCode_not_ends_with?: string | null;
  hexCode?: string | null;
  hexCode_not?: string | null;
  hexCode_in?: string[] | null;
  hexCode_not_in?: string[] | null;
  hexCode_lt?: string | null;
  hexCode_lte?: string | null;
  hexCode_gt?: string | null;
  hexCode_gte?: string | null;
  hexCode_contains?: string | null;
  hexCode_not_contains?: string | null;
  hexCode_starts_with?: string | null;
  hexCode_not_starts_with?: string | null;
  hexCode_ends_with?: string | null;
  hexCode_not_ends_with?: string | null;
  productVariants_every?: ProductVariantWhereInput | null;
  productVariants_some?: ProductVariantWhereInput | null;
  productVariants_none?: ProductVariantWhereInput | null;
  AND?: ColorWhereInput[] | null;
  OR?: ColorWhereInput[] | null;
  NOT?: ColorWhereInput[] | null;
}

export interface EmailReceiptWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  emailId?: EmailId | null;
  emailId_not?: EmailId | null;
  emailId_in?: EmailId[] | null;
  emailId_not_in?: EmailId[] | null;
  user?: UserWhereInput | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: EmailReceiptWhereInput[] | null;
  OR?: EmailReceiptWhereInput[] | null;
  NOT?: EmailReceiptWhereInput[] | null;
}

export interface FitPicReportWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  reporter?: UserWhereInput | null;
  reported?: FitPicWhereInput | null;
  status?: FitPicReportStatus | null;
  status_not?: FitPicReportStatus | null;
  status_in?: FitPicReportStatus[] | null;
  status_not_in?: FitPicReportStatus[] | null;
  reportedAt?: any | null;
  reportedAt_not?: any | null;
  reportedAt_in?: any[] | null;
  reportedAt_not_in?: any[] | null;
  reportedAt_lt?: any | null;
  reportedAt_lte?: any | null;
  reportedAt_gt?: any | null;
  reportedAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: FitPicReportWhereInput[] | null;
  OR?: FitPicReportWhereInput[] | null;
  NOT?: FitPicReportWhereInput[] | null;
}

export interface FitPicWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  image?: ImageWhereInput | null;
  includeInstagramHandle?: boolean | null;
  includeInstagramHandle_not?: boolean | null;
  location?: LocationWhereInput | null;
  products_every?: ProductWhereInput | null;
  products_some?: ProductWhereInput | null;
  products_none?: ProductWhereInput | null;
  reports_every?: FitPicReportWhereInput | null;
  reports_some?: FitPicReportWhereInput | null;
  reports_none?: FitPicReportWhereInput | null;
  status?: FitPicStatus | null;
  status_not?: FitPicStatus | null;
  status_in?: FitPicStatus[] | null;
  status_not_in?: FitPicStatus[] | null;
  user?: UserWhereInput | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: FitPicWhereInput[] | null;
  OR?: FitPicWhereInput[] | null;
  NOT?: FitPicWhereInput[] | null;
}

export interface ImageWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  caption?: string | null;
  caption_not?: string | null;
  caption_in?: string[] | null;
  caption_not_in?: string[] | null;
  caption_lt?: string | null;
  caption_lte?: string | null;
  caption_gt?: string | null;
  caption_gte?: string | null;
  caption_contains?: string | null;
  caption_not_contains?: string | null;
  caption_starts_with?: string | null;
  caption_not_starts_with?: string | null;
  caption_ends_with?: string | null;
  caption_not_ends_with?: string | null;
  url?: string | null;
  url_not?: string | null;
  url_in?: string[] | null;
  url_not_in?: string[] | null;
  url_lt?: string | null;
  url_lte?: string | null;
  url_gt?: string | null;
  url_gte?: string | null;
  url_contains?: string | null;
  url_not_contains?: string | null;
  url_starts_with?: string | null;
  url_not_starts_with?: string | null;
  url_ends_with?: string | null;
  url_not_ends_with?: string | null;
  alt?: string | null;
  alt_not?: string | null;
  alt_in?: string[] | null;
  alt_not_in?: string[] | null;
  alt_lt?: string | null;
  alt_lte?: string | null;
  alt_gt?: string | null;
  alt_gte?: string | null;
  alt_contains?: string | null;
  alt_not_contains?: string | null;
  alt_starts_with?: string | null;
  alt_not_starts_with?: string | null;
  alt_ends_with?: string | null;
  alt_not_ends_with?: string | null;
  height?: number | null;
  height_not?: number | null;
  height_in?: number[] | null;
  height_not_in?: number[] | null;
  height_lt?: number | null;
  height_lte?: number | null;
  height_gt?: number | null;
  height_gte?: number | null;
  width?: number | null;
  width_not?: number | null;
  width_in?: number[] | null;
  width_not_in?: number[] | null;
  width_lt?: number | null;
  width_lte?: number | null;
  width_gt?: number | null;
  width_gte?: number | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  title_lt?: string | null;
  title_lte?: string | null;
  title_gt?: string | null;
  title_gte?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: ImageWhereInput[] | null;
  OR?: ImageWhereInput[] | null;
  NOT?: ImageWhereInput[] | null;
}

export interface LocationWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  slug?: string | null;
  slug_not?: string | null;
  slug_in?: string[] | null;
  slug_not_in?: string[] | null;
  slug_lt?: string | null;
  slug_lte?: string | null;
  slug_gt?: string | null;
  slug_gte?: string | null;
  slug_contains?: string | null;
  slug_not_contains?: string | null;
  slug_starts_with?: string | null;
  slug_not_starts_with?: string | null;
  slug_ends_with?: string | null;
  slug_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  company?: string | null;
  company_not?: string | null;
  company_in?: string[] | null;
  company_not_in?: string[] | null;
  company_lt?: string | null;
  company_lte?: string | null;
  company_gt?: string | null;
  company_gte?: string | null;
  company_contains?: string | null;
  company_not_contains?: string | null;
  company_starts_with?: string | null;
  company_not_starts_with?: string | null;
  company_ends_with?: string | null;
  company_not_ends_with?: string | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  address1?: string | null;
  address1_not?: string | null;
  address1_in?: string[] | null;
  address1_not_in?: string[] | null;
  address1_lt?: string | null;
  address1_lte?: string | null;
  address1_gt?: string | null;
  address1_gte?: string | null;
  address1_contains?: string | null;
  address1_not_contains?: string | null;
  address1_starts_with?: string | null;
  address1_not_starts_with?: string | null;
  address1_ends_with?: string | null;
  address1_not_ends_with?: string | null;
  address2?: string | null;
  address2_not?: string | null;
  address2_in?: string[] | null;
  address2_not_in?: string[] | null;
  address2_lt?: string | null;
  address2_lte?: string | null;
  address2_gt?: string | null;
  address2_gte?: string | null;
  address2_contains?: string | null;
  address2_not_contains?: string | null;
  address2_starts_with?: string | null;
  address2_not_starts_with?: string | null;
  address2_ends_with?: string | null;
  address2_not_ends_with?: string | null;
  city?: string | null;
  city_not?: string | null;
  city_in?: string[] | null;
  city_not_in?: string[] | null;
  city_lt?: string | null;
  city_lte?: string | null;
  city_gt?: string | null;
  city_gte?: string | null;
  city_contains?: string | null;
  city_not_contains?: string | null;
  city_starts_with?: string | null;
  city_not_starts_with?: string | null;
  city_ends_with?: string | null;
  city_not_ends_with?: string | null;
  country?: string | null;
  country_not?: string | null;
  country_in?: string[] | null;
  country_not_in?: string[] | null;
  country_lt?: string | null;
  country_lte?: string | null;
  country_gt?: string | null;
  country_gte?: string | null;
  country_contains?: string | null;
  country_not_contains?: string | null;
  country_starts_with?: string | null;
  country_not_starts_with?: string | null;
  country_ends_with?: string | null;
  country_not_ends_with?: string | null;
  state?: string | null;
  state_not?: string | null;
  state_in?: string[] | null;
  state_not_in?: string[] | null;
  state_lt?: string | null;
  state_lte?: string | null;
  state_gt?: string | null;
  state_gte?: string | null;
  state_contains?: string | null;
  state_not_contains?: string | null;
  state_starts_with?: string | null;
  state_not_starts_with?: string | null;
  state_ends_with?: string | null;
  state_not_ends_with?: string | null;
  zipCode?: string | null;
  zipCode_not?: string | null;
  zipCode_in?: string[] | null;
  zipCode_not_in?: string[] | null;
  zipCode_lt?: string | null;
  zipCode_lte?: string | null;
  zipCode_gt?: string | null;
  zipCode_gte?: string | null;
  zipCode_contains?: string | null;
  zipCode_not_contains?: string | null;
  zipCode_starts_with?: string | null;
  zipCode_not_starts_with?: string | null;
  zipCode_ends_with?: string | null;
  zipCode_not_ends_with?: string | null;
  locationType?: LocationType | null;
  locationType_not?: LocationType | null;
  locationType_in?: LocationType[] | null;
  locationType_not_in?: LocationType[] | null;
  user?: UserWhereInput | null;
  lat?: number | null;
  lat_not?: number | null;
  lat_in?: number[] | null;
  lat_not_in?: number[] | null;
  lat_lt?: number | null;
  lat_lte?: number | null;
  lat_gt?: number | null;
  lat_gte?: number | null;
  lng?: number | null;
  lng_not?: number | null;
  lng_in?: number[] | null;
  lng_not_in?: number[] | null;
  lng_lt?: number | null;
  lng_lte?: number | null;
  lng_gt?: number | null;
  lng_gte?: number | null;
  physicalProducts_every?: PhysicalProductWhereInput | null;
  physicalProducts_some?: PhysicalProductWhereInput | null;
  physicalProducts_none?: PhysicalProductWhereInput | null;
  shippingOptions_every?: ShippingOptionWhereInput | null;
  shippingOptions_some?: ShippingOptionWhereInput | null;
  shippingOptions_none?: ShippingOptionWhereInput | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: LocationWhereInput[] | null;
  OR?: LocationWhereInput[] | null;
  NOT?: LocationWhereInput[] | null;
}

export interface PhysicalProductPriceWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  buyUsedEnabled?: boolean | null;
  buyUsedEnabled_not?: boolean | null;
  buyUsedPrice?: number | null;
  buyUsedPrice_not?: number | null;
  buyUsedPrice_in?: number[] | null;
  buyUsedPrice_not_in?: number[] | null;
  buyUsedPrice_lt?: number | null;
  buyUsedPrice_lte?: number | null;
  buyUsedPrice_gt?: number | null;
  buyUsedPrice_gte?: number | null;
  AND?: PhysicalProductPriceWhereInput[] | null;
  OR?: PhysicalProductPriceWhereInput[] | null;
  NOT?: PhysicalProductPriceWhereInput[] | null;
}

export interface PhysicalProductQualityReportWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  user?: UserWhereInput | null;
  damageType?: PhysicalProductDamageType | null;
  damageType_not?: PhysicalProductDamageType | null;
  damageType_in?: PhysicalProductDamageType[] | null;
  damageType_not_in?: PhysicalProductDamageType[] | null;
  notes?: string | null;
  notes_not?: string | null;
  notes_in?: string[] | null;
  notes_not_in?: string[] | null;
  notes_lt?: string | null;
  notes_lte?: string | null;
  notes_gt?: string | null;
  notes_gte?: string | null;
  notes_contains?: string | null;
  notes_not_contains?: string | null;
  notes_starts_with?: string | null;
  notes_not_starts_with?: string | null;
  notes_ends_with?: string | null;
  notes_not_ends_with?: string | null;
  physicalProduct?: PhysicalProductWhereInput | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: PhysicalProductQualityReportWhereInput[] | null;
  OR?: PhysicalProductQualityReportWhereInput[] | null;
  NOT?: PhysicalProductQualityReportWhereInput[] | null;
}

export interface PhysicalProductWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  seasonsUID?: string | null;
  seasonsUID_not?: string | null;
  seasonsUID_in?: string[] | null;
  seasonsUID_not_in?: string[] | null;
  seasonsUID_lt?: string | null;
  seasonsUID_lte?: string | null;
  seasonsUID_gt?: string | null;
  seasonsUID_gte?: string | null;
  seasonsUID_contains?: string | null;
  seasonsUID_not_contains?: string | null;
  seasonsUID_starts_with?: string | null;
  seasonsUID_not_starts_with?: string | null;
  seasonsUID_ends_with?: string | null;
  seasonsUID_not_ends_with?: string | null;
  location?: LocationWhereInput | null;
  productVariant?: ProductVariantWhereInput | null;
  inventoryStatus?: InventoryStatus | null;
  inventoryStatus_not?: InventoryStatus | null;
  inventoryStatus_in?: InventoryStatus[] | null;
  inventoryStatus_not_in?: InventoryStatus[] | null;
  productStatus?: PhysicalProductStatus | null;
  productStatus_not?: PhysicalProductStatus | null;
  productStatus_in?: PhysicalProductStatus[] | null;
  productStatus_not_in?: PhysicalProductStatus[] | null;
  offloadMethod?: PhysicalProductOffloadMethod | null;
  offloadMethod_not?: PhysicalProductOffloadMethod | null;
  offloadMethod_in?: PhysicalProductOffloadMethod[] | null;
  offloadMethod_not_in?: PhysicalProductOffloadMethod[] | null;
  offloadNotes?: string | null;
  offloadNotes_not?: string | null;
  offloadNotes_in?: string[] | null;
  offloadNotes_not_in?: string[] | null;
  offloadNotes_lt?: string | null;
  offloadNotes_lte?: string | null;
  offloadNotes_gt?: string | null;
  offloadNotes_gte?: string | null;
  offloadNotes_contains?: string | null;
  offloadNotes_not_contains?: string | null;
  offloadNotes_starts_with?: string | null;
  offloadNotes_not_starts_with?: string | null;
  offloadNotes_ends_with?: string | null;
  offloadNotes_not_ends_with?: string | null;
  sequenceNumber?: number | null;
  sequenceNumber_not?: number | null;
  sequenceNumber_in?: number[] | null;
  sequenceNumber_not_in?: number[] | null;
  sequenceNumber_lt?: number | null;
  sequenceNumber_lte?: number | null;
  sequenceNumber_gt?: number | null;
  sequenceNumber_gte?: number | null;
  warehouseLocation?: WarehouseLocationWhereInput | null;
  barcoded?: boolean | null;
  barcoded_not?: boolean | null;
  dateOrdered?: any | null;
  dateOrdered_not?: any | null;
  dateOrdered_in?: any[] | null;
  dateOrdered_not_in?: any[] | null;
  dateOrdered_lt?: any | null;
  dateOrdered_lte?: any | null;
  dateOrdered_gt?: any | null;
  dateOrdered_gte?: any | null;
  dateReceived?: any | null;
  dateReceived_not?: any | null;
  dateReceived_in?: any[] | null;
  dateReceived_not_in?: any[] | null;
  dateReceived_lt?: any | null;
  dateReceived_lte?: any | null;
  dateReceived_gt?: any | null;
  dateReceived_gte?: any | null;
  unitCost?: number | null;
  unitCost_not?: number | null;
  unitCost_in?: number[] | null;
  unitCost_not_in?: number[] | null;
  unitCost_lt?: number | null;
  unitCost_lte?: number | null;
  unitCost_gt?: number | null;
  unitCost_gte?: number | null;
  price?: PhysicalProductPriceWhereInput | null;
  reports_every?: PhysicalProductQualityReportWhereInput | null;
  reports_some?: PhysicalProductQualityReportWhereInput | null;
  reports_none?: PhysicalProductQualityReportWhereInput | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: PhysicalProductWhereInput[] | null;
  OR?: PhysicalProductWhereInput[] | null;
  NOT?: PhysicalProductWhereInput[] | null;
}

export interface ProductFunctionWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  AND?: ProductFunctionWhereInput[] | null;
  OR?: ProductFunctionWhereInput[] | null;
  NOT?: ProductFunctionWhereInput[] | null;
}

export interface ProductMaterialCategoryWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  slug?: string | null;
  slug_not?: string | null;
  slug_in?: string[] | null;
  slug_not_in?: string[] | null;
  slug_lt?: string | null;
  slug_lte?: string | null;
  slug_gt?: string | null;
  slug_gte?: string | null;
  slug_contains?: string | null;
  slug_not_contains?: string | null;
  slug_starts_with?: string | null;
  slug_not_starts_with?: string | null;
  slug_ends_with?: string | null;
  slug_not_ends_with?: string | null;
  lifeExpectancy?: number | null;
  lifeExpectancy_not?: number | null;
  lifeExpectancy_in?: number[] | null;
  lifeExpectancy_not_in?: number[] | null;
  lifeExpectancy_lt?: number | null;
  lifeExpectancy_lte?: number | null;
  lifeExpectancy_gt?: number | null;
  lifeExpectancy_gte?: number | null;
  category?: CategoryWhereInput | null;
  products_every?: ProductWhereInput | null;
  products_some?: ProductWhereInput | null;
  products_none?: ProductWhereInput | null;
  AND?: ProductMaterialCategoryWhereInput[] | null;
  OR?: ProductMaterialCategoryWhereInput[] | null;
  NOT?: ProductMaterialCategoryWhereInput[] | null;
}

export interface ProductModelWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  height?: number | null;
  height_not?: number | null;
  height_in?: number[] | null;
  height_not_in?: number[] | null;
  height_lt?: number | null;
  height_lte?: number | null;
  height_gt?: number | null;
  height_gte?: number | null;
  products_every?: ProductWhereInput | null;
  products_some?: ProductWhereInput | null;
  products_none?: ProductWhereInput | null;
  AND?: ProductModelWhereInput[] | null;
  OR?: ProductModelWhereInput[] | null;
  NOT?: ProductModelWhereInput[] | null;
}

export interface ProductSeasonWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  vendorSeason?: SeasonWhereInput | null;
  internalSeason?: SeasonWhereInput | null;
  AND?: ProductSeasonWhereInput[] | null;
  OR?: ProductSeasonWhereInput[] | null;
  NOT?: ProductSeasonWhereInput[] | null;
}

export interface ProductTierWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  tier?: ProductTierName | null;
  tier_not?: ProductTierName | null;
  tier_in?: ProductTierName[] | null;
  tier_not_in?: ProductTierName[] | null;
  price?: number | null;
  price_not?: number | null;
  price_in?: number[] | null;
  price_not_in?: number[] | null;
  price_lt?: number | null;
  price_lte?: number | null;
  price_gt?: number | null;
  price_gte?: number | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: ProductTierWhereInput[] | null;
  OR?: ProductTierWhereInput[] | null;
  NOT?: ProductTierWhereInput[] | null;
}

export interface ProductVariantPriceWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  retailPrice?: number | null;
  retailPrice_not?: number | null;
  retailPrice_in?: number[] | null;
  retailPrice_not_in?: number[] | null;
  retailPrice_lt?: number | null;
  retailPrice_lte?: number | null;
  retailPrice_gt?: number | null;
  retailPrice_gte?: number | null;
  AND?: ProductVariantPriceWhereInput[] | null;
  OR?: ProductVariantPriceWhereInput[] | null;
  NOT?: ProductVariantPriceWhereInput[] | null;
}

export interface ProductVariantWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  sku?: string | null;
  sku_not?: string | null;
  sku_in?: string[] | null;
  sku_not_in?: string[] | null;
  sku_lt?: string | null;
  sku_lte?: string | null;
  sku_gt?: string | null;
  sku_gte?: string | null;
  sku_contains?: string | null;
  sku_not_contains?: string | null;
  sku_starts_with?: string | null;
  sku_not_starts_with?: string | null;
  sku_ends_with?: string | null;
  sku_not_ends_with?: string | null;
  displayShort?: string | null;
  displayShort_not?: string | null;
  displayShort_in?: string[] | null;
  displayShort_not_in?: string[] | null;
  displayShort_lt?: string | null;
  displayShort_lte?: string | null;
  displayShort_gt?: string | null;
  displayShort_gte?: string | null;
  displayShort_contains?: string | null;
  displayShort_not_contains?: string | null;
  displayShort_starts_with?: string | null;
  displayShort_not_starts_with?: string | null;
  displayShort_ends_with?: string | null;
  displayShort_not_ends_with?: string | null;
  color?: ColorWhereInput | null;
  internalSize?: SizeWhereInput | null;
  manufacturerSizes_every?: SizeWhereInput | null;
  manufacturerSizes_some?: SizeWhereInput | null;
  manufacturerSizes_none?: SizeWhereInput | null;
  weight?: number | null;
  weight_not?: number | null;
  weight_in?: number[] | null;
  weight_not_in?: number[] | null;
  weight_lt?: number | null;
  weight_lte?: number | null;
  weight_gt?: number | null;
  weight_gte?: number | null;
  height?: number | null;
  height_not?: number | null;
  height_in?: number[] | null;
  height_not_in?: number[] | null;
  height_lt?: number | null;
  height_lte?: number | null;
  height_gt?: number | null;
  height_gte?: number | null;
  productID?: string | null;
  productID_not?: string | null;
  productID_in?: string[] | null;
  productID_not_in?: string[] | null;
  productID_lt?: string | null;
  productID_lte?: string | null;
  productID_gt?: string | null;
  productID_gte?: string | null;
  productID_contains?: string | null;
  productID_not_contains?: string | null;
  productID_starts_with?: string | null;
  productID_not_starts_with?: string | null;
  productID_ends_with?: string | null;
  productID_not_ends_with?: string | null;
  product?: ProductWhereInput | null;
  retailPrice?: number | null;
  retailPrice_not?: number | null;
  retailPrice_in?: number[] | null;
  retailPrice_not_in?: number[] | null;
  retailPrice_lt?: number | null;
  retailPrice_lte?: number | null;
  retailPrice_gt?: number | null;
  retailPrice_gte?: number | null;
  price?: ProductVariantPriceWhereInput | null;
  shopifyProductVariant?: ShopifyProductVariantWhereInput | null;
  physicalProducts_every?: PhysicalProductWhereInput | null;
  physicalProducts_some?: PhysicalProductWhereInput | null;
  physicalProducts_none?: PhysicalProductWhereInput | null;
  total?: number | null;
  total_not?: number | null;
  total_in?: number[] | null;
  total_not_in?: number[] | null;
  total_lt?: number | null;
  total_lte?: number | null;
  total_gt?: number | null;
  total_gte?: number | null;
  reservable?: number | null;
  reservable_not?: number | null;
  reservable_in?: number[] | null;
  reservable_not_in?: number[] | null;
  reservable_lt?: number | null;
  reservable_lte?: number | null;
  reservable_gt?: number | null;
  reservable_gte?: number | null;
  reserved?: number | null;
  reserved_not?: number | null;
  reserved_in?: number[] | null;
  reserved_not_in?: number[] | null;
  reserved_lt?: number | null;
  reserved_lte?: number | null;
  reserved_gt?: number | null;
  reserved_gte?: number | null;
  nonReservable?: number | null;
  nonReservable_not?: number | null;
  nonReservable_in?: number[] | null;
  nonReservable_not_in?: number[] | null;
  nonReservable_lt?: number | null;
  nonReservable_lte?: number | null;
  nonReservable_gt?: number | null;
  nonReservable_gte?: number | null;
  offloaded?: number | null;
  offloaded_not?: number | null;
  offloaded_in?: number[] | null;
  offloaded_not_in?: number[] | null;
  offloaded_lt?: number | null;
  offloaded_lte?: number | null;
  offloaded_gt?: number | null;
  offloaded_gte?: number | null;
  stored?: number | null;
  stored_not?: number | null;
  stored_in?: number[] | null;
  stored_not_in?: number[] | null;
  stored_lt?: number | null;
  stored_lte?: number | null;
  stored_gt?: number | null;
  stored_gte?: number | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: ProductVariantWhereInput[] | null;
  OR?: ProductVariantWhereInput[] | null;
  NOT?: ProductVariantWhereInput[] | null;
}

export interface ProductWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  architecture?: ProductArchitecture | null;
  architecture_not?: ProductArchitecture | null;
  architecture_in?: ProductArchitecture[] | null;
  architecture_not_in?: ProductArchitecture[] | null;
  brand?: BrandWhereInput | null;
  category?: CategoryWhereInput | null;
  color?: ColorWhereInput | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  externalURL?: string | null;
  externalURL_not?: string | null;
  externalURL_in?: string[] | null;
  externalURL_not_in?: string[] | null;
  externalURL_lt?: string | null;
  externalURL_lte?: string | null;
  externalURL_gt?: string | null;
  externalURL_gte?: string | null;
  externalURL_contains?: string | null;
  externalURL_not_contains?: string | null;
  externalURL_starts_with?: string | null;
  externalURL_not_starts_with?: string | null;
  externalURL_ends_with?: string | null;
  externalURL_not_ends_with?: string | null;
  functions_every?: ProductFunctionWhereInput | null;
  functions_some?: ProductFunctionWhereInput | null;
  functions_none?: ProductFunctionWhereInput | null;
  buyNewEnabled?: boolean | null;
  buyNewEnabled_not?: boolean | null;
  images_every?: ImageWhereInput | null;
  images_some?: ImageWhereInput | null;
  images_none?: ImageWhereInput | null;
  materialCategory?: ProductMaterialCategoryWhereInput | null;
  model?: ProductModelWhereInput | null;
  modelSize?: SizeWhereInput | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  photographyStatus?: PhotographyStatus | null;
  photographyStatus_not?: PhotographyStatus | null;
  photographyStatus_in?: PhotographyStatus[] | null;
  photographyStatus_not_in?: PhotographyStatus[] | null;
  productFit?: ProductFit | null;
  productFit_not?: ProductFit | null;
  productFit_in?: ProductFit[] | null;
  productFit_not_in?: ProductFit[] | null;
  publishedAt?: any | null;
  publishedAt_not?: any | null;
  publishedAt_in?: any[] | null;
  publishedAt_not_in?: any[] | null;
  publishedAt_lt?: any | null;
  publishedAt_lte?: any | null;
  publishedAt_gt?: any | null;
  publishedAt_gte?: any | null;
  retailPrice?: number | null;
  retailPrice_not?: number | null;
  retailPrice_in?: number[] | null;
  retailPrice_not_in?: number[] | null;
  retailPrice_lt?: number | null;
  retailPrice_lte?: number | null;
  retailPrice_gt?: number | null;
  retailPrice_gte?: number | null;
  season?: ProductSeasonWhereInput | null;
  secondaryColor?: ColorWhereInput | null;
  slug?: string | null;
  slug_not?: string | null;
  slug_in?: string[] | null;
  slug_not_in?: string[] | null;
  slug_lt?: string | null;
  slug_lte?: string | null;
  slug_gt?: string | null;
  slug_gte?: string | null;
  slug_contains?: string | null;
  slug_not_contains?: string | null;
  slug_starts_with?: string | null;
  slug_not_starts_with?: string | null;
  slug_ends_with?: string | null;
  slug_not_ends_with?: string | null;
  status?: ProductStatus | null;
  status_not?: ProductStatus | null;
  status_in?: ProductStatus[] | null;
  status_not_in?: ProductStatus[] | null;
  tags_every?: TagWhereInput | null;
  tags_some?: TagWhereInput | null;
  tags_none?: TagWhereInput | null;
  tier?: ProductTierWhereInput | null;
  type?: ProductType | null;
  type_not?: ProductType | null;
  type_in?: ProductType[] | null;
  type_not_in?: ProductType[] | null;
  variants_every?: ProductVariantWhereInput | null;
  variants_some?: ProductVariantWhereInput | null;
  variants_none?: ProductVariantWhereInput | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: ProductWhereInput[] | null;
  OR?: ProductWhereInput[] | null;
  NOT?: ProductWhereInput[] | null;
}

export interface PushNotificationReceiptWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  route?: string | null;
  route_not?: string | null;
  route_in?: string[] | null;
  route_not_in?: string[] | null;
  route_lt?: string | null;
  route_lte?: string | null;
  route_gt?: string | null;
  route_gte?: string | null;
  route_contains?: string | null;
  route_not_contains?: string | null;
  route_starts_with?: string | null;
  route_not_starts_with?: string | null;
  route_ends_with?: string | null;
  route_not_ends_with?: string | null;
  screen?: string | null;
  screen_not?: string | null;
  screen_in?: string[] | null;
  screen_not_in?: string[] | null;
  screen_lt?: string | null;
  screen_lte?: string | null;
  screen_gt?: string | null;
  screen_gte?: string | null;
  screen_contains?: string | null;
  screen_not_contains?: string | null;
  screen_starts_with?: string | null;
  screen_not_starts_with?: string | null;
  screen_ends_with?: string | null;
  screen_not_ends_with?: string | null;
  uri?: string | null;
  uri_not?: string | null;
  uri_in?: string[] | null;
  uri_not_in?: string[] | null;
  uri_lt?: string | null;
  uri_lte?: string | null;
  uri_gt?: string | null;
  uri_gte?: string | null;
  uri_contains?: string | null;
  uri_not_contains?: string | null;
  uri_starts_with?: string | null;
  uri_not_starts_with?: string | null;
  uri_ends_with?: string | null;
  uri_not_ends_with?: string | null;
  users_every?: UserWhereInput | null;
  users_some?: UserWhereInput | null;
  users_none?: UserWhereInput | null;
  interest?: string | null;
  interest_not?: string | null;
  interest_in?: string[] | null;
  interest_not_in?: string[] | null;
  interest_lt?: string | null;
  interest_lte?: string | null;
  interest_gt?: string | null;
  interest_gte?: string | null;
  interest_contains?: string | null;
  interest_not_contains?: string | null;
  interest_starts_with?: string | null;
  interest_not_starts_with?: string | null;
  interest_ends_with?: string | null;
  interest_not_ends_with?: string | null;
  body?: string | null;
  body_not?: string | null;
  body_in?: string[] | null;
  body_not_in?: string[] | null;
  body_lt?: string | null;
  body_lte?: string | null;
  body_gt?: string | null;
  body_gte?: string | null;
  body_contains?: string | null;
  body_not_contains?: string | null;
  body_starts_with?: string | null;
  body_not_starts_with?: string | null;
  body_ends_with?: string | null;
  body_not_ends_with?: string | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  title_lt?: string | null;
  title_lte?: string | null;
  title_gt?: string | null;
  title_gte?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  recordID?: string | null;
  recordID_not?: string | null;
  recordID_in?: string[] | null;
  recordID_not_in?: string[] | null;
  recordID_lt?: string | null;
  recordID_lte?: string | null;
  recordID_gt?: string | null;
  recordID_gte?: string | null;
  recordID_contains?: string | null;
  recordID_not_contains?: string | null;
  recordID_starts_with?: string | null;
  recordID_not_starts_with?: string | null;
  recordID_ends_with?: string | null;
  recordID_not_ends_with?: string | null;
  recordSlug?: string | null;
  recordSlug_not?: string | null;
  recordSlug_in?: string[] | null;
  recordSlug_not_in?: string[] | null;
  recordSlug_lt?: string | null;
  recordSlug_lte?: string | null;
  recordSlug_gt?: string | null;
  recordSlug_gte?: string | null;
  recordSlug_contains?: string | null;
  recordSlug_not_contains?: string | null;
  recordSlug_starts_with?: string | null;
  recordSlug_not_starts_with?: string | null;
  recordSlug_ends_with?: string | null;
  recordSlug_not_ends_with?: string | null;
  notificationKey?: string | null;
  notificationKey_not?: string | null;
  notificationKey_in?: string[] | null;
  notificationKey_not_in?: string[] | null;
  notificationKey_lt?: string | null;
  notificationKey_lte?: string | null;
  notificationKey_gt?: string | null;
  notificationKey_gte?: string | null;
  notificationKey_contains?: string | null;
  notificationKey_not_contains?: string | null;
  notificationKey_starts_with?: string | null;
  notificationKey_not_starts_with?: string | null;
  notificationKey_ends_with?: string | null;
  notificationKey_not_ends_with?: string | null;
  sentAt?: any | null;
  sentAt_not?: any | null;
  sentAt_in?: any[] | null;
  sentAt_not_in?: any[] | null;
  sentAt_lt?: any | null;
  sentAt_lte?: any | null;
  sentAt_gt?: any | null;
  sentAt_gte?: any | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: PushNotificationReceiptWhereInput[] | null;
  OR?: PushNotificationReceiptWhereInput[] | null;
  NOT?: PushNotificationReceiptWhereInput[] | null;
}

export interface SeasonWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  year?: number | null;
  year_not?: number | null;
  year_in?: number[] | null;
  year_not_in?: number[] | null;
  year_lt?: number | null;
  year_lte?: number | null;
  year_gt?: number | null;
  year_gte?: number | null;
  seasonCode?: SeasonCode | null;
  seasonCode_not?: SeasonCode | null;
  seasonCode_in?: SeasonCode[] | null;
  seasonCode_not_in?: SeasonCode[] | null;
  AND?: SeasonWhereInput[] | null;
  OR?: SeasonWhereInput[] | null;
  NOT?: SeasonWhereInput[] | null;
}

export interface ShippingMethodWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  code?: ShippingCode | null;
  code_not?: ShippingCode | null;
  code_in?: ShippingCode[] | null;
  code_not_in?: ShippingCode[] | null;
  displayText?: string | null;
  displayText_not?: string | null;
  displayText_in?: string[] | null;
  displayText_not_in?: string[] | null;
  displayText_lt?: string | null;
  displayText_lte?: string | null;
  displayText_gt?: string | null;
  displayText_gte?: string | null;
  displayText_contains?: string | null;
  displayText_not_contains?: string | null;
  displayText_starts_with?: string | null;
  displayText_not_starts_with?: string | null;
  displayText_ends_with?: string | null;
  displayText_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: ShippingMethodWhereInput[] | null;
  OR?: ShippingMethodWhereInput[] | null;
  NOT?: ShippingMethodWhereInput[] | null;
}

export interface ShippingOptionWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  origin?: LocationWhereInput | null;
  destination?: LocationWhereInput | null;
  shippingMethod?: ShippingMethodWhereInput | null;
  externalCost?: number | null;
  externalCost_not?: number | null;
  externalCost_in?: number[] | null;
  externalCost_not_in?: number[] | null;
  externalCost_lt?: number | null;
  externalCost_lte?: number | null;
  externalCost_gt?: number | null;
  externalCost_gte?: number | null;
  averageDuration?: number | null;
  averageDuration_not?: number | null;
  averageDuration_in?: number[] | null;
  averageDuration_not_in?: number[] | null;
  averageDuration_lt?: number | null;
  averageDuration_lte?: number | null;
  averageDuration_gt?: number | null;
  averageDuration_gte?: number | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: ShippingOptionWhereInput[] | null;
  OR?: ShippingOptionWhereInput[] | null;
  NOT?: ShippingOptionWhereInput[] | null;
}

export interface ShopifyProductVariantSelectedOptionWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  value?: string | null;
  value_not?: string | null;
  value_in?: string[] | null;
  value_not_in?: string[] | null;
  value_lt?: string | null;
  value_lte?: string | null;
  value_gt?: string | null;
  value_gte?: string | null;
  value_contains?: string | null;
  value_not_contains?: string | null;
  value_starts_with?: string | null;
  value_not_starts_with?: string | null;
  value_ends_with?: string | null;
  value_not_ends_with?: string | null;
  AND?: ShopifyProductVariantSelectedOptionWhereInput[] | null;
  OR?: ShopifyProductVariantSelectedOptionWhereInput[] | null;
  NOT?: ShopifyProductVariantSelectedOptionWhereInput[] | null;
}

export interface ShopifyProductVariantWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  externalId?: string | null;
  externalId_not?: string | null;
  externalId_in?: string[] | null;
  externalId_not_in?: string[] | null;
  externalId_lt?: string | null;
  externalId_lte?: string | null;
  externalId_gt?: string | null;
  externalId_gte?: string | null;
  externalId_contains?: string | null;
  externalId_not_contains?: string | null;
  externalId_starts_with?: string | null;
  externalId_not_starts_with?: string | null;
  externalId_ends_with?: string | null;
  externalId_not_ends_with?: string | null;
  displayName?: string | null;
  displayName_not?: string | null;
  displayName_in?: string[] | null;
  displayName_not_in?: string[] | null;
  displayName_lt?: string | null;
  displayName_lte?: string | null;
  displayName_gt?: string | null;
  displayName_gte?: string | null;
  displayName_contains?: string | null;
  displayName_not_contains?: string | null;
  displayName_starts_with?: string | null;
  displayName_not_starts_with?: string | null;
  displayName_ends_with?: string | null;
  displayName_not_ends_with?: string | null;
  selectedOptions_every?: ShopifyProductVariantSelectedOptionWhereInput | null;
  selectedOptions_some?: ShopifyProductVariantSelectedOptionWhereInput | null;
  selectedOptions_none?: ShopifyProductVariantSelectedOptionWhereInput | null;
  productVariant?: ProductVariantWhereInput | null;
  shop?: ShopifyShopWhereInput | null;
  brand?: BrandWhereInput | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  title_lt?: string | null;
  title_lte?: string | null;
  title_gt?: string | null;
  title_gte?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  image?: ImageWhereInput | null;
  cachedPrice?: number | null;
  cachedPrice_not?: number | null;
  cachedPrice_in?: number[] | null;
  cachedPrice_not_in?: number[] | null;
  cachedPrice_lt?: number | null;
  cachedPrice_lte?: number | null;
  cachedPrice_gt?: number | null;
  cachedPrice_gte?: number | null;
  cachedAvailableForSale?: boolean | null;
  cachedAvailableForSale_not?: boolean | null;
  cacheExpiresAt?: any | null;
  cacheExpiresAt_not?: any | null;
  cacheExpiresAt_in?: any[] | null;
  cacheExpiresAt_not_in?: any[] | null;
  cacheExpiresAt_lt?: any | null;
  cacheExpiresAt_lte?: any | null;
  cacheExpiresAt_gt?: any | null;
  cacheExpiresAt_gte?: any | null;
  AND?: ShopifyProductVariantWhereInput[] | null;
  OR?: ShopifyProductVariantWhereInput[] | null;
  NOT?: ShopifyProductVariantWhereInput[] | null;
}

export interface ShopifyShopWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  shopName?: string | null;
  shopName_not?: string | null;
  shopName_in?: string[] | null;
  shopName_not_in?: string[] | null;
  shopName_lt?: string | null;
  shopName_lte?: string | null;
  shopName_gt?: string | null;
  shopName_gte?: string | null;
  shopName_contains?: string | null;
  shopName_not_contains?: string | null;
  shopName_starts_with?: string | null;
  shopName_not_starts_with?: string | null;
  shopName_ends_with?: string | null;
  shopName_not_ends_with?: string | null;
  enabled?: boolean | null;
  enabled_not?: boolean | null;
  accessToken?: string | null;
  accessToken_not?: string | null;
  accessToken_in?: string[] | null;
  accessToken_not_in?: string[] | null;
  accessToken_lt?: string | null;
  accessToken_lte?: string | null;
  accessToken_gt?: string | null;
  accessToken_gte?: string | null;
  accessToken_contains?: string | null;
  accessToken_not_contains?: string | null;
  accessToken_starts_with?: string | null;
  accessToken_not_starts_with?: string | null;
  accessToken_ends_with?: string | null;
  accessToken_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: ShopifyShopWhereInput[] | null;
  OR?: ShopifyShopWhereInput[] | null;
  NOT?: ShopifyShopWhereInput[] | null;
}

export interface SizeWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  slug?: string | null;
  slug_not?: string | null;
  slug_in?: string[] | null;
  slug_not_in?: string[] | null;
  slug_lt?: string | null;
  slug_lte?: string | null;
  slug_gt?: string | null;
  slug_gte?: string | null;
  slug_contains?: string | null;
  slug_not_contains?: string | null;
  slug_starts_with?: string | null;
  slug_not_starts_with?: string | null;
  slug_ends_with?: string | null;
  slug_not_ends_with?: string | null;
  productType?: ProductType | null;
  productType_not?: ProductType | null;
  productType_in?: ProductType[] | null;
  productType_not_in?: ProductType[] | null;
  top?: TopSizeWhereInput | null;
  bottom?: BottomSizeWhereInput | null;
  display?: string | null;
  display_not?: string | null;
  display_in?: string[] | null;
  display_not_in?: string[] | null;
  display_lt?: string | null;
  display_lte?: string | null;
  display_gt?: string | null;
  display_gte?: string | null;
  display_contains?: string | null;
  display_not_contains?: string | null;
  display_starts_with?: string | null;
  display_not_starts_with?: string | null;
  display_ends_with?: string | null;
  display_not_ends_with?: string | null;
  type?: SizeType | null;
  type_not?: SizeType | null;
  type_in?: SizeType[] | null;
  type_not_in?: SizeType[] | null;
  AND?: SizeWhereInput[] | null;
  OR?: SizeWhereInput[] | null;
  NOT?: SizeWhereInput[] | null;
}

export interface SmsReceiptWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  externalId?: string | null;
  externalId_not?: string | null;
  externalId_in?: string[] | null;
  externalId_not_in?: string[] | null;
  externalId_lt?: string | null;
  externalId_lte?: string | null;
  externalId_gt?: string | null;
  externalId_gte?: string | null;
  externalId_contains?: string | null;
  externalId_not_contains?: string | null;
  externalId_starts_with?: string | null;
  externalId_not_starts_with?: string | null;
  externalId_ends_with?: string | null;
  externalId_not_ends_with?: string | null;
  body?: string | null;
  body_not?: string | null;
  body_in?: string[] | null;
  body_not_in?: string[] | null;
  body_lt?: string | null;
  body_lte?: string | null;
  body_gt?: string | null;
  body_gte?: string | null;
  body_contains?: string | null;
  body_not_contains?: string | null;
  body_starts_with?: string | null;
  body_not_starts_with?: string | null;
  body_ends_with?: string | null;
  body_not_ends_with?: string | null;
  status?: SmsStatus | null;
  status_not?: SmsStatus | null;
  status_in?: SmsStatus[] | null;
  status_not_in?: SmsStatus[] | null;
  smsId?: string | null;
  smsId_not?: string | null;
  smsId_in?: string[] | null;
  smsId_not_in?: string[] | null;
  smsId_lt?: string | null;
  smsId_lte?: string | null;
  smsId_gt?: string | null;
  smsId_gte?: string | null;
  smsId_contains?: string | null;
  smsId_not_contains?: string | null;
  smsId_starts_with?: string | null;
  smsId_not_starts_with?: string | null;
  smsId_ends_with?: string | null;
  smsId_not_ends_with?: string | null;
  sentAt?: any | null;
  sentAt_not?: any | null;
  sentAt_in?: any[] | null;
  sentAt_not_in?: any[] | null;
  sentAt_lt?: any | null;
  sentAt_lte?: any | null;
  sentAt_gt?: any | null;
  sentAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: SmsReceiptWhereInput[] | null;
  OR?: SmsReceiptWhereInput[] | null;
  NOT?: SmsReceiptWhereInput[] | null;
}

export interface TagWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  products_every?: ProductWhereInput | null;
  products_some?: ProductWhereInput | null;
  products_none?: ProductWhereInput | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: TagWhereInput[] | null;
  OR?: TagWhereInput[] | null;
  NOT?: TagWhereInput[] | null;
}

export interface TopSizeWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  letter?: LetterSize | null;
  letter_not?: LetterSize | null;
  letter_in?: LetterSize[] | null;
  letter_not_in?: LetterSize[] | null;
  sleeve?: number | null;
  sleeve_not?: number | null;
  sleeve_in?: number[] | null;
  sleeve_not_in?: number[] | null;
  sleeve_lt?: number | null;
  sleeve_lte?: number | null;
  sleeve_gt?: number | null;
  sleeve_gte?: number | null;
  shoulder?: number | null;
  shoulder_not?: number | null;
  shoulder_in?: number[] | null;
  shoulder_not_in?: number[] | null;
  shoulder_lt?: number | null;
  shoulder_lte?: number | null;
  shoulder_gt?: number | null;
  shoulder_gte?: number | null;
  chest?: number | null;
  chest_not?: number | null;
  chest_in?: number[] | null;
  chest_not_in?: number[] | null;
  chest_lt?: number | null;
  chest_lte?: number | null;
  chest_gt?: number | null;
  chest_gte?: number | null;
  neck?: number | null;
  neck_not?: number | null;
  neck_in?: number[] | null;
  neck_not_in?: number[] | null;
  neck_lt?: number | null;
  neck_lte?: number | null;
  neck_gt?: number | null;
  neck_gte?: number | null;
  length?: number | null;
  length_not?: number | null;
  length_in?: number[] | null;
  length_not_in?: number[] | null;
  length_lt?: number | null;
  length_lte?: number | null;
  length_gt?: number | null;
  length_gte?: number | null;
  AND?: TopSizeWhereInput[] | null;
  OR?: TopSizeWhereInput[] | null;
  NOT?: TopSizeWhereInput[] | null;
}

export interface UserDeviceDataWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  iOSVersion?: string | null;
  iOSVersion_not?: string | null;
  iOSVersion_in?: string[] | null;
  iOSVersion_not_in?: string[] | null;
  iOSVersion_lt?: string | null;
  iOSVersion_lte?: string | null;
  iOSVersion_gt?: string | null;
  iOSVersion_gte?: string | null;
  iOSVersion_contains?: string | null;
  iOSVersion_not_contains?: string | null;
  iOSVersion_starts_with?: string | null;
  iOSVersion_not_starts_with?: string | null;
  iOSVersion_ends_with?: string | null;
  iOSVersion_not_ends_with?: string | null;
  AND?: UserDeviceDataWhereInput[] | null;
  OR?: UserDeviceDataWhereInput[] | null;
  NOT?: UserDeviceDataWhereInput[] | null;
}

export interface UserPushNotificationInterestWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  type?: UserPushNotificationInterestType | null;
  type_not?: UserPushNotificationInterestType | null;
  type_in?: UserPushNotificationInterestType[] | null;
  type_not_in?: UserPushNotificationInterestType[] | null;
  value?: string | null;
  value_not?: string | null;
  value_in?: string[] | null;
  value_not_in?: string[] | null;
  value_lt?: string | null;
  value_lte?: string | null;
  value_gt?: string | null;
  value_gte?: string | null;
  value_contains?: string | null;
  value_not_contains?: string | null;
  value_starts_with?: string | null;
  value_not_starts_with?: string | null;
  value_ends_with?: string | null;
  value_not_ends_with?: string | null;
  user?: UserWhereInput | null;
  status?: boolean | null;
  status_not?: boolean | null;
  AND?: UserPushNotificationInterestWhereInput[] | null;
  OR?: UserPushNotificationInterestWhereInput[] | null;
  NOT?: UserPushNotificationInterestWhereInput[] | null;
}

export interface UserPushNotificationWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  interests_every?: UserPushNotificationInterestWhereInput | null;
  interests_some?: UserPushNotificationInterestWhereInput | null;
  interests_none?: UserPushNotificationInterestWhereInput | null;
  status?: boolean | null;
  status_not?: boolean | null;
  history_every?: PushNotificationReceiptWhereInput | null;
  history_some?: PushNotificationReceiptWhereInput | null;
  history_none?: PushNotificationReceiptWhereInput | null;
  AND?: UserPushNotificationWhereInput[] | null;
  OR?: UserPushNotificationWhereInput[] | null;
  NOT?: UserPushNotificationWhereInput[] | null;
}

export interface UserWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  auth0Id?: string | null;
  auth0Id_not?: string | null;
  auth0Id_in?: string[] | null;
  auth0Id_not_in?: string[] | null;
  auth0Id_lt?: string | null;
  auth0Id_lte?: string | null;
  auth0Id_gt?: string | null;
  auth0Id_gte?: string | null;
  auth0Id_contains?: string | null;
  auth0Id_not_contains?: string | null;
  auth0Id_starts_with?: string | null;
  auth0Id_not_starts_with?: string | null;
  auth0Id_ends_with?: string | null;
  auth0Id_not_ends_with?: string | null;
  email?: string | null;
  email_not?: string | null;
  email_in?: string[] | null;
  email_not_in?: string[] | null;
  email_lt?: string | null;
  email_lte?: string | null;
  email_gt?: string | null;
  email_gte?: string | null;
  email_contains?: string | null;
  email_not_contains?: string | null;
  email_starts_with?: string | null;
  email_not_starts_with?: string | null;
  email_ends_with?: string | null;
  email_not_ends_with?: string | null;
  firstName?: string | null;
  firstName_not?: string | null;
  firstName_in?: string[] | null;
  firstName_not_in?: string[] | null;
  firstName_lt?: string | null;
  firstName_lte?: string | null;
  firstName_gt?: string | null;
  firstName_gte?: string | null;
  firstName_contains?: string | null;
  firstName_not_contains?: string | null;
  firstName_starts_with?: string | null;
  firstName_not_starts_with?: string | null;
  firstName_ends_with?: string | null;
  firstName_not_ends_with?: string | null;
  lastName?: string | null;
  lastName_not?: string | null;
  lastName_in?: string[] | null;
  lastName_not_in?: string[] | null;
  lastName_lt?: string | null;
  lastName_lte?: string | null;
  lastName_gt?: string | null;
  lastName_gte?: string | null;
  lastName_contains?: string | null;
  lastName_not_contains?: string | null;
  lastName_starts_with?: string | null;
  lastName_not_starts_with?: string | null;
  lastName_ends_with?: string | null;
  lastName_not_ends_with?: string | null;
  role?: UserRole | null;
  role_not?: UserRole | null;
  role_in?: UserRole[] | null;
  role_not_in?: UserRole[] | null;
  pushNotificationStatus?: PushNotificationStatus | null;
  pushNotificationStatus_not?: PushNotificationStatus | null;
  pushNotificationStatus_in?: PushNotificationStatus[] | null;
  pushNotificationStatus_not_in?: PushNotificationStatus[] | null;
  pushNotifications_every?: PushNotificationReceiptWhereInput | null;
  pushNotifications_some?: PushNotificationReceiptWhereInput | null;
  pushNotifications_none?: PushNotificationReceiptWhereInput | null;
  emails_every?: EmailReceiptWhereInput | null;
  emails_some?: EmailReceiptWhereInput | null;
  emails_none?: EmailReceiptWhereInput | null;
  sendSystemEmails?: boolean | null;
  sendSystemEmails_not?: boolean | null;
  pushNotification?: UserPushNotificationWhereInput | null;
  verificationStatus?: UserVerificationStatus | null;
  verificationStatus_not?: UserVerificationStatus | null;
  verificationStatus_in?: UserVerificationStatus[] | null;
  verificationStatus_not_in?: UserVerificationStatus[] | null;
  verificationMethod?: UserVerificationMethod | null;
  verificationMethod_not?: UserVerificationMethod | null;
  verificationMethod_in?: UserVerificationMethod[] | null;
  verificationMethod_not_in?: UserVerificationMethod[] | null;
  smsReceipts_every?: SmsReceiptWhereInput | null;
  smsReceipts_some?: SmsReceiptWhereInput | null;
  smsReceipts_none?: SmsReceiptWhereInput | null;
  fitPics_every?: FitPicWhereInput | null;
  fitPics_some?: FitPicWhereInput | null;
  fitPics_none?: FitPicWhereInput | null;
  deviceData?: UserDeviceDataWhereInput | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: UserWhereInput[] | null;
  OR?: UserWhereInput[] | null;
  NOT?: UserWhereInput[] | null;
}

export interface WarehouseLocationConstraintWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  category?: CategoryWhereInput | null;
  limit?: number | null;
  limit_not?: number | null;
  limit_in?: number[] | null;
  limit_not_in?: number[] | null;
  limit_lt?: number | null;
  limit_lte?: number | null;
  limit_gt?: number | null;
  limit_gte?: number | null;
  locations_every?: WarehouseLocationWhereInput | null;
  locations_some?: WarehouseLocationWhereInput | null;
  locations_none?: WarehouseLocationWhereInput | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: WarehouseLocationConstraintWhereInput[] | null;
  OR?: WarehouseLocationConstraintWhereInput[] | null;
  NOT?: WarehouseLocationConstraintWhereInput[] | null;
}

export interface WarehouseLocationWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  type?: WarehouseLocationType | null;
  type_not?: WarehouseLocationType | null;
  type_in?: WarehouseLocationType[] | null;
  type_not_in?: WarehouseLocationType[] | null;
  barcode?: string | null;
  barcode_not?: string | null;
  barcode_in?: string[] | null;
  barcode_not_in?: string[] | null;
  barcode_lt?: string | null;
  barcode_lte?: string | null;
  barcode_gt?: string | null;
  barcode_gte?: string | null;
  barcode_contains?: string | null;
  barcode_not_contains?: string | null;
  barcode_starts_with?: string | null;
  barcode_not_starts_with?: string | null;
  barcode_ends_with?: string | null;
  barcode_not_ends_with?: string | null;
  locationCode?: string | null;
  locationCode_not?: string | null;
  locationCode_in?: string[] | null;
  locationCode_not_in?: string[] | null;
  locationCode_lt?: string | null;
  locationCode_lte?: string | null;
  locationCode_gt?: string | null;
  locationCode_gte?: string | null;
  locationCode_contains?: string | null;
  locationCode_not_contains?: string | null;
  locationCode_starts_with?: string | null;
  locationCode_not_starts_with?: string | null;
  locationCode_ends_with?: string | null;
  locationCode_not_ends_with?: string | null;
  itemCode?: string | null;
  itemCode_not?: string | null;
  itemCode_in?: string[] | null;
  itemCode_not_in?: string[] | null;
  itemCode_lt?: string | null;
  itemCode_lte?: string | null;
  itemCode_gt?: string | null;
  itemCode_gte?: string | null;
  itemCode_contains?: string | null;
  itemCode_not_contains?: string | null;
  itemCode_starts_with?: string | null;
  itemCode_not_starts_with?: string | null;
  itemCode_ends_with?: string | null;
  itemCode_not_ends_with?: string | null;
  physicalProducts_every?: PhysicalProductWhereInput | null;
  physicalProducts_some?: PhysicalProductWhereInput | null;
  physicalProducts_none?: PhysicalProductWhereInput | null;
  constraints_every?: WarehouseLocationConstraintWhereInput | null;
  constraints_some?: WarehouseLocationConstraintWhereInput | null;
  constraints_none?: WarehouseLocationConstraintWhereInput | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  AND?: WarehouseLocationWhereInput[] | null;
  OR?: WarehouseLocationWhereInput[] | null;
  NOT?: WarehouseLocationWhereInput[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
