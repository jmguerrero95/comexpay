const axios = require('axios');
const { URLSearchParams } = require('url');

const TELEGRAM_API_BASE_URL = 'https://api.telegram.org';
const DEFAULT_LABSMOBILE_BASE_URL = 'https://api.labsmobile.com/get/send.php';

const sendTelegramMessage = async (message) => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('Telegram notification skipped: missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    return;
  }

  const encodedMessage = encodeURIComponent(message);
  const url = `${TELEGRAM_API_BASE_URL}/bot${botToken}/sendMessage?text=${encodedMessage}&chat_id=${encodeURIComponent(chatId)}`;

  await axios.get(url);
};

const sendSms = async (phoneNumber, message) => {
  const username = process.env.LABSMOBILE_USERNAME;
  const password = process.env.LABSMOBILE_PASSWORD;

  if (!username || !password) {
    console.warn('SMS notification skipped: missing LABSMOBILE_USERNAME or LABSMOBILE_PASSWORD');
    return;
  }

  const baseUrl = process.env.LABSMOBILE_BASE_URL || DEFAULT_LABSMOBILE_BASE_URL;
  const params = new URLSearchParams({
    username,
    password,
    msisdn: phoneNumber,
    message,
  });

  await axios.get(`${baseUrl}?${params.toString()}`);
};

module.exports = {
  sendTelegramMessage,
  sendSms,
};
