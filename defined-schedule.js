document.addEventListener('DOMContentLoaded', function() {
    const hours = ["08 am", "09 am", "10 am", "11 am", "12 pm", "01 pm", "02 pm", "03 pm", "04 pm", "05 pm", "06 pm", "07 pm", "08 pm", "09 pm", "10 pm"];
    const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

    const tbody = document.getElementById("schedule-body");
    
    hours.forEach(hour => {
        const tr = document.createElement("tr");

        // Primeira coluna: o horário
        const tdHour = document.createElement("td");
        tdHour.textContent = hour;
        tdHour.className = "fw-bold";
        tr.appendChild(tdHour);

        // Colunas de dias com inputs
        days.forEach(day => {
            const td = document.createElement("td");
            const input = document.createElement("input");
            input.type = "text";
            input.className = "form-control form-control-sm";
            input.placeholder = "Add activity";
            input.id = `input-${day}-${hour.replace(' ', '')}`;
            td.appendChild(input);
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
});