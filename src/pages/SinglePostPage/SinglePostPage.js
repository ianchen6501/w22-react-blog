import React, { useEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import {
  useParams,
  Link
} from "react-router-dom";
import { getPostsById } from '../../WebAPI'

NewPostPage.propTypes = {
  post: PropTypes.object
}

const SinglePostContainer = styled.div `
  width: 70vw;
  margin: 0 auto;
`

const TitleContainer = styled.div `
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`

const Title = styled.div `
  font-weight: bold;
  font-size: 26px;
  vertical-align: baseline;
`

const CreatedAt = styled.div `
  font-size: 20px;
  vertical-align: bottom;
  color: rgb(0,0,0,0.6);
`

const Body = styled.div `
  margin-top: 10px;
  padding-top: 20px;
  border-top: solid 0.5px rgb(0,0,0,0.3);
  font-size:26px;
`

export default function NewPostPage() {
  const [value, setValue] = useState({})
  const {id} = useParams()
  useEffect(() => {
    getPostsById(id)
    .then(result => {
      setValue(result[0])
      return console.log(value)
    }).catch(error => {
      return console.log(error.toString())
    })
  }, [])

  return (
    <SinglePostContainer>
      <TitleContainer>
        <Title>{value.title}</Title>
        <CreatedAt>{new Date(value.createdAt).toLocaleTimeString()}</CreatedAt>
      </TitleContainer>
      <Body>{value.body}</Body>
    </SinglePostContainer>
  )
}
