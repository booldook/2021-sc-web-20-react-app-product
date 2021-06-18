/** 
 *! useState() => [component 변수 등록/변경] state등록
 *! useEffect() => [component 이벤트 콜백] Component 가 실행될때/업데이트될때/사라질때 실행될 기능 정의
 *! useRef() => DOM을 정의
 *! useCallback() => [이벤트콜백함수 최적화] Component가 가지고 있는 함수의 재사용
 *! useMemo() => [state 최적화]
 */

import React, { useState, useCallback, useRef } from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'

const CloseButton = styled.div`
	position: absolute; top: 50%; right: .325em; transform: translateY(-50%); font-size: 1.5em; cursor: pointer;
`

const Search = ({ handleChange }) => {
	const [query, setQuery] = useState('')
	const inputRef = useRef(null)
	const onChange = useCallback((e) => {
		setQuery(e.target.value)
		handleChange(e.target.value)
	}, [handleChange])
	const onClick = useCallback((e) => {
		setQuery('')
		inputRef.current.focus()
	}, [])

	return (
		<Form className="position-relative">
			<Form.Control type="text" size="lg" ref={inputRef} onChange={onChange} value={query} autoFocus />
			{
				query !== ''
					? <CloseButton className="fa fa-times-circle" onClick={onClick} /> : ''
			}
		</Form>
	);
}

export default React.memo(Search)
