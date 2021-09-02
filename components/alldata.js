function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <div className='container'>
      <h1>All Data</h1>
      <br />
      {JSON.stringify(ctx)}
    </div>
  );
}
