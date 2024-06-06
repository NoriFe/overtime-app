// OvertimeContext.tsx
import React from 'react';
import { OvertimeData } from '../types/OvertimeData';

type OvertimeContextType = {
  overtimeData: OvertimeData[];
  addOvertime: (overtimeDetails: OvertimeData) => void;
};

export const OvertimeContext = React.createContext<OvertimeContextType | undefined>(undefined);