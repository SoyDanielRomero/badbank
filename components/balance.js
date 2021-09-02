function Balance() {
  const ctx = React.useContext(UserContext);
  return (
    <div className='container'>
      <h1>Balance</h1>
      <br />
      {JSON.stringify(ctx)}
    </div>
  );
}
