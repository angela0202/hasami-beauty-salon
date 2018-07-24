document.addEventListener('click', (e) => {
  e = e || window.event;
  const target = e.target || e.srcElement;

  if(target.className.toLowerCase() === 'book-day'){
    const modal = document.getElementById('myModal');
    const bookDate = document.querySelector('.date');
    bookDate.innerText = target.dataset.date;
    modal.style.display = "block";
  }
  if (e.target.className.toLowerCase() === 'modal') {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  if (e.target.className.toLowerCase() === 'close') {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
}, false);

document.addEventListener('DOMContentLoaded', () => {
  const next = document.querySelector('.btnNext');
  const prev = document.querySelector('.btnPrev');

  next.addEventListener('click', () => {
    cal.nextMonth();
  });

  prev.addEventListener('click', () => {
    cal.previousMonth();
  })
});