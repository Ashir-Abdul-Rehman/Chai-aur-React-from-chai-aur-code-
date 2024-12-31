import { useLoaderData } from "react-router-dom";
/*************  ✨ Codeium Command ⭐  *************/
const Github = () => {
    const  data = useLoaderData();
  return (
    <div className="bg-white p-3 rounded-lg flex flex-row items-center  justify-center space-x-4">
        <img onClick={() => window.open(data.html_url)} className="w-44 h-44 rounded-full cursor-pointer " src={data.avatar_url} alt="" />
        <h1 className="text-black text-2xl">Github Followers : {data.followers}</h1>
      
    </div>
  );
};
export default Github;
export const  GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ashir-Abdul-Rehman')
    return  response.json()
};
/******  accb9557-732b-4111-b1be-b122971a915f  *******/