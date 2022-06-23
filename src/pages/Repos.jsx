import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export default function Repos() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/luma8/repos')
    .then(response => response.json())
    .then(data => {
      setRepos(data);
      console.log(data);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ContainerUl>
        {repos.map(repo => {
          return (
            <Listing key={repo.full_name}>
              <strong>{ repo.full_name }</strong>
              <p>{ repo.description }</p>
              <span className='fw-bold text-primary'>{ repo.language != null ? repo.language  : 'error finding language⌛' }</span>
            </Listing>
          )
        })}
      </ContainerUl>
    </Container>
  )
}
const Container = styled.div `
  padding-top: 100px;
  color: white;
  background-color: #272626;
`

const ContainerUl = styled.ul `
  list-style: none;
`
const Listing = styled.li `
  
`