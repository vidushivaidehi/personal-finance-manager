document.getElementById('addTransactionBtn').addEventListener('click', addTransaction);

let totalBalance = 0;

function addTransaction() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (description && !isNaN(amount)) {
        // Create a transaction item
        const transactionList = document.getElementById('transactionList');
        const transactionItem = document.createElement('div');
        transactionItem.className = `transaction-item ${category.toLowerCase()}`;
        transactionItem.textContent = `${description}: $${amount.toFixed(2)}`;
        transactionList.appendChild(transactionItem);

        // Update total balance
        if (category === 'Income') {
            totalBalance += amount;
        } else {
            totalBalance -= amount;
        }
        
        // Update the total balance display
        document.getElementById('totalBalance').textContent = totalBalance.toFixed(2);

        // Reset input fields
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('category').value = 'Income';
    }
}
