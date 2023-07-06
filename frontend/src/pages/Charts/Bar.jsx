import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, DataLabel, Inject, ColumnSeries, Category, Legend, Tooltip } from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Onlympic Medals - UBC" />
      <ChartComponent
        id="charts"
        height='420px'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        tooltip={{ enable: true}}
        background={ currentMode === 'Dark' ? "#33373E" : "#fff"}
        chartArea={{ border: { width: 0 }}}
        legendSettings={{ background: 'white' }}
      >
        {/* In 'Inject' tag, you can either put BarSeries or ColumnSeries as a bar chart */}
        <Inject services={[ColumnSeries, Legend , Category, Tooltip, DataLabel]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar