const btnSave = document.getElementById('btnDownload');
btnSave.addEventListener('click', function () {
    alert('Your schedule json is downloading!');
    const inputs = document.querySelectorAll('input[type=text]');
    const schedule = {};

    inputs.forEach(input => {
        const part = input.id.split('-');
        const day = part[1];
        const hour = part[2];
        if (!schedule[day]) {
            schedule[day] = {}
        }
        schedule[day][hour] = input.value;
    })

    const jsonString = JSON.stringify(schedule, null, 2);
    console.log(jsonString)

    // Criar um Blob(?) com o JSON
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "schedule.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); // Remover o link do DOM
    URL.revokeObjectURL(url);     // Liberar a URL temporária
});

const btnUpload = document.getElementById('btnUpload');
const inputUpload = document.getElementById("inputUpload")
btnUpload.addEventListener('click', function () {
    inputUpload.click();
})

inputUpload.addEventListener('change', function (event) {
    const file = event.target.files[0]; // Pegar o arquivo
    if (!file) return; // Verificar se o arquivo existe

    const reader = new FileReader(); // FileReader, um objeto do javascript, para ler arquivos do computador
    reader.onload = function (e) { // Ler o arquivo como um texto
        try {
            const schedule = JSON.parse(e.target.result); // Converter o texto em json para um objeto de js
            Object.keys(schedule).forEach(day => { // Para cada chave do objeto schedule ->
                Object.keys(schedule[day]).forEach(hour => { // Em cada dia e hora ->
                    const inputId = `input-${day}-${hour}`; // Descobrir qual ID do input foi salvo
                    const input = document.getElementById(inputId); // Pegar o input da página com base no input do json
                    if (input) input.value = schedule[day][hour]; // Se foi encontrado, coloca o valor do json no lugar do input 
                });
            });
        } catch (err) {
            alert("Invalid file!");
        }
    };

    reader.readAsText(file);
});