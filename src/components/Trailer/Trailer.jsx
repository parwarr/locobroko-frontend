const Trailer = () => {
  return (
    <div className='rounded-lg overflow-hidden border-4 border-slate-50 shadow-lg max-w-2xl mx-auto my-5'>
      <iframe
        className='w-full h-64'
        src='https://www.youtube.com/embed/o7-0gygCj9Q'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
