/**
 *
 * TradInfoChart
 *
 */
import React, { memo } from 'react';

import { StyledTradInfoChart } from './styles';

import { useTranslation } from 'react-i18next';
import { ArdbitHisrotyChart } from 'app/components/ArdbitHisrotyChart';
import { translations } from 'locales/i18n';
import { Card } from 'antd';

interface Props {
  className?: string;
}

export const TradInfoChart = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const data = {
    // labels: chartShop.labels,
    labels: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '15',
      '16.5',
      '23.5',
      '24',
      '27.9',
      '30.2',
    ],
    datasets: [
      {
        label: t(translations.components.TradInfoChart.title),
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'red',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        // [
        //   1.2, 1.7, 2.7, 3.1, 3.5, 3.8, 4.2,4.8,5.3,5.5,6.8,7.8
        // ]
        // data: chartShop.data,
        data: [
          1.5,
          1.7,
          2.7,
          3.1,
          6.5,
          7.8,
          8.2,
          14.8,
          15.3,
          16.5,
          19.8,
          20.6,
          22.5,
          23.3,
          26.5,
          28.8,
          30.6,
        ],
        // backgroundColor:[
        //   'rgba(255, 99, 132, 0.6)',
        //   'rgba(54, 162, 235, 0.6)',
        //   'rgba(255, 206, 86, 0.6)',
        //   'rgba(75, 192, 192, 0.6)',
        //   'rgba(153, 102, 255, 0.6)',
        //   'rgba(255, 159, 64, 0.6)',
        //   'rgba(255, 99, 132, 0.6)'
        // ]
      },
    ],
  };
  return (
    <StyledTradInfoChart className={`TradInfoChart ${className || ''}`}>
      <Card>
        <ArdbitHisrotyChart
          // title={t(translations.components.ArdbitExchangeHisrotyChart.title)}
          data={data}
          title={data.datasets[0].label}
          color="#ffe401"
          yLabel={t(translations.components.TradInfoChart.yLabel)}
        />
      </Card>
    </StyledTradInfoChart>
  );
});
