import { ca } from "date-fns/locale";
import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Compoent/News_card";

const Category_news = () => {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

   useEffect(()=>{
    if(id == "0")
    {
        setCategories(data);
        return;
    }
    else if(id == "1")
    {
        const dataNews = data.filter (news => news.others.is_today_pick== true);
        setCategories(dataNews);
        return;
    }
    else
    {
        const dataNews = data.filter (news => news.category_id==id);
        setCategories(dataNews);
    }
   },[id,data]);
   console.log(categories);

  return <div>
    <h2 className="font-semibold text-primary mb-3">Dragon News Home</h2>
    
    <div className="gird grid-cols-1 gap-10 space-y-5">
        {
            categories.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
        }
    </div>

  </div>;
};

export default Category_news;
