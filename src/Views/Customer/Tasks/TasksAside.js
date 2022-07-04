import React from 'react';
import GLink from '../../../Components/GComponents/GLink';

const TasksAside = () => {
  return <div>
      <GLink to="/customer/tasks/task-details" text='Project Detail' className="w-100" color="#000" marginBottom="10px"></GLink>
      <GLink to="/customer/tasks/task-description" text='Describe' className="w-100" color="#000" marginBottom="10px"></GLink>
      <GLink to="/customer/tasks/task-location" text='Location' className="w-100" color="#000" marginBottom="10px"></GLink>
      <GLink to="/customer/tasks/budget" text='Budget' className="w-100" color="#000" marginBottom="10px"></GLink>
      <GLink to="/customer/tasks/task-date-time" text='Date & Time' className="w-100" color="#000" marginBottom="10px"></GLink>
  </div>;
};

export default TasksAside;
