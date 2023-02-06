import './Footer.css';

const Footer = () => {

    const submitted=()=>{
     console.log("Thank You! Your submission has been sent.");
    }
   return (
     <div className="footer">
       <input type="submit" className="button" value="Submit" onClick={submitted} />
     </div>
   );
 };

export default Footer;