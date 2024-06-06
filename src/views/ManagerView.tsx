import React, { useState, useContext } from 'react';
import { UserController } from '../controllers/UserController';
import { OvertimeContext } from '../contexts/OvertimeContext';
import { OvertimeData } from '../types/OvertimeData';

export const ManagerView = () => {
  const context = useContext(OvertimeContext);

  if (!context) {
    throw new Error('ManagerView must be used within an OvertimeProvider');
  }

  const { addOvertime } = context;
  const controller = new UserController();

  // State for the form fields
  const [overtimeDetails, setOvertimeDetails] = useState<OvertimeData>({
    hours: '',
    date: '',
    location: '',
  });

  // Update state when a field changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setOvertimeDetails({
      ...overtimeDetails,
      [event.target.name]: event.target.value,
    });
  };

  // Call the controller methods when the buttons are clicked
  const handleAddOvertime = () => {
    controller.addOvertime(overtimeDetails);
    addOvertime(overtimeDetails);
  };

  const cancelOvertime = () => {
    controller.cancelOvertime(overtimeDetails);
  };

  const approveOvertime = () => {
    controller.approveOvertime(overtimeDetails);
  };

  // ... rest of your component
};