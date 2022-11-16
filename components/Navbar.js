import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

function Navbar() {
  const {loading, session} = useSession()
  // const { data: session, status } = useSession()
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        {session && (
          <li>
            <Link href='/dashboard'>
              <a>Dashboard</a>
            </Link>
          </li>
        )}
        <li>
          <Link href='/bloc'>
            <a>Bloc</a>
          </Link>
        </li>

        {!loading && !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signIn()
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href='/api/auth/signout'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar