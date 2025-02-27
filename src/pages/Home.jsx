import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    const [news,setNews]=useState([]);
    const [search,setSearch]=useState("");
    const API_KEY= import.meta.env.VITE_NEWS_API_KEY;

    const fetchAPI = async () => {
        try {
            const API_res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
            const data = await API_res.json();
            setNews(data.articles);
        } catch (error) {
            console.log(error);
            
        }
    }

    const filteredNews = news.filter(article =>
        article.title?.toLowerCase().includes(search.toLowerCase())
    );
    
    const offset = 200;
    const duration = 600;

    useEffect(()=>{
        fetchAPI();
        Aos.init({offset:50,duration:600});
    },[API_KEY,offset,
        duration])

return (
<div className="main h-[100vh] w-full flex flex-col justify-center items-center">
<div className="containerSearch w-full lg:w-full h-[200px] flex justify-center items-center lg:p-10">
    <div className="searchbar h-[40px] lg:h-[50px] w-[90%] lg:w-[600px] bg-slate-400 rounded-xl flex justify-center items-center">
                <input
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
                className='p-4 text-base lg:text-xl w-full h-full' placeholder='Seach News'/>
    </div>
</div>

<div className="newssection w-full h-[500px] px-6 lg:p-10">
    <div className="section w-full h-auto grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10">
    {   filteredNews.length >0 ? (
            filteredNews.map((articles,index)=>{
                return(
                    <div key={index}
                    className="Section w-[95%] cursor-pointer h-auto lg-w-[500px] lg:h-[350px] rounded-xl bg-slate-200 shadow-2xl shadow-black p-5 flex flex-col justify-center items-start gap-3" data-aos="fade-up">
            <h1 className="text-black text-xl lg:text-2xl">{articles.title}</h1>
            <p className="text-black text-sm lg:text-base">{articles.description}</p>
            <h2 className="text-blue-400 text-sm lg:text-sm">Published date:  {articles.publishedAt}</h2>
            </div>
                )
            })
    ) :(
        <p className='text-black text-sm lg:text-base'>No matching News Found </p>
    )
        
}
        
    </div>
</div>
</div>
)
}

export default Home;
