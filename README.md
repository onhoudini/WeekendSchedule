# Weekend Schedule

🇧🇷 **Português** | 🇺🇸 **English**

---

## 🇧🇷 Português

Uma aplicação web simples para criar, salvar e carregar cronogramas semanais, com interface escura e responsiva.

### ✨ Funcionalidades

- Grade de horários das 8h às 22h para todos os dias da semana
- Inputs dinâmicos para cada horário e dia
- Salvar cronograma em arquivo JSON (download)
- Carregar cronograma a partir de arquivo JSON (upload)
- Interface escura com Bootstrap 5
- Design responsivo para desktop e mobile

### 🚀 Como Usar

1. **Execute em um servidor local** (necessário para funcionar corretamente):
    ```bash
    cd "Weekend Schedule"
    python3 -m http.server 8000
    # Depois acesse: http://localhost:8000/index.html
    ```
2. Preencha os campos de atividades nos horários e dias desejados.
3. Clique em **"Save your schedule (JSON)"** para baixar seu cronograma.
4. Para restaurar um cronograma salvo, clique em **"Upload your schedule (JSON)"** e selecione o arquivo JSON.

### 🛠️ Tecnologias Utilizadas

- HTML5 – Estrutura da aplicação
- JavaScript – Geração dinâmica da tabela e manipulação de arquivos
- Bootstrap 5 – Estilização e responsividade

### 📁 Estrutura do Projeto

```
Weekend Schedule/
├── index.html
├── defined-schedule.js
├── schedule-json.js
├── LICENSE
└── README.md
```

### 📄 Licença

MIT License – Sinta-se livre para usar, modificar e compartilhar este projeto.

---

## 🇺🇸 English

A simple web application to create, save, and load weekly schedules, with a dark and responsive interface.

### ✨ Features

- Time grid from 8 AM to 10 PM for all days of the week
- Dynamic inputs for each time slot and day
- Save schedule as a JSON file (download)
- Load schedule from a JSON file (upload)
- Dark interface with Bootstrap 5
- Responsive design for desktop and mobile

### 🚀 How to Use

1. **Run on a local server** (required for proper functionality):
    ```bash
    cd "Weekend Schedule"
    python3 -m http.server 8000
    # Then access: http://localhost:8000/index.html
    ```
2. Fill in the activity fields for the desired times and days.
3. Click **"Save your schedule (JSON)"** to download your schedule.
4. To restore a saved schedule, click **"Upload your schedule (JSON)"** and select the JSON file.

### 🛠️ Technologies Used

- HTML5 – Application structure
- JavaScript – Dynamic table generation and file handling
- Bootstrap 5 – Styling and responsiveness

### 📁 Project Structure

```
Weekend Schedule/
├── index.html
├── defined-schedule.js
├── schedule-json.js
├── LICENSE
└── README.md
```

### 📄 License

MIT License – Feel free to use, modify, and share this project.