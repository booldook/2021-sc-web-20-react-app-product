// import React, { useState, useCallback, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { Hr, media } from '../styled'

const ListWrap = styled.li`
	width: 23%; margin: 1%; border: 1px solid #ddd; border-radius: 5px; overflow: hidden;
	@media screen and (max-width: ${ media.md }) {
		width: 31.3333%;
	}
	@media screen and (max-width: ${ media.sm }) {
		width: 48%;
	}
	@media screen and (max-width: ${ media.xs }) {
		width: 98%;
	}
`
const Content = styled.div`
	background-color: #eaeaea; padding: 1.5em .75em;
`
const Title = styled.div`
	font-size: 1.5em;
`
const Price = styled.div`
	font-size: 1.25em; text-align: right;
`

const List = ({ v }) => {
	return (
		<ListWrap>
			<div className="img-wrap">
				<img src={ v.src } className="w-100" alt={ v.title } />
			</div>
			<Content>
				<Title>{ v.title }</Title>
				<Hr color="#999" />
				<Price>${ v.price }</Price>
			</Content>
		</ListWrap>
	);
}

export default List;
