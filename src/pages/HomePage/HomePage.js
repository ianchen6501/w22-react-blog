import React, { useEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import {deletePost, getPosts} from '../../WebAPI'

const Root = styled.div `
  width: 80%;
  margin: 0 auto;
`

const PostContainer = styled.div `
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const PostTitle = styled(Link) `
  font-size: 24px;
  text-decoration: none;
  color: #333;
`

const PostDate = styled.div `
  color: rgba(0, 0, 0, 0.8);
`

const PageControlerContainer = styled.ul `
  margin: 20px auto;
  width: 100px;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`

const Page = styled.li `
  font-size: 20px;
  cursor: pointer;
`

const DeleteButton = styled.button `
  padding: 10px;
  margin-left: 20px;
  border: none;
`

const PostRightContainer = styled.div `
  display: flex;
`

function Post({post, setIsDeletingPost}) {
  function handleDeletePost(event) {
    setIsDeletingPost(() => {return false})
    deletePost(event).then(() => {
      setIsDeletingPost(() => {return false})
    })
  }

  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{post.id}{" . "}{post.title}</PostTitle>
      <PostRightContainer>
        <PostDate>{new Date(post.createdAt).toLocaleDateString()}</PostDate>
        <DeleteButton onClick={(event) => handleDeletePost(event) } id={post.id}>Delete</DeleteButton>
      </PostRightContainer>
    </PostContainer>
  )
}

Post.propTypes = {
  post: PropTypes.object
}

function PageControler({pages, setPages}) {
  const pagesArray = []
  for(let i=1; i <= pages.totalPages; i++) {
    pagesArray.push(i)
  }

  function handleSetCurrentPage(pageNumber) {
    setPages({
      ...pages,
      currentPage: pageNumber
    })
  }

  return (
    <PageControlerContainer>
      {pagesArray.map(pageNumber => 
        <Page onClick={(event) => handleSetCurrentPage(Number(event.target.innerText))} key={pageNumber}>{pageNumber}</Page>
      )}
    </PageControlerContainer>
  )
}

PageControler.propTypes = {
  pages: PropTypes.object,
  setPages: PropTypes.func
}

export default function HomePage() {
  const [posts, setPosts] = useState([])
  const [pages, setPages] = useState({})
  const [isDeletingPost, setIsDeletingPost] = useState(false)
  const capacity = 5

  useEffect(() => {
    getPosts()
    .then(posts => {
      setPosts(() => {return posts})
      const postsLength = posts.length
      const pagesCount = postsLength % capacity ? Math.floor(postsLength/capacity)+1 : Math.floor(postsLength/capacity)
      setPages({
        totalPages: pagesCount,
        currentPage: 1
      })
    })
  }, [isDeletingPost])

  function getCurrentPage(posts, pages) {
    if(true) { 
      const currentPage = pages.currentPage
      return posts.slice((currentPage-1)*capacity ,currentPage*capacity)
    }
    return
  }

  return (
    <Root>
      { getCurrentPage(posts, pages).map(post => <Post post={post} key={post.id} setIsDeletingPost={setIsDeletingPost}></Post>) }
      <PageControler pages={pages} setPages={setPages}></PageControler>
    </Root>
  )
}

HomePage.propTypes = {
  posts: PropTypes.object,
  pages: PropTypes.object
}
