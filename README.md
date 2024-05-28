# Harpia Tech - FrontEnd Developer test with [Vue-Black Dashboard](https://demos.creative-tim.com/vue-black-dashboard)

**(EN)**
This Vue.js application provides an interactive map on the main page, utilizing the Google Maps API to search for countries and the REST Countries API to fetch detailed information about the searched countries. The application features a minimalist design and leverages Advanced Markers to display search results on the map, along with a SearchBox to enable users to search for specific locations. When a country is selected, the application retrieves and displays relevant information such as the country's name, flag, capital city, currency, language, and continent, enhancing the user experience with a seamless integration of map and data functionalities.

This project uses the Vue Black Dashboard template, which is licensed under the MIT License. The template has been used in accordance with the licensing terms and conditions, ensuring full compliance with intellectual property rights and regulations.

**(PT-BR)**
Esta aplicação Vue.js oferece um mapa interativo na página principal, utilizando a API do Google Maps para buscar países e a API REST Countries para obter informações detalhadas sobre os países pesquisados. A aplicação apresenta um design minimalista e utiliza Advanced Markers para exibir os resultados da pesquisa no mapa, juntamente com uma SearchBox que permite aos usuários buscar localidades específicas. Quando um país é selecionado, a aplicação recupera e exibe informações relevantes, como o nome do país, bandeira, capital, moeda, idioma e continente, aprimorando a experiência do usuário com uma integração perfeita entre funcionalidades de mapa e dados.

Este projeto utiliza o template Vue Black Dashboard, que está licenciado sob a Licença MIT. O template foi utilizado de acordo com os termos e condições de licenciamento, garantindo total conformidade com os direitos e regulamentos de propriedade intelectual.


## Table of Contents

- [Quick Start](#quick-start)
- [File Structure](#file-structure)
- [Licensing](#licensing)

## Quick start
**(EN)**
- Clone the repo: `git clone https://github.com/davichamma/MapVue`.
- Build your docker container: `docker-compose build`.
- Run your docker container: `docker-compose up`.
- Acess the application on http://localhost:8080/

**(PT-BR)**
- Clone o repositório: `git clone https://github.com/davichamma/MapVue`.
- Contrua o docker container: `docker-compose build`.
- Rode o docker container: `docker-compose up`.
- Acesse a aplicação em http://localhost:8080/

## Documentation

The documentation for the Vue Black Dashboard is hosted at our [website](https://demos.creative-tim.com/vue-black-dashboard/documentation).

## File Structure

Within the download you'll find the following directories and files:

```
|-- Vue Black Dashboard
    |-- .babelrc
    |-- .env
    |-- .eslintrc
    |-- Dockerfile
    |-- docker-compose.yml
    |-- nginx.conf
    |-- .gitattributes
    |-- .gitignore
    |-- CHANGELOG.md
    |-- CONTRIBUTING.md
    |-- LICENSE.md
    |-- README.md
    |-- package.json
    |-- vue.config.js
    |-- src
        |-- App.vue
        |-- i18n.js
        |-- main.js
        |-- assets
        |   |-- css
        |   |   |-- nucleo-icons.css
        |   |-- demo
        |   |   |-- demo.css
        |   |-- fonts
        |   |   |-- nucleo.eot
        |   |   |-- nucleo.ttf
        |   |   |-- nucleo.woff
        |   |   |-- nucleo.woff2
        |   |-- sass
        |       |-- black-dashboard.scss
        |       |-- black-dashboard
        |           |-- bootstrap
        |           |-- custom
        |           |-- plugins
        |-- components
        |   |-- BaseAlert.vue
        |   |-- BaseButton.vue
        |   |-- BaseCheckbox.vue
        |   |-- BaseDropdown.vue
        |   |-- BaseNav.vue
        |   |-- BaseTable.vue
        |   |-- CloseButton.vue
        |   |-- Modal.vue
        |   |-- NavbarToggleButton.vue
        |   |-- index.js
        |   |-- Cards
        |   |   |-- Card.vue
        |   |   |-- StatsCard.vue
        |   |-- Charts
        |   |   |-- BarChart.js
        |   |   |-- LineChart.js
        |   |   |-- config.js
        |   |   |-- utils.js
        |   |-- Inputs
        |   |   |-- BaseInput.vue
        |   |-- NotificationPlugin
        |   |   |-- Notification.vue
        |   |   |-- Notifications.vue
        |   |   |-- index.js
        |   |-- SidebarPlugin
        |       |-- SideBar.vue
        |       |-- SidebarLink.vue
        |       |-- index.js
        |-- directives
        |   |-- click-ouside.js
        |-- layout
        |   |-- dashboard
        |       |-- Content.vue
        |       |-- ContentFooter.vue
        |       |-- DashboardLayout.vue
        |       |-- MobileMenu.vue
        |       |-- SidebarSharePlugin.vue
        |       |-- TopNavbar.vue
        |-- locales
        |   |-- ar.json
        |   |-- en.json
        |-- pages
        |   |-- Dashboard.vue
        |   |-- Icons.vue
        |   |-- Maps.vue
        |   |-- NotFoundPage.vue
        |   |-- Notifications.vue
        |   |-- Profile.vue
        |   |-- TableList.vue
        |   |-- Typography.vue
        |   |-- Dashboard
        |   |   |-- TaskList.vue
        |   |   |-- UserTable.vue
        |   |-- Notifications
        |   |   |-- NotificationTemplate.vue
        |   |-- Profile
        |       |-- EditProfileForm.vue
        |       |-- UserCard.vue
        |-- plugins
        |   |-- RTLPlugin.js
        |   |-- blackDashboard.js
        |   |-- globalComponents.js
        |   |-- globalDirectives.js
        |   |-- liveDemo.js
        |-- router
            |-- index.js
            |-- routes.js

```


## Licensing

- Copyright 2024 Creative Tim (https://www.creative-tim.com/)

- Licensed under MIT (https://github.com/creativetimofficial/vue-black-dashboard/issues/blob/master/LICENSE.md)

