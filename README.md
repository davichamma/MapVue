# [Vue-Black Dashboard](https://demos.creative-tim.com/vue-black-dashboard) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?text=Black%20Dashboard%20by%20Creative%20Tim&url=https%3A%2F%2Fdemos.creative-tim.com%2Fblack-dashboard%2Fexamples%2Fdashboard.html&via=CreativeTim)

![version](https://img.shields.io/badge/version-1.1.3-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/black-dashboard/issues.svg?maxAge=2592000)](https://github.com/creativetimofficial/black-dashboard/issues/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/black-dashboard/issues.svg?maxAge=2592000)](https://github.com/creativetimofficial/black-dashboard/issues/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Gif](https://github.com/creativetimofficial/vue-black-dashboard/blob/live-demo/src/assets/demo/product-gif.gif?raw=true)

**Harpia Tech - FrontEnd Developer test** 

**(EN)**
This Vue.js application provides an interactive map on the main page, utilizing the Google Maps API to search for countries and the REST Countries API to fetch detailed information about the searched countries. The application features a minimalist design and leverages Advanced Markers to display search results on the map, along with a SearchBox to enable users to search for specific locations. When a country is selected, the application retrieves and displays relevant information such as the country's name, flag, capital city, currency, language, and continent, enhancing the user experience with a seamless integration of map and data functionalities.

This project uses the Vue Black Dashboard template, which is licensed under the Creative Tim License. The template has been used in accordance with the licensing terms and conditions, ensuring full compliance with intellectual property rights and regulations.

**(PT-BR)**
Esta aplicação Vue.js oferece um mapa interativo na página principal, utilizando a API do Google Maps para buscar países e a API REST Countries para obter informações detalhadas sobre os países pesquisados. A aplicação apresenta um design minimalista e utiliza Advanced Markers para exibir os resultados da pesquisa no mapa, juntamente com uma SearchBox que permite aos usuários buscar localidades específicas. Quando um país é selecionado, a aplicação recupera e exibe informações relevantes, como o nome do país, bandeira, capital, moeda, idioma e continente, aprimorando a experiência do usuário com uma integração perfeita entre funcionalidades de mapa e dados.

Este projeto utiliza o template Vue Black Dashboard, que está licenciado sob a Licença Creative Tim. O template foi utilizado de acordo com os termos e condições de licenciamento, garantindo total conformidade com os direitos e regulamentos de propriedade intelectual.

**Vue Black Dashboard** is a beautiful Bootstrap 4 Admin Dashboard with a huge number of components built to fit together and look amazing. If you are looking for a tool to manage and visualize data about your business, this dashboard is the thing for you. It combines colors that are easy on the eye, spacious cards, beautiful typography, and graphics.

**Vue Black Dashboard** comes packed with all plugins that you might need inside a project and documentation on how to get started. It is light and easy to use, and also very powerful.

Vue Black Dashboard features over 16 individual components, giving you the freedom of choosing and combining. This means that there are thousands of possible combinations. All components can take variations in color, that you can easily modify using SASS files. You will save a lot of time going from prototyping to full-functional code because all elements are implemented.
We thought about everything, so this dashboard comes with 2 versions, Dark Mode and Light Mode.


## Table of Contents

- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Licensing](#licensing)

## Quick start

- Clone the repo: `git clone https://github.com/davichamma/MapVue`.

## Documentation

The documentation for the Vue Black Dashboard is hosted at our [website](https://demos.creative-tim.com/vue-black-dashboard/documentation).

## File Structure

Within the download you'll find the following directories and files:

```
|-- Vue Black Dashboard
    |-- .babelrc
    |-- .env
    |-- .eslintrc
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

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Licensing

- Copyright 2024 Creative Tim (https://www.creative-tim.com/)

- Licensed under MIT (https://github.com/creativetimofficial/vue-black-dashboard/issues/blob/master/LICENSE.md)

