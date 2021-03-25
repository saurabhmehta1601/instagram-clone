import useUser from "../hooks/use-user"


const Sidebar = () => {
    const {user : {fullName,username,userId}} =useUser()
    
     return (
        <div>Thsis is sidebar
            
        </div>
    )
}

export default Sidebar
