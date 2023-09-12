import React, { useEffect } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Login() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: "mor_2314",
            password: "83r5^_"
          }),
        });

        if (!response.ok) {
          throw new Error('Não foi possível realizar o login');
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='AccountCircleOutlinedIcon'>
      <AccountCircleOutlinedIcon label="User" icon={<AccountCircleOutlinedIcon />} />
        <span>Entrar</span>
    </div>
  );
}

export default Login;
