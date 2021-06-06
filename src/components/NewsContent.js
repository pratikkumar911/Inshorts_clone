import React from 'react'
import {Container} from "@material-ui/core";
import NewsCard from './NewsCard';
import './NewsContent.css';

function NewsContent({newsArray, newsResults}) {
    return (
        <Container maxWidth="md">
            <div className = "content">
                {
                    newsArray.map((newsItem)=>(
                        <NewsCard newsItem = {newsItem} key = {newsItem.title}/>
                    ))
                } 
                
            </div>
        </Container>
    )
}

export default NewsContent