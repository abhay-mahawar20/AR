
});document.getElementById ```javascript
('arButton').addEventListener('click', function() {
    const arEffect = document.getElementById('arEffect');
    if (arEffect.classList.contains('hidden')) {
        arEffect.classList.remove('hidden');
    } else {
        arEffect.classList.add('hidden');
    }
});