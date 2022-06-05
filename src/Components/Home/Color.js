import '../Home/Home.css'

const Color = ({data,mychoose}) => {
    const {id,image,title}=data;
   
    
    return (
        <div className="color-css" >
            <img onClick={()=>mychoose({id,title})} width='150px' src={image} alt="" />
            
        </div>
    );
};

export default Color;