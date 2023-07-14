import React from 'react';
import { ChartComponent,  SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, DateTime, Zoom, Tooltip, Logarithmic, Crosshair } from "@syncfusion/ej2-react-charts";

import { Header } from '../../components';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const date1 = new Date('2017, 1, 1')

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}

const financialValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="hist" title="Reservation History" />
      <div className='w-full'>
        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          tooltip={{ enable: true, shared: true}}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 }}}
          chartArea={{ border: { width: 0 }}}
          background={ currentMode === 'Dark' ? "#33373E" : "#fff" }
        >
          <Inject services={[HiloSeries, DateTime, Zoom, Tooltip, Logarithmic, Crosshair]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={financialValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            >
            </SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial