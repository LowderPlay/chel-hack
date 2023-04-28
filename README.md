# Фронтэнд сервиса по оптимизации логистики склада с хакатона от ЧЦЗ 2023 

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