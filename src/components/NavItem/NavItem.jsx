
export default function NavItem(props) {
    console.log(props)
  return (
    <li className="nav-item"> 

        <a href={props.link.path} >  {props.link.name}  </a>

    </li>
  )
}
