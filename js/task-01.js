const allItems = document.querySelectorAll('.item');
console.log(`Кількість категорій елементів: ${allItems.length}`);

allItems.forEach((li) => {
    console.log(`Категорії: ${li.firstElementChild.textContent}`);
    console.log(`Елементи: ${li.lastElementChild.children.length}`);
});
