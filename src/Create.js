
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
const Create = () => {

    const[title, setTitle]=useState('');
    const[body, setBody]=useState('');
    const[author, setAuthor]=useState('DC');
    const[isPending, setIsPending]= useState(false);
    const history=useHistory();

    const handleSubmit = (e)=>{
            e.preventDefault();
            const blog ={title, body, author};
            setIsPending(true);

            fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(blog)
            }).then(()=>{
                console.log("New Blog Added");
                setIsPending(false);
                history.push('/');
            });
    }


    return ( 
        <div className="create">
            <h2>Create New Blog</h2>
            <form className="form-details" onSubmit={handleSubmit} >
                <label className="blog-title">Blog Title:</label>
                <input type="text" 
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)} />

                <label className="blog-body">Blog Body:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>

                <label className="blog-author">Blog Author:</label>
                <select 
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="Clark Kent">Clark Kent</option>
                    <option value="Batman">Batman</option>
                </select>
               {!isPending && <button className="add-blog">Add Blog</button>}
               {isPending && <button disabled="disabled">Adding Blog...</button> }
                
                <div className="new-preview">
                    <p>PREVIEW-</p>
                <p className='preview-title'>{title}</p>
                <p className='preview-body'>{body}</p>
                <p className='preview-author'>{author}</p>
                </div>

            </form>
        </div>
     );
}
 
export default Create;