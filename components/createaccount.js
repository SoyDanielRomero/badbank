function CreateAccount() {
  function createaccount() {
    return 'hola';
  }
  return (
    <div className='container'>
      <BankForm
        bgcolor='primary'
        header='Create Account'
        hideName={false}
        hideEmail={false}
        hidePassword={false}
        hideAmount={true}
        handleButton='Create New Account'
        handle={createaccount}
        successButton='Add Another Account'
      />
    </div>
  );
}
