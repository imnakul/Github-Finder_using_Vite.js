function About() {
   return (
      <>
         <h1 className='text-6xl mb-4'>Github Finder</h1>
         <p className='mb-4 text-2xl font-light'>
            A React app to search GitHub profiles and see profile details.
         </p>
         <p className='text-lg text-gray-400'>
            Version <span className='text-white'>1.0.0</span>
         </p>
         <p className='text-3xl text-gray-400'>
            Layout By:
            <a
               className='text-primary hover:text-white hover:underline ml-3'
               href='https://github.com/imnakul'
            >
               Nakul Srivastava
            </a>
         </p>
      </>
   );
}
export default About;
