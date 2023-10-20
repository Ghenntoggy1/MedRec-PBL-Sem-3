import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Pacient = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Informații generale');

  const handleMenuItemClick = (itemName) => {
    setSelectedMenuItem(itemName);
    // Handle the click event logic here, such as updating state or performing other actions
    console.log(`Menu item clicked: ${itemName}`);
  };

  return (
    <div>
      <Sidebar onItemClick={handleMenuItemClick} />
      {/* Render other components or content based on the selectedMenuItem state */}
    </div>
  );
};

export default Pacient;

