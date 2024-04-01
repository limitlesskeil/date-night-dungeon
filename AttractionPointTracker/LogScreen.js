import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native'; // Import ScrollView
import AsyncStorage from '@react-native-async-storage/async-storage';
import appStyles from './appStyles';

const LogScreen = ({ navigation }) => {
  const [logEntries, setLogEntries] = useState([]);

  useEffect(() => {
    const fetchLogEntries = async () => {
      try {
        const storedLog = await AsyncStorage.getItem('log');
        if (storedLog !== null) {
          const parsedLog = storedLog.split('\n');
          setLogEntries(parsedLog);
        }
      } catch (error) {
        console.error('Error fetching log entries:', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', () => {
      fetchLogEntries();
    });

    return unsubscribe;
  }, [navigation]);

  const renderLogEntries = () => {
    return logEntries.map((entry, index) => (
      <Text key={index} style={appStyles.logEntry}>{entry}</Text>
    ));
  };

  return (
    <ScrollView contentContainerStyle={appStyles.scrollContainer}>
      <View style={appStyles.container}>
        <Text style={appStyles.title}>Log Entries</Text>
        {logEntries.length > 0 ? renderLogEntries() : <Text style={appStyles.noLogEntries}>{'No log entries found.'}</Text>}
      </View>
    </ScrollView>
  );
};

export default LogScreen;