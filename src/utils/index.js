// import * as R from "ramda";

export const htmlDecode = (content, isURL) => {
  if (content) {
    const doc = new DOMParser().parseFromString(content, "text/html");
    const text = doc.documentElement.textContent;
    return isURL ? window.decodeURI(text) : text;
  }
  return "";
};

export const validURL = (str) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return !!pattern.test(str);
};

export const hasOwnProperty = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

export const noop = () => {};

export const numFormatter = (num, precision = 1) => {
  if (num >= 1000 && num < 1000000) {
    return `${(num / 1000).toFixed(precision)}K`;
  }
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(precision)}B`;
  }
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(precision)}M`;
  }
  return num;
};

const fallbackCopyTextToClipboard = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
};

export const copyTextToClipboard = (text) => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
};

// export const isFilterEmpty = (obj) =>
//   R.pipe(
//     R.values,
//     R.flatten,
//     R.filter((x) => x),
//     R.isEmpty
//   )(obj);

export const isValidUrl = (url) => {
  const str = url.toString();
  return str.startsWith("http") || str.startsWith("https");
};

export const isHttpUrl = (url) => {
  const str = url.toString();
  return str.includes("http://") || str.includes("https://");
};

export const isSecureUrl = (url) => url.includes("https://");

// export const removeUnderscore = (text = "") => R.replace(/_/g, " ", text);

export const parameterize = (text, separator = "-") =>
  text
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/, "")
    .replace(/\s/g, separator);

export const capitalize = (text) => {
  return text.toLowerCase().charAt(0).toUpperCase() + text.slice(1);
};
