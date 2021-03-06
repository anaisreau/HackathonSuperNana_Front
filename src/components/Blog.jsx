import React, {useState, useEffect} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Axios from 'axios'
import './Blog.css'

const apiKey = '514546ec985a456f88e89a253165f007'



function Blog () {

    const [articleNews, setArticleNews] = useState([''])
    
        const getData = () => {
        
            Axios
            .get(`https://newsapi.org/v2/top-headlines?country=fr&category=health&apiKey=${apiKey}`)
            .then(response => setArticleNews(response.data.articles))
            
        }
useEffect(() => {
        getData(); 
    }, [])
    console.log(articleNews)

    return (
        <>
        <h2>News from Health</h2>
        <div className='blog_page'>
            
            
            {articleNews.filter(e =>e.source).map(e => { 
                return (
                    <div>
                    <Card className='blogCard'>
                        <Image src={e.urlToImage} wrapped ui={false} />
                        <Card.Content center header={e.title} />
                        <Card.Content description={e.description} />
                        <Card.Meta left content={e.source.name} />
                        <Card.Content >
                            <Icon name='share' />Share
                        </Card.Content>
                        
                    </Card> 
                    <br/>
                    </div>
                )}
            )}
        </div>
        </>
    )
}
export default Blog