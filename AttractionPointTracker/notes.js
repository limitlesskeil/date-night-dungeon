import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appStyles from './appStyles';

const NotesScreen = () => {
  const [note, setNote] = useState('');

  useEffect(() => {
    // Load the saved note when the component mounts
    loadNote();
  }, []);

  const loadNote = async () => {
    try {
      const savedNote = await AsyncStorage.getItem('userNote');
      if (savedNote !== null) {
        setNote(savedNote);
      }
    } catch (error) {
      console.error('Error loading note: ', error);
    }
  };

  const saveNote = async () => {
    try {
      await AsyncStorage.setItem('userNote', note);
      console.log('Note saved successfully');
    } catch (error) {
      console.error('Error saving note: ', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={appStyles.scrollContainer}>
      <View style={appStyles.container}>
        <Text style={appStyles.title}>Notes</Text>
        <TextInput
          style={appStyles.notesInput}
          multiline
          numberOfLines={10}
          placeholder="Write your notes here..."
          value={note}
          onChangeText={(text) => {
            setNote(text);
            saveNote(); // Save the note whenever it's updated
          }}
        />
      </View>
    </ScrollView>
  )
};

export default NotesScreen;