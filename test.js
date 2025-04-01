const btn = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    if (input.value.trim() === '') {
        alert('Please input a value');
        return;
    }
    const value = input.value;
    if (isPalindrome(value)) {
        result.textContent = `${value} is a palindrome`;
    } else {
        result.textContent = `${value} is not a palindrome`;
    }
});

function isPalindrome(str) {
    // Remove non-alphabetical characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Compare the cleaned string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}