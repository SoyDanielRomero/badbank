function Deposit() {
  const ctx = React.useContext(UserContext);

  function deposit(name, email, password, loged, amount) {
    ctx.users.filter((user) => {
      console.log('user.loged', user.loged);
      if (user.loged === false) {
        alert('Please Login first');
        window.location.assign('/assets/projects/coding/badbank/#/login/');
      } else {
        let currentBalance = user.balance;
        user.balance = Number(currentBalance) + Number(amount);
      }
    });
  }
  return (
    <div className='container'>
      <BankForm
        bgcolor='success'
        header='Deposit Form'
        hideName={true}
        hideEmail={true}
        hidePassword={true}
        hideAmount={false}
        hideBalance={true}
        handleButton='Deposit'
        handle={deposit}
        successButton='Make another deposit'
      />
    </div>
  );
}
