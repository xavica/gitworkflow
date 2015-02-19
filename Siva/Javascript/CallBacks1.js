function kfcChicken(x1, x2, callback) {
    alert('Started eating my KFC chicken.\n\nIt is : ' + x1 + ', ' + x2);
    callback();
}

kfcChicken('so spicy', 'so tasty', function() {
    alert('Finished eating my chicken.');
});