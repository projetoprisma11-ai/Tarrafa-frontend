import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Activity } from '@/types/grades';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 25,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#374DAA',
    ...theme.applyStyles('dark', {
      backgroundColor: '#374DAA',
    }),
  },
}));

interface ProgressBarsProps {
  activities: Activity[]
}

export default function ProgressBars({ activities }: ProgressBarsProps) {
  return (
    <div className="p-3 max-w-[475px] w-full max-h-[225px] overflow-y-auto space-y-4">
      {activities.map((a, i) => (
        <>
          <div className="flex flex-row justify-between">
            <p key={i} className="text-xs font-medium">{a.activity_name}</p>
            <p className="text-xs font-medium">{a.grade_real} / {a.grade_max}</p>
          </div>
          <BorderLinearProgress variant="determinate" key={i} value={a.grade_real / a.grade_max * 100} />
          <div className="flex flex-row justify-between text-xs text-gray-500">
            <p>0</p>
            <p>20</p>
            <p>40</p>
            <p>60</p>
            <p>80</p>
            <p>100</p>
          </div>
        </>
      ))}
    </div>
  );
}
