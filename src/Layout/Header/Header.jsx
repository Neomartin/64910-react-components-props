import NavItem from '../../components/NavItem/NavItem'
import './Header.css'

const links = [
    { name: 'Principal', path: '/home' },
    { name: 'Contacto', path: '/contact' },
    { name: 'Acerca de', path: '/about-us' },
    { name: 'Registro', path: '/register' },
    { name: 'Galleria', path: '/gallery' },
    { name: 'AdminProduct', path: '/admin-product', admin: true },
    { name: 'AdminUser', path: '/admin-user', admin: true },
]

export default function Header() {
    
    const user = JSON.parse(localStorage.getItem('currentUser'))

    const isAdmin = user?.role === 'ADMIN_ROLE'

    return (
        <>
            <header className='main-header'>
                <nav className='main-nav'>

                    <ul className='nav-list'>

                        {
                            links.map((enlace, indice) => {

                                if(!isAdmin && enlace.admin) {
                                    return null
                                }

                                return (
                                    <NavItem link={enlace} key={indice} />
                                )

                            })
                        }
                    </ul>
                </nav>
            </header>
        </>
    )

}