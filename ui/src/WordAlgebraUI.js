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

function WordAlgebraUI({state}) {
  const [resultWords, setSetResultWords] = useState("none");

  let word1 = "", word2 = "", word3 = "";
  function performWordAlgebra(e)
  {
    axios.post('http://127.0.0.1:5000/wordalgebra',
      {
        firstWord: word1,
        secondWord: word2,
        thirdWord: word3
      })
      .then(res => setSetResultWords(res.data));
  }

  function onWord1Change(e)
  {
    word1 = e.target.value;
  }

  function onWord2Change(e)
  {
    word2 = e.target.value
  }

  function onWord3Change(e)
  {
    word3 = e.target.value
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
            <FormLabel>First Word</FormLabel>
            <Input
              // html input attribute
              name="word1"
              type="text"
              placeholder="First word"
              onChange = {onWord1Change}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Second Word</FormLabel>
            <Input
              name="word2"
              type="text"
              placeholder="Second word"
              onChange = {onWord2Change}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Third Word</FormLabel>
            <Input
              name="word3"
              type="text"
              placeholder="Third word"
              onChange = {onWord3Change}
            />
          </FormControl>
          <Button
            sx={{mt: 1 /* margin top */ }}
            onClick= {performWordAlgebra}
          >
            Perform Word Algebra
          </Button>
        </Stack>
        <Typography level="h4" component="h1">
          Result Words: {resultWords}, {state}
        </Typography>        
      </Stack>
    </CssVarsProvider>
  )  
}

export default WordAlgebraUI;