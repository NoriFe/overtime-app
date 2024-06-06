import React, { useState } from 'react';
import { OvertimeContext } from './OvertimeContext';
import { OvertimeData } from '../types/OvertimeData';

export const OvertimeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [overtimeData, setOvertimeData] = useState<OvertimeData[]>([]);

  const addOvertime = (overtimeDetails: OvertimeData) => {
    setOvertimeData([...overtimeData, overtimeDetails]);
  };

  return (
    <OvertimeContext.Provider value={{ overtimeData, addOvertime }}>
      {children}
    </OvertimeContext.Provider>
  );
};