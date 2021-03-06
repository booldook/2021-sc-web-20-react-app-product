import React from 'react'
import styled from 'styled-components'
import { Hr } from '../styled'

const Wrapper = styled.div`
	padding: 2.5em; border-radius: .5em; margin: 1em 0;
	background-color: ${ props => props.bgColor ? props.bgColor : '#ddd' };
	color: ${ props => props.color ? props.color : '#111' };
	`
const Maintitle = styled.h1`
	font-size: 2em;
`
const Subtitle = styled.h2`
	font-size: 1.25em;
	color: #bbb;
`

// const style = { borderColor: "#666", borderWidth: "1px" }

const TitleBar = ({ title, design }) => {
	return (
		<Wrapper color={ design.color } bgColor={ design.bgColor }>
			<Maintitle>{ title.mainTitle }</Maintitle>
			<Hr color="#555" width="1px" />
			{/* <hr style={style} /> */}
			<Subtitle>{ title.subTitle }</Subtitle>
		</Wrapper>
	);
}

export default TitleBar;
