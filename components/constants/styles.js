import {StyleSheet} from 'react-native';

export const GlobalStyles = {
    colors: {
      primary50: '#e4d9fd',
      primary100: '#c6affc',
      primary200: '#a281f0',
      primary400: '#5721d4',
      primary500: '#3e04c3',
      primary700: '#2d0689',
      primary800: '#200364',
      accent500: '#f7bc0c',
      error50: '#fcc4e4',
      error500: '#9b095c',
      gray500: '#39324a',
      gray700: '#221c30',
    },
  };

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  containerL: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerC: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerR: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});