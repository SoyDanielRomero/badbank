function CreateAccount() {
  const ctx = React.useContext(UserContext);
  function createaccount(name, email, password) {
    ctx.users.push({ name, email, password, balance: 100, loged: false });
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
        hideBalance={true}
        handleButton='Create New Account'
        handle={createaccount}
        successButton='Add Another Account'
      />
    </div>
  );
}
