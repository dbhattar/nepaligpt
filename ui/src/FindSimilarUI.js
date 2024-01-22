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

function FindSimilarUI({state}) {
  const [similarWords, setSimilarWords] = useState("none");

  let word = "";
  function findSimilarWords(e)
  {
    axios.post('http://127.0.0.1:5000/findsimilarwords',
      {
        word: word
      })
      .then(res => setSimilarWords(res.data));
  }

  function onWordChange(e)
  {
    word = e.target.value;
  }

  return (
    <CssVarsProvider>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <FormControl>
            <FormLabel>Find similar words for:</FormLabel>
            <Input
              // html input attribute
              name="word"
              type="text"
              placeholder="Word"
              onChange = {onWordChange}
            />
          </FormControl>
          <Button
            sx={{mt: 1 /* margin top */ }}
            onClick= {findSimilarWords}
          >
            Find Similar Words
          </Button>
        </Stack>
        <Typography level="h4" component="h1">
          Similar Words: {similarWords}, {state}
        </Typography>        
      </Stack>
    </CssVarsProvider>
  )  
}

export default FindSimilarUI;