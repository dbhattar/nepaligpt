import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';

function ModeToggle() {
    const {mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
  
    // necessary for server-side rendering
    // because mode is undefined on the server
    React.useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }
  
    return (
      <Button
        variant="outlined"
        onClick = {() => {
          setMode(mode === 'light' ? 'dark' : 'light');
        }}
      >
        {mode === 'light' ? 'Turn dark' : 'Turn light'}
      </Button>
    )
  }
  
function LoginUI() {
    return (
        <CssVarsProvider>
          <Sheet
            sx={{
              width: 300,
              mx: 'auto', // margin left & right
              my: 4, // margin top & bottom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderRadius: 'sm',
              boxShadow: 'md',
            }}
          >
          <ModeToggle />
            <div>
              <Typography level="h4" component="h1">
                Welcome!
              </Typography>
              <Typography level="body-sm">Sign in to continue.</Typography>
            </div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                // html input attribute
                name="email"
                autoComplete="username webauthn"
                placeholder="johndoe@email.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="password"
              />
            </FormControl>
            <Button sx={{mt: 1 /* margin top */ }}>
              Log in
            </Button>
            <Typography
              endDecorator={<Link href="/sign-up">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Dont' have an account?
            </Typography>
          </Sheet>
        </CssVarsProvider>
    )
}

export default LoginUI;