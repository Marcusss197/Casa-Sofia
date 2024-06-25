document.getElementById('petForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário
  
  // Obtenha os valores do formulário
  const doador = document.getElementById('doador').value;
  const telefone = document.getElementById('telefone').value;
  const petName = document.getElementById('petName').value;
  const raca = document.getElementById('raca').value;
  const sexo = document.getElementById('sexo-pet').value;
  const descricao = document.getElementById('descricao').value;
  const foto = document.getElementById('foto').files[0];

  // Atualize os elementos de resultado
  document.getElementById('resDoador').textContent = doador;
  document.getElementById('resTelefone').textContent = telefone;
  document.getElementById('resPetName').textContent = petName;
  document.getElementById('resRaca').textContent = raca;
  document.getElementById('resSexo').textContent = sexo;
  document.getElementById('resDescricao').textContent = descricao;

  if (foto) {
      const reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('resFoto').src = e.target.result;
      };
      reader.readAsDataURL(foto);
  }

  // Exibe a div de resultado e oculta o formulário
  document.getElementById('result').classList.remove('hidden');
  document.querySelector('.customcontato').classList.add('hidden');
});

document.getElementById('redirectToAdoption').addEventListener('click', function() {
  window.location.href = 'adocao.html';
});