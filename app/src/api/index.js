//import axios from 'axios';

export const getIpInfo = async(url) => {
  let data = await fetch(url,{
    method:'GET',
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
   }
  })
    .then(response => response.json())
    .then(responseJson => { 
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });

 // let data = await axios.get(url,{headers: {
 //                        "Accept": "application/json",
 //                        "Content-Type": "application/json"
 //                    }})
 //  .then(function (response) {
 //    return (response);
 //  })
 //  .catch(function (error) {
 //    console.log(error);
 //  });

   return data;
}    