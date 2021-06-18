import styled, { css } from 'styled-components'

const Hr = styled.hr`
	display: block;
	width: 100%;
	border-color: ${ props => props.color ? props.color : '#555' }; 
	border-width: ${ props => props.width ? props.width : '1px' }; 
`

export { Hr }