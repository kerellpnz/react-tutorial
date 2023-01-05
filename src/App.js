import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: '1JS', body: 'xyz'},
        {id: 2, title: '2JS', body: 'abc'}
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPost = [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    defaultValue="Sort"
                    options={[
                        {value: 'title', name: 'By title'},
                        {value: 'body', name: 'By description'}
                    ]}
                />
            </div>
            {posts.length
                ? <PostList remove={removePost} posts={sortedPost} title="Post list"/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Posts not found!
                </h1>
            }
        </div>
    );
}

export default App;
