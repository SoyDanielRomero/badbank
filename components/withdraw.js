function Withdraw() {
  const ctx = React.useContext(UserContext);

  function withdraw(name, email, password, loged, amount) {
    ctx.users.filter((user) => {
      if (user.loged === false) {
        alert('Please Login first');
        window.location.assign('/assets/projects/coding/badbank/#/login/');
      } else {
        let currentBalance = user.balance;
        user.balance = Number(currentBalance) - Number(amount);
      }
    });
  }
  return (
    <div className='container'>
      <BankForm
        bgcolor='danger'
        header='Withdraw Form'
        hideName={true}
        hideEmail={true}
        hidePassword={true}
        hideAmount={false}
        hideBalance={true}
        handleButton='Withdraw'
        handle={withdraw}
        successButton='Make another withdraw'
      />
    </div>
  );
}
