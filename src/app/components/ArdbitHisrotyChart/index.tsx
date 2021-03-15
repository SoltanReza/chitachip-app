/**
 *
 * ArdbitHisrotyChart
 *
 */

// import Line, { LineConfig } from '@ant-design/charts/es/line';
import { Card } from 'antd';
import React, { memo } from 'react';
import { Line } from 'react-chartjs-2';
import { StyledArdbitHisrotyChart } from './styles';
interface Props {
  className?: string;
  color: string;
  data: any;
  title?: string;
  yLabel?: string;
  xLabel?: string;
}

export const ArdbitHisrotyChart = memo(
  ({ className, color, data, title, xLabel, yLabel }: Props) => {
    // const config: LineConfig = {
    //   data,
    //   title: {
    //     visible: !!title,
    //     text: title || '',
    //     alignTo: 'middle',
    //   },
    //   xField: 'name',
    //   yField: 'value',
    //   color: color,
    //   point: {
    //     visible: true,
    //     size: 5,
    //     shape: 'diamond',
    //     style: {
    //       fill: 'white',
    //       stroke: color,
    //       lineWidth: 2,
    //     },
    //   },
    //   xAxis: {
    //     title: { text: xLabel, visible: true },
    //   },
    //   yAxis: {
    //     title: { text: yLabel, visible: true, offset: 0 },
    //   },
    // };
    const defaultProps = {
      displayTitle: true,
      displayLegend: false,
      legendPosition: 'right',
      location: 'City',
    };

    return (
      <StyledArdbitHisrotyChart
        className={`ArdbitHisrotyChart ${className || ''}`}
      >
        <Card>
          {/* <Line {...config} /> */}
          <Line
            data={data}
            height={300}
            width={350}
            options={{
              responsive: true,
              responsiveAnimationDuration: 1,
              maintainAspectRatio: false,
              title: {
                display: defaultProps.displayTitle,
                text: title?.toString(),
                fontSize: 18,
                // fullWidth:"200px",
              },
              legend: {
                display: defaultProps.displayLegend,
                position: defaultProps.legendPosition,
              },
            }}
          />
        </Card>
      </StyledArdbitHisrotyChart>
    );
  },
);
