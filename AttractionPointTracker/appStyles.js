// appStyles.js
import { Dimensions, StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  increasebutton: {
    marginHorizontal: 10,
    color: '#3498db',
  },
  decreasebutton: {
    marginHorizontal: 10,
    color: '#e74c3c',
  },
  button: {
    marginHorizontal: 10,
  },
  picker: {
    flexDirection: 'column',
    height: 50,
    width: 150,
    marginBottom: 20,
    color: '#FFFFFF', // Set the text color for the picker
  },
  attractionLevel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FFFFFF',
    padding: 10,
  },
  header: {
    color: '#6d7a71',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logEntry: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  textInputContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 2,
    hidden: true,
    invisible: true,
  },
  textInput: {
    height: 100,
    textAlignVertical: 'top',
    color: '#FFFFFF',
  },
  notesHeading: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  notesInput: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height - 10,
    textAlignVertical: 'top',
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 2,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  
});

export default appStyles;