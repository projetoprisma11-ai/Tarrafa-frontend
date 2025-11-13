import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

import "ag-charts-enterprise";

interface GaugeChartProps {
  value: number,
  max_value: number
}

export default function GaugeChart({ value, max_value }: GaugeChartProps) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge
        width={400}
        height={175}
        value={value}
        valueMax={max_value}
        startAngle={-90}
        endAngle={90}
        innerRadius="80%"
        cornerRadius="30%"
        sx={{
          '& .MuiGauge-valueText': {
            fontSize: 65,
            fontWeight: 600,
            fontFamily: 'Poppins',
            transform: 'translate(0px, -30px)',
          },
          '& .MuiGauge-valueArc': {
            fill: "#374DAA",
          },
        }}
        text={({ value }) => `${value}`} />
    </Stack>
  );
}