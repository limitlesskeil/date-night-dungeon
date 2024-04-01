import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, Keyboard, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import appStyles from './appStyles';
import { writeToLogFile, clearLogEntries} from './logFileUtils';
import d20 from './assets/d20.png';


const CalculatorScreen = ({ navigation }) => {
  const [attractionLevel, setAttractionLevel] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState('1');
  const [logEntries, setLogEntries] = useState([]);
  const [newLogEntry, setNewLogEntry] = useState('');
  const [showTextInputContainer, setShowTextInputContainer] = useState(false); // State variable to control visibility

  const increaseValue = () => {
    const newAttractionLevel = attractionLevel + parseInt(selectedNumber);
    setAttractionLevel(newAttractionLevel);
    updateLog(`Attraction level increased by ${selectedNumber} and is now ${newAttractionLevel}`);
  };
  const decreaseValue = () => {
    const newAttractionLevel = attractionLevel - parseInt(selectedNumber);
    setAttractionLevel(newAttractionLevel);
    updateLog(`Attraction level decreased by ${selectedNumber} and is now ${newAttractionLevel}`);
  };
  const setToZero = () => {
    setAttractionLevel(0);
    updateLog('Attraction level set to zero');
  };
  const updateLog = (entry) => {
    if (!logEntries.includes(entry)) {
      const updatedLog = [...logEntries, entry];
      setLogEntries(updatedLog);
      writeToLogFile(updatedLog.join('\n'));
    }
  };
  const submitCustomLog = () => {
    if (newLogEntry.trim() !== '') {
      updateLog(newLogEntry);
      setNewLogEntry('');
      Keyboard.dismiss();
    }
  };
  const resetLog = () => {
    Alert.alert(
      'Confirm Reset',
      'Are you sure you want to reset the log file?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          onPress: async () => {
            try {
              await clearLogEntries(); // Use clearLogEntries function to clear the log storage
              setLogEntries([]);
              console.log('Log file cleared');
            } catch (error) {
              console.error('Error clearing log file:', error);
              if (error instanceof Error) {
                console.error(error.stack);
              }
            }
          },
        },
      ]
    );
  };


  return (
    <View style={appStyles.container}>
      <Image source={d20} style={appStyles.image} />
      <Text style={appStyles.attractionLevel}>
        Current Attraction Level: {attractionLevel}
      </Text>
      <Picker
        selectedValue={selectedNumber}
        style={appStyles.picker}
        onValueChange={(itemValue) => setSelectedNumber(itemValue)}
        itemStyle={{
            color: '#FFFFFF',
            flexDirection: 'column',
            height: 50,
            width: 150,
            marginBottom: 20,
          }}
        themeVariant="dark"
      >
        {Array.from({ length: 50 }, (_, i) => (i + 1).toString()).map((number) => (
          <Picker.Item key={number} label={number} value={number} />
        ))}
      </Picker>
      <View style={appStyles.buttonsContainer}>
        <View style={appStyles.increasebutton}>
          <Button title="Increase" onPress={increaseValue} color="#3498db"/>
        </View>
        <View style={appStyles.decreasebutton}>
          <Button title="Decrease" onPress={decreaseValue} color="#e74c3c"/>
        </View>
        <View style={appStyles.decreasebutton}>
          <Button title="Reset" onPress={setToZero} color="#e74c3c"/>
        </View>
      </View>
      {showTextInputContainer && ( // Conditionally render the text input container
        <View style={appStyles.textInputContainer}>
          <TextInput
            style={appStyles.textInput}
            onChangeText={(text) => setNewLogEntry(text)}
            value={newLogEntry}
            placeholder="Enter log entry"
            placeholderTextColor="#FFFFFF"
            color="#FFFFFF"
            numberOfLines={2}
            onSubmitEditing={submitCustomLog} // Handle the "Enter" key press event
            blurOnSubmit={true}
            returnKeyType='done'
          />
          <Button title="Submit" onPress={submitCustomLog} />
        </View>
      )}
      {showTextInputContainer && (
        <Button title="Reset Log" onPress={resetLog} />
      )}
    </View>
  );
};

export default CalculatorScreen;
//export var attraction = attractionLevel;