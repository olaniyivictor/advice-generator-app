import './main.css';
import Card from './Card';
import { useState } from 'react';

export default function App() {
  // Setting a useState for loading
  const [loading, setLoading] = useState(false);
  // Setting a useState for error
  const [error, setError] = useState('');

  return (
    <div className='flex justify-center items-center content-center h-screen'>
      {/* Render only the Card component here */}
      <Card loading={loading} setLoading={setLoading} error={error} setError={setError} />
    </div>
  );
}
