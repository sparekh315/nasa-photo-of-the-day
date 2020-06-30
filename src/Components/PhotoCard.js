import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Title from './Title';
import Photo from './Photo';
import Date from './Date';
import Explanation from './Explanation';




const PhotoCard = () => {
    const [astronomy, setAstronomy] = useState([]);


    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=WIuzzvBxkmykGDDYwrOBgxymdPfma9tSGhvIcWlu`)
        .then(response => {
          //console.log(response)
          setAstronomy(response.data);
       
        })
        .catch(error => {
          console.log("no astronomy here", error);
        });
    }, []);

return (
    <div>
    <Date date={astronomy.date} />
    <Title title={astronomy.title}/>
    <Photo photo={astronomy.url} />
    <Explanation explanation={astronomy.explanation} />
    </div>


)
}


export default PhotoCard;