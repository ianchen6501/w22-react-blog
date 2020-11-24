import React, { useEffect, useLayoutEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import {deletePost, getPosts} from '../../WebAPI'

const Container = styled.div `
  width: 80%;
  margin: 0 auto;
`

const PostsContainer = styled.div `
  margin-top: 30px;
  outline: solid ${props => props.theme.colors.light_gray} 0.5px;
`

const PostContainer = styled.div `
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  &:hover {
    box-shadow: 0.5px 0.5px 2px 0px ;
  }
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

const LoadingPage = styled.div `
  position: relative;
  width: 100%;
  top: 30vh;
  text-align: center;
  font-size: 40px;
  color: rgb(0,0,0,0.1)
  font-scale: bold;
`

function Post({post, handleDeletePost}) {

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
  const [isLoadingPost, setIsLoadingPost] = useState(false)
  const [deletingPostToggle, setDeletingPostToggle] = useState(false)
  const capacity = 5

  useLayoutEffect(() => {
    setIsLoadingPost(true)
    getPosts()
    .then(posts => {
      setPosts(posts)
      setIsLoadingPost(false)
      const postsLength = posts.length
      const pagesCount = postsLength % capacity ? Math.floor(postsLength/capacity)+1 : Math.floor(postsLength/capacity)
      setPages({
        totalPages: pagesCount,
        currentPage: 1
      })
    })
  }, [deletingPostToggle])

  function getCurrentPage(posts, pages) {
    if(true) { 
      const currentPage = pages.currentPage
      return posts.slice((currentPage-1)*capacity ,currentPage*capacity)
    }
    return
  }

  function handleDeletePost(event) { 
    deletePost(event).then(() => {
      setDeletingPostToggle(!deletingPostToggle)
    })
  }

  return (
    <Container>
        { !isLoadingPost && (
          <PostsContainer>
            { getCurrentPage(posts, pages).map(post => 
              <Post post={post} key={post.id} handleDeletePost={handleDeletePost}></Post>)
            }
          </PostsContainer>
        )}
      { !isLoadingPost && <PageControler pages={pages} setPages={setPages}></PageControler> }
      { isLoadingPost && <LoadingPage>Loading</LoadingPage> }
    </Container>
  )
}

HomePage.propTypes = {
  posts: PropTypes.object,
  pages: PropTypes.object
}
