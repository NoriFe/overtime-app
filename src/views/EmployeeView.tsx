// EmployeeView.tsx
import React, { useContext } from 'react';
import { OvertimeContext } from '../contexts/OvertimeContext';

export const EmployeeView = () => {
  const { overtimeData } = useContext(OvertimeContext);

  return (
    <div>
      <h1>Employee View</h1>
      {overtimeData.map((overtime, index) => (
        <div key={index}>
          <p>Hours: {overtime.hours}</p>
          <p>Date: {overtime.date}</p>
          <p>Location: {overtime.location}</p>
        </div>
      ))}
    </div>
  );
};