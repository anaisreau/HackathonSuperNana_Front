import React, {useState, useEffect} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Axios from 'axios'
import './Blog.css'

const apiKey = '514546ec985a456f88e89a253165f007'



function Blog () {

    const [articleNews, setArticleNews] = useState([''])
    
        const getData = () => {
        
            Axios
            .get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`)
            .then(response => console.log(response.data.articles))
            
        }
useEffect(() => {
        getData(); 
    }, [])
    console.log(articleNews)

    return (
        <>
        <div className='blog_page'>
            <h2 className='blogTitle'>News from Health</h2>
            
            {articleNews.filter(e =>e.source).map(e => { 
                return (
                    <div>
                    <Card fluid className='blogCard'>
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