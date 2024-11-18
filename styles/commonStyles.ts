import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.small,
  },
  buttonText: {
    color: '#fff',
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
  },
  title: {
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xLarge ,
  },
});
