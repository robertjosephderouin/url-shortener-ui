export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postURL = (long, newTitle) => {
  return fetch(`http://localhost:3001/api/v1/urls`, {
    method: 'POST',
    body: JSON.stringify({
      long_url: `${long}`,
      title: `${newTitle}`
      }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
}
