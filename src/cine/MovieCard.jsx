import { useContext, useEffect, useState } from "react";
import { getImageUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";

export default function MovieCard({ item }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const{cartData,setCartData}=useContext(MovieContext)


  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelect=(movie)=>{
    setSelectedMovie(movie)
    setShowModal(true)



  }

  const handleAddToCart=(e,item)=>{
    e.stopPropagation()
   
    const found=cartData.find((movie)=> movie.id===item.id)
    
    if(!found){
      setCartData([
        ...cartData,item
      ])
    }else{
      console.log(`The movie ${item.title} has been added to the cart already`)
    }


    
    

    



  }


  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} OnAddToCart={handleAddToCart}/>
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <a href="#" onClick={()=>handleMovieSelect(item)}>
                <img
          className="w-full object-cover"
          src={getImageUrl(`${item.cover}`)}
          alt={item.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{item?.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{item?.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={item.rating} />
          </div>
          <a
            className="bg-[#00D991] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={(e)=>handleAddToCart(e,item)}
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${item?.price} | Add to Cart</span>
          </a>
        </figcaption>


      </a>
      </figure>
    </>
  );
}
