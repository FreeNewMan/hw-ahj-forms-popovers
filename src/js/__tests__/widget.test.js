/**
 * @jest-environment jsdom
 */

import UserForm from '../components/UserForm';

test('Заргузка формы с кнопкой и нажатие на кнопку. Проверка показа Popover', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const userForm = new UserForm(container);

  userForm.bindToDOM();
  userForm.submit.click();

  const markup = '<h3 class="popover-header">Заголовок</h3><div class="popover-body">Вот так должен выглядеть виджет в целом, для упрощения будем считать, что виджет всегда должен показываться сверху.</div><div class="arrow"></div>';
  expect(document.querySelector('.popover').innerHTML).toEqual(markup);
});

test('Заргузка формы с кнопкой и двойное нажатие на кнопку. Проверка показа и скрытие Popover', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const userForm = new UserForm(container);

  userForm.bindToDOM();
  userForm.submit.click();
  userForm.submit.click();

  const markup = null;
  expect(document.querySelector('.popover')).toEqual(markup);
});
