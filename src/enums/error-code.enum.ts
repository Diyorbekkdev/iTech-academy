enum ErrorCode {
  ServerError = 'SERVER_ERROR',
  PermissionDenied = 'PERMISSION_DENIED',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenNotExist = 'TOKEN_NOT_EXIST',
  ValidationError = 'VALIDATION_ERROR',
  Unauthorized = 'UNAUTHORIZED',
  Forbidden = 'FORBIDDEN',
  TooManyRequests = 'TOO_MANY_REQUESTS',
  UserNotFound = 'USER_NOT_FOUND',
  UserPhoneNumberAlreadyExist = 'USER_PHONE_NUMBER_ALREADY_EXIST',
  IncorrectPassword = 'INCORRECT_PASSWORD',
  BasicRoleCannotUpdated = 'BASIC_ROLE_CANNOT_UPDATED',
  SMSNotSent = 'SMS_NOT_SENT',
  UserBlockedForSMS = 'USER_BLOCKED_FOR_SMS',
  InvalidPhoneNumber = 'INVALID_PHONE_NUMBER',
  UserAlreadyExist = 'USER_ALREADY_EXIST',
  InvalidCode = 'INVALID_CODE',
  InvalidResetId = 'INVALID_RESET_ID',
  CategoryAlreadyExist = 'CATEGORY_ALREADY_EXIST',
  CategoryNotFound = 'CATEGORY_NOT_FOUND',
  ProductAlreadyExist = 'PRODUCT_ALREADY_EXIST',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  CartNotFound = 'CART_NOT_FOUND',
  CaptchaTokenNotExist = 'CAPTCHA_TOKEN_NOT_EXIST',
  CaptchaVerificationFailed = 'CAPTCHA_VERIFICATION_FAILED',
  GalleryNotFound = 'GALLERY_NOT_FOUND',
  BannerNotFound = 'BANNER_NOT_FOUND',
  LeadNotFound = 'LEAD_NOT_FOUND',
  LeadNotDeleted = 'LEAD_NOT_DELETED',
  LeadAlreadyPhoned = 'LEAD_ALREADY_PHONED',
  PromoCodeAlreadyExist = 'PROMO_CODE_ALREADY_EXIST',
  DiscountOutOfRangeZeroToHundred = 'DISCOUNT_OUT_OF_RANGE_ZERO_TO_HUNDRED',
  InvalidDate = 'INVALID_DATE',
  PromoCodeNotFound = 'PROMO_CODE_NOT_FOUND',
  InvalidCouponPercentageDiscount = 'INVALID_COUPON_PERCENTAGE_DISCOUNT',
  ProductsMustBeEmpty = 'PRODUCTS_MUST_BE_EMPTY',
  PromoCodeNotIncludedThisProduct = 'PROMO_CODE_NOT_INCLUDED_THIS_PRODUCT',
  OrderNotFound = 'ORDER_NOT_FOUND',
  CannotUpdateStatus = 'CANNOT_UPDATE_STATUS',
  OutOfUsageLimit = 'OUT_OF_USAGE_LIMIT',
  AlreadyAddedToWishlist = 'ALREADY_ADDED_TO_WISHLIST',
  AlreadyRemovedFromWishlist = 'ALREADY_REMOVED_FROM_WISHLIST',
}

export default ErrorCode;
