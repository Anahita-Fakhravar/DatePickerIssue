/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Platform, Pressable, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styled from 'styled-components';

function App(): React.JSX.Element {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePicked, setDatePicked] = useState<
    Date | string | null | undefined
  >(undefined);
  const showDatePicker = () => {
    console.warn('clicked');
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date | undefined | string) => {
    console.warn('A date has been picked: ', date);
    setDatePicked(date);
    hideDatePicker();
  };

  return (
    <StyledSafeAreaView>
      <Container onPress={showDatePicker}>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <PlaceHolder>
          {datePicked
            ? new Date(datePicked).toLocaleDateString()
            : 'Select Date'}
        </PlaceHolder>
      </Container>
    </StyledSafeAreaView>
  );
}

export default App;

const PlaceHolder = styled(Text)`
  color: gray;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  height: 19px;
  margin-bottom: 5px;
  margin-left: 11px;
  margin-top: ${Platform.OS === 'android' ? 4.5 : 6}px;
`;

const Container = styled(Pressable)`
  align-self: flex-start;
  background-color: #ffffff;
  border-color: gray;
  border-radius: 4px;
  border-width: 1px;
  flex-direction: row;
  height: 32px;
  justify-content: space-between;
  width: 90%;
  margin: 0 10px;
`;

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
