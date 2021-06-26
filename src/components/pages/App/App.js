const App = () => {
  return (
    <div className="container">
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          padding: '100px 0',
          flexDirection: 'column',
          alignItems: 'center',
          fontWeight: 700,
          color: '#000'
        }}
      >
        <span css={{ display: 'block', fontSize: '24px' }}>
          The React starter for
        </span>
        <h1 css={{ fontWeight: 700, fontSize: '38px' }}>Web Application</h1>
        <p css={{ color: 'red' }}>Test Emotion</p>
      </div>
    </div>
  )
}

export default App
