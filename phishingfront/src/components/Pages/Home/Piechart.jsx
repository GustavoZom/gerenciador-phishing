import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Piechart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 78, label: 'Total Clicado' },
            { id: 1, value: 22, label: 'Total Não clicado' },
          ],
        },
          ]}
          {...pieParams}
        />
  );
}

const pieParams = {
  height: 140,
  margin: { right: 5 },
  hideLegend: true,
};