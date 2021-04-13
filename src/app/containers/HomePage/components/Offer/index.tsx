/**
 *
 * Offer
 *
 */
import React, { memo, useCallback } from 'react';

import { StyledOffer } from './styles';
import {
  AndroidOutlined,
  AppleOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { ellipseString } from 'utils/helpers';
import { ProductData } from 'app/containers/App/types';
import { redirect } from 'utils/history';
import { Routes } from 'app/containers/App/Router/routes';

interface Props {
  className?: string;
  product: Array<ProductData>;
}

export const Offer = memo(({ className, product }: Props) => {
  const { t } = useTranslation();
  const handleRouteToProductDetails = useCallback(
    (id: number) => () => redirect(Routes.productDetails, { id }),
    [],
  );

  return (
    <StyledOffer className={`Offer ${className || ''}`}>
      <div className="container category">
        <div className="row slide">
          <ul
            className="col container-filter list-unstyled categories-filter text-center"
            id="filter"
          >
            {product.map(item => (
              <li className=" slideItem">
                <div
                  className="offerCard"
                  onClick={handleRouteToProductDetails(item.id)}
                >
                  <div className="titleProduct">
                    {ellipseString(`${item.title}`, 11)}
                  </div>
                  <div>
                    <img
                      src={item.image}
                      className="imgProduct"
                      alt={item.title}
                    />
                  </div>

                  <div className="buyProduct">
                    {/* <div>
                      <HeartOutlined size={6} />
                    </div> */}
                    <div className="priceStyle">
                      {/* <ShoppingOutlined size={6} />{' '} */}
                      <div className="price">
                        <div className='discount'>18%</div>
                        <s className='priceDiscount'>{item.price}</s>
                      </div>
                      <div className="price">
                        <div className='currency'>تومان</div>
                        <div>{item.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledOffer>
  );
});
