function Withdraw() {
  const ctx = React.useContext(UserContext);
  return (
    <div className='container'>
      <h1>Withdraw</h1>
      <br />
      {JSON.stringify(ctx)}
    </div>
  );
}
