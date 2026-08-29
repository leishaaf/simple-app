
const form = document.getElementById('thisForm');

form.addEventListener('submit', async function(event){
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const classes = document.getElementById('classes').value;
    const expectations = document.getElementById('expectations').value;
    const selected = document.querySelector('input[name="level"]:checked');
    const levelSelected = selected ? selected.value : 'None selected';

    const data = {
        name: name,
        email: email,
        classes: classes,
        expectations: expectations,
        level: levelSelected
    };

    const response = await fetch("/api/info", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        form.reset();
    }
});
