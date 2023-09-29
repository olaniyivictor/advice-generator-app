import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './main.css';
import Loader from './Loader';
import patterndivider from "../src/assets/images/pattern-divider-desktop.svg";
import icondicesvg from "../src/assets/images/icon-dice.svg";
import Errormessage from './Errormessage';

export default function Card({ loading, setLoading, error, setError }) {
  //seting a useState for the advice
  const [advice, setAdvice] = useState('');
  //setting a useState for the id
  const [id, setId] = useState(119);
  const [vic,setVictor] = useState(119)


   function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to handle the button click
  function handleClick() {
    const minId = 1; // Minimum ID value
    const maxId = 200; // Maximum ID value (adjust as needed)
    const randomId = getRandomId(minId, maxId);
    setVictor(randomId);//update the button based on the randomId
  }

  // useEffect to fetch advice when the component mounts
  useEffect(() => {
    fetchAdvice();
  }, [vic,setVictor]);

  // Function to fetch advice
  async function fetchAdvice() {
   try {setLoading(true);
      const response = await fetch(`https://api.adviceslip.com/advice/${vic}`);
      if (!response.ok) throw new Error('Something went wrong while fetching the Advice quotes');
      const data = await response.json();
      setAdvice(data.slip.advice);
      setId(data.slip.id);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <section className='bg-DarkGrayishBlue md:w-[35rem] md:h-[21rem] pt-[3rem] w-[21.5rem] h-[20rem]'>
        {loading && <Loader>LOADING...</Loader>}
        {!loading && !error && (
          <div className='flex flex-col items-center '>
            <hgroup className='text-center'>
              <h1 className='text-NeonGreen font-custom md:text-[1.5rem] tracking-[0.5rem] text-[1rem]'>ADVICE #{id}</h1>
            </hgroup>
            <hgroup className='text-center pt-[1.4rem] md:w-[32rem] text-LightCyan md:text-[1.5rem] font-custom w-[20rem] text-[1.2rem]'>
              <h2> {advice}</h2>
            </hgroup>
            <figure>
              <img src={patterndivider} alt='patterndivider' className=' pt-[2rem] w-[92%] md:w-[100%] pl-[2rem] md:pl-[0rem] ' />
            </figure>

            <figure className='fixed mt-[15.6rem]'>
              <button type='submit' onClick={handleClick} className='bg-NeonGreen p-[1rem] rounded-[2rem] hover:focus:ring-purple-600 hover:shadow-custom-hover'>
                <img src={icondicesvg} alt='icondicesvg' />
              </button>
            </figure>
          </div>
        )}
        {error && <Errormessage>❌ {error}</Errormessage>}
      </section>
    </div>
  );
}

Card.propTypes = {
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  error: PropTypes.string,
  setError: PropTypes.func.isRequired,
};
