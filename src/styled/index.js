import styled, { css } from 'styled-components'

const media = {
	xs: '575px', sm: '767px', md: '991px', lg: '1199px', xl: '1399px'
}

const Hr = styled.hr`
	display: block;
	width: 100%;
	border-color: ${ props => props.color ? props.color : '#555' }; 
	border-width: ${ props => props.width ? props.width : '1px' }; 
`
const FlexWrap = css`
	display: flex; flex-wrap: wrap;
`

export { Hr, FlexWrap, media }