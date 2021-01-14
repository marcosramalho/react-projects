import React from 'react';

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      username,
      email,
      password
    });

    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'applcation/json',
        
      }
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={username} 
        placeholder="Username"
        onChange={({target}) => setUsername(target.value)}
      ></input>
      <input 
        type="text" 
        value={email} 
        placeholder="Email"
        onChange={({target}) => setEmail(target.value)}
      ></input>
      <input 
        type="text" 
        value={password} 
        placeholder="Password"
        onChange={({target}) => setPassword(target.value)}
      ></input>
      <button>Enviar</button>
    </form>
  )
}

export default UserPost;