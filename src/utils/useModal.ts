import {useState} from 'react';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const showModal = () => setIsVisible(true);
  const dismissModal = () => setIsVisible(false);

  return {
    isVisible,
    showModal,
    dismissModal,
  };
};
