import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function CustomDatePicker() {
  const [date, setDate] = useState(null)
  const [showModal, setshowModal] = useState(false)

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setDate(currentDate)
    setshowModal(false)
  }
  return (
    <View>
      <TouchableOpacity onPress={() => setshowModal(true)} style={styles.inputContainerStyle}>
        <Text style={styles.textStyle}>Open Date Picker</Text>
      </TouchableOpacity>
      {
        showModal && (
          <DateTimePicker
            mode={'datetime'}
            is24Hour={true}
            value={date || new Date()}
            onChange={handleDateChange}
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