import NavBar from "./Navbar";
const Home = () => {
  return (
  <div>
    <div className="Title-container">
        <h1>Hackathon  </h1>
        <h1 id="eye_title">The EYE</h1>
    </div>
    <NavBar />
    <div className="Hackathonhub">
        <h6 className="textbox">JOIN OUR HACKATHON HUB</h6>
        <h6 className="textbox">🚀 Hey techzz! Exciting news! We're hosting a Hackathon on [Date]! 💻 It's a chance to collaborate, innovate, and win prizes! 🏆 Interested? Do checkout this page for more details...</h6>
    </div>
    <img src="eye.jpg" className="Eye_img" alt=""  ></img>
    
   </div>
    
  )
}

export default Home