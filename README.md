# Фронтэнд сервиса по оптимизации логистики склада с хакатона от ЧЦЗ 2023 

## Демонстрация

[Дизайн](https://www.figma.com/file/wHFUtrXnySwW0rs7UO00WU/%F0%9F%93%B2-%D0%A5%D0%B0%D0%BA%D0%B0%D1%82%D0%BE%D0%BD-(%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA)-(Copy)?type=design&node-id=0%3A1&mode=design&t=G3oMYGfKHonsJOsr-1)

## Запуск

1. Установка зависимостей
```console
$ npm install
```

2. Изменение переменных среды

Переименуйте .env.example в .env и измените его:

```dosini
VITE_API_URL=ENTER_API_URL_HERE
```
Вместо `ENTER_API_URL_HERE` нужно ввести адрес и порт запущенного [бекенд-сервиса](https://github.com/gestihack/logistics-backend), например `http://localhost:8080/api`

 <b>`!!! ВАЖНО !!! Адрес API-сервера должен оканчиваться на /api и не должен иметь / в конце.`</b>

3. Запуск приложения

```console
$ npm run dev
```

Приложение будет доступно на http://localhost:5174/

4. Билд статических файлов

```console
$ npm run build
```
