import "../Components/Cards.css"
const Cards=({src,title,Price,button}) =>{


return(

<div className="card">
<div>  
    
    
    <img src={src}  alt="ERROR"/>
</div>
<br />
<div>
    <h5 className="card-title">{title}</h5>
<p>price:{Price} $</p>
{button}

</div>
</div>
    
)


};
export default Cards;















