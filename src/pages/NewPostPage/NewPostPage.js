import React, { useState } from "react"
import styled from "styled-components"
import { submitPost } from '../../WebAPI'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory } from 'react-router-dom'

const NewPostContainer = styled.div `
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:nth-child(3) {
    width:100px;
  }
`

const Section = styled.div `
  display: block;
  width: 90vw;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: solid 0.1px rgb(0,0,0,0.2);
  border-radius: 3px;
  font-size:20px;
`

const Button = styled.button`
  padding: 8px 10px;
  border: none;
  font-size: 20px;
  background: rgb(0,0,0,0.5);
  border-radius: 5px;
  cursor: pointer;
  color: white;
  margin-top: 30px;
`

const ErrorMessage = styled.div `
  color: red;
`

export default function NewPostPage() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const history = useHistory()

  function handleSubmit() {
    if(title === '' || body === '') {
      return setErrorMessage('請輸入資料')
    }
    submitPost(title, body).then(() => {
      history.push('/')
    })
  }

  return (
    <NewPostContainer>
      <Section>
        <h2>Title</h2>
        <Input value={title} onChange={(event) => {setTitle(event.target.value)}}></Input>
      </Section>
      <Section>
        <h2>Body</h2>
        <CKEditor 
          editor={ ClassicEditor }
          value={body}
          onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              let newData = data.replace('<p>', '')
              newData = newData.replace('</p>', '')
              setBody(newData)
              console.log( { event, editor, newData } );
          } }
          onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
          } }
          onFocus={ ( event, editor ) => {
              console.log( 'Focus.', editor );
          } }
        />
      </Section>
      <Button onClick={handleSubmit}>Submit</Button>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </NewPostContainer>
  )
}
