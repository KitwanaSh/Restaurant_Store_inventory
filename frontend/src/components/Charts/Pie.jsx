import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries } from '@syncfusion/ej2-react-charts'

import { useStateContext } from '../../contexts/ContextProvider';

const Pie = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      tooltip={{ enable: true }}
      height={height}
      legendSettings={{ visible: legendVisiblity, background: 'white'}}
      background={ currentMode === 'Dark' ? '#33373E' : '#fff' }
    >
      <Inject services={[PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        >
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default Pie