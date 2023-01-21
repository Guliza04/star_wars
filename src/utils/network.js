
 export const getApiResourse =async (url) => {
     try {
         const res = await fetch(url);
         if (!res.ok) {
             console.error('Could not fetch', res.status);
             return false
         }
         return await res.json();
     } catch (error) {
         console.error('Could not fetch.', error.messege);
         return false
   }
} 
const body = getApiResourse(SWAPI_ROOT + SWARI_PEOPLE)
    .then(body => console.log(body))
    (async () => {
        const body = getApiResourse(SWAPI_ROOT + SWARI_PEOPLE)
            .then(body => console.log(body))
    })();
