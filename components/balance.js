// function Balance() {
//   const ctx = React.useContext(UserContext);

//   var currentBalance;

//   function balance(name, email, password, loged, amount) {
//     ctx.users.filter((user) => {
//       if (user.loged === false) {
//         alert('Please Login first');
//         window.location.assign('/assets/projects/coding/badbank/#/login/');
//       } else {
//         currentBalance = user.balance;
//         return currentBalance;
//       }
//     });
//   }
//   return (
//     <div className='container'>
//       <BankForm
//         bgcolor='info'
//         header='Current Balance'
//         hideName={true}
//         hideEmail={true}
//         hidePassword={true}
//         hideAmount={true}
//         hideBalance={false}
//         handleButton='Withdraw'
//         handle={balance}
//         successButton='Make another withdraw'
//       />
//     </div>
//   );
// }

function Balance() {
  const ctx = React.useContext(UserContext);
  let user = ctx.users.filter((user) => user.loged === true);
  let index;
  let balance;
  if (user.length > 0) {
    index = ctx.users.indexOf(user[0]);
    balance = ctx.users[index].balance;
  } else {
    alert('Please Login first');
    window.location.assign('/assets/projects/coding/badbank/#/login/');
  }
  return (
    <>
      {user.length > 0 ? (
        <Card
          bgcolor={'info'}
          header={'Curent Balance'}
          body={<h1>$ {balance}</h1>}
        />
      ) : (
        <></>
      )}
    </>
  );
}
