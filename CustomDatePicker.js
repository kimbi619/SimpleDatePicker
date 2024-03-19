import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function CustomDatePicker() {
  const [date, setDate] = useState(null)
  const [showModal, setshowModal] = useState(false)

  const handleDateChange = (event, selectedDate) => {
    console.log("---------", event);
    if (event.type === 'set') {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    }
    if (event.type === 'dismissed') {
    }

    setshowModal(false);
  };

  const handleCancel = () => {
    console.log('cancelling modal');
    setShowModal(false);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => setshowModal(true)} style={styles.inputContainerStyle}>
        <Text style={styles.textStyle}>Open Date Picker</Text>
      </TouchableOpacity>
      {
        showModal && (
          <DateTimePicker
            value={date || new Date()}
            mode={'date'}
            is24Hour={true}
            display="default"
            confirmBtnText = "Confirm"
            cancelBtnText="Close"
            onTouchCancel={handleCancel}
            onChange={handleDateChange}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
          />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CAD3DF',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingRight: 10,
    height: 50,
  },
 
  textStyle: {
    fontSize: 16,
    marginHorizontal: 10,
  }
})