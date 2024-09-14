let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

// Hide Menu and search box on scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}



// Define an array of parts
const parts = [
    { imgSrc: "/img/parts/part1.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part2.jpeg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part3.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part4.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part5.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part6.png", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part7.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part8.png", title: "Auto Parts", price: "$26.99", reviews: 6 }
];

// Function to create a part component
function createPartComponent(part) {
    return `
        <div class="box">
            <img src="${part.imgSrc}" alt="">
            <h2>${part.title}</h2>
            <span>${part.price}</span>
            <i class='bx bx-star'>(${part.reviews} Reviews)</i>
            <a href="#" class="btn">Buy Now</a>
            <a href="#" class="details">View details</a>
        </div>
    `;
}

// Insert parts into the container
function displayParts() {
    const container = document.getElementById('parts-container');
    container.innerHTML = parts.map(createPartComponent).join('');
}

// Call displayParts when the document is loaded
document.addEventListener('DOMContentLoaded', displayParts);

// header
let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Компонента для секции компаний
function createCompaniesSection() {
    // Создаем элемент <section>
    const section = document.createElement('section');
    section.classList.add('companies');
    section.id = 'companies';

    // Создаем элемент заголовка
    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');

    const span = document.createElement('span');
    span.textContent = 'Our Partners';
    const h2 = document.createElement('h2');
    h2.textContent = 'Companies We Work With';

    // Вставляем заголовки в div
    headingDiv.appendChild(span);
    headingDiv.appendChild(h2);

    // Создаем контейнер для компаний
    const companiesContainer = document.createElement('div');
    companiesContainer.classList.add('companies-container', 'container');

    // Массив компаний с информацией
    const companies = [
        { imgSrc: 'img/com/comp1.png', name: 'Automall' },
        { imgSrc: 'img/com/comp2.png', name: 'Eurogarage' },
        { imgSrc: 'img/com/comp3.png', name: 'Coleso' },
        { imgSrc: 'img/com/com3_1.png', name: 'Autodoc' }
    ];

    // Создаем карточки компаний
    companies.forEach(company => {
        const companyBox = document.createElement('div');
        companyBox.classList.add('company-box');

        const img = document.createElement('img');
        img.src = company.imgSrc;
        img.alt = company.name;

        const h3 = document.createElement('h3');
        h3.textContent = company.name;

        companyBox.appendChild(img);
        companyBox.appendChild(h3);

        companiesContainer.appendChild(companyBox);
    });

    // Добавляем заголовок и контейнер компаний в секцию
    section.appendChild(headingDiv);
    section.appendChild(companiesContainer);

    return section;
}

// Функция для рендеринга компоненты в DOM
function renderComponent(component, targetSelector) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
        const section = component();
        targetElement.parentNode.insertBefore(section, targetElement);
    } else {
        console.error('Target element not found');
    }
}

// Рендерим секцию компаний перед футером
renderComponent(createCompaniesSection, '.footer');

// Компонента для секции блога
function createBlogSection() {
    // Создаем элемент <section>
    const section = document.createElement('section');
    section.classList.add('blog');
    section.id = 'blog';

    // Создаем элемент заголовка
    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');

    const span = document.createElement('span');
    span.textContent = 'Blog & News';
    const h2 = document.createElement('h2');
    h2.textContent = 'Our blog content';
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusantium eius ex ipsam ipsum iusto, maiores modi molestiae';

    // Вставляем заголовки и параграф в div
    headingDiv.appendChild(span);
    headingDiv.appendChild(h2);
    headingDiv.appendChild(p);

    // Создаем контейнер для блога
    const blogContainer = document.createElement('div');
    blogContainer.classList.add('blog-container', 'container');

    // Массив блогов с информацией
    const blogs = [
        {
            imgSrc: '/img/blog/blog1.jpg',
            date: 'September 21 2024',
            title: 'Boo Hoo',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aspernatur assumenda commodi cum deleniti dignissimos doloribus eaque eveniet expedita ',
            link: '#'
        },
        {
            imgSrc: '/img/blog/blog2.jpg',
            date: 'September 21 2024',
            title: 'Boo Hoo',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aspernatur assumenda commodi cum deleniti dignissimos doloribus eaque eveniet expedita ',
            link: '#'
        },
        {
            imgSrc: '/img/blog/blog3.jpg',
            date: 'September 21 2024',
            title: 'Boo Hoo',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aspernatur assumenda commodi cum deleniti dignissimos doloribus eaque eveniet expedita ',
            link: '#'
        }
    ];

    // Создаем карточки блогов
    blogs.forEach(blog => {
        const blogBox = document.createElement('div');
        blogBox.classList.add('box');

        const img = document.createElement('img');
        img.src = blog.imgSrc;
        img.alt = '';

        const dateSpan = document.createElement('span');
        dateSpan.textContent = blog.date;

        const h3 = document.createElement('h3');
        h3.textContent = blog.title;

        const p = document.createElement('p');
        p.textContent = blog.content;

        const a = document.createElement('a');
        a.href = blog.link;
        a.classList.add('blog-btn');
        a.innerHTML = 'Read more<i class="bx bx-right-arrow-alt"></i>';

        blogBox.appendChild(img);
        blogBox.appendChild(dateSpan);
        blogBox.appendChild(h3);
        blogBox.appendChild(p);
        blogBox.appendChild(a);

        blogContainer.appendChild(blogBox);
    });

    // Добавляем заголовок и контейнер блога в секцию
    section.appendChild(headingDiv);
    section.appendChild(blogContainer);

    return section;
}

// Функция для рендеринга компоненты в DOM
function renderComponent(component, targetSelector) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
        const section = component();
        targetElement.parentNode.insertBefore(section, targetElement);
    } else {
        console.error('Target element not found');
    }
}

// Рендерим секцию блога перед футером
renderComponent(createBlogSection, '.footer');

// Компонента для секции автомобилей
function createCarsSection() {
    // Создаем элемент <section>
    const section = document.createElement('section');
    section.classList.add('cars');
    section.id = 'cars';

    // Создаем элемент заголовка
    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');

    const span = document.createElement('span');
    span.textContent = 'All cars';
    const h2 = document.createElement('h2');
    h2.textContent = 'We repair all types of cars';
    const p = document.createElement('p');
    p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur <br> adipisicing elit. Ab commodi, delectus dicta eius exercita';

    // Вставляем заголовки и параграф в div
    headingDiv.appendChild(span);
    headingDiv.appendChild(h2);
    headingDiv.appendChild(p);

    // Создаем контейнер для автомобилей
    const carsContainer = document.createElement('div');
    carsContainer.classList.add('cars-container', 'container');

    // Массив автомобилей с информацией
    const cars = [
        { imgSrc: '/img/cars/Audi.png', title: 'Audi' },
        { imgSrc: '/img/cars/Peugeot.png', title: 'Peugeot' },
        { imgSrc: '/img/cars/Hyundai.png', title: 'Hyundai' },
        { imgSrc: '/img/cars/Suzuki.png', title: 'Suzuki' },
        { imgSrc: '/img/cars/Volkswagen.png', title: 'VW' },
        { imgSrc: '/img/cars/Mercedes.png', title: 'Mercedes' },
        { imgSrc: '/img/cars/Opel.png', title: 'Opel' }
    ];

    // Создаем карточки автомобилей
    cars.forEach(car => {
        const carBox = document.createElement('div');
        carBox.classList.add('box');

        const img = document.createElement('img');
        img.src = car.imgSrc;
        img.alt = '';

        const h3 = document.createElement('h3');
        h3.textContent = car.title;

        carBox.appendChild(img);
        carBox.appendChild(h3);

        carsContainer.appendChild(carBox);
    });

    // Добавляем заголовок и контейнер автомобилей в секцию
    section.appendChild(headingDiv);
    section.appendChild(carsContainer);

    return section;
}

// Функция для рендеринга компоненты в DOM
function renderComponent(component, targetSelector) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
        const section = component();
        targetElement.parentNode.insertBefore(section, targetElement);
    } else {
        console.error('Target element not found');
    }
}

// Рендерим секцию автомобилей перед секцией "About"
renderComponent(createCarsSection, '.about');


