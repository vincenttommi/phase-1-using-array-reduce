const batteryBatches = [ 
    { batteryAmount: 10 },
    { batteryAmount: 20 },
    { batteryAmount: 30 }
  ];
  
  const totalBatteries = batteryBatches.reduce((totalBatteries, batch) => {
    return totalBatteries + batch.batteryAmount;
  }, 0);
  
  console.log(totalBatteries); // Output: 60
  