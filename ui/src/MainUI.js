import * as React from 'react';
import { useState } from 'react';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import axios from 'axios';
import SimilarityUI from './SimilarityUI';
import FindSimilarUI from './FindSimilarUI';
import WordAlgebraUI from './WordAlgebraUI';

function MainUI({state}) {
  switch(state)
  {
    case 0:
      return <SimilarityUI state={state} />
    case 1:
      return <FindSimilarUI state={state} />
    case 2:
      return <WordAlgebraUI state={state} />
    default:
      break;
  }
  return null;
}

export default MainUI;