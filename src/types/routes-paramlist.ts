import { ROUTES } from '@constants';
import { CoinListing } from './coins';

export type RoutesParamList = {
  [ROUTES.LOGIN]: {} | undefined;
  [ROUTES.HOME]: {} | undefined;
  [ROUTES.DETAIL_COIN]: { item: CoinListing };
};
