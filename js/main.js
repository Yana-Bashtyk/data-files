window.onload = () => {
  let arrOfName;

  fetch('https://github.com/Yana-Bashtyk/data-files/blob/gh-pages/user.json')
    .then(response => response.json())
    .then((users) => {
      arrOfName = users; // сохраняем в переменную объект
    })
    .then(
      result => result,
      error => console.log(error.message),
    );
  console.log(arrOfName);
};
