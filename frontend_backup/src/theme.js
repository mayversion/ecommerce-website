import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#EA1E63', light: '#FF4C8C', dark: '#B1003B', contrastText: '#FFFFFF' },
    secondary: { main: '#EA7E1E', light: '#FF9A49', dark: '#B65F15', contrastText: '#FFFFFF' },
    error: { main: '#EF4444' },
    warning: { main: '#F59E0B' },
    success: { main: '#10B981' },
    info: { main: '#3B82F6' },
    background: { default: '#F9FAFB', paper: '#FFFFFF' },
    text: { primary: '#111827', secondary: '#374151', disabled: '#9CA3AF' },
  },
  typography: {
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    h1: { fontSize: '40px', lineHeight: '48px', fontWeight: 700, letterSpacing: '-0.01em' },
    h2: { fontSize: '32px', lineHeight: '40px', fontWeight: 600, letterSpacing: '-0.01em' },
    h3: { fontSize: '24px', lineHeight: '32px', fontWeight: 600 },
    h4: { fontSize: '20px', lineHeight: '28px', fontWeight: 600 },
    h5: { fontSize: '16px', lineHeight: '24px', fontWeight: 600 },
    h6: { fontSize: '14px', lineHeight: '20px', fontWeight: 600 },
    body1: { fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
    body2: { fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
    caption: { fontSize: '12px', lineHeight: '16px', fontWeight: 500 },
    button: { fontSize: '14px', lineHeight: '20px', fontWeight: 600, textTransform: 'none' },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 8, fontWeight: 600, textTransform: 'none' },
        sizeMedium: { padding: '12px 24px', fontSize: '14px' },
        sizeLarge: { padding: '14px 32px', fontSize: '16px' },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #E5E7EB',
          transition: 'transform 150ms ease, box-shadow 150ms ease',
          '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.10)', transform: 'translateY(-2px)' },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: 4, fontWeight: 500 } },
    },
  },
});

export default theme;





