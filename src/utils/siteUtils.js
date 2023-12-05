import { DEBUG } from "./config";

export function imgixURL(url, params = {}) {
  if (DEBUG) {
    return url;
  } else {
    const imgixParams = {
      auto: "format,compress",
      ...params,
    };
    const imgixParamsString = Object.keys(imgixParams)
      .map((key) => `${key}=${imgixParams[key]}`)
      .join("&");
    return `https://keenielts-react.imgix.net${url}?${imgixParamsString}`;
  }
}
