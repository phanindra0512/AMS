const getFloorLabel = (floor: string) => {
  switch (floor) {
    case '1':
      return 'First Floor';
    case '2':
      return 'Second Floor';
    case '3':
      return 'Third Floor';
    case '4':
      return 'Fourth Floor';
    default:
      return `Floor ${floor}`;
  }
};