const categoryCount = document.querySelectorAll('li.item').length;
console.log(`Number of categories: ${categoryCount}`);

document.querySelectorAll('li.item').forEach(item => {
    // console.log(item)
    console.log(`Category: ${item.querySelector('h2').textContent} \n` +
        `Category: ${item.querySelectorAll('li').length}`);
})












