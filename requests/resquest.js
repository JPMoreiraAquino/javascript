fetch('https://valorant-api.com/v1/agents')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
