function BadBank() {
  return (
    <HashRouter>
      <NavBar />
      <div className='d-flex justify-content-center mt-5 container'>
        <UserContext.Provider
          value={{
            users: [
              {
                name: 'Daniel',
                email: 'daniromerro@gmail.com',
                password: 'secret',
                balance: 100,
              },
            ],
          }}>
          <Route path='/' exact component={Home} />
          <Route path='/createaccount/' exact component={CreateAccount} />
          <Route path='/login/' exact component={Login} />
          <Route path='/deposit/' exact component={Deposit} />
          <Route path='/withdraw/' exact component={Withdraw} />
          <Route path='/balance/' exact component={Balance} />
          <Route path='/alldata/' exact component={AllData} />
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<BadBank />, document.getElementById('root'));
