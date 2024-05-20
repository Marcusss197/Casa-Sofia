document.getElementById('petForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const doador = document.getElementById('doador').value;
    const petName = document.getElementById('petName').value;
    const raca = document.getElementById('raca').value;
    const sexo = document.getElementById('sexo').value;
    const telefone = document.getElementById('telefone').value;
    const descricao = document.getElementById('descricao').value;
    const foto = document.getElementById('foto').files[0];

    document.getElementById('resDoador').textContent = doador;
    document.getElementById('resPetName').textContent = petName;
    document.getElementById('resRaca').textContent = raca;
    document.getElementById('resSexo').textContent = sexo;
    document.getElementById('resTelefone').textContent = telefone;
    document.getElementById('resDescricao').textContent = descricao;
    
    localStorage.getItem()
    const formData = {
      doador: doador,
      petName: petName,
      raca: raca,
      sexo: sexo,
      telefone: telefone,
      descricao: descricao
    };

    localStorage.setItem('formData', JSON.stringify(formData));


    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('resFoto').src = e.target.result;
    }
    reader.readAsDataURL(foto);
    
    document.getElementById('result').classList.remove('hidden');
});
