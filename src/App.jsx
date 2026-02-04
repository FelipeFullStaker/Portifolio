function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>✅ PROJETO NOVO CRIADO COM SUCESSO!</h1>
      <p>Portfólio do Felipe funcionando perfeitamente!</p>
      <button 
        style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
        onClick={() => alert('React rodando! 🎉')}
      >
        Clique para testar
      </button>
    </div>
  )
}

export default App