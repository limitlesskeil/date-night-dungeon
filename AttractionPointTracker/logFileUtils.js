import AsyncStorage from '@react-native-async-storage/async-storage';

const writeToLogFile = async (logEntry) => {
  try {
    const currentLog = await AsyncStorage.getItem('log');
    const updatedLog = (currentLog ? currentLog + '\n' : '') + logEntry;
    await AsyncStorage.setItem('log', updatedLog);
  } catch (error) {
    console.error('Error writing to log file:', error);
  }
};

const clearLogEntries = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing log entries:', error);
  }
};

export { writeToLogFile, clearLogEntries };