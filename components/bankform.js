function BankForm({
  bgcolor,
  header,
  hideName,
  hideEmail,
  hidePassword,
  hideAmount,
  handleButton,
  handle,
  successButton,
}) {
  const [show, setShow] = React.useState(true);
  const [errormsg, setErrormsg] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [balance, setBalance] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [loged, setLoged] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setErrormsg('Error: ' + label);
      setTimeout(() => setErrormsg(''), 3000);
      return false;
    }
    return true;
  }

  function handleAction() {
    if (!validate(name, 'Empty Name')) return;
    if (!validate(email, 'Empty Email')) return;
    if (!validate(password, 'Empty Password')) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearform() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }
  return (
    <Card
      bgcolor={bgcolor}
      header={header}
      error={errormsg}
      body={
        show ? (
          <>
            {hideName ? (
              <></>
            ) : (
              <>
                Name
                <br />
                <input
                  type='input'
                  className='form-control'
                  id='name'
                  placeholder='Enter Your Name'
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <br />
              </>
            )}
            {hideEmail ? (
              <></>
            ) : (
              <>
                Email
                <br />
                <input
                  type='input'
                  className='form-control'
                  id='email'
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <br />
              </>
            )}
            {hidePassword ? (
              <></>
            ) : (
              <>
                Password
                <br />
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  placeholder='Enter Your Password'
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <br />
              </>
            )}
            <button
              type='submit'
              className='btn btn-light'
              onClick={handleAction}>
              {handleButton}
            </button>
          </>
        ) : (
          <>
            <h5>Sucess!!!</h5>
            <button type='submit' className='btn btn-light' onClick={clearform}>
              {successButton}
            </button>
          </>
        )
      }
    />
  );
}
