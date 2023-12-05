export const DEBUG = true;

export const API_URLS = {
  getListeningBooks: "/ieltstest/listening/",
  getListeningAttempt: "/ieltstest/get_attempt/listening/",
  getListeningModule: "/ieltstest/get_module/listening/",
  getReadingModule: "/ieltstest/get_module/reading/",
  getReadingAttempt: "/ieltstest/get_attempt/reading/",
  getWritingModule: "/ieltstest/get_module/writing/",
  getWritingAttempt: "/ieltstest/get_attempt/writing/",
  getSpeakingModule: "/ieltstest/get_module/speaking/",
  getSpeakingAttempt: "/ieltstest/get_attempt/speaking/",
};

export const DJANGO_BASE_URL = DEBUG
  ? "http://192.168.10.55:8000/api"
  : "https://api.keenielts.com/api";
