import { User } from "../models/UserModel"


interface IUserCardProps {
  user: User;
  handleedituser: () => void;
}

export default function UserCard({
user,
handleedituser,
}:IUserCardProps){


  return(
    <div 
    style={{
      background: "radial-gradient(561.18% 173.97% at -16.61% -23.7%, rgba(94, 23, 181, 0.62) 0%, rgba(225, 200, 255, 0.00) 98.03%)",
      backdropFilter: "blur(50px)",
    }}
    className="cursor-pointer w-[575px] rounded-2xl min-h-[270px] flex flex-col justify-between" >
      <div className="p-6 w-full flex items-center justify-between" >
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-[#3DC5EC]" >developer</h3>
            <h2 className="text-4xl text-white" >{user.name}</h2>
          </div>
          <div>
            <h3 className="text-[#3DC5EC]" >email</h3>
            <h2 className="text-base text-white" >{user.email}</h2>
          </div>
          <div>
            <h3 className="text-[#3DC5EC]" >birthday</h3>
            <h2 className="text-base text-white">1{user.birthdate}</h2>
          </div>
        </div>
        <img 
          className="flex-shrink-0 h-[158px] object-cover border-4 border-[#B655E5] rounded-lg"
          src={user.avatar} 
          alt={user.name} 
        />
      </div>
      <div
        style={{
          background: "linear-gradient(93deg, #C446FF 7.71%, #AA1EEC 119.23%)",
          borderRadius: '0px 0px 16px 16px'
        }}
        className="h-[43px] w-full p-6 flex items-center justify-between gap-5"
      >
        <span className="text-xs text-white" >REACT QUERY</span>
        <div 
          style={{background: "linear-gradient(90deg, #D9D9D9 7.64%, rgba(217, 217, 217, 0.00) 100%)"}} 
          className="flex-auto h-[4px] rounded-md"
          ></div>
        <button onClick={handleedituser} className="text-white" >info edit</button>
      </div>
    </div>
  )
}