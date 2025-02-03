const UserData = [
    {
        Name:"Vishwa Bhai",
        city:"london",
        discription:"Full Stack Developer",
        skills:["Html", "Css","Bootstrap","Javascript","React js","Mysql","Python","Java"],
        online:false,
        profile:"1.jpg"
    },
    {
        Name:"Kalaimani",
        city:"Australia",
        discription:"Bank officer",
        skills:["Tally", "Excel","ms Word","PPT","Calculation"],
        online:true,
        profile:"2.jpeg"
    },
    {
        Name:"Denny Bhai",
        city:"Germany",
        discription:"Manager",
        skills:["Leaderships", "Team work","Communication","Attractive","Trading"],
        online:true,
        profile:"3.jpg"
    },
]
function User(props){
    return (
    <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"online":"offline"}</span>
        <img src={props.profile} alt="user" />
        <h3>{props.Name}</h3>
        <h3>{props.city}</h3>
        <p>{props.discription}</p>
        <div className="btns">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
        <h6>skills</h6>
        <ul>
            {props.skills.map((skill,index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
        </div>
    </div>)
}
const CardProfile = () => {
  return (
    <>
     {UserData.map((user, index) => (
        <User key={index} Name={user.Name} city={user.city} discription={user.discription} skills={user.skills} online={user.online} profile={user.profile}/>
     ))}
    </>
  )
}

export default CardProfile
