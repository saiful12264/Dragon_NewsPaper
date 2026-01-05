import React, { Suspense, use, useEffect, useState } from 'react';
import Header from '../Compoent/Header';
import NewsDetailsCard from '../Compoent/NewsDetailsCard';
import Right_side from '../Compoent/homelayout/Right_side';
import { useParams } from 'react-router';
import Loading from '../Compoent/Loading';

const newsPromise = fetch('/news.json').then(res => res.json());

const News = () => {
  const newsData = use(newsPromise);
  const [news,setNews]=useState({});
  const {id} = useParams();
  useEffect(()=>{
    const singleNews = newsData.find(aNews => aNews.id == id);
    setNews(singleNews);
  },[id,newsData])
  
 
    return (
        <div>
          <header className='py-5'>
            <Header></Header>
          </header>
          <main className='container mx-auto grid grid-cols-12 gap-5 mt-5'>
            <section className="main col-span-9">
             <Suspense fallback={<Loading></Loading>}>
               <NewsDetailsCard key={id} news={news} ></NewsDetailsCard>
             </Suspense>
            </section>
            <aside className='col-span-3'>
              <Right_side></Right_side>
            </aside>
          </main>
        </div>
    );
};

export default News;