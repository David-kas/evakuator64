# Эвакуатор 64

Сайт круглосуточной эвакуации автомобилей в Балашове и Саратовской области.

Домен: [evakuator64.vercel.app](https://evakuator64.vercel.app)

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Telegram-заявки

Форма отправляет заявки через серверный route `/api/lead`.

В Vercel (или в `.env.local`) задайте:

```
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
NEXT_PUBLIC_SITE_URL=https://evakuator64.vercel.app
```

Без этих переменных форма покажет сообщение позвонить по телефону. Токен не попадает в клиентский JavaScript.

## Сборка

```bash
npm run build
npm start
```
