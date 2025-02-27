import React from 'react'

const Home = () => {
return (
<div className="main h-[100vh] w-full">
<div className="containerSearch w-full h-[200px] flex justify-center items-center p-10">
    <div className="searchbar h-[60px] lg:h-[50px] w-[90%] lg:w-[600px] bg-slate-400 rounded-xl flex justify-center items-center">
                <input
                // onChange={(e)=>setSearch(e.target.value)}
                // value={search}
                className='p-4 text-base lg:text-xl w-full h-full' placeholder='Seach News'/>
    </div>
</div>

<div className="newssection w-full h-[500px] p-10">
    <div className="section w-full h-auto grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10">
        <div className="Section w-[400px] h-[250px] rounded-xl bg-slate-600 shadow-2xl p-5 flex flex-col justify-center items-start gap-3">
        <h1 className="text-black text-xl lg:text-3xl">Title here is here and is her is title</h1>
        <p className="text-black text-sm lg:text-base">Summary here</p>
        <h2 className="text-black text-sm lg:text-base"> Published date: Dtae is written here</h2>
        </div>
    </div>
</div>
</div>
)
}

export default Home;
