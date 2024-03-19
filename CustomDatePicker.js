import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DatetTimePicker from '@react-native-community/datetimepicker'

export default function CustomDatePicker() {
  const [date, setDate] = useState(null)
  const [showPicker, setShowPicker] = useState(false)

  const handleDateChange = (event, selectedDate) => {
    if(event.type === 'set'){
      const currentDate = selectedDate || date
      console.log(currentDate);
      setDate(currentDate)
    }
    setShowPicker(false)
  }
  return (
    <View>
      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.inputContainerStyle}>
        <Text style={styles.textStyle}>Open Date Picker</Text>
      </TouchableOpacity>
      {
        showPicker && (
          <DatetTimePicker 
            mode={'time'}
            is24Hour={true}
            value={ date || new Date() }
            onChange={handleDateChange}
            confirmBtnText="Confirm"
            cancelBtnText="Dismiss"
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