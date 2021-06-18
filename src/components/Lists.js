import React, { useState, useCallback, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { FlexWrap } from '../styled'
import List from './List';

const ListWraper = styled.ul`
	${ FlexWrap }
`

const Lists = ({ lists }) => {
	return (
		<ListWraper>
			{
				lists.map( v => <List list={ v } key={ v.id } /> )
			}
		</ListWraper>
	);
}

export default Lists;
