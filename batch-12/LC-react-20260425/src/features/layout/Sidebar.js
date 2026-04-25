import Link from 'next/link';
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href='/dashboard' className='px-4 py-2 hover:bg-white/10'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href='/billing' className='px-4 py-2 hover:bg-white/10'>
            Billing
          </Link>
        </li>
        <li>
          <Link href='/campaign' className='px-4 py-2 hover:bg-white/10'>
            Campaign
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;