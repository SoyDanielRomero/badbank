function Home() {
  return (
    <Card
      txtcolor='black'
      header='BadBank Landing Page'
      title='Welcome to BadBank App'
      text='You can use this app'
      body={
        <img src='bank.png' className='img-fluid' alt='Responsive Bank Image' />
      }
    />
  );
}
