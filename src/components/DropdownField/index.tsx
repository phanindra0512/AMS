import React, {useState} from 'react';

import {
  Container,
  DropdownButton,
  SelectedText,
  ArrowText,
  DropdownList,
  Option,
  OptionText,
} from './styles';

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownFieldProps {
  data: DropdownItem[];
  selectedValue?: string;
  placeholder?: string;
  onSelect: (item: DropdownItem) => void;
}

const DropdownField = ({
  data,
  selectedValue,
  placeholder = 'Select Option',
  onSelect,
}: DropdownFieldProps) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (item: DropdownItem) => {
    onSelect(item);
    setVisible(false);
  };

  return (
    <Container>
      <DropdownButton isSelected={visible} onPress={() => setVisible(prev => !prev)}>
        <SelectedText isSelected={visible}>{selectedValue || placeholder}</SelectedText>

        <ArrowText>{visible ? '▲' : '▼'}</ArrowText>
      </DropdownButton>

      {visible && (
        <DropdownList>
          {data.map(item => (
            <Option key={item.value} onPress={() => handleSelect(item)}>
              <OptionText>{item.label}</OptionText>
            </Option>
          ))}
        </DropdownList>
      )}
    </Container>
  );
};

export default DropdownField;
