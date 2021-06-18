import React, { useState, useCallback, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { FlexWrap } from '../styled'
import List from './List';

const ListWraper = styled.ul`
	${ FlexWrap }
`

const Lists = () => {
	const v = {
		src: '//via.placeholder.com/100',
		title: 'test',
		price: 126.0
	}
	return (
		<ListWraper>
			<List v={ v }/>
			<List v={ v }/>
			<List v={ v }/>
			<List v={ v }/>
			<List v={ v }/>
		</ListWraper>
	);
}

export default Lists;
