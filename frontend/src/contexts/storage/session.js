//session storage
export const GetSessionStorage = (key) => {
  let data = sessionStorage.getItem(key)
  if (data) {
    return data
  } else {
    return false
  }
}

export const SetSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const DefSessionStorage = (key, def) => {
  if (GetSessionStorage(key) === false) {
    SetSessionStorage(key, def)
  }
  return JSON.parse(GetSessionStorage(key))
}
