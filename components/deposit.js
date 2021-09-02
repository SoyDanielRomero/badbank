function Deposit() {
  const ctx = React.useContext(UserContext);
  return (
    <div className='container'>
      <h1>Deposit</h1>
      <br />
      {JSON.stringify(ctx)}
    </div>
  );
}
