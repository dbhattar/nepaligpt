import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import LoginUI from './LoginUI';
import MainUI from './MainUI';
import Toolbar from './Toolbar';

function App() {
  const [uiState, setUIState] = React.useState(0);

  function onToolbarClick(id) {
    setUIState(id);
  }
  
  return (
    <Stack
      spacing={4}
    >
      <Toolbar onClick={onToolbarClick} />
      <MainUI state={uiState} />
    </Stack>
  )
}

export default App;
