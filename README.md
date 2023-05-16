Веб страница доставки еды с использованием HTML5/CSS/Javascript, которая содержит набор карточек "товаров", разбитых по категориям. 


Страница содержит:
1. закрепленное сверху меню с названиями категорий. При прокрутке страницы меню остается на месте. При клике на название категории осуществляется переход к ней на странице

2. Закрепленная кнопка для возврата наверх страницы (отображается только после прокрутки) расположена в правом нижнем углу экрана

3. внизу страницы отображены названия категорий в виде неупорядоченного списка. При клике на название категории осуществляется переход к ней на странице


------------------------

внутри категорий расположены карточки с "Товарами". Карточка содержит:


изображение,
подпись к изображению,
дату добавления на сайт,
кнопку "Купить"
Дата добавления на сайт должна выводиться через функцию, которая преобразует дату в человекочитаемый вид. Результатом функции должен быть форматированный текст: **<день недели>, <номер недели> неделя <месяц> <год> года => Среда, 3 неделя Декабря 2021 года*

по клику на кнопку "Купить", поверх основной страницы появляется форма, в которой будут отображаться:


поле ввода для указания количества (целое число больше 0),
3-4 радиобаттона для указания цвета,
поле ввода для комментария (можно указать произвольный текст не более 2000 символов),
кнопки “Купить” и “Закрыть”
Форма делается через тег form. При нажатии на "Купить" отображается сообщение о покупке (например через alert), при нажатии "Закрыть" форма скрывается


карточки “товаров” должны переноситься на новую строку, если не умещаются в одной строке, количество в категории от 10 штук (сделать разное количество в категориях)




в верхнем меню справа расположить кнопку переключения темы (темная/светлая). При переключении должен изменяться цвет фона и текста




Дополнительно реализовано:
1. файлы стилей и скриптов подключены отдельно
--------
адаптивный дизайн (под разную ширину экрана)
анимация переходов

