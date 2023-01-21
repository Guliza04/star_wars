import React from 'react'
import { withErrorApi } from '../../components/hoc-helder/withErrorApi';
import { useState ,useEffect} from 'react';
import { getApiResourse } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import styles from '../PeoplePage/People.module.css';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import { getPeopleId, getpeopleImage } from '../../services/getPeopleDate';


const PeoplePage = ({setErrorApi}) => {
  const [people, setPeople] = useState(null);
  const [errorApi, setErrorApi] = useState(null);


  const getResouse = async (url) => {
    const res = await getApiResourse(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getpeopleImage(id);
        return {
          name,
          url,
          img
        }
      })
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
       
  }

  useEffect(() => {
    getResouse(API_PEOPLE)
  }, []);
  return (
   
          <>
            <h1>Navigation</h1>
            {people && <PeopleList people={people} />}
    </>
  )
}
export default PeoplePage;
