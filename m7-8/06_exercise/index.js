console.log('M 7-8: 6');

// 6.
// Напишіть програму, яка при руху миші по праграфу
// при потраплянні на слова що в <mark>
// відображає тултіп (<span class="ttip"></span>) цього <mark>

// Тултіп створювати динамічно тільки в момент наведення на <mark>
// Значення тултіпу брати з атрибуту [data-hint]
// і видаляти його коли миша покидає <mark> 
// видаляти слухач події mouseleave з <mark> 
// коли миша залишає його

// *** Всередині <mark> має бути тільки один <span class="ttip">...</span>
// *** Зважайте на кількість створених динамічно прослуховувачів - оптимізуйте