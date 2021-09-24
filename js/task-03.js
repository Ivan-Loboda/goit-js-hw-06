const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const res = images.map(item => {
  // console.log(item)



  return `<li><img src=${item.url} alt='${item.alt}'></li>`
})

// console.log(res)
document.querySelector('ul.gallery').insertAdjacentHTML("afterbegin", res.join(' '));

const galleryItem = document.querySelectorAll('ul.gallery li').forEach(item => {
  // console.log(item)
  item.style.listStyle = 'none';
  item.style.width = '100%';
  item.style.border = '4px dashed #f1768c';
  item.style.borderRadius = '4px';
  item.style.marginBottom = '20px';
  item.firstChild.style.width = '100%';
  console.log(item.firstChild)
  return
});