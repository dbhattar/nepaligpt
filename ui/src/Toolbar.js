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

function ToolbarItem({content, onClick}) {
    return (
        <Typography
            level="h3"
            component="h1"
            onClick={onClick}
            sx={{ "&:hover": { color: "white", backgroundColor: "black"}}} 
        >
            {content}
        </Typography>
    )
}

function Toolbar({onClick}) {
  return (
    <CssVarsProvider>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
        <ToolbarItem content="Find Similarity" onClick={() => onClick(0)} />
        <ToolbarItem content="Find Similar Words" onClick={() => onClick(1)} />
        <ToolbarItem content="Perform Word Algebra" onClick={() => onClick(2)} />
      </Stack>
    </CssVarsProvider>
  )
}

export default Toolbar;
