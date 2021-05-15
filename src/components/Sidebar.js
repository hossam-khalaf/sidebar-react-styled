import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

const Nav = styled.div`
	background: #212531;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const NavIcon = styled(Link)`
	margin-left: 4rem;
`

const Sidebar = () => {
	return (
		<>
			<Nav>
				<NavIcon to='#'>
					<FaIcons.FaBars />
				</NavIcon>
			</Nav>
		</>
	)
}

export default Sidebar
