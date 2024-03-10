import SuccessCode from '@/enums/success-code.enum';

// import i18n from 'i18next';

const SuccessMessage: Record<SuccessCode, string> = {
  [SuccessCode.Ok]: 'ok',
  [SuccessCode.UserCreated]: 'user_created',
  [SuccessCode.UserUpdated]: 'user_updated',
  [SuccessCode.UserDeleted]: 'user_deleted',
  [SuccessCode.CodeSent]: 'code_sent',
  [SuccessCode.UserLoggedIn]: 'user_logged_in',
  [SuccessCode.PasswordUpdated]: 'password_updated',
  [SuccessCode.CategoryCreated]: 'category_created',
  [SuccessCode.CategoryUpdated]: 'category_updated',
  [SuccessCode.CategoryDeleted]: 'category_deleted',
  [SuccessCode.ProductCreated]: 'product_created',
  [SuccessCode.ProductUpdated]: 'product_updated',
  [SuccessCode.ProductDeleted]: 'product_deleted',
  [SuccessCode.AddedToCart]: 'added_to_cart',
  [SuccessCode.CartToBeDeleted]: 'car_to_be_deleted',
  [SuccessCode.GalleryCreated]: 'gallery_created',
  [SuccessCode.GalleryUpdated]: 'gallery_updated',
  [SuccessCode.GalleryDeleted]: 'gallery_deleted',
  [SuccessCode.BannerCreated]: 'banner_created',
  [SuccessCode.BannerUpdated]: 'banner_updated',
  [SuccessCode.BannerDeleted]: 'banner_deleted',
  [SuccessCode.LeadCreated]: 'lead_created',
  [SuccessCode.LeadUpdated]: 'lead_updated',
  [SuccessCode.LeadDeleted]: 'lead_deleted',
  [SuccessCode.PromoCodeCreated]: 'promo_code_created',
  [SuccessCode.PromoCodeUpdated]: 'promo_code_updated',
  [SuccessCode.OrderCreated]: 'order_created',
  [SuccessCode.OrderStatusUpdated]: 'order_status_updated',
  [SuccessCode.AddedToWishlist]: 'added_to_wishlist',
  [SuccessCode.RemovedFromWishlist]: 'removed_from_wishlist',
};
// export const getSuccessMessage = (code: string): string => {
//   const translationKey = SuccessMessage[code as SuccessCode] || 'unknown_error';
//   return i18n.t(`${translationKey}`);
// };
