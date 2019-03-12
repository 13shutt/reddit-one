// const myURL = {
//   dev: 'http://localhost:3000/',
//   prod: 'https://13shutt.github.io/reddit-one/'
// }

// const getToken = async (props) => {
//   console.log(props.location.search)
//   const stateStart = props.location.search.indexOf('state=')
//   const stateFinish = props.location.search.indexOf('&')
//   const state = props.location.search.slice(stateStart + 6, stateFinish)
//   const codeStart = props.location.search.indexOf('code=')
//   const code = props.location.search.slice(codeStart + 5, props.location.search.length)
//   console.log(state, code)
//   await fetch('https://www.reddit.com/api/v1/access_token', {
//     method: 'POST',
//     headers: {
//       // 'Authorization': "Basic uDmsZCsIwBBrjg:sHU_vLHfDq66mSfBA7qUPV8WVVQ",
//       "Authorization": "Basic dURtc1pDc0l3QkJyamc6c0hVX3ZMSGZEcTY2bVNmQkE3cVVQVjhXVlZR",
//       "Content-Type": "application/x-www-form-urlencoded"
//     },
//     body: `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/`

//   })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       console.log("TOKEN: " + data.access_token)

//       fetch('https://oauth.reddit.com/api/v1/me', {
//         method: 'GET',
//         headers: {
//           "Authorization": `Bearer ${data.access_token}`,
//         },
//       }).then(res => res.json())
//         .then(data => console.log(data))
//     })
// }

// export { myURL, getToken }